import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBookOpen } from 'react-icons/fa';

const allBlogPosts = [
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
  {
    id: 5,
    title: 'Content marketing strategies that actually work',
    excerpt:
      'Proven content marketing techniques that drive real results for businesses of all sizes...',
    category: 'marketing',
    readTime: '6 min read',
    date: 'Oct 5, 2025',
  },
  {
    id: 6,
    title: 'Building a successful online store from scratch',
    excerpt:
      "Step-by-step guide to launching and growing your eCommerce business in today's digital landscape...",
    category: 'ecommerce',
    readTime: '9 min read',
    date: 'Oct 3, 2025',
  },
];

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allBlogPosts.slice(indexOfFirstPost, indexOfLastPost);
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

      {/* Blog Posts Grid */}
      <section className="py-16 px-6 bg-gray-50" data-aos="fade-up">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            The more you know
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {currentPosts.map((post, index) => {
              const slug = post.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-+|-+$/g, '');

              return (
                <Link
                  key={post.id}
                  to={`/blog/${slug}`}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 block"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <img
                    src={`https://source.unsplash.com/random/400x250?${post.category}`}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />

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
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pagination Section */}
      <section className="py-12 px-6 bg-white" data-aos="fade-up">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex justify-center items-center gap-2">
            <button
              onClick={() => setCurrentPage(1)}
              className={`w-10 h-10 rounded-full font-semibold transition-colors duration-300 ${
                currentPage === 1
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-primary hover:text-white'
              }`}
            >
              1
            </button>
            <button
              onClick={() => setCurrentPage(2)}
              className={`w-10 h-10 rounded-full font-semibold transition-colors duration-300 ${
                currentPage === 2
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-primary hover:text-white'
              }`}
            >
              2
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
