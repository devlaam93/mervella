import { Link } from '@tanstack/react-router';
import { Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface UpgradePromptProps {
  feature: string;
}

export function UpgradePrompt({ feature }: UpgradePromptProps) {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <Card className="max-w-md w-full p-8 text-center space-y-4">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-muted">
          <Lock className="h-7 w-7 text-muted-foreground" />
        </div>
        <h2 className="text-xl font-semibold">Upgrade to unlock {feature}</h2>
        <p className="text-sm text-muted-foreground">
          This feature is available on the Professional and Enterprise plans. Upgrade your subscription to get access.
        </p>
        <Button asChild className="w-full">
          <Link to="/pricing">View plans</Link>
        </Button>
      </Card>
    </div>
  );
}
