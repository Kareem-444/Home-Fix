import React, { useState, useEffect } from 'react';
import { Shield, Users, Award, Heart, Target, Eye, Zap, Phone, Mail, ArrowRight, Play, Globe } from 'lucide-react';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState('story');
  const [counters, setCounters] = useState({
    users: 0,
    professionals: 0,
    jobs: 0,
    cities: 0
  });

  // Animated counters
  useEffect(() => {
    const targetValues = { users: 50000, professionals: 5000, jobs: 125000, cities: 150 };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        users: Math.floor(targetValues.users * progress),
        professionals: Math.floor(targetValues.professionals * progress),
        jobs: Math.floor(targetValues.jobs * progress),
        cities: Math.floor(targetValues.cities * progress)
      });
      
      if (currentStep >= steps) {
        clearInterval(interval);
        setCounters(targetValues);
      }
    }, stepDuration);
    
    return () => clearInterval(interval);
  }, []);

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Co-Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop',
      bio: 'Former tech executive with 15 years experience in marketplace platforms.',
      linkedin: '#'
    },
    {
      name: 'Michael Chen',
      role: 'CTO & Co-Founder',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
      bio: 'Software architect passionate about connecting communities through technology.',
      linkedin: '#'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
      bio: 'Operations expert ensuring quality service and customer satisfaction.',
      linkedin: '#'
    },
    {
      name: 'David Thompson',
      role: 'Head of Growth',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
      bio: 'Marketing strategist focused on building trusted community connections.',
      linkedin: '#'
    }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Trust & Safety',
      description: 'Every professional is thoroughly vetted, verified, and insured for your peace of mind.'
    },
    {
      icon: Heart,
      title: 'Community First',
      description: 'We believe in strengthening local communities by supporting neighborhood businesses.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Cutting-edge technology meets traditional craftsmanship for seamless experiences.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards for service quality and customer satisfaction.'
    }
  ];

  const milestones = [
    { year: '2019', event: 'Servicely Founded', description: 'Started with a vision to connect communities' },
    { year: '2020', event: '1,000 Professionals', description: 'Reached our first major milestone' },
    { year: '2021', event: 'Series A Funding', description: '$10M raised to expand nationwide' },
    { year: '2022', event: '50 Cities Launch', description: 'Expanded to major metropolitan areas' },
    { year: '2023', event: '100K+ Jobs Completed', description: 'Celebrated major service milestone' },
    { year: '2024', event: 'AI-Powered Matching', description: 'Launched smart professional matching' }
  ];

  return (
  <div className="min-h-screen w-screen overflow-x-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Building Trust,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                One Service at a Time
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              We're revolutionizing how people connect with local service professionals, 
              creating a marketplace built on trust, quality, and community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Watch Our Story
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                Join Our Team
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L1440 120L1440 0C1440 0 1140 80 720 80C300 80 0 0 0 0V120Z" fill="rgb(248 250 252)" className="dark:fill-gray-900"/>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {counters.users.toLocaleString()}+
              </div>
              <div className="text-gray-600 dark:text-gray-300">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">
                {counters.professionals.toLocaleString()}+
              </div>
              <div className="text-gray-600 dark:text-gray-300">Verified Professionals</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                {counters.jobs.toLocaleString()}+
              </div>
              <div className="text-gray-600 dark:text-gray-300">Jobs Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">
                {counters.cities}+
              </div>
              <div className="text-gray-600 dark:text-gray-300">Cities Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabbed Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Learn More About Servicely
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Discover our journey, mission, and the people behind the platform
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12">
            {[
              { id: 'story', label: 'Our Story', icon: Globe },
              { id: 'mission', label: 'Mission & Vision', icon: Target },
              { id: 'values', label: 'Our Values', icon: Heart },
              { id: 'team', label: 'Meet the Team', icon: Users }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`px-6 py-3 mx-2 mb-4 rounded-lg font-semibold transition-all duration-300 flex items-center ${
                  activeTab === id
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700'
                }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                {label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
            {activeTab === 'story' && (
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    From Frustration to Innovation
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Servicely was born from a simple frustration: finding reliable local service providers 
                    shouldn't be a gamble. Our founders experienced the same challenges you have - unreturned 
                    calls, no-shows, unexpected costs, and uncertainty about quality.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop" 
                      alt="Team brainstorming" 
                      className="rounded-xl shadow-lg"
                    />
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                      The Journey Begins
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      In 2019, we set out to create a platform that would eliminate these pain points. 
                      We spent months talking to homeowners and service professionals, understanding 
                      their needs and building a solution that works for everyone.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Today, we're proud to be the trusted bridge connecting communities with skilled 
                      professionals who take pride in their craft.
                    </p>
                  </div>
                </div>

                {/* Timeline */}
                <div className="mt-12">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
                    Our Journey
                  </h4>
                  <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-800"></div>
                    {milestones.map((milestone, index) => (
                      <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                        <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-600">
                            <div className="text-blue-600 font-bold text-lg">{milestone.year}</div>
                            <div className="font-semibold text-gray-900 dark:text-white">{milestone.event}</div>
                            <div className="text-gray-600 dark:text-gray-300 text-sm">{milestone.description}</div>
                          </div>
                        </div>
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'mission' && (
              <div className="space-y-12">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                    Mission & Vision
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Target className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      To empower communities by creating transparent, reliable connections between 
                      homeowners and skilled service professionals, fostering trust and excellence 
                      in every interaction.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Eye className="w-8 h-8 text-purple-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      To become the most trusted platform for home and business services globally, 
                      where every interaction builds stronger communities and supports local economies.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 text-center">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    What Drives Us
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                    We believe that when people can easily find and trust skilled professionals, 
                    communities thrive. Every successful project, every positive review, and every 
                    lasting relationship formed through our platform contributes to stronger, 
                    more connected neighborhoods.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'values' && (
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Our Core Values
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    These principles guide everything we do, from product development to customer service.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {values.map((value, index) => (
                    <div key={index} className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-600 hover:shadow-xl transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                          <value.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">{value.title}</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'team' && (
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Meet Our Leadership Team
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    Passionate individuals dedicated to building the future of local services.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="text-center group">
                      <div className="relative mb-4">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300 shadow-lg"
                        />
                        <div className="absolute inset-0 rounded-full bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                        {member.name}
                      </h4>
                      <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Servicely?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers who trust us for their service needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center">
              Find a Professional
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
              Join as a Professional
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              We're here to help and answer any question you might have.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 dark:bg-gray-700 p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Contact Us
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Have questions? Want to provide feedback? We're all ears!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </button>
                <button className="flex-1 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us
                </button>
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-gray-700 p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Stay Connected
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Join our community on social media and never miss an update!
              </p>
              <div className="flex gap-4 justify-center">
                <a href="#" className="text-gray-400 hover:text-gray-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h4v4H8zm0 0H6a2 2 0 00-2 2v4a2 2 0 002 2h2zm8-4h-4v4h4zm0 0h2a2 2 0 012 2v4a2 2 0 01-2 2h-2z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 10-8 0 6 6 0 008 0zM2 12c0-2.21.895-4.21 2.343-5.657M22 12c0 2.21-.895 4.21-2.343 5.657M4.929 4.929A10.001 10.001 0 0112 2c2.21 0 4.21.895 5.657 2.343M19.071 19.071A10.001 10.001 0 0122 12c0-2.21-.895-4.21-2.343-5.657" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10l4-5-4-5zm18 0v10l-4-5 4-5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
            <div className="text-center sm:text-left mb-4 sm:mb-0">
              <a href="/" className="text-3xl font-bold text-gray-900 dark:text-white">
                Servicely
              </a>
            </div>
            <div className="flex gap-4">
              <a href="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                About Us
              </a>
              <a href="/services" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Our Services
              </a>
              <a href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              &copy; 2023 Servicely. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;