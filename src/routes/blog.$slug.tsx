import { createFileRoute, Link } from '@tanstack/react-router';
import { PublicLayout } from '@/components/public-layout';
import { supabase } from '@/integrations/supabase/client';
import { useQuery } from '@tanstack/react-query';
import { ArrowLeft, Calendar, User } from 'lucide-react';

export const Route = createFileRoute('/blog/$slug')({
  head: ({ params }) => ({
    meta: [
      { title: `${params.slug.replace(/-/g, ' ')} — AssetWise Blog` },
      { property: 'og:type', content: 'article' },
    ],
  }),
  component: BlogPostPage,
});

function BlogPostPage() {
  const { slug } = Route.useParams();

  const { data: post, isLoading, error } = useQuery({
    queryKey: ['blog-post', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .single();
      if (error) throw error;
      return data;
    },
  });

  return (
    <PublicLayout>
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-[700px] px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-[14px] text-landing-light-muted hover:text-landing-dark mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to blog
          </Link>

          {isLoading ? (
            <div className="animate-pulse space-y-4">
              <div className="h-8 w-3/4 bg-landing-grid rounded" />
              <div className="h-4 w-1/2 bg-landing-grid rounded" />
              <div className="h-4 w-full bg-landing-grid rounded mt-8" />
              <div className="h-4 w-full bg-landing-grid rounded" />
              <div className="h-4 w-2/3 bg-landing-grid rounded" />
            </div>
          ) : error || !post ? (
            <div className="text-center py-16">
              <h2 className="text-[24px] font-semibold text-landing-dark mb-2">Post not found</h2>
              <p className="text-[15px] text-landing-light-muted">This blog post doesn't exist or has been removed.</p>
            </div>
          ) : (
            <article>
              <div className="mb-8">
                {post.category && (
                  <span className="text-[12px] font-medium text-landing-light-muted bg-landing-bg rounded-full px-3 py-1 border border-landing-grid">
                    {post.category}
                  </span>
                )}
                <h1 className="text-[28px] sm:text-[36px] font-normal text-landing-dark tracking-tight leading-tight mt-4">
                  {post.title}
                </h1>
                <div className="flex items-center gap-4 mt-4 text-[13px] text-landing-light-muted">
                  <span className="flex items-center gap-1">
                    <User className="h-3.5 w-3.5" /> {post.author_name}
                  </span>
                  {post.published_at && (
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {new Date(post.published_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </span>
                  )}
                </div>
              </div>

              {/* Render markdown-like content */}
              <div className="prose-landing">
                {post.content.split('\n').map((line, i) => {
                  const trimmed = line.trim();
                  if (!trimmed) return <br key={i} />;
                  if (trimmed.startsWith('# ')) return <h1 key={i}>{trimmed.slice(2)}</h1>;
                  if (trimmed.startsWith('## ')) return <h2 key={i}>{trimmed.slice(3)}</h2>;
                  if (trimmed.startsWith('### ')) return <h3 key={i}>{trimmed.slice(4)}</h3>;
                  if (trimmed.startsWith('- ')) return <li key={i}>{renderInline(trimmed.slice(2))}</li>;
                  return <p key={i}>{renderInline(trimmed)}</p>;
                })}
              </div>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-10 pt-6 border-t border-landing-grid">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag: string) => (
                      <span key={tag} className="text-[12px] text-landing-light-muted bg-landing-bg rounded-full px-3 py-1 border border-landing-grid">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </article>
          )}
        </div>
      </section>
    </PublicLayout>
  );
}

function renderInline(text: string) {
  // Simple bold rendering
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) => i % 2 === 1 ? <strong key={i}>{part}</strong> : part);
}
