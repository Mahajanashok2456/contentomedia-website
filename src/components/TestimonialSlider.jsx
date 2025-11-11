import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'J. Parker',
    role: 'Founder',
    content:
      'Contentora transformed our blog — traffic and engagement have improved significantly.',
  },
  {
    name: 'M. Singh',
    role: 'Marketing Lead',
    content: 'Fast turnaround and excellent attention to SEO. Highly recommended.',
  },
  {
    name: 'A. Lopez',
    role: 'CEO',
    content: 'Their copy boosted our conversions during a product launch.',
  },
];

export default function TestimonialSlider() {
  const [idx, setIdx] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (paused) return undefined;
    const t = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <div className="max-w-4xl mx-auto">
      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        aria-live="polite"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-white rounded shadow"
          >
            <p className="font-body text-lg italic text-gray-700 mb-4">
              “{testimonials[idx].content}”
            </p>
            <div className="font-heading font-semibold">{testimonials[idx].name}</div>
            <div className="text-sm text-gray-500">{testimonials[idx].role}</div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-3 mt-4">
          <button
            aria-label="Previous testimonial"
            onClick={() => {
              setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);
              setPaused(true);
            }}
            className="bg-primary text-white p-2 rounded-full"
          >
            ◀
          </button>
          <button
            aria-label="Next testimonial"
            onClick={() => {
              setIdx((i) => (i + 1) % testimonials.length);
              setPaused(true);
            }}
            className="bg-primary text-white p-2 rounded-full"
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
}
