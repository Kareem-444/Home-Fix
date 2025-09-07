import { useState } from 'react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set());
  const [activeCategory, setActiveCategory] = useState('general');

  const toggleItem = (index: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqData = {
    general: {
      title: "General Questions",
      icon: "❓",
      items: [
        {
          question: "What is Servicely?",
          answer: "Servicely is a comprehensive platform that connects customers with professional service providers in their area. Whether you need home repairs, cleaning services, tutoring, or any other professional service, we make it easy to find, compare, and book trusted providers."
        },
        {
          question: "How does Servicely work?",
          answer: "It's simple! Browse our categories of services, view provider profiles with ratings and reviews, compare prices, and book directly through our platform. You can communicate with providers, track your service requests, and leave feedback after completion."
        },
        {
          question: "Is Servicely free to use?",
          answer: "Yes, browsing and booking services through Servicely is completely free for customers. Service providers pay a small commission fee only when they complete a job, which helps us maintain and improve the platform."
        },
        {
          question: "How are service providers vetted?",
          answer: "All service providers undergo a comprehensive screening process including background checks, license verification (where applicable), insurance verification, and reference checks. We also continuously monitor provider performance through customer reviews and ratings."
        },
        {
          question: "What areas does Servicely serve?",
          answer: "We currently serve major metropolitan areas across the United States, with plans to expand internationally. Check our service area map on the homepage to see if we're available in your location."
        }
      ]
    },
    booking: {
      title: "Booking & Payments",
      icon: "💳",
      items: [
        {
          question: "How do I book a service?",
          answer: "After finding a provider you like, click 'Book Now', select your preferred date and time, provide service details, and confirm your booking. You'll receive a confirmation email with all the details and provider contact information."
        },
        {
          question: "Can I cancel or reschedule my booking?",
          answer: "Yes, you can cancel or reschedule up to 24 hours before your scheduled service time without any fees. For cancellations within 24 hours, cancellation policies may vary by provider."
        },
        {
          question: "How do payments work?",
          answer: "Payments are processed securely through our platform. You can pay with credit cards, debit cards, or digital wallets. Payment is typically collected after service completion, though some providers may require a deposit for larger jobs."
        },
        {
          question: "What if I'm not satisfied with the service?",
          answer: "We have a satisfaction guarantee. If you're not happy with the service, contact us within 48 hours. We'll work with the provider to resolve the issue, and if necessary, help you find a replacement or provide a refund."
        },
        {
          question: "Do you offer emergency services?",
          answer: "Yes, many of our providers offer emergency services for urgent needs like plumbing, electrical, or lockout situations. Look for the 'Emergency Available' badge on provider profiles."
        }
      ]
    },
    providers: {
      title: "For Service Providers",
      icon: "🔧",
      items: [
        {
          question: "How can I join Servicely as a provider?",
          answer: "Visit our 'Become a Provider' page and complete the application process. You'll need to provide business information, licenses, insurance details, and pass our background screening process."
        },
        {
          question: "What are the fees for providers?",
          answer: "We charge a small commission fee (typically 8-15%) only when you complete a job through our platform. There are no upfront fees, monthly subscriptions, or hidden costs."
        },
        {
          question: "How do I get more bookings?",
          answer: "Maintain a complete profile with photos, respond quickly to inquiries, provide excellent service to earn positive reviews, and consider offering competitive pricing. Our algorithm favors highly-rated, responsive providers."
        },
        {
          question: "Can I set my own prices?",
          answer: "Absolutely! You have full control over your pricing. You can set different rates for different services, offer package deals, or provide custom quotes for specific jobs."
        },
        {
          question: "How do I handle disputes with customers?",
          answer: "Contact our provider support team immediately if issues arise. We offer mediation services and will work with both parties to find a fair resolution. Clear communication and documentation help prevent most disputes."
        }
      ]
    },
    technical: {
      title: "Technical Support",
      icon: "🛠",
      items: [
        {
          question: "The website isn't working properly. What should I do?",
          answer: "First, try refreshing the page or clearing your browser cache. If the issue persists, try using a different browser or device. Contact our technical support team if you continue experiencing problems."
        },
        {
          question: "How do I reset my password?",
          answer: "Click 'Forgot Password' on the login page, enter your email address, and we'll send you a reset link. Check your spam folder if you don't see the email within a few minutes."
        },
        {
          question: "Can I use Servicely on my mobile device?",
          answer: "Yes! Our website is fully optimized for mobile devices. We also have mobile apps available for iOS and Android with additional features like real-time notifications and GPS tracking."
        },
        {
          question: "How do I update my account information?",
          answer: "Log in to your account and go to 'Account Settings' or 'Profile' to update your personal information, contact details, payment methods, and preferences."
        },
        {
          question: "Is my personal information secure?",
          answer: "Yes, we use industry-standard encryption and security measures to protect your data. We never sell personal information and only share necessary details with providers to complete your services."
        }
      ]
    }
  };

  const categories = Object.keys(faqData);
  const currentCategory = faqData[activeCategory as keyof typeof faqData];

  return (
  <div className="min-h-screen w-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Questions</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Find quick answers to common questions about using Servicely, booking services, and managing your account.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Category Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 sticky top-8">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Categories</h3>
              <nav className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center space-x-3 ${
                      activeCategory === category
                        ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 shadow-md'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400'
                    }`}
                  >
                    <span className="text-lg">{faqData[category as keyof typeof faqData].icon}</span>
                    <span className="font-medium">{faqData[category as keyof typeof faqData].title}</span>
                  </button>
                ))}
              </nav>
              
              {/* Contact Support Card */}
              <div className="mt-8 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl border border-indigo-100 dark:border-indigo-700">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Still need help?</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Can't find what you're looking for?
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{currentCategory.icon}</span>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {currentCategory.title}
                  </h2>
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  {currentCategory.items.map((item: {question: string; answer: string}, index: number) => {
                    const itemId = `${activeCategory}-${index}`;
                    const isOpen = openItems.has(itemId);
                    return (
                      <div
                        key={itemId}
                        className="border border-gray-200 dark:border-gray-600 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md"
                      >
                        <button
                          onClick={() => toggleItem(itemId)}
                          className="w-full text-left p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset"
                        >
                          <div className="flex justify-between items-center">
                            <h3 className="font-semibold text-gray-900 dark:text-white text-lg pr-4">
                              {item.question}
                            </h3>
                            <svg
                              className={`w-6 h-6 text-gray-500 transition-transform duration-300 flex-shrink-0 ${
                                isOpen ? 'transform rotate-180' : ''
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="px-6 pb-6">
                            <div className="pt-2 border-t border-gray-100 dark:border-gray-600">
                              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                                {item.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to get started?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Join thousands of satisfied customers who trust Servicely for their service needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/browse"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Browse Services
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white font-semibold rounded-xl transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;