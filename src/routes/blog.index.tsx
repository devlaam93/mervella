import { createFileRoute, Link } from '@tanstack/react-router';
import { PublicLayout } from '@/components/public-layout';
import { supabase } from '@/integrations/supabase/client';
import { useQuery } from '@tanstack/react-query';
import { ArrowRight, Calendar } from 'lucide-react';

export const Route = createFileRoute('/blog/')({
  head: () => ({
    meta: [
      { title: 'Blog — AssetWise' },
      { name: 'description', content: 'Tips, guides, and best practices for asset management, depreciation tracking, and IT operations.' },
      { property: 'og:title', content: 'Blog — AssetWise' },
      { property: 'og:description', content: 'Tips, guides, and best practices for asset management, depreciation tracking, and IT operations.' },
    ],
  }),
  component: BlogListPage,
});

function BlogListPage() {
  const { data: posts, isLoading } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('id, title, slug, excerpt, author_name, category, published_at, cover_image_url')
        .eq('is_published', true)
        .order('published_at', { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  return (
    <PublicLayout>
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-landing-bg" style={{
        backgroundImage: `radial-gradient(circle, var(--landing-grid) 1.2px, transparent 1.2px)`,
        backgroundSize: '24px 24px',
      }}>
        <div className="mx-auto max-w-[800px] px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[32px] sm:text-[44px] lg:text-[52px] font-normal tracking-tight text-landing-dark leading-[1.1]">
            Blog
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-[17px] text-landing-light-muted">
            Tips, guides, and best practices for asset management.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse rounded-xl border border-landing-grid p-6">
                  <div className="h-4 w-24 bg-landing-grid rounded mb-3" />
                  <div className="h-6 w-3/4 bg-landing-grid rounded mb-2" />
                  <div className="h-4 w-full bg-landing-grid rounded" />
                </div>
              ))}
            </div>
          ) : posts && posts.length > 0 ? (
            <div className="space-y-6">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="block rounded-xl border border-landing-grid bg-landing-bg p-6 sm:p-8 transition-all hover:border-landing-dark/20 group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    {post.category && (
                      <span className="text-[12px] font-medium text-landing-light-muted bg-white rounded-full px-3 py-1 border border-landing-grid">
                        {post.category}
                      </span>
                    )}
                    {post.published_at && (
                      <span className="flex items-center gap-1 text-[12px] text-landing-light-muted">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.published_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                    )}
                  </div>
                  <h2 className="text-[20px] font-semibold text-landing-dark group-hover:underline underline-offset-2 mb-2">{post.title}</h2>
                  {post.excerpt && (
                    <p className="text-[15px] text-landing-light-muted leading-relaxed">{post.excerpt}</p>
                  )}
                  <span className="inline-flex items-center gap-1 mt-4 text-[14px] font-medium text-landing-dark">
                    Read more <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-[16px] text-landing-light-muted">No blog posts yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </PublicLayout>
  );
}
