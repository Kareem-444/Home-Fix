import { useState } from 'react';

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
    const [selectedJob, setSelectedJob] = useState<null | typeof jobOpenings[0]>(null);

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      salary: "$120k - $160k",
      description: "We're looking for a senior developer to help build and scale our platform. You'll work on both frontend React applications and backend Node.js services.",
      requirements: [
        "5+ years of experience with React and Node.js",
        "Experience with PostgreSQL and Redis",
        "Strong understanding of REST APIs and GraphQL",
        "Experience with cloud platforms (AWS preferred)",
        "Knowledge of modern DevOps practices"
      ],
      benefits: ["Equity package", "Health insurance", "Flexible PTO", "Remote work"],
      posted: "2 days ago"
    },
    {
      id: 2,
      title: "Product Manager",
      department: "Product",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$130k - $170k",
      description: "Lead product strategy and roadmap for our marketplace platform. Work closely with engineering, design, and business teams to deliver exceptional user experiences.",
      requirements: [
        "3+ years of product management experience",
        "Experience with marketplace or platform products",
        "Strong analytical and data-driven decision making",
        "Excellent communication and leadership skills",
        "MBA or technical background preferred"
      ],
      benefits: ["Equity package", "Health insurance", "Flexible PTO", "Learning budget"],
      posted: "1 week ago"
    },
    {
      id: 3,
      title: "UX/UI Designer",
      department: "Design",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      salary: "$90k - $120k",
      description: "Create beautiful, intuitive user experiences for our platform. You'll design user flows, interfaces, and work closely with our engineering team to implement designs.",
      requirements: [
        "3+ years of UX/UI design experience",
        "Proficiency in Figma and design systems",
        "Experience with user research and testing",
        "Portfolio demonstrating web and mobile design",
        "Understanding of frontend development principles"
      ],
      benefits: ["Equity package", "Health insurance", "Design conference budget", "Remote work"],
      posted: "3 days ago"
    },
    {
      id: 4,
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time",
      salary: "$70k - $90k",
      description: "Ensure our service providers and customers have amazing experiences. You'll handle onboarding, support, and help grow our community.",
      requirements: [
        "2+ years in customer success or account management",
        "Experience with SaaS or marketplace platforms",
        "Excellent communication and problem-solving skills",
        "Comfortable with customer support tools",
        "Empathetic and patient approach to customer service"
      ],
      benefits: ["Health insurance", "Flexible PTO", "Professional development", "Remote work"],
      posted: "5 days ago"
    },
    {
      id: 5,
      title: "Marketing Manager",
      department: "Marketing",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      salary: "$80k - $110k",
      description: "Drive growth through digital marketing campaigns, content creation, and partnership development. Help us reach more customers and service providers.",
      requirements: [
        "3+ years of digital marketing experience",
        "Experience with SEO, SEM, and social media marketing",
        "Data-driven approach to campaign optimization",
        "Content creation and copywriting skills",
        "Experience with marketing automation tools"
      ],
      benefits: ["Equity package", "Health insurance", "Marketing conference budget", "Flexible PTO"],
      posted: "1 week ago"
    },
    {
      id: 6,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$110k - $140k",
      description: "Build and maintain our cloud infrastructure. Ensure our platform is scalable, secure, and highly available for our growing user base.",
      requirements: [
        "4+ years of DevOps or infrastructure experience",
        "Strong experience with AWS or similar cloud platforms",
        "Experience with Docker, Kubernetes, and CI/CD pipelines",
        "Knowledge of monitoring and alerting systems",
        "Security-first mindset and best practices"
      ],
      benefits: ["Equity package", "Health insurance", "Learning budget", "Remote work"],
      posted: "4 days ago"
    },
    {
      id: 7,
      title: "Business Development Representative",
      department: "Sales",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$60k - $80k + Commission",
      description: "Help grow our service provider network by identifying and onboarding new partners. You'll be the face of Servicely to potential business partners.",
      requirements: [
        "1+ years of sales or business development experience",
        "Excellent communication and presentation skills",
        "Self-motivated and goal-oriented",
        "Experience with CRM systems",
        "Interest in the service industry and marketplaces"
      ],
      benefits: ["Commission structure", "Health insurance", "Professional development", "Flexible PTO"],
      posted: "6 days ago"
    },
    {
      id: 8,
      title: "Data Analyst",
      department: "Analytics",
      location: "Remote",
      type: "Full-time",
      salary: "$85k - $110k",
      description: "Turn data into insights that drive business decisions. You'll work with large datasets to understand user behavior and marketplace dynamics.",
      requirements: [
        "2+ years of data analysis experience",
        "Proficiency in SQL, Python, and data visualization tools",
        "Experience with A/B testing and statistical analysis",
        "Strong business acumen and communication skills",
        "Experience with marketplace or platform data preferred"
      ],
      benefits: ["Equity package", "Health insurance", "Learning budget", "Remote work"],
      posted: "1 week ago"
    }
  ];

  const departments = ['all', 'Engineering', 'Product', 'Design', 'Customer Success', 'Marketing', 'Sales', 'Analytics'];

  const filteredJobs = selectedDepartment === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === selectedDepartment);

  const benefits = [
    {
      icon: "💰",
      title: "Competitive Compensation",
      description: "Fair salaries plus equity in a growing company"
    },
    {
      icon: "🏥",
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance"
    },
    {
      icon: "🏝",
      title: "Flexible PTO",
      description: "Unlimited vacation policy and mental health days"
    },
    {
      icon: "🏠",
      title: "Remote Friendly",
      description: "Work from anywhere with flexible hours"
    },
    {
      icon: "📚",
      title: "Learning Budget",
      description: "$2000 annual budget for courses and conferences"
    },
    {
      icon: "🚀",
      title: "Career Growth",
      description: "Clear advancement paths and mentorship programs"
    }
  ];

  const values = [
    {
      title: "Customer First",
      description: "We put our customers and service providers at the center of everything we do."
    },
    {
      title: "Quality & Excellence",
      description: "We strive for excellence in our platform, our services, and our team."
    },
    {
      title: "Innovation",
      description: "We're always looking for better ways to connect people with services."
    },
    {
      title: "Transparency",
      description: "We believe in open communication and honest relationships."
    }
  ];

  return (
  <div className="min-h-screen w-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      {/* Hero Section */}
      <div className="relative pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Join the
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Future </span>
            of Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Help us revolutionize how people connect with professional services. Build meaningful technology 
            that makes a real difference in people's lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#openings"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              View Open Positions
            </a>
            <a
              href="#culture"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white font-semibold rounded-xl transition-all duration-300"
            >
              Learn About Our Culture
            </a>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Work at Servicely?</h2>
            <p className="text-gray-600 dark:text-gray-300">We believe great people deserve great benefits</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Culture Section */}
      <div id="culture" className="relative py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Values</h2>
            <p className="text-gray-600 dark:text-gray-300">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Job Openings Section */}
      <div id="openings" className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Open Positions</h2>
            <p className="text-gray-600 dark:text-gray-300">Join our growing team of talented individuals</p>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedDepartment === dept
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
                }`}
              >
                {dept === 'all' ? 'All Positions' : dept}
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full text-sm">
                        {job.department}
                      </span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm">
                        {job.type}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">📍 {job.location}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">💰 {job.salary}</p>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{job.posted}</span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{job.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.benefits.slice(0, 3).map((benefit, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs">
                      {benefit}
                    </span>
                  ))}
                  {job.benefits.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs">
                      +{job.benefits.length - 3} more
                    </span>
                  )}
                </div>
                
                <button
                  onClick={() => setSelectedJob(job)}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02]"
                >
                  View Details & Apply
                </button>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-300 text-lg">No positions available in this department right now.</p>
              <p className="text-gray-500 dark:text-gray-400 mt-2">Check back soon or view all positions!</p>
            </div>
          )}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Don't See the Perfect Role?</h2>
          <p className="text-indigo-100 text-lg mb-8">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:careers@servicely.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Send Us Your Resume
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-indigo-600 font-semibold rounded-xl transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Job Detail Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{selectedJob.title}</h2>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full text-sm">
                      {selectedJob.department}
                    </span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm">
                      {selectedJob.type}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">📍 {selectedJob.location}</p>
                  <p className="text-gray-600 dark:text-gray-400">💰 {selectedJob.salary}</p>
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Job Description</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{selectedJob.description}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Requirements</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                    {selectedJob.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Benefits</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                    {selectedJob.benefits.map((ben, idx) => (
                      <li key={idx}>{ben}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 text-center">
                  <a
                    href={`mailto:careers@servicely.com?subject=Application%20for%20${encodeURIComponent(selectedJob.title)}`}
                    className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-300"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers;