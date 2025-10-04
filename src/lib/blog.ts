import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  tags: string[]
  category: string
  readTime: number
  image: string
  featured?: boolean
}

export interface Author {
  name: string
  title: string
  bio: string
  image: string
  specialties: string[]
  social?: {
    twitter?: string
    linkedin?: string
    facebook?: string
  }
}

// Get all blog posts
export function getBlogPosts(): BlogPost[] {
  const blogDir = path.join(process.cwd(), 'src/content/blog')
  
  if (!fs.existsSync(blogDir)) {
    return []
  }
  
  const files = fs.readdirSync(blogDir)
  
  const posts = files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const filePath = path.join(blogDir, file)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContent)
      
      return {
        id: file.replace('.md', ''),
        title: data.title || '',
        slug: data.slug || file.replace('.md', '').replace(/^\d{4}-\d{2}-\d{2}-/, ''),
        excerpt: data.excerpt || '',
        content,
        author: data.author || '',
        publishedAt: data.publishedAt || '',
        tags: data.tags || [],
        category: data.category || '',
        readTime: data.readTime || 5,
        image: data.image || '/images/blog-images/default.svg',
        featured: data.featured || false,
      } as BlogPost
    })
    .filter(post => post.title) // Only include posts with titles
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  
  return posts
}

// Get a single blog post by slug
export function getBlogPostBySlug(slug: string): BlogPost | null {
  const posts = getBlogPosts()
  return posts.find(post => post.slug === slug) || null
}

// Get featured blog posts
export function getFeaturedBlogPosts(): BlogPost[] {
  const posts = getBlogPosts()
  return posts.filter(post => post.featured)
}

// Get blog posts by category
export function getBlogPostsByCategory(category: string): BlogPost[] {
  const posts = getBlogPosts()
  return posts.filter(post => post.category.toLowerCase() === category.toLowerCase())
}

// Get blog posts by tag
export function getBlogPostsByTag(tag: string): BlogPost[] {
  const posts = getBlogPosts()
  return posts.filter(post => 
    post.tags.some(postTag => postTag.toLowerCase() === tag.toLowerCase())
  )
}

// Get all categories
export function getBlogCategories(): string[] {
  const posts = getBlogPosts()
  const categories = posts.map(post => post.category)
  return [...new Set(categories)].filter(Boolean)
}

// Get all tags
export function getBlogTags(): string[] {
  const posts = getBlogPosts()
  const tags = posts.flatMap(post => post.tags)
  return [...new Set(tags)].filter(Boolean)
}

// Get author information
export function getAuthor(name: string): Author | null {
  const authorPath = path.join(process.cwd(), 'src/content/authors', `${name.toLowerCase().replace(/\s+/g, '-')}.md`)
  
  if (!fs.existsSync(authorPath)) {
    return null
  }
  
  const fileContent = fs.readFileSync(authorPath, 'utf8')
  const { data } = matter(fileContent)
  
  return {
    name: data.name || '',
    title: data.title || '',
    bio: data.bio || '',
    image: data.image || '/images/doctors/default.svg',
    specialties: data.specialties || [],
    social: data.social || {},
  } as Author
}

// Search blog posts
export function searchBlogPosts(query: string): BlogPost[] {
  const posts = getBlogPosts()
  const lowercaseQuery = query.toLowerCase()
  
  return posts.filter(post => 
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.content.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
    post.category.toLowerCase().includes(lowercaseQuery)
  )
}

// Get related posts (same category or tags)
export function getRelatedPosts(currentPost: BlogPost, limit: number = 3): BlogPost[] {
  const posts = getBlogPosts()
  
  return posts
    .filter(post => 
      post.id !== currentPost.id && (
        post.category === currentPost.category ||
        post.tags.some(tag => currentPost.tags.includes(tag))
      )
    )
    .slice(0, limit)
}
