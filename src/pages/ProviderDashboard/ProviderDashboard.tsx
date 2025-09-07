import React from 'react';

const ProviderDashboard: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-3xl p-8">
        <h2 className="text-3xl font-bold mb-6 font-sans text-indigo-500">Provider Dashboard</h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300 text-lg">Manage your profile, skills, and availability. Stay connected with clients and grow your business.</p>
        <div className="mb-8">
          <h3 className="font-bold text-lg mb-2 text-orange-500">Profile Info</h3>
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-2 flex gap-4 items-center">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Provider" className="w-12 h-12 rounded-full" />
            <div>
              <span className="font-semibold text-indigo-500">John Electrician</span>
              <div className="text-xs text-gray-500">Electrician • Downtown</div>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <h3 className="font-bold text-lg mb-2 text-green-500">Skills & Services</h3>
          <div className="flex gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 font-semibold border border-indigo-300">Wiring</span>
            <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 font-semibold border border-orange-300">Lighting</span>
            <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 font-semibold border border-green-300">Repairs</span>
            <span className="px-3 py-1 rounded-full bg-pink-100 text-pink-700 font-semibold border border-pink-300">Emergency</span>
          </div>
        </div>
        <div className="mb-8">
          <h3 className="font-bold text-lg mb-2 text-indigo-500">Availability</h3>
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <span className="text-gray-700 dark:text-gray-300">Available: Mon-Fri, 9am - 6pm</span>
          </div>
        </div>
        <div className="mt-8 text-gray-600 dark:text-gray-400 text-base">
          <h3 className="font-bold mb-2 text-indigo-500">Dashboard Tips:</h3>
          <ul className="list-disc list-inside">
            <li>Update your skills and services regularly</li>
            <li>Set your availability to attract more bookings</li>
            <li>Respond quickly to client messages</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProviderDashboard;
