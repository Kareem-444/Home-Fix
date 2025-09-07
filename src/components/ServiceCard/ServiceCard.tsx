import React from 'react';

interface ServiceCardProps {
  name: string;
  category: string;
  location: string;
  rating: number;
  picture: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ name, category, location, rating, picture }) => {
  return (
    <div className="glassmorphism-card p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
      <img src={picture} alt={name} className="w-20 h-20 rounded-full mx-auto mb-4 object-cover" />
      <h3 className="font-poppins text-xl font-bold text-indigo-500 mb-2">{name}</h3>
      <p className="text-gray-500 mb-1">{category} • {location}</p>
      <div className="flex justify-center items-center gap-1 mb-2">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < Math.round(rating) ? 'text-orange-500' : 'text-gray-300'}>★</span>
        ))}
      </div>
      <button className="bg-green-500 hover:bg-indigo-500 text-white px-4 py-2 rounded-full font-semibold transition-colors">Contact</button>
    </div>
  );
};

export default ServiceCard;
