import React from 'react';
import { motion } from 'framer-motion';

const Loader: React.FC = () => (
  <motion.div
    className="flex items-center justify-center h-32"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
  </motion.div>
);

export default Loader;
