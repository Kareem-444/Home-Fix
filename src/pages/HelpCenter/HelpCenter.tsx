
const HelpCenter = () => {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Help <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Center</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find answers, guides, and support for using Servicely. We're here to help you get the most out of our platform.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-6">Popular Topics</h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-indigo-600 dark:text-indigo-400">Getting Started:</strong> Learn how to create an account, browse services, and make your first booking.
            </li>
            <li>
              <strong className="text-indigo-600 dark:text-indigo-400">Account Management:</strong> Update your profile, change your password, and manage your preferences.
            </li>
            <li>
              <strong className="text-indigo-600 dark:text-indigo-400">Booking & Payments:</strong> How to book services, payment options, and refund policies.
            </li>
            <li>
              <strong className="text-indigo-600 dark:text-indigo-400">Provider Support:</strong> Information for service providers on joining, managing jobs, and getting paid.
            </li>
            <li>
              <strong className="text-indigo-600 dark:text-indigo-400">Troubleshooting:</strong> Solutions for common issues and technical problems.
            </li>
          </ul>

          <div className="mt-10 text-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Still need help?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Contact our support team for personalized assistance.</p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
