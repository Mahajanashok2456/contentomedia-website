import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaQuestion,
  FaLightbulb,
  FaShieldAlt,
  FaRocket,
  FaUsers,
  FaFileAlt,
  FaEdit,
  FaDollarSign,
} from 'react-icons/fa';

const iconMap = {
  default: FaQuestion,
  plagiarism: FaShieldAlt,
  industry: FaUsers,
  seo: FaRocket,
  quick: FaRocket,
  start: FaUsers,
  content: FaFileAlt,
  revisions: FaEdit,
  pricing: FaDollarSign,
  lightbulb: FaLightbulb,
};

export default function FAQItem({
  question,
  answer,
  iconType = 'default',
  color = 'blue',
  questionNumber,
  index = 0,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const IconComponent = iconMap[iconType] || iconMap.default;

  const colorClasses = {
    blue: {
      icon: 'bg-blue-500',
      line: 'bg-blue-500',
      readMore: 'text-blue-600 hover:text-blue-700',
      hoverIcon: 'hover:bg-blue-600',
      hoverLine: 'hover:bg-blue-600',
    },
    red: {
      icon: 'bg-[#ff6f00]',
      line: 'bg-[#ff6f00]',
      readMore: 'text-[#ff6f00] hover:text-[#ff6f00]/80',
      hoverIcon: 'hover:bg-[#ff6f00]/90',
      hoverLine: 'hover:bg-[#ff6f00]/90',
    },
    green: {
      icon: 'bg-green-500',
      line: 'bg-green-500',
      readMore: 'text-green-600 hover:text-green-700',
      hoverIcon: 'hover:bg-green-600',
      hoverLine: 'hover:bg-green-600',
    },
    purple: {
      icon: 'bg-purple-500',
      line: 'bg-purple-500',
      readMore: 'text-purple-600 hover:text-purple-700',
      hoverIcon: 'hover:bg-purple-600',
      hoverLine: 'hover:bg-purple-600',
    },
  };

  const currentColor = colorClasses[color] || colorClasses.blue;

  const handleReadMoreClick = async () => {
    if (isLoading) return;

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 150)); // Faster loading simulation
    setIsExpanded(!isExpanded);
    setIsLoading(false);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 0.3,
                delay: index * 0.05,
                ease: 'easeOut',
              },
            }
          : { opacity: 0, y: 30, scale: 0.98 }
      }
      whileHover={{
        y: -3,
        transition: { duration: 0.2, ease: 'easeOut' },
      }}
      className="flex items-start space-x-4 mb-8 group cursor-pointer"
    >
      {/* Icon */}
      <motion.div
        className="flex-shrink-0"
        whileHover={{
          scale: 1.05,
          rotate: 3,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-xl"
          style={{
            backgroundColor: (() => {
              // First 4 icons (Q01-Q04): Soft blue colors
              if (index < 4) {
                return index % 2 === 0 ? '#8cbdf1ff' : '#67abf4ff';
              }
              // Last 4 icons (Q05-Q08): Muted orange colors
              return index % 2 === 0 ? '#f6ca88ff' : '#f7ba5dff';
            })(),
            transition: 'background-color 0.3s ease',
            
          }}
          initial={{ scale: 0 }}
          animate={
            isInView
              ? {
                  scale: 1,
                  transition: {
                    delay: index * 0.05 + 0.1,
                    duration: 0.25,
                    ease: 'easeOut',
                  },
                }
              : { scale: 0 }
          }
        >
          <motion.div
            initial={{ rotate: -180, opacity: 0 }}
            animate={
              isInView
                ? {
                    rotate: 0,
                    opacity: 1,
                    transition: {
                      delay: index * 0.05 + 0.2,
                      duration: 0.25,
                      ease: 'easeOut',
                    },
                  }
                : { rotate: -180, opacity: 0 }
            }
          >
            <IconComponent className="text-white text-lg" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Vertical Line */}
      <motion.div
        className="w-1 h-full rounded-full flex-shrink-0 transition-all duration-300 group-hover:w-2"
        style={{
          backgroundColor: currentColor.line.includes('#')
            ? currentColor.line.match(/#[a-fA-F0-9]+/)?.[0]
            : undefined,
        }}
        initial={{ scaleY: 0, originY: 0 }}
        animate={
          isInView
            ? {
                scaleY: 1,
                transition: {
                  delay: index * 0.05 + 0.15,
                  duration: 0.4,
                  ease: 'easeOut',
                },
              }
            : { scaleY: 0 }
        }
      />

      {/* Content Block */}
      <motion.div
        className="flex-1 min-w-0"
        initial={{ x: 20, opacity: 0 }}
        animate={
          isInView
            ? {
                x: 0,
                opacity: 1,
                transition: {
                  delay: index * 0.05 + 0.25,
                  duration: 0.3,
                  ease: 'easeOut',
                },
              }
            : { x: 10, opacity: 0 }
        }
      >
        <motion.div
          className="mb-3"
          initial={{ opacity: 0 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  transition: {
                    delay: index * 0.05 + 0.3,
                    duration: 0.2,
                  },
                }
              : { opacity: 0 }
          }
        >
          <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
            {questionNumber}
          </span>
        </motion.div>

        <motion.h4
          className="font-bold text-lg text-gray-900 mb-3 leading-tight group-hover:text-primary transition-colors duration-300"
          initial={{ opacity: 0, y: 10 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: index * 0.05 + 0.35,
                    duration: 0.25,
                  },
                }
              : { opacity: 0, y: 5 }
          }
        >
          {question}
        </motion.h4>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: index * 0.05 + 0.4,
                    duration: 0.25,
                  },
                }
              : { opacity: 0, y: 5 }
          }
        >
          <motion.p
            className="text-gray-600 leading-relaxed mb-4"
            animate={{
              height: isExpanded ? 'auto' : '3.6rem',
              transition: { duration: 0.2, ease: 'easeInOut' },
            }}
            style={{ overflow: 'hidden' }}
          >
            {isExpanded ? answer : `${answer.substring(0, 120)}...`}
          </motion.p>
        </motion.div>

        <motion.button
          onClick={handleReadMoreClick}
          disabled={isLoading}
          className={`font-semibold text-sm uppercase tracking-wide transition-all duration-300 ${currentColor.readMore} relative overflow-hidden group/btn`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -10 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: index * 0.05 + 0.45,
                    duration: 0.2,
                  },
                }
              : { opacity: 0, x: -5 }
          }
        >
          <motion.span
            className="relative z-10"
            animate={isLoading ? { opacity: 0 } : { opacity: 1 }}
          >
            {isLoading ? 'LOADING...' : isExpanded ? 'READ LESS' : 'READ MORE'}
          </motion.span>

          {isLoading && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.div
                className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              />
            </motion.div>
          )}

          {/* Hover effect background */}
          <motion.div
            className="absolute inset-0 bg-current opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
