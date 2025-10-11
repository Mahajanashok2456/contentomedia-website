import React, { useState, useRef, useEffect } from 'react';
import FAQItem from '../components/FAQItem';

const faqs = [
  {
    id: 1,
    question: 'How do we make sure our content is AI and plagiarism-free?',
    answer:
      'Every piece of our content is written from scratch. We double-check for originality before delivery.',
  },
  {
    id: 2,
    question: 'Can you write for my specific business or industry?',
    answer: 'Yes. We will research your industry and deliver your content on time.',
  },
  {
    id: 3,
    question: 'Do you write content that is optimized for search engines?',
    answer:
      'Yes, we provide SEO friendly content that improves your visibility while keeping it reader-friendly and natural.',
  },
  {
    id: 4,
    question: 'What if I need my project completed quickly?',
    answer: 'We offer express services for urgent projects without compromising the quality.',
  },
  {
    id: 5,
    question: 'How do I start working with Contentora Media?',
    answer:
      'Simply reach out to us through our contact us page or email.  We will discuss your requirements and put a plan that fits your goals.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const illustrationRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!illustrationRef.current) return;
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? Math.min(scrollY / docHeight, 1) : 0;
      // Move from left (0%) to right (calc(100vw - illustration width))
      const illustrationWidth = 80; // px, matches style width
      const maxX = window.innerWidth - illustrationWidth;
      illustrationRef.current.style.transform = `translateX(${percent * maxX}px)`;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-dark text-light flex flex-col items-center py-10 px-4 relative">
      {/* Animated Illustration */}
      <div
        ref={illustrationRef}
        style={{
          position: 'fixed',
          left: 0,
          bottom: 40,
          zIndex: 50,
          width: '80px',
          height: '80px',
          transition: 'transform 0.2s cubic-bezier(0.4,0,0.2,1)',
          pointerEvents: 'none',
        }}
      >
        <img
          src="/src/assets/images/undraw_on-the-way_zwi3.svg"
          alt="Moving Illustration"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Hero Section */}
      <div className="w-full flex flex-col items-center mb-8">
        <h1
          className="text-5xl font-extrabold text-yellow-400 tracking-tight mb-2 text-center"
          style={{ letterSpacing: '0.05em' }}
        >
          FAQ
        </h1>
        <p className="text-lg text-gray-300 text-center max-w-xl">
          Find answers to common questions about our content writing services, process, and how to
          get started.
        </p>
      </div>

      {/* FAQ Grid */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 bg-card rounded-2xl shadow-2xl p-6">
        {faqs.map((faq, idx) => (
          <FAQItem
            key={faq.id}
            question={
              (
                <span className="font-bold text-yellow-400 mr-2">
                  {String(idx + 1).padStart(2, '0')}
                </span>
              ) + faq.question
            }
            answer={faq.answer}
            isOpen={openIndex === faq.id}
            onToggle={() => setOpenIndex(openIndex === faq.id ? null : faq.id)}
            index={faq.id}
          />
        ))}
      </div>
    </div>
  );
}
