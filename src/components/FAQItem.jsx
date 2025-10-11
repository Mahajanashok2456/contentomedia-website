import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQItem({ question, answer, isOpen, onToggle, index }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle();
    }
  };

  return (
    <article className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
      <button
        id={`faq-question-${index}`}
        aria-controls={`faq-answer-${index}`}
        aria-expanded={isOpen}
        onClick={onToggle}
        onKeyDown={handleKeyDown}
        className="w-full text-left p-6 flex items-center justify-between cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 hover:bg-gray-50 transition-colors"
      >
        <h3 className="font-heading text-lg md:text-xl font-semibold text-gray-900 flex-grow pr-4">
          {question}
        </h3>
        <span
          className={`text-xl text-primary transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        >
          ▼
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            role="region"
            aria-labelledby={`faq-question-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="px-6 pb-6 bg-gray-50"
          >
            {answer.split('\n').map((para, i) => (
              <p key={i} className="font-body text-gray-700 leading-relaxed mb-3">
                {para}
              </p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
