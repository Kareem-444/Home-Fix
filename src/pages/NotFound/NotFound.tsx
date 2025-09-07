import React from 'react';
import { motion } from 'framer-motion';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen bg-gradient-to-br from-indigo-500 via-orange-500 to-green-500 text-white">
      <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.6 }} className="bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-3xl shadow-xl text-center border border-gray-200">
  <h1 className="text-6xl font-bold mb-4 font-sans">404</h1>
  <p className="text-lg mb-6 font-sans">Oops! Page not found.</p>
  <p className="mb-6 text-gray-100">The page you are looking for does not exist or has been moved. Please check the URL or return to the homepage.</p>
  <a href="/" className="inline-block bg-gradient-to-r from-indigo-500 via-orange-500 to-green-500 hover:from-orange-500 hover:to-indigo-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl border-4 border-white transition-all duration-300">Go Home</a>
      </motion.div>
    </div>
  );
};

export default NotFound;
