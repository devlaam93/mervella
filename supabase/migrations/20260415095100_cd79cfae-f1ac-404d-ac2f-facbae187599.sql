
-- Blog posts table
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  content TEXT NOT NULL,
  cover_image_url TEXT,
  author_name TEXT NOT NULL DEFAULT 'AssetWise Team',
  category TEXT,
  tags TEXT[] DEFAULT '{}',
  is_published BOOLEAN NOT NULL DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published blog posts"
ON public.blog_posts FOR SELECT
USING (is_published = true);

CREATE POLICY "Authenticated users can insert blog posts"
ON public.blog_posts FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated users can update blog posts"
ON public.blog_posts FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

CREATE POLICY "Authenticated users can delete blog posts"
ON public.blog_posts FOR DELETE
TO authenticated
USING (true);

CREATE INDEX idx_blog_posts_slug ON public.blog_posts(slug);
CREATE INDEX idx_blog_posts_published ON public.blog_posts(is_published, published_at DESC);

-- Contact submissions table
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  message TEXT NOT NULL,
  is_read BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
ON public.contact_submissions FOR INSERT
WITH CHECK (true);

CREATE POLICY "Authenticated users can view submissions"
ON public.contact_submissions FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can update submissions"
ON public.contact_submissions FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- Pricing plans table
CREATE TABLE public.pricing_plans (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price_monthly NUMERIC NOT NULL DEFAULT 0,
  price_yearly NUMERIC NOT NULL DEFAULT 0,
  features JSONB NOT NULL DEFAULT '[]',
  is_popular BOOLEAN NOT NULL DEFAULT false,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.pricing_plans ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view pricing plans"
ON public.pricing_plans FOR SELECT
USING (true);

CREATE POLICY "Authenticated users can manage pricing plans"
ON public.pricing_plans FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- Seed pricing plans
INSERT INTO public.pricing_plans (name, description, price_monthly, price_yearly, features, is_popular, sort_order) VALUES
('Starter', 'For small teams getting started', 0, 0, '["Up to 50 assets", "3 team members", "Basic depreciation tracking", "CSV import/export", "Email support"]', false, 1),
('Professional', 'For growing teams that need more', 29, 290, '["Unlimited assets", "15 team members", "Advanced depreciation & reports", "AI-powered insights", "Assignment history", "Priority support", "Custom categories"]', true, 2),
('Enterprise', 'For organizations at scale', 79, 790, '["Unlimited everything", "Unlimited team members", "Custom integrations", "Role-based access control", "Audit logs & compliance", "Dedicated account manager", "SSO & SAML", "API access"]', false, 3);

-- Seed blog posts
INSERT INTO public.blog_posts (title, slug, excerpt, content, author_name, category, tags, is_published, published_at) VALUES
('Getting Started with Asset Tracking', 'getting-started-with-asset-tracking', 'Learn how to set up your first asset tracking system and why it matters for your business.', E'# Getting Started with Asset Tracking\n\nAsset tracking is the foundation of any well-run IT department. Whether you''re managing laptops, monitors, or office furniture, having a clear picture of what you own, where it is, and who''s using it saves time and money.\n\n## Why Asset Tracking Matters\n\nWithout proper tracking, companies lose an average of 30% of their assets due to mismanagement. That''s money walking out the door.\n\n## Setting Up Your System\n\n1. **Audit your current inventory** — Start by listing everything you currently own\n2. **Categorize your assets** — Group items by type (laptops, monitors, phones, etc.)\n3. **Assign ownership** — Make sure every asset has a responsible person\n4. **Set up depreciation** — Track the declining value of your assets over time\n\n## Best Practices\n\n- Update records immediately when assets change hands\n- Conduct quarterly audits to verify physical inventory\n- Use serial numbers for unique identification\n- Set retirement dates based on useful life', 'AssetWise Team', 'Guides', ARRAY['asset-tracking', 'getting-started', 'guide'], true, now() - interval '10 days'),

('Understanding Straight-Line Depreciation', 'understanding-straight-line-depreciation', 'A clear explanation of straight-line depreciation and how it affects your asset valuations.', E'# Understanding Straight-Line Depreciation\n\nStraight-line depreciation is the simplest and most commonly used method for calculating the decline in value of an asset over time.\n\n## The Formula\n\n**Annual Depreciation = (Purchase Cost - Residual Value) / Useful Life**\n\nFor example, a laptop purchased for $1,500 with a 3-year useful life and 10% residual value:\n- Depreciable amount: $1,500 - $150 = $1,350\n- Annual depreciation: $1,350 / 3 = $450/year\n\n## Why It Matters\n\nAccurate depreciation tracking helps you:\n- **Plan budgets** — Know when assets need replacement\n- **Tax reporting** — Claim depreciation as a business expense\n- **Insurance** — Ensure proper coverage based on current value\n- **Decision making** — Compare cost of repair vs replacement\n\n## When to Use Straight-Line\n\nStraight-line depreciation works best when an asset loses value evenly over time. For assets that lose value faster in early years (like vehicles), other methods may be more appropriate.', 'AssetWise Team', 'Finance', ARRAY['depreciation', 'finance', 'accounting'], true, now() - interval '5 days'),

('5 Signs Your Team Needs an Asset Management System', '5-signs-your-team-needs-asset-management', 'Still using spreadsheets? Here are the telltale signs it''s time to upgrade your asset tracking.', E'# 5 Signs Your Team Needs an Asset Management System\n\nMany teams start with spreadsheets, and that''s perfectly fine — until it isn''t. Here are the signs it''s time to move to a dedicated system.\n\n## 1. You Can''t Find Assets\n\nIf you regularly spend time hunting for equipment or asking "who has the projector?", you need better tracking.\n\n## 2. Spreadsheets Are Getting Unwieldy\n\nWhen your Excel file has 15 tabs, 500 rows, and three people editing it simultaneously, it''s time to upgrade.\n\n## 3. You''re Surprised by Equipment Failures\n\nWithout lifecycle tracking, equipment failures come as expensive surprises instead of planned replacements.\n\n## 4. Onboarding Takes Too Long\n\nNew hires should have their equipment ready on day one. If provisioning takes days, your tracking needs work.\n\n## 5. Audit Season Is Painful\n\nIf your annual asset audit takes weeks instead of hours, a proper system will transform the process.\n\n## The Solution\n\nAssetWise gives you a single source of truth for all your equipment, with assignment tracking, depreciation calculations, and AI-powered insights.', 'AssetWise Team', 'Best Practices', ARRAY['asset-management', 'productivity', 'tips'], true, now() - interval '2 days');
