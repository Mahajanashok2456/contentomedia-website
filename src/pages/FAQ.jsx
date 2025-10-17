import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FAQItem from '../components/FAQItem';
import undrawIllustration from '../assets/images/undraw_on-the-way_zwi3.svg';

const faqs = [
  {
    id: 1,
    question: 'How do we make sure our content is AI and plagiarism-free?',
    answer:
      'Every piece of our content is written from scratch by our professional writers. We use advanced plagiarism detection tools and manual review processes to ensure 100% originality. Our content goes through multiple quality checks before delivery to guarantee it is completely unique and authentic.',
    iconType: 'plagiarism',
    color: 'blue',
  },
  {
    id: 2,
    question: 'Can you write for my specific business or industry?',
    answer:
      'Absolutely! Our team consists of writers with expertise across various industries including technology, healthcare, finance, e-commerce, and more. We conduct thorough research on your industry, competitors, and target audience to create content that resonates with your specific market and business goals.',
    iconType: 'industry',
    color: 'red',
  },
  {
    id: 3,
    question: 'Do you write content that is optimized for search engines?',
    answer:
      'Yes, we provide comprehensive SEO-friendly content that improves your search engine visibility while maintaining readability and natural flow. Our content includes proper keyword optimization, meta descriptions, internal linking suggestions, and follows the latest SEO best practices to help your content rank higher in search results.',
    iconType: 'seo',
    color: 'blue',
  },
  {
    id: 4,
    question: 'What if I need my project completed quickly?',
    answer:
      'We offer express delivery services for urgent projects. Depending on the scope and complexity, we can deliver quality content within 24-48 hours for rush orders. We never compromise on quality, even with tight deadlines, ensuring you receive professional content that meets your standards.',
    iconType: 'quick',
    color: 'red',
  },
  {
    id: 5,
    question: 'How do I start working with Contentora Media?',
    answer:
      "Getting started is simple! You can reach out to us through our contact page, send us an email, or schedule a free consultation call. We'll discuss your content needs, goals, and requirements, then create a customized content strategy that fits your budget and timeline. Our team will guide you through every step of the process.",
    iconType: 'start',
    color: 'blue',
  },
  {
    id: 6,
    question: 'What types of content do you offer?',
    answer:
      'We offer a comprehensive range of content services including blog posts, website copy, social media content, email marketing campaigns, technical documentation, product descriptions, press releases, and more. Each piece is tailored to your specific needs and brand voice.',
    iconType: 'content',
    color: 'red',
  },
  {
    id: 7,
    question: 'Do you provide revisions and edits?',
    answer:
      "Yes, we include unlimited revisions in all our packages to ensure you're completely satisfied with the final content. We work closely with you to refine and perfect every piece until it meets your exact requirements and expectations.",
    iconType: 'revisions',
    color: 'blue',
  },
  {
    id: 8,
    question: 'What is your pricing structure?',
    answer:
      'Our pricing is flexible and depends on the type of content, word count, complexity, and turnaround time. We offer competitive rates and various packages to fit different budgets. Contact us for a personalized quote based on your specific content needs.',
    iconType: 'pricing',
    color: 'red',
  },
];

export default function FAQ() {
  const illustrationRef = useRef(null);
  const progressRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (!illustrationRef.current) return;
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? Math.min(scrollY / docHeight, 1) : 0;
      const illustrationWidth = 80;
      const maxX = window.innerWidth - illustrationWidth;
      illustrationRef.current.style.transform = `translateX(${percent * maxX}px)`;

      // Update progress bar
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${percent})`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Split FAQs into two columns
  const leftColumnFaqs = faqs.filter((_, index) => index % 2 === 0);
  const rightColumnFaqs = faqs.filter((_, index) => index % 2 === 1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-lightBlue to-white py-20 px-4 relative overflow-hidden">
      {/* Animated Illustration */}
      <motion.div
        ref={illustrationRef}
        className="fixed left-0 bottom-10 z-40 w-20 h-20 pointer-events-none"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        <img
          src={undrawIllustration}
          alt="Moving Illustration"
          className="w-full h-full drop-shadow-lg"
        />
      </motion.div>

      {/* Floating Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-primary opacity-5 rounded-full"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-24 h-24 bg-secondary opacity-5 rounded-full"
        animate={{
          y: [0, 20, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      {/* Hero Section */}
      <motion.div
        className="max-w-7xl mx-auto mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4, ease: 'easeOut' }}
      >
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.3, ease: 'easeOut' }}
        >
          <motion.h1
            className="font-heading text-4xl md:text-5xl font-bold text-primary tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.3, ease: 'easeOut' }}
            whileHover={{ scale: 1.02 }}
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            className="text-lg text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.3, ease: 'easeOut' }}
          >
            Find answers to common questions about our content writing services, process, and how to
            get started.
          </motion.p>
        </motion.div>

        {/* Two-Column FAQ Layout */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4, ease: 'easeOut' }}
        >
          {/* Left Column */}
          <motion.div
            className="space-y-0"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.3, ease: 'easeOut' }}
          >
            {leftColumnFaqs.map((faq, index) => (
              <FAQItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                iconType={faq.iconType}
                color={faq.color}
                questionNumber={`Q${String(faq.id).padStart(2, '0')}`}
                index={index}
              />
            ))}
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="space-y-0"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.3, ease: 'easeOut' }}
          >
            {rightColumnFaqs.map((faq, index) => (
              <FAQItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                iconType={faq.iconType}
                color={faq.color}
                questionNumber={`Q${String(faq.id).padStart(2, '0')}`}
                index={index + 4}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-30">
        <motion.div
          ref={progressRef}
          className="h-full bg-primary origin-left"
          initial={{ scaleX: 0 }}
          transition={{ duration: 0.1 }}
        />
      </div>
    </div>
  );
}
