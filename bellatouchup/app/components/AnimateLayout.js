// components/PageWrapper.js
'use client';

import { motion } from 'framer-motion';

export default function AnimateLayout({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'linear' }}
      className="min-h-screen"
      style={{ backgroundColor: 'black' }}
    >
      {children}
    </motion.div>
  );
}
