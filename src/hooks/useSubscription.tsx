import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/lib/use-auth';

interface SubscriptionState {
  isActive: boolean;
  status: string | null;
  productId: string | null;
  loading: boolean;
  currentPeriodEnd: string | null;
  cancelAtPeriodEnd: boolean;
}

const clientToken = import.meta.env.VITE_PAYMENTS_CLIENT_TOKEN;
const environment = clientToken?.startsWith('pk_test_') ? 'sandbox' : 'live';

export function useSubscription(): SubscriptionState {
  const { user } = useAuth();
  const [state, setState] = useState<SubscriptionState>({
    isActive: false,
    status: null,
    productId: null,
    loading: true,
    currentPeriodEnd: null,
    cancelAtPeriodEnd: false,
  });

  useEffect(() => {
    if (!user) {
      setState(s => ({ ...s, loading: false }));
      return;
    }

    let cancelled = false;

    async function check() {
      const { data, error } = await supabase
        .from('subscriptions')
        .select('*')
        .eq('user_id', user!.id)
        .eq('environment', environment)
        .in('status', ['active', 'trialing', 'canceled'])
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle();

      if (cancelled) return;

      if (error || !data) {
        setState({ isActive: false, status: null, productId: null, loading: false, currentPeriodEnd: null, cancelAtPeriodEnd: false });
        return;
      }

      const isActive =
        (data.status === 'active' || data.status === 'trialing') ||
        (data.status === 'canceled' && data.current_period_end && new Date(data.current_period_end) > new Date());

      setState({
        isActive: !!isActive,
        status: data.status,
        productId: data.product_id,
        loading: false,
        currentPeriodEnd: data.current_period_end,
        cancelAtPeriodEnd: data.cancel_at_period_end ?? false,
      });
    }

    check();

    // Listen for realtime changes
    const channel = supabase
      .channel('subscription-changes')
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'subscriptions',
        filter: `user_id=eq.${user.id}`,
      }, () => { check(); })
      .subscribe();

    return () => {
      cancelled = true;
      supabase.removeChannel(channel);
    };
  }, [user]);

  return state;
}
