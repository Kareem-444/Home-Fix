import React from 'react';

const ProviderProfile: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 bg-opacity-80 backdrop-blur-lg p-8 rounded-3xl shadow-xl w-full max-w-2xl border border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-6 mb-6">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Provider" className="w-20 h-20 rounded-full border-4 border-indigo-500 shadow" />
          <div>
            <h2 className="text-3xl font-bold font-sans text-indigo-500 mb-1">John Electrician</h2>
            <span className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-semibold mb-2">Electrician</span>
            <div className="flex gap-1 text-yellow-400 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <span className="text-gray-500 text-sm">Downtown • 4.8/5 rating</span>
          </div>
        </div>
        <p className="mb-4 text-gray-700 dark:text-gray-300">Expert in residential and commercial electrical services. Fast, reliable, and trusted by hundreds of local customers.</p>
        <div className="mb-4">
          <h3 className="font-bold text-lg mb-2 text-indigo-500">Services Offered</h3>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
            <li>Wiring & Installation</li>
            <li>Lighting Solutions</li>
            <li>Electrical Repairs</li>
            <li>Emergency Support</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="font-bold text-lg mb-2 text-indigo-500">Recent Reviews</h3>
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-2">
            <span className="font-semibold text-gray-800 dark:text-gray-200">Alice:</span> Quick and professional!
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
            <span className="font-semibold text-gray-800 dark:text-gray-200">Bob:</span> Solved my issue efficiently.
          </div>
        </div>
        <button className="mt-4 bg-green-500 hover:bg-indigo-500 text-white px-6 py-2 rounded-full font-bold shadow-lg transition-colors">Contact Provider</button>
      </div>
    </div>
  );
};

export default ProviderProfile;
