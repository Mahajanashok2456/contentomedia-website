import React, { useState } from 'react';
import {
  FaShoppingCart,
  FaHeartbeat,
  FaBrain,
  FaSeedling,
  FaArrowRight,
  FaBookOpen,
} from 'react-icons/fa';

const categories = [
  { id: 'ecommerce', name: 'eCommerce', icon: FaShoppingCart },
  { id: 'marketing', name: 'Marketing', icon: FaBrain },
  { id: 'health', name: 'Health & Wellness', icon: FaHeartbeat },
  { id: 'agriculture', name: 'Agriculture', icon: FaSeedling },
];

const blogPosts = [
  {
    id: 1,
    title: 'How to become a freelance digital marketer?',
    excerpt:
      'Learn the essential steps to start your journey as a successful freelance digital marketer...',
    category: 'marketing',
    readTime: '5 min read',
    date: 'Oct 15, 2025',
  },
  {
    id: 2,
    title: 'Essential eCommerce strategies for small businesses',
    excerpt:
      'Discover proven strategies that help small eCommerce businesses thrive in competitive markets...',
    category: 'ecommerce',
    readTime: '7 min read',
    date: 'Oct 12, 2025',
  },
  {
    id: 3,
    title: 'Mental health tips for remote workers',
    excerpt: 'Practical advice for maintaining mental wellness while working remotely...',
    category: 'health',
    readTime: '4 min read',
    date: 'Oct 10, 2025',
  },
  {
    id: 4,
    title: 'Sustainable farming practices for beginners',
    excerpt: 'A comprehensive guide to starting your sustainable agriculture journey...',
    category: 'agriculture',
    readTime: '8 min read',
    date: 'Oct 8, 2025',
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-lightBlue to-white" data-aos="fade-up">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center mb-6">
            <FaBookOpen className="text-6xl text-primary mr-4" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
            What's cooking inside our house?
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Get the latest tips, discussions, market trends, and expert insights on digital
            marketing, eCommerce strategies, health & wellness, and sustainable agriculture
            practices.
          </p>
        </div>
      </section>

      {/* Filter/Category Section */}
      <section className="py-16 px-6 bg-gray-50" data-aos="fade-up">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            How will you benefit?
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-3 rounded-full font-semibold transition-colors duration-300 flex items-center gap-2 ${
                activeCategory === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white'
              }`}
            >
              All Posts
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-colors duration-300 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-secondary text-white'
                    : 'bg-white text-secondary border-2 border-secondary hover:bg-secondary hover:text-white'
                }`}
              >
                <category.icon className="text-lg" />
                {category.name}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {blogPosts
              .filter((post) => activeCategory === 'all' || post.category === activeCategory)
              .map((post, index) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-primary mb-3 leading-tight">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-secondary capitalize">
                        {post.category}
                      </span>
                      <div className="flex items-center text-primary font-semibold hover:text-secondary transition-colors duration-300 cursor-pointer">
                        Read More
                        <FaArrowRight className="ml-2 text-sm" />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>

      {/* Pagination Section */}
      <section className="py-12 px-6 bg-white" data-aos="fade-up">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex justify-center items-center gap-2">
            <button className="w-10 h-10 rounded-full bg-primary text-white font-semibold">
              1
            </button>
            <button className="w-10 h-10 rounded-full bg-gray-200 text-gray-700 font-semibold hover:bg-primary hover:text-white transition-colors duration-300">
              2
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
