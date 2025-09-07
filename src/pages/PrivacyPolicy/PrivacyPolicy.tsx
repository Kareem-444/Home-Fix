
const PrivacyPolicy = () => {

  const sections = {
    overview: {
      title: "Overview",
      content: (
        <div className="space-y-6">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            At Servicely, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
            disclose, and safeguard your information when you use our platform, website, and services.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            This policy applies to all users of Servicely, including customers seeking services and 
            service providers offering their expertise through our platform.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-xl p-4">
            <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Key Principles</h4>
            <ul className="text-blue-700 dark:text-blue-400 text-sm space-y-1">
              <li>• We only collect information necessary to provide our services</li>
              <li>• We never sell your personal information to third parties</li>
              <li>• You have control over your data and can request deletion at any time</li>
              <li>• We use industry-standard security measures to protect your information</li>
            </ul>
          </div>
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-xl p-4">
            <h4 className="font-semibold text-amber-800 dark:text-amber-300 mb-2">Last Updated</h4>
            <p className="text-amber-700 dark:text-amber-400 text-sm">
              This Privacy Policy was last updated on January 1, 2025. We will notify users of any significant changes.
            </p>
          </div>
        </div>
      )
    },
    collection: {
      title: "Information We Collect",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Personal Information You Provide</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            We collect information you voluntarily provide when using our services:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
              <h4 className="font-medium text-gray-900 dark:text-white mb-3">Account Information</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Full name and contact information</li>
                <li>• Email address and phone number</li>
                <li>• Profile photos and descriptions</li>
                <li>• Account preferences and settings</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
              <h4 className="font-medium text-gray-900 dark:text-white mb-3">Service Information</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Service requests and descriptions</li>
                <li>• Location and address information</li>
                <li>• Service history and preferences</li>
                <li>• Reviews and ratings</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
              <h4 className="font-medium text-gray-900 dark:text-white mb-3">Payment Information</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Credit card and billing information</li>
                <li>• Transaction history</li>
                <li>• Tax identification (for providers)</li>
                <li>• Bank account details (for providers)</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
              <h4 className="font-medium text-gray-900 dark:text-white mb-3">Communication Data</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Messages between users and providers</li>
                <li>• Customer support interactions</li>
                <li>• Survey responses and feedback</li>
                <li>• Marketing communication preferences</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Information We Collect Automatically</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
            <li>Device information (IP address, browser type, operating system)</li>
            <li>Usage data (pages visited, time spent, features used)</li>
            <li>Location data (when you enable location services)</li>
            <li>Cookies and similar tracking technologies</li>
            <li>Log files and analytics data</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Information from Third Parties</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
            <li>Social media profile information (when you connect accounts)</li>
            <li>Background check results (for service providers)</li>
            <li>Payment processor information</li>
            <li>Marketing partner data (with your consent)</li>
          </ul>
        </div>
      )
    },
    usage: {
      title: "How We Use Your Information",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Primary Uses</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            We use your information to provide, maintain, and improve our services:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-4">
                <h4 className="font-medium text-indigo-800 dark:text-indigo-300 mb-2">🔗 Service Delivery</h4>
                <ul className="text-sm text-indigo-700 dark:text-indigo-400 space-y-1">
                  <li>• Connect customers with service providers</li>
                  <li>• Process bookings and payments</li>
                  <li>• Facilitate communication</li>
                  <li>• Provide customer support</li>
                </ul>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4">
                <h4 className="font-medium text-green-800 dark:text-green-300 mb-2">🛡 Safety & Security</h4>
                <ul className="text-sm text-green-700 dark:text-green-400 space-y-1">
                  <li>• Verify user identities</li>
                  <li>• Conduct background checks</li>
                  <li>• Prevent fraud and abuse</li>
                  <li>• Ensure platform safety</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4">
                <h4 className="font-medium text-purple-800 dark:text-purple-300 mb-2">📊 Platform Improvement</h4>
                <ul className="text-sm text-purple-700 dark:text-purple-400 space-y-1">
                  <li>• Analyze usage patterns</li>
                  <li>• Develop new features</li>
                  <li>• Personalize experiences</li>
                  <li>• Optimize performance</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
                <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-2">📧 Communications</h4>
                <ul className="text-sm text-blue-700 dark:text-blue-400 space-y-1">
                  <li>• Send booking confirmations</li>
                  <li>• Provide service updates</li>
                  <li>• Share important announcements</li>
                  <li>• Send marketing materials (with consent)</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-4">
                <h4 className="font-medium text-orange-800 dark:text-orange-300 mb-2">⚖ Legal Compliance</h4>
                <ul className="text-sm text-orange-700 dark:text-orange-400 space-y-1">
                  <li>• Comply with legal obligations</li>
                  <li>• Respond to legal requests</li>
                  <li>• Enforce our terms of service</li>
                  <li>• Protect rights and property</li>
                </ul>
              </div>
              
              <div className="bg-teal-50 dark:bg-teal-900/20 rounded-xl p-4">
                <h4 className="font-medium text-teal-800 dark:text-teal-300 mb-2">💳 Financial Processing</h4>
                <ul className="text-sm text-teal-700 dark:text-teal-400 space-y-1">
                  <li>• Process payments securely</li>
                  <li>• Handle refunds and disputes</li>
                  <li>• Generate tax documents</li>
                  <li>• Prevent financial fraud</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Legal Basis for Processing</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            We process your personal information based on the following legal grounds:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
            <li><strong>Contract Performance:</strong> To fulfill our obligations under our Terms of Service</li>
            <li><strong>Legitimate Interests:</strong> To improve our services and ensure platform safety</li>
            <li><strong>Consent:</strong> For marketing communications and optional features</li>
            <li><strong>Legal Compliance:</strong> To meet regulatory and legal requirements</li>
          </ul>
        </div>
      )
    },
    sharing: {
      title: "Information Sharing",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">When We Share Information</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            We do not sell your personal information. We only share your information in specific circumstances:
          </p>

          <div className="space-y-6">
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-xl p-4">
              <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">✅ With Service Providers</h4>
              <p className="text-green-700 dark:text-green-400 text-sm">
                We share necessary information to facilitate bookings, including contact details and service requirements. 
                Both parties consent to this sharing when using our platform.
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-xl p-4">
              <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">🔧 With Service Partners</h4>
              <ul className="text-blue-700 dark:text-blue-400 text-sm space-y-1">
                <li>• <strong>Payment Processors:</strong> To handle transactions securely</li>
                <li>• <strong>Background Check Companies:</strong> To verify service provider credentials</li>
                <li>• <strong>Communication Services:</strong> To enable messaging and notifications</li>
                <li>• <strong>Analytics Providers:</strong> To understand platform usage (anonymized data)</li>
              </ul>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-xl p-4">
              <h4 className="font-semibold text-amber-800 dark:text-amber-300 mb-2">⚖ For Legal Reasons</h4>
              <p className="text-amber-700 dark:text-amber-400 text-sm">
                We may disclose information when required by law, to protect our rights, or to ensure user safety. 
                This includes responding to legal processes and preventing fraud or harmful activities.
              </p>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700 rounded-xl p-4">
              <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">🔄 Business Transfers</h4>
              <p className="text-purple-700 dark:text-purple-400 text-sm">
                If Servicely is acquired or merged, your information may be transferred to the new entity. 
                We will notify you of any such changes and your options.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Public Information</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Certain information is publicly visible on our platform:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
            <li>Service provider profiles, ratings, and reviews</li>
            <li>Public reviews you write about services</li>
            <li>Basic profile information you choose to make public</li>
            <li>Service listings and descriptions</li>
          </ul>

          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-xl p-4">
            <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">⚠ We Never Sell Your Data</h4>
            <p className="text-red-700 dark:text-red-400 text-sm">
              Servicely does not sell, rent, or trade your personal information to third parties for marketing purposes. 
              Any data sharing is done to provide our services or as required by law.
            </p>
          </div>
        </div>
      )
    },
    security: {
      title: "Data Security",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">How We Protect Your Information</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            We implement comprehensive security measures to protect your personal information:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
              <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-3">🔐 Technical Safeguards</h4>
              <ul className="text-sm text-blue-700 dark:text-blue-400 space-y-1">
                <li>• SSL/TLS encryption for data transmission</li>
                <li>• AES-256 encryption for stored data</li>
                <li>• Multi-factor authentication options</li>
                <li>• Regular security audits and testing</li>
                <li>• Secure cloud infrastructure (AWS)</li>
                <li>• Network firewalls and intrusion detection</li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4">
              <h4 className="font-medium text-green-800 dark:text-green-300 mb-3">👥 Administrative Controls</h4>
              <ul className="text-sm text-green-700 dark:text-green-400 space-y-1">
                <li>• Limited access to personal data</li>
                <li>• Employee background checks</li>
                <li>• Regular privacy training</li>
                <li>• Data handling policies and procedures</li>
                <li>• Incident response protocols</li>
                <li>• Third-party security certifications</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Payment Security</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            We use industry-leading payment processors that comply with PCI DSS standards. We never store 
            complete credit card information on our servers.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Data Breach Response</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            In the unlikely event of a security breach, we will:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
            <li>Immediately investigate and contain the incident</li>
            <li>Notify affected users within 72 hours</li>
            <li>Work with law enforcement and regulators as required</li>
            <li>Provide clear information about what happened and next steps</li>
            <li>Implement additional safeguards to prevent future incidents</li>
          </ul>

          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-xl p-4">
            <h4 className="font-semibold text-amber-800 dark:text-amber-300 mb-2">Your Role in Security</h4>
            <p className="text-amber-700 dark:text-amber-400 text-sm mb-2">
              Help us keep your account secure by:
            </p>
            <ul className="text-amber-700 dark:text-amber-400 text-sm space-y-1">
              <li>• Using a strong, unique password</li>
              <li>• Enabling two-factor authentication</li>
              <li>• Not sharing your login credentials</li>
              <li>• Reporting suspicious activity immediately</li>
            </ul>
          </div>
        </div>
      )
    },
    rights: {
      title: "Your Rights & Choices",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Your Privacy Rights</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            You have several rights regarding your personal information. These rights may vary based on your location:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
              <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-3">📋 Access & Portability</h4>
              <ul className="text-sm text-blue-700 dark:text-blue-400 space-y-2">
                <li>• <strong>Access:</strong> Request a copy of your personal data</li>
                <li>• <strong>Portability:</strong> Receive your data in a machine-readable format</li>
                <li>• <strong>Transparency:</strong> Understand how your data is processed</li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4">
              <h4 className="font-medium text-green-800 dark:text-green-300 mb-3">✏ Correction & Updates</h4>
              <ul className="text-sm text-green-700 dark:text-green-400 space-y-2">
                <li>• <strong>Rectification:</strong> Correct inaccurate information</li>
                <li>• <strong>Updates:</strong> Keep your profile information current</li>
                <li>• <strong>Completion:</strong> Add missing information</li>
              </ul>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
              <h4 className="font-medium text-red-800 dark:text-red-300 mb-3">🗑 Erasure & Restriction</h4>
              <ul className="text-sm text-red-700 dark:text-red-400 space-y-2">
                <li>• <strong>Erasure:</strong> Request deletion of your personal data</li>
                <li>• <strong>Restriction:</strong> Limit how your data is processed</li>
                <li>• <strong>Objection:</strong> Object to certain types of processing</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">How to Exercise Your Rights</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            You can exercise your rights by contacting us at <a href="mailto:privacy@servicely.com" className="text-indigo-600 dark:text-indigo-400 underline">privacy@servicely.com</a>. We will respond to requests within 30 days, subject to verification and legal requirements.
          </p>
        </div>
      )
    }
  };

  // Render all sections (no navigation yet)
  return (
  <div className="min-h-screen w-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Privacy <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Policy</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Learn how we protect and use your data.</p>
        </div>
        <div className="space-y-12">
          {Object.entries(sections).map(([key, section]) => (
            <section key={key} className="mb-12">
              <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-4">{section.title}</h2>
              {section.content}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;