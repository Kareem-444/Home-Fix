import React from 'react';
import { motion } from 'framer-motion';

interface ToastProps {
  message: string;
  type?: 'success' | 'error';
}

const Toast: React.FC<ToastProps> = ({ message, type = 'success' }) => (
  <motion.div
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -50, opacity: 0 }}
    className={`fixed top-6 right-6 px-6 py-3 rounded-lg shadow-lg font-inter text-white z-50 ${type === 'success' ? 'bg-green-500' : 'bg-orange-500'}`}
  >
    {message}
  </motion.div>
);

export default Toast;
