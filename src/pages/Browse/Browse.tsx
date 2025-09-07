import React, { useState } from 'react';
import { Search, Filter, MapPin, Star, Clock, Phone, Mail, Heart, ArrowRight, Users, Award, ShieldCheck } from 'lucide-react';

const Browse: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);

  const categories = [
    { name: 'All', icon: '🏠', color: 'bg-slate-100 text-slate-700 border-slate-300' },
    { name: 'Electricians', icon: '⚡', color: 'bg-blue-100 text-blue-700 border-blue-300' },
    { name: 'Plumbers', icon: '🔧', color: 'bg-orange-100 text-orange-700 border-orange-300' },
    { name: 'Carpenters', icon: '🔨', color: 'bg-amber-100 text-amber-700 border-amber-300' },
    { name: 'Cleaners', icon: '✨', color: 'bg-green-100 text-green-700 border-green-300' },
    { name: 'Painters', icon: '🎨', color: 'bg-purple-100 text-purple-700 border-purple-300' },
    { name: 'Landscaping', icon: '🌿', color: 'bg-emerald-100 text-emerald-700 border-emerald-300' },
    { name: 'HVAC', icon: '❄', color: 'bg-cyan-100 text-cyan-700 border-cyan-300' },
  ];

  const mockProviders = [
    {
      id: 1,
      name: 'Elite Electric Solutions',
      category: 'Electricians',
      rating: 4.9,
      reviews: 127,
      location: 'Downtown Area',
      distance: '2.3 miles',
      price: '$$',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=300&h=200&fit=crop',
      verified: true,
      responseTime: '< 1 hour',
      specialties: ['Residential Wiring', 'Smart Home Setup', 'Emergency Service'],
      description: 'Licensed electricians with 15+ years experience. Available 24/7 for emergencies.',
    },
    {
      id: 2,
      name: 'Crystal Clear Cleaning Co.',
      category: 'Cleaners',
      rating: 4.8,
      reviews: 89,
      location: 'Midtown',
      distance: '1.8 miles',
      price: '$',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
      verified: true,
      responseTime: '< 2 hours',
      specialties: ['Deep Cleaning', 'Move-in/out', 'Office Cleaning'],
      description: 'Eco-friendly cleaning services with insured and bonded staff.',
    },
    {
      id: 3,
      name: 'Master Craftsman Carpentry',
      category: 'Carpenters',
      rating: 4.9,
      reviews: 156,
      location: 'Westside',
      distance: '3.1 miles',
      price: '$$$',
      image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=300&h=200&fit=crop',
      verified: true,
      responseTime: '< 4 hours',
      specialties: ['Custom Cabinets', 'Deck Building', 'Home Renovations'],
      description: 'Award-winning carpentry with focus on quality craftsmanship and attention to detail.',
    },
    {
      id: 4,
      name: 'AquaFlow Plumbing',
      category: 'Plumbers',
      rating: 4.7,
      reviews: 203,
      location: 'Northside',
      distance: '2.7 miles',
      price: '$$',
      image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=300&h=200&fit=crop',
      verified: true,
      responseTime: '< 30 min',
      specialties: ['Emergency Repairs', 'Pipe Installation', 'Water Heaters'],
      description: 'Fast, reliable plumbing services with upfront pricing and lifetime warranty.',
    },
  ];

  const filteredProviders = mockProviders.filter(provider => {
    const matchesCategory = selectedCategory === 'All' || provider.category === selectedCategory;
    const matchesSearch = provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         provider.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  return (
  <div className="min-h-screen w-screen overflow-x-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Find Trusted Local <span className="text-blue-600">Professionals</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Connect with verified service providers in your area. Quality work, fair prices, guaranteed satisfaction.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for services or providers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <Filter className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-3 justify-center mb-6">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-4 py-2 rounded-full font-semibold border-2 transition-all duration-200 hover:scale-105 ${
                  selectedCategory === category.name
                    ? 'bg-blue-100 text-blue-700 border-blue-300 ring-2 ring-blue-200'
                    : category.color + ' hover:shadow-md'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-blue-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900 dark:text-white">500+</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300">Verified Professionals</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Award className="w-6 h-6 text-green-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900 dark:text-white">10,000+</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300">Jobs Completed</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <ShieldCheck className="w-6 h-6 text-purple-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900 dark:text-white">4.8</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300">Average Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            {filteredProviders.length} providers found
          </h2>
          <select className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white">
            <option>Sort by Rating</option>
            <option>Sort by Distance</option>
            <option>Sort by Price</option>
          </select>
        </div>

        {/* Provider Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProviders.map((provider) => (
            <div
              key={provider.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={provider.image}
                  alt={provider.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button
                  onClick={() => toggleFavorite(provider.id)}
                  className="absolute top-4 right-4 p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:scale-110 transition-transform"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      favorites.includes(provider.id)
                        ? 'text-red-500 fill-red-500'
                        : 'text-gray-400'
                    }`}
                  />
                </button>
                {provider.verified && (
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                    <ShieldCheck className="w-3 h-3 mr-1" />
                    Verified
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {provider.name}
                  </h3>
                  <span className="text-lg font-bold text-blue-600">{provider.price}</span>
                </div>

                <div className="flex items-center mb-3">
                  <div className="flex items-center mr-4">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {provider.rating}
                    </span>
                    <span className="text-gray-500 ml-1">({provider.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{provider.distance}</span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {provider.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {provider.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center text-green-600">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">Responds {provider.responseTime}</span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors">
                      <Phone className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors">
                      <Mail className="w-4 h-4" />
                    </button>
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center">
                      View Profile
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How It Works Section */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            How It Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Search & Filter</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Find professionals by category, location, and ratings
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Compare Profiles</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Read reviews, check credentials, and compare prices
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Contact & Book</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Reach out directly and schedule your service
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Leave Review</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Rate your experience and help others make informed choices
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;