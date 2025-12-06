import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Sitemap() {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sitemapData = [
    {
      category: 'Main Pages',
      icon: '🏠',
      links: [
        { path: '/', label: 'Home', description: 'Welcome to Contentora Media' },
        { path: '/about', label: 'About Us', description: 'Learn about our company and mission' },
        {
          path: '/services',
          label: 'Services',
          description: 'Explore all our digital marketing services',
        },
        {
          path: '/projects',
          label: 'Projects',
          description: 'View our portfolio of completed projects',
        },
        { path: '/contact', label: 'Contact', description: 'Get in touch with our team' },
      ],
    },
    {
      category: 'Services',
      icon: '📊',
      links: [
        {
          path: '/services/ppc',
          label: 'PPC Marketing',
          description: 'Pay-per-click advertising campaigns',
        },
        {
          path: '/services/content-writing',
          label: 'Content Writing',
          description: 'Professional content writing services',
        },
        {
          path: '/services/seo',
          label: 'SEO',
          description: 'Search engine optimization strategies',
        },
        {
          path: '/services/email-marketing',
          label: 'Email Marketing',
          description: 'Effective email campaign management',
        },
        {
          path: '/services/social-media',
          label: 'Social Media Marketing',
          description: 'Social media strategy and management',
        },
        {
          path: '/services/whatsapp-marketing',
          label: 'WhatsApp Marketing',
          description: 'Bulk WhatsApp marketing services',
        },
        {
          path: '/services/website-development',
          label: 'Website Development',
          description: 'Custom website design and development',
        },
        {
          path: '/services/cv-writing',
          label: 'CV Writing',
          description: 'Professional resume and CV writing',
        },
        {
          path: '/services/proofreading',
          label: 'Proofreading',
          description: 'Expert proofreading and editing',
        },
        {
          path: '/services/paid-guest-posting',
          label: 'Guest Posting',
          description: 'Strategic guest posting services',
        },
        {
          path: '/services/reviews',
          label: 'Reviews Management',
          description: 'Online reputation management',
        },
        {
          path: '/services/hiring',
          label: 'Hiring Services',
          description: 'Recruitment and talent acquisition',
        },
      ],
    },
    {
      category: 'Resources',
      icon: '📚',
      links: [
        { path: '/blog', label: 'Blog', description: 'Read articles and insights' },
        { path: '/faq', label: 'FAQ', description: 'Frequently asked questions' },
        {
          path: '/privacy-policy',
          label: 'Privacy Policy',
          description: 'Our privacy and data protection policy',
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <>
      <Helmet>
        <title>Sitemap | Contentora Media - Complete Site Navigation</title>
        <meta
          name="description"
          content="Browse the complete sitemap of Contentora Media. Find all pages, services, and resources. Easy navigation for users and web crawlers."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://contentoramedia.com/sitemap" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-lightBlue to-white">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.h1
              className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Site <span className="text-secondary">Sitemap</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Navigate through all pages and services on Contentora Media. This sitemap helps you
              find what you're looking for and assists search engines in indexing our content.
            </motion.p>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              className="space-y-16"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {sitemapData.map((section, sectionIndex) => (
                <motion.div
                  key={sectionIndex}
                  variants={itemVariants}
                  className="bg-white rounded-lg shadow-lg p-8"
                >
                  {/* Section Header */}
                  <div className="flex items-center mb-6 pb-4 border-b-2 border-lightBlue">
                    <span className="text-4xl mr-4">{section.icon}</span>
                    <h2 className="font-heading text-2xl font-bold text-primary">
                      {section.category}
                    </h2>
                  </div>

                  {/* Links Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {section.links.map((link, linkIndex) => (
                      <motion.div
                        key={linkIndex}
                        className="group border border-gray-200 rounded-lg p-4 hover:border-secondary hover:shadow-md transition-all duration-300"
                        whileHover={{ translateY: -4 }}
                      >
                        <Link to={link.path} className="block" title={link.description}>
                          <h3 className="font-heading text-lg font-semibold text-primary group-hover:text-secondary transition-colors mb-2">
                            {link.label}
                          </h3>
                          <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                            {link.description}
                          </p>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* SEO Benefits Section */}
            <motion.div
              className="mt-16 bg-gradient-to-r from-lightBlue to-secondary rounded-lg p-8 text-white"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
            >
              <h3 className="font-heading text-2xl font-bold mb-4">Why This Sitemap Matters</h3>
              <ul className="space-y-3 text-sm md:text-base">
                <li className="flex items-start">
                  <span className="text-white mr-3 mt-1">✓</span>
                  <span>
                    <strong>Better SEO:</strong> Helps search engines crawl and index all pages
                    efficiently
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3 mt-1">✓</span>
                  <span>
                    <strong>Improved Navigation:</strong> Users can easily find all services and
                    pages
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3 mt-1">✓</span>
                  <span>
                    <strong>Web Crawler Friendly:</strong> Structured layout helps bots understand
                    our site hierarchy
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3 mt-1">✓</span>
                  <span>
                    <strong>No Duplicates:</strong> Each page is listed only once in the proper
                    category
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3 mt-1">✓</span>
                  <span>
                    <strong>Accessibility:</strong> Complies with web accessibility standards for
                    all users
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              className="mt-12 text-center"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.8 }}
            >
              <p className="text-gray-600 mb-6">Can't find what you're looking for?</p>
              <Link
                to="/contact"
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Schema Markup for SEO */}
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Contentora Media',
              url: 'https://contentoramedia.com',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://contentoramedia.com/search?q={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
              siteNavigationElement: [
                {
                  '@type': 'SiteNavigationElement',
                  name: 'Home',
                  url: 'https://contentoramedia.com/',
                },
                {
                  '@type': 'SiteNavigationElement',
                  name: 'About',
                  url: 'https://contentoramedia.com/about',
                },
                {
                  '@type': 'SiteNavigationElement',
                  name: 'Services',
                  url: 'https://contentoramedia.com/services',
                },
                {
                  '@type': 'SiteNavigationElement',
                  name: 'Blog',
                  url: 'https://contentoramedia.com/blog',
                },
                {
                  '@type': 'SiteNavigationElement',
                  name: 'Contact',
                  url: 'https://contentoramedia.com/contact',
                },
              ],
            })}
          </script>
        </Helmet>
      </div>
    </>
  );
}
