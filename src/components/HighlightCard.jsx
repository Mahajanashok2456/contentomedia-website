import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export default function HighlightCard({ title, description, icon }) {
  return (
    <motion.article
      className="bg-white border-2 border-gray-300 hover:border-primary p-6 rounded-xl shadow-lg hover:shadow-xl text-center h-full flex flex-col cursor-pointer relative group transition-all duration-300"
      style={{
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden'
      }}
    >
      {/* Subtle background gradient on hover only */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

      {/* Small floating indicators - appear only on hover */}
      <div className="absolute top-2 left-2 w-2 h-2 bg-secondary rounded-full opacity-0 group-hover:opacity-70 group-hover:animate-bounce transition-all duration-300 delay-75" />
      <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-80 group-hover:animate-pulse transition-all duration-300 delay-150" />

      <div className="relative z-10">
        {icon && (
          <div className="w-16 h-16 rounded-full bg-lightBlue flex items-center justify-center mx-auto mb-4 text-2xl">
            {icon}
          </div>
        )}
        <h3 className="font-heading text-xl md:text-2xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="font-body text-gray-600 text-sm md:text-base leading-relaxed flex-1">
          {description}
        </p>
      </div>
    </motion.article>
  );
}

HighlightCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.node,
};

HighlightCard.defaultProps = {
  icon: null,
};
