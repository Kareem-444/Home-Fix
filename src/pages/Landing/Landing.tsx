import React, { useState, useEffect } from 'react';
import { 
  ArrowRight,
  Play,
  Star,
  Shield,
  Clock,
  CheckCircle,
  Search,
  Quote,
  Calendar,
  CreditCard,
  MessageCircle,
  ChevronRight,
  Sparkles
} from 'lucide-react';
const Landing: React.FC = () => {
  const [stats, setStats] = useState({ customers: 0, professionals: 0, jobs: 0, rating: 0 });

  // Animated counters
  useEffect(() => {
    const targetStats = { customers: 50000, professionals: 5000, jobs: 125000, rating: 4.8 };
    const duration = 2000;
    const steps = 60;
    const interval = setInterval(() => {
      setStats(prev => ({
        customers: Math.min(prev.customers + targetStats.customers / steps, targetStats.customers),
        professionals: Math.min(prev.professionals + targetStats.professionals / steps, targetStats.professionals),
        jobs: Math.min(prev.jobs + targetStats.jobs / steps, targetStats.jobs),
        rating: Math.min(prev.rating + targetStats.rating / steps, targetStats.rating)
      }));
    }, duration / steps);

    setTimeout(() => clearInterval(interval), duration);
    return () => clearInterval(interval);
  }, []);

  const services = [
    { icon: '⚡', title: 'Electrical Services', description: 'Licensed electricians for all your electrical needs', color: 'from-yellow-400 to-orange-500' },
    { icon: '🔧', title: 'Plumbing', description: 'Emergency and routine plumbing services', color: 'from-blue-400 to-cyan-500' },
    { icon: '🔨', title: 'Carpentry', description: 'Custom woodwork and home improvements', color: 'from-amber-400 to-orange-600' },
    { icon: '🎨', title: 'Painting', description: 'Interior and exterior painting professionals', color: 'from-purple-400 to-pink-500' },
    { icon: '✨', title: 'Cleaning', description: 'Deep cleaning and maintenance services', color: 'from-green-400 to-teal-500' },
    { icon: '❄', title: 'HVAC', description: 'Heating, cooling, and ventilation experts', color: 'from-cyan-400 to-blue-500' },
    { icon: '🌿', title: 'Landscaping', description: 'Garden design and maintenance services', color: 'from-emerald-400 to-green-600' },
    { icon: '🔒', title: 'Security', description: 'Home security system installation', color: 'from-red-400 to-pink-500' },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face',
      text: 'Found an amazing electrician through Servicely. The whole process was seamless and the work was exceptional!',
      rating: 5,
      service: 'Electrical Work'
    },
    {
      name: 'Michael Chen',
      role: 'Business Owner',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
      text: 'Our office renovation was completed ahead of schedule thanks to the professionals I found on this platform.',
      rating: 5,
      service: 'Construction'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Property Manager',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
      text: 'Managing multiple properties is easier with Servicely. Reliable professionals, every time.',
      rating: 5,
      service: 'Multiple Services'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Verified Professionals',
      description: 'All service providers are background-checked, licensed, and insured for your peace of mind.'
    },
    {
      icon: Clock,
      title: 'Fast Response',
      description: 'Get connected with professionals in minutes, not days. Emergency services available 24/7.'
    },
    {
      icon: Star,
      title: 'Quality Guaranteed',
      description: 'Read verified reviews and ratings from real customers before making your choice.'
    },
    {
      icon: CreditCard,
      title: 'Transparent Pricing',
      description: 'No hidden fees. Get upfront quotes and compare prices from multiple professionals.'
    }
  ];

  const howItWorks = [
    {
      step: 1,
      icon: Search,
      title: 'Search & Browse',
      description: 'Find professionals by service type, location, rating, and availability in your area.'
    },
    {
      step: 2,
      icon: MessageCircle,
      title: 'Connect & Compare',
      description: 'View detailed profiles, read reviews, and get quotes from multiple professionals.'
    },
    {
      step: 3,
      icon: Calendar,
      title: 'Book & Schedule',
      description: 'Choose your preferred professional and book a convenient time slot.'
    },
    {
      step: 4,
      icon: CheckCircle,
      title: 'Get It Done',
      description: 'Enjoy professional service and leave a review to help the community.'
    }
  ];

  return (
  <div className="min-h-screen w-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>

  <div className="relative w-full px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
            {/* Hero Content */}
            <div className="text-white">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8 border border-white/20">
                <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
                Trusted by 50,000+ customers
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Find Trusted
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400">
                  Local Professionals
                </span>
                <br />
                Instantly
              </h1>
              
              <p className="text-xl mb-8 text-blue-100 leading-relaxed max-w-lg">
                Connect with verified service professionals in your area. From emergency repairs to home improvements, 
                we've got you covered with quality service and transparent pricing.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="group bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  Get Started Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">
                    {Math.floor(stats.customers).toLocaleString()}+
                  </div>
                  <div className="text-sm text-blue-200">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">
                    {Math.floor(stats.professionals).toLocaleString()}+
                  </div>
                  <div className="text-sm text-blue-200">Professionals</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">
                    {Math.floor(stats.jobs).toLocaleString()}+
                  </div>
                  <div className="text-sm text-blue-200">Jobs Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-400 flex items-center justify-center">
                    <Star className="w-5 h-5 mr-1 fill-current" />
                    {stats.rating.toFixed(1)}
                  </div>
                  <div className="text-sm text-blue-200">Average Rating</div>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="relative z-10 bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="bg-gradient-to-br from-white to-gray-100 rounded-2xl p-6 shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&h=400&fit=crop" 
                    alt="Professional Services" 
                    className="w-full h-64 object-cover rounded-xl"
                  />
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="text-gray-800 font-semibold">Premium Electrician</div>
                      <div className="flex items-center text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                    <div className="text-gray-600 text-sm">Licensed • Insured • 24/7 Available</div>
                    <div className="flex items-center justify-between">
                      <div className="text-green-600 font-bold">$85/hour</div>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Available Now
              </div>
              <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Verified Pro
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
  <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Servicely?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've built the most trusted platform for connecting homeowners with quality service professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group text-center p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 border border-transparent hover:border-blue-200">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
  <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From emergency repairs to home improvements, find the right professional for any job.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 cursor-pointer">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-purple-600 transition-colors">
                  <span>Find Professionals</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
  <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting professional help has never been this easy. Just four simple steps to quality service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="relative text-center">
                {/* Connection Line */}
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-purple-200 transform -translate-x-1/2"></div>
                )}
                
                <div className="relative z-10 bg-white">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-black">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
  <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what real customers have to say about their experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 border-2 border-white/30"
                  />
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-blue-200 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-blue-200 text-sm ml-2">for {testimonial.service}</span>
                </div>
                
                <Quote className="w-8 h-8 text-white/30 mb-4" />
                <p className="text-white leading-relaxed">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500">
  <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Servicely for all their home service needs. 
            Find your perfect professional match today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-white text-black font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              Find a Professional
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-black/20 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-black/30 transition-all duration-300">
              Join as Professional
            </button>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-white/90">
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 mb-2" />
              <span className="text-sm">100% Verified</span>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 mb-2" />
              <span className="text-sm">24/7 Support</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;