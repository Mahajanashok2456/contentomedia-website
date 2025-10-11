import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export default function HighlightCard({ title, description, icon }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm text-center h-full flex flex-col"
    >
      {icon && (
        <div className="w-16 h-16 rounded-full bg-lightBlue flex items-center justify-center mx-auto mb-4 text-2xl">
          {icon}
        </div>
      )}
      <h3 className="font-heading text-xl md:text-2xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="font-body text-gray-600 text-sm md:text-base leading-relaxed flex-1">
        {description}
      </p>
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
