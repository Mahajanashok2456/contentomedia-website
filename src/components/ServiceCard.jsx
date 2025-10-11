import React from 'react';
import { motion } from 'framer-motion';

export default function ServiceCard({ title, description, icon }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm h-full flex flex-col"
    >
      {icon && <div className="text-4xl mb-4">{icon}</div>}
      <h3 className="font-heading text-xl font-semibold mb-2">{title}</h3>
      <p className="font-body text-gray-600 text-sm flex-1">{description}</p>
    </motion.article>
  );
}
