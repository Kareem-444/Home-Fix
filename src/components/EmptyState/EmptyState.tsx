import React from 'react';

const EmptyState: React.FC<{ message?: string }> = ({ message = 'No data available.' }) => (
  <div className="flex flex-col items-center justify-center h-64">
    <img src="/assets/empty-state.svg" alt="Empty" className="w-24 h-24 mb-4 opacity-70" />
    <span className="text-gray-500 font-inter">{message}</span>
  </div>
);

export default EmptyState;
