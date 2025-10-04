'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  Calendar, 
  Tag, 
  User, 
  FileText,
  Save,
  X,
  LogOut
} from 'lucide-react'
import { ProtectedRoute } from '@/components/auth/ProtectedRoute'
import { useRouter } from 'next/navigation'
interface BlogPost {
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
  featured: boolean
}

export default function BlogAdmin() {
  const router = useRouter()
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [isAddingNew, setIsAddingNew] = useState(false)
  const [editingPost, setEditingPost] = useState<string | null>(null)
  const [newPost, setNewPost] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    author: 'Dr. Sarah Johnson',
    category: 'General',
    tags: [] as string[],
    readTime: 5,
    image: '/images/blog-images/default.svg',
    featured: false
  })
  const [newTag, setNewTag] = useState('')

  const handleLogout = () => {
    localStorage.removeItem('admin_auth')
    localStorage.removeItem('admin_login_time')
    router.push('/admin/login')
  }

  // Load existing blog posts (in a real app, this would be from an API)
  useEffect(() => {
    // This would typically fetch from your blog API
    const samplePosts: BlogPost[] = [
      {
        id: '1',
        title: 'The Importance of Annual Physical Exams',
        slug: 'importance-annual-physical-exams',
        excerpt: 'Regular physical exams are crucial for maintaining good health and catching potential issues early.',
        content: 'Full blog post content here...',
        author: 'Dr. Sarah Johnson',
        publishedAt: '2024-01-15',
        tags: ['preventive care', 'health screening'],
        category: 'Preventive Care',
        readTime: 5,
        image: '/images/blog-images/annual-exam.svg',
        featured: true
      }
    ]
    setBlogPosts(samplePosts)
  }, [])

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()
  }

  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200
    const words = content.split(' ').length
    return Math.ceil(words / wordsPerMinute)
  }

  const addBlogPost = () => {
    const post: BlogPost = {
      id: Date.now().toString(),
      ...newPost,
      slug: newPost.slug || generateSlug(newPost.title),
      publishedAt: new Date().toISOString().split('T')[0],
      readTime: calculateReadTime(newPost.content),
    }
    
    setBlogPosts([post, ...blogPosts])
    setNewPost({
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      author: 'Dr. Sarah Johnson',
      category: 'General',
      tags: [],
      readTime: 5,
      image: '/images/blog-images/default.svg',
      featured: false
    })
    setIsAddingNew(false)
  }

  const updateBlogPost = (id: string) => {
    setBlogPosts(posts => 
      posts.map(post => 
        post.id === id 
          ? { 
              ...post, 
              ...newPost,
              slug: newPost.slug || generateSlug(newPost.title),
              readTime: calculateReadTime(newPost.content),
            }
          : post
      )
    )
    setEditingPost(null)
    setNewPost({
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      author: 'Dr. Sarah Johnson',
      category: 'General',
      tags: [],
      readTime: 5,
      image: '/images/blog-images/default.svg',
      featured: false
    })
  }

  const deleteBlogPost = (id: string) => {
    if (confirm('Are you sure you want to delete this blog post?')) {
      setBlogPosts(posts => posts.filter(post => post.id !== id))
    }
  }

  const startEditing = (post: BlogPost) => {
    setNewPost({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      author: post.author,
      category: post.category,
      tags: post.tags,
      readTime: post.readTime,
      image: post.image,
      featured: post.featured
    })
    setEditingPost(post.id)
    setIsAddingNew(true)
  }

  const addTag = () => {
    if (newTag.trim() && !newPost.tags.includes(newTag.trim())) {
      setNewPost({
        ...newPost,
        tags: [...newPost.tags, newTag.trim()]
      })
      setNewTag('')
    }
  }

  const removeTag = (tagToRemove: string) => {
    setNewPost({
      ...newPost,
      tags: newPost.tags.filter(tag => tag !== tagToRemove)
    })
  }

  const cancelEditing = () => {
    setEditingPost(null)
    setIsAddingNew(false)
    setNewPost({
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      author: 'Dr. Sarah Johnson',
      category: 'General',
      tags: [],
      readTime: 5,
      image: '/images/blog-images/default.svg',
      featured: false
    })
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 pt-24 pb-8">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Blog Management</h1>
                <p className="text-gray-600">Manage your blog posts and content</p>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-red-600 transition-colors"
                  title="Logout"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
                <button
                  onClick={() => setIsAddingNew(true)}
                  className="btn-medical-primary flex items-center space-x-2"
                >
                  <Plus className="h-5 w-5" />
                  <span>Add New Post</span>
                </button>
              </div>
            </div>

          {/* Add/Edit Form */}
          {isAddingNew && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-gray-50 rounded-xl p-6 mb-8"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">
                  {editingPost ? 'Edit Blog Post' : 'Add New Blog Post'}
                </h2>
                <button
                  onClick={cancelEditing}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Title *
                    </label>
                    <input
                      type="text"
                      value={newPost.title}
                      onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-primary focus:border-transparent"
                      placeholder="Enter blog post title"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Slug
                    </label>
                    <input
                      type="text"
                      value={newPost.slug}
                      onChange={(e) => setNewPost({...newPost, slug: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-primary focus:border-transparent"
                      placeholder="Auto-generated from title"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Excerpt *
                    </label>
                    <textarea
                      value={newPost.excerpt}
                      onChange={(e) => setNewPost({...newPost, excerpt: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-primary focus:border-transparent h-20"
                      placeholder="Short description of the blog post"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Author
                    </label>
                    <input
                      type="text"
                      value={newPost.author}
                      onChange={(e) => setNewPost({...newPost, author: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category
                    </label>
                    <select
                      value={newPost.category}
                      onChange={(e) => setNewPost({...newPost, category: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-primary focus:border-transparent"
                    >
                      <option value="General">General</option>
                      <option value="Preventive Care">Preventive Care</option>
                      <option value="Chronic Disease Management">Chronic Disease Management</option>
                      <option value="Technology">Technology</option>
                      <option value="Wellness">Wellness</option>
                    </select>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tags
                    </label>
                    <div className="flex space-x-2 mb-2">
                      <input
                        type="text"
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && addTag()}
                        className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-primary focus:border-transparent"
                        placeholder="Add a tag and press Enter"
                      />
                      <button
                        type="button"
                        onClick={addTag}
                        className="px-4 py-3 bg-medical-primary text-white rounded-lg hover:bg-medical-primary-700"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {newPost.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-3 py-1 bg-medical-primary-100 text-medical-primary-800 rounded-full text-sm"
                        >
                          {tag}
                          <button
                            onClick={() => removeTag(tag)}
                            className="ml-2 text-medical-primary-600 hover:text-medical-primary-800"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Image URL
                    </label>
                    <input
                      type="text"
                      value={newPost.image}
                      onChange={(e) => setNewPost({...newPost, image: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-primary focus:border-transparent"
                      placeholder="/images/blog-images/your-image.svg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Read Time (minutes)
                    </label>
                    <input
                      type="number"
                      value={newPost.readTime}
                      onChange={(e) => setNewPost({...newPost, readTime: parseInt(e.target.value) || 5})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-primary focus:border-transparent"
                      min="1"
                      max="60"
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="featured"
                      checked={newPost.featured}
                      onChange={(e) => setNewPost({...newPost, featured: e.target.checked})}
                      className="h-4 w-4 text-medical-primary focus:ring-medical-primary border-gray-300 rounded"
                    />
                    <label htmlFor="featured" className="ml-2 text-sm text-gray-700">
                      Featured post
                    </label>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content *
                </label>
                <textarea
                  value={newPost.content}
                  onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-primary focus:border-transparent h-40"
                  placeholder="Write your blog post content here. Markdown is supported."
                />
              </div>

              {/* Actions */}
              <div className="flex justify-end space-x-4 mt-6">
                <button
                  onClick={cancelEditing}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={editingPost ? () => updateBlogPost(editingPost) : addBlogPost}
                  className="btn-medical-primary flex items-center space-x-2"
                  disabled={!newPost.title || !newPost.excerpt || !newPost.content}
                >
                  <Save className="h-4 w-4" />
                  <span>{editingPost ? 'Update Post' : 'Add Post'}</span>
                </button>
              </div>
            </motion.div>
          )}

          {/* Blog Posts List */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">Existing Blog Posts ({blogPosts.length})</h2>
            {blogPosts.length === 0 ? (
              <div className="text-center py-12">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No blog posts yet. Create your first post!</p>
              </div>
            ) : (
              blogPosts.map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>
                        {post.featured && (
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 mb-3">{post.excerpt}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(post.publishedAt).toLocaleDateString()}
                        </span>
                        <span className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {post.author}
                        </span>
                        <span className="flex items-center">
                          <Tag className="h-4 w-4 mr-1" />
                          {post.category}
                        </span>
                        <span>{post.readTime} min read</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {post.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex space-x-2 ml-4">
                      <button
                        onClick={() => startEditing(post)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                        title="Edit post"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        className="p-2 text-green-600 hover:bg-green-50 rounded-lg"
                        title="View post"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => deleteBlogPost(post.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                        title="Delete post"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </div>
    </ProtectedRoute>
  )
}
