import React from 'react';

const UserDashboard: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-3xl p-8">
        <h2 className="text-3xl font-bold mb-6 font-sans text-indigo-500">Your Booked Services</h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300 text-lg">Track your service history, upcoming appointments, and saved providers. Manage everything in one place.</p>
        <div className="mb-8">
          <h3 className="font-bold text-lg mb-2 text-green-500">Upcoming Bookings</h3>
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-2 flex justify-between items-center">
            <span className="font-semibold text-indigo-500">Sarah Plumber</span>
            <span className="text-gray-500">Sep 10, 2025 • 2:00 PM</span>
            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">Confirmed</span>
          </div>
        </div>
        <div className="mb-8">
          <h3 className="font-bold text-lg mb-2 text-indigo-500">Saved Providers</h3>
          <div className="flex gap-4">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex flex-col items-center">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Provider" className="w-12 h-12 rounded-full mb-2" />
              <span className="font-semibold text-green-500">Sarah Plumber</span>
              <span className="text-xs text-gray-500">Plumber</span>
            </div>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex flex-col items-center">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Provider" className="w-12 h-12 rounded-full mb-2" />
              <span className="font-semibold text-indigo-500">John Electrician</span>
              <span className="text-xs text-gray-500">Electrician</span>
            </div>
          </div>
        </div>
        <div className="mt-8 text-gray-600 dark:text-gray-400 text-base">
          <h3 className="font-bold mb-2 text-indigo-500">How to use your dashboard:</h3>
          <ul className="list-disc list-inside">
            <li>View and manage all your bookings</li>
            <li>Save favorite providers for quick access</li>
            <li>Track upcoming appointments and service history</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
