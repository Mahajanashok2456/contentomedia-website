import React from 'react';
import { motion } from 'framer-motion';

export default function ServiceCard({ title, description, icon,}) {
  return (
    <motion.article
      className="bg-white border-2 border-gray-300 hover:border-primary p-6 rounded-xl shadow-lg hover:shadow-xl cursor-pointer relative group transition-all duration-300"
      style={{
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden'
      }}
    >
      {/* Subtle background gradient on hover only */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

      {/* Small floating indicators - appear on hover */}
      <div className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-bounce transition-all duration-300 delay-100" />
      <div className="absolute bottom-2 left-2 w-1 h-1 bg-secondary rounded-full opacity-0 group-hover:opacity-80 group-hover:animate-pulse transition-all duration-300 delay-200" />

      <div className="relative z-10">
        {icon && <div className="text-4xl mb-4 group-hover:scale-105 transition-transform duration-300">{icon}</div>}
        <h3 className="font-heading text-xl text-gray-800 font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="font-body text-gray-600 text-sm flex-1">{description}</p>
      </div>
    </motion.article>
  );
}
