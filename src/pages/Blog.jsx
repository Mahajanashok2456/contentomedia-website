import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBookOpen } from 'react-icons/fa';

// All blog posts removed — keep array empty until new posts are added or fetched from a CMS
const allBlogPosts = [
  {
    id: 1,
    title: 'Why PPC is the fastest way to drive conversions for your Business',
    excerpt:
      'Most entrepreneurs and marketers agree on one fact when dealing with the topic of business growth speed online: time is money. Pay-Per-Click advertising (PPC) is one of the most outstanding digital marketing strategies...',
    category: 'PPC Marketing',
    readTime: '8 min read',
    date: 'Nov 11, 2025',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    title: 'How Contentdora Media Helps Brands Scale with Smart PPC Advertising',
    excerpt:
      "In today's digital market, which is extremely competitive, businesses have to always find ways that are not only efficient but also can be measured and that increase their visibility, leads, and sales...",
    category: 'PPC Marketing',
    readTime: '7 min read',
    date: 'Nov 11, 2025',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    title: 'The Secret to Lower CPC and Higher ROI in PPC Campaigns',
    excerpt:
      'Lower CPC (Cost Per Click) and higher ROI (Return on Investment) from PPC campaigns are basically the results that can be made possible through effective click-through and strategic budget optimization...',
    category: 'PPC Marketing',
    readTime: '6 min read',
    date: 'Nov 11, 2025',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop',
  },
  {
    id: 4,
    title:
      "From Draft to Perfection: The Ultimate Guide to Contentora Media's Proofreading Expertise",
    excerpt:
      'Every brand story is initially a draft - an idea conceptualized in words. However, what really differentiates good content from great content is its refinement...',
    category: 'Content Writing',
    readTime: '7 min read',
    date: 'Nov 11, 2025',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop',
  },
];

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allBlogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(allBlogPosts.length / postsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-lightBlue to-white" data-aos="fade-up">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center mb-6">
            <FaBookOpen className="text-6xl text-primary mr-4" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
            What's <span className="text-secondary">cooking</span> inside our house?
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
            The <span className="text-secondary">more</span> you know
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {currentPosts.length > 0 ? (
              currentPosts.map((post, index) => {
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
                      src={
                        post.image || `https://source.unsplash.com/random/400x250?${post.category}`
                      }
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
              })
            ) : (
              <div className="col-span-1 md:col-span-2 text-center py-20">
                <p className="text-xl text-gray-600">
                  No blog posts available yet. Check back soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Pagination Section */}
      <section className="py-12 px-6 bg-white" data-aos="fade-up">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex justify-center items-center gap-2">
            {totalPages > 1 &&
              pageNumbers.map((n) => (
                <button
                  key={n}
                  onClick={() => setCurrentPage(n)}
                  className={`w-10 h-10 rounded-full font-semibold transition-colors duration-300 ${
                    currentPage === n
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-primary hover:text-white'
                  }`}
                >
                  {n}
                </button>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
