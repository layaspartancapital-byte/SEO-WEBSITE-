import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  readingTime: string
  category: string
  content: string
  coverImage?: string
  coverImageAlt?: string
  coverImageCredit?: string
  keyword?: string
  tags?: string[]
  relatedSlugs: string[]
}

const BLOG_DIR = path.join(process.cwd(), 'src', 'content', 'blog')

function ensureBlogDir() {
  if (!fs.existsSync(BLOG_DIR)) {
    fs.mkdirSync(BLOG_DIR, { recursive: true })
  }
}

/**
 * Derive a reading time string from word count.
 */
function calcReadingTime(content: string): string {
  const words = content.split(/\s+/).length
  return `${Math.max(1, Math.ceil(words / 250))} min read`
}

/**
 * Derive a category from keyword and tags.
 */
function deriveCategory(keyword?: string, tags?: string[]): string {
  const kw = (keyword || '').toLowerCase()
  const tagList = (tags || []).map((t) => t.toLowerCase())
  if (kw.includes('seo') || tagList.some((t) => t.includes('seo'))) return 'SEO'
  if (kw.includes('crm') || kw.includes('automat') || tagList.some((t) => t.includes('crm') || t.includes('automat'))) return 'CRM & Automation'
  if (kw.includes('paid') || kw.includes('ppc') || kw.includes('ads') || tagList.some((t) => t.includes('ads') || t.includes('ppc'))) return 'Paid Advertising'
  if (kw.includes('brand') || tagList.some((t) => t.includes('brand'))) return 'Branding'
  return 'Digital Marketing'
}

/**
 * Parse a single MDX file into a BlogPost object.
 */
function parseMdxFile(filename: string): BlogPost | null {
  const filepath = path.join(BLOG_DIR, filename)
  const raw = fs.readFileSync(filepath, 'utf-8')
  const { data, content } = matter(raw)

  if (!data.title) return null

  const slug = data.slug || filename.replace(/^d{4}-d{2}-d{2}-/, '').replace(/\.mdx?$/, '')
  const tags = Array.isArray(data.tags) ? data.tags : []

  return {
    slug,
    title: data.title,
    description: data.description || '',
    date: data.date ? new Date(data.date).toISOString().split('T')[0] : '',
    author: data.author || 'Omnivance Media',
    readingTime: data.readingTime || calcReadingTime(content),
    category: data.category || deriveCategory(data.keyword, tags),
    content: content.trim(),
    coverImage: data.coverImage,
    coverImageAlt: data.coverImageAlt,
    coverImageCredit: data.coverImageCredit,
    keyword: data.keyword,
    tags,
    relatedSlugs: Array.isArray(data.relatedSlugs) ? data.relatedSlugs : [],
  }
}

/**
 * Get all blog posts, sorted by date descending.
 */
export function getAllPosts(): BlogPost[] {
  ensureBlogDir()
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'))
  const posts = files.map(parseMdxFile).filter((p): p is BlogPost => p !== null)

  // Cross-link related slugs if none specified (pick up to 3 most recent siblings)
  const allSlugs = posts.map((p) => p.slug)
  for (const post of posts) {
    if (post.relatedSlugs.length === 0) {
      post.relatedSlugs = allSlugs.filter((s) => s !== post.slug).slice(0, 3)
    }
  }

  return posts.sort((a, b) => (b.date > a.date ? 1 : b.date < a.date ? -1 : 0))
}

/**
 * Get a single post by slug.
 */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug)
}

/**
 * Get all slugs (for generateStaticParams).
 */
export function getAllSlugs(): string[] {
  return getAllPosts().map((p) => p.slug)
}

// Backwards-compatible default export for files that import { blogPosts }
export const blogPosts: BlogPost[] = getAllPosts()
