import React from 'react';

const ForgotPassword: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 bg-opacity-80 backdrop-blur-lg p-8 rounded-3xl shadow-xl w-full max-w-md border border-gray-200 dark:border-gray-700">
        <h2 className="text-3xl font-bold mb-6 font-sans">Reset Your Password</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">Enter your email address below and we'll send you a link to reset your password.</p>
        <form className="flex flex-col gap-4">
          <input type="email" placeholder="Email Address" className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100" />
          <button className="bg-indigo-500 hover:bg-orange-500 text-white font-semibold py-2 rounded-full transition-colors">Send Reset Link</button>
        </form>
        <div className="mt-6 text-gray-500 text-sm">Remembered your password? <a href="/login" className="text-indigo-500 hover:underline">Login here</a></div>
      </div>
    </div>
  );
};

export default ForgotPassword;
