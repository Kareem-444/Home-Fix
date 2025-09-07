
const TermsOfService = () => {

  const sections = {
    overview: {
      title: "Overview",
      content: (
        <div className="space-y-6">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Welcome to Servicely. These Terms of Service ("Terms") govern your use of the Servicely platform, 
            website, and services (collectively, the "Service") operated by Servicely Inc. ("we", "us", or "our").
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any 
            part of these terms, then you may not access the Service.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-xl p-4">
            <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Important Notice</h4>
            <p className="text-blue-700 dark:text-blue-400 text-sm">
              These terms were last updated on January 1, 2025. We may update these terms from time to time, 
              and will notify users of significant changes.
            </p>
          </div>
        </div>
      )
    },
    accounts: {
      title: "User Accounts",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Account Registration</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            To use certain features of our Service, you must create an account. You agree to provide accurate, 
            complete, and current information during registration and to update such information as necessary.
          </p>
          
          <h4 className="text-lg font-medium text-gray-900 dark:text-white">Your Responsibilities</h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
            <li>You are responsible for safeguarding your account password and all activities under your account</li>
            <li>You must immediately notify us of any unauthorized use of your account</li>
            <li>You must be at least 18 years old to create an account</li>
            <li>You may not create multiple accounts or share your account with others</li>
            <li>You must provide accurate and truthful information in your profile</li>
          </ul>

          <h4 className="text-lg font-medium text-gray-900 dark:text-white">Account Termination</h4>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            We reserve the right to terminate or suspend your account at any time for violations of these Terms, 
            without prior notice or liability. You may also delete your account at any time through your account settings.
          </p>
        </div>
      )
    },
    services: {
      title: "Service Provisions",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Platform Services</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Servicely provides a platform that connects customers with service providers. We facilitate these 
            connections but are not a party to the actual service agreements between customers and providers.
          </p>

          <h4 className="text-lg font-medium text-gray-900 dark:text-white">For Customers</h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
            <li>You may browse and book services through our platform</li>
            <li>You agree to provide accurate service requirements and availability</li>
            <li>You are responsible for payment for services as agreed with providers</li>
            <li>You must treat service providers with respect and professionalism</li>
            <li>You may not use the platform for illegal or harmful purposes</li>
          </ul>

          <h4 className="text-lg font-medium text-gray-900 dark:text-white">For Service Providers</h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
            <li>You must have the necessary licenses, permits, and insurance for your services</li>
            <li>You agree to provide services professionally and as described</li>
            <li>You are responsible for setting your own prices and availability</li>
            <li>You must respond promptly to customer inquiries and booking requests</li>
            <li>You agree to pay platform fees as outlined in your provider agreement</li>
          </ul>

          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-xl p-4">
            <h4 className="font-semibold text-amber-800 dark:text-amber-300 mb-2">Important Disclaimer</h4>
            <p className="text-amber-700 dark:text-amber-400 text-sm">
              Servicely acts as a marketplace platform only. We do not employ service providers and are not 
              responsible for the quality, safety, or legality of services provided.
            </p>
          </div>
        </div>
      )
    },
    payments: {
      title: "Payments & Fees",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Payment Processing</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            All payments are processed securely through our third-party payment processors. We use industry-standard 
            encryption and security measures to protect your financial information.
          </p>

          <h4 className="text-lg font-medium text-gray-900 dark:text-white">Customer Payments</h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
            <li>Payment is typically collected after service completion</li>
            <li>Some services may require a deposit or advance payment</li>
            <li>You authorize us to charge your payment method for booked services</li>
            <li>All prices are in US dollars unless otherwise specified</li>
            <li>You are responsible for all taxes and fees associated with your purchases</li>
          </ul>

          <h4 className="text-lg font-medium text-gray-900 dark:text-white">Provider Fees</h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
            <li>Service providers pay a commission fee for completed bookings</li>
            <li>Commission rates vary by service category and are outlined in provider agreements</li>
            <li>Fees are automatically deducted from payments before transfer to providers</li>
            <li>Additional fees may apply for premium features or services</li>
          </ul>

          <h4 className="text-lg font-medium text-gray-900 dark:text-white">Refunds & Disputes</h4>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Refund policies vary by service provider. We offer mediation services for payment disputes and will 
            work with both parties to reach a fair resolution. Refunds, when applicable, will be processed 
            within 5-10 business days.
          </p>
        </div>
      )
    },
    conduct: {
      title: "User Conduct",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Acceptable Use</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            You agree to use our Service responsibly and in accordance with these Terms and all applicable laws.
          </p>

          <h4 className="text-lg font-medium text-gray-900 dark:text-white">Prohibited Activities</h4>
          <p className="text-gray-600 dark:text-gray-300 mb-4">You may not use our Service to:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
            <li>Violate any local, state, national, or international laws or regulations</li>
            <li>Harass, abuse, or harm other users or service providers</li>
            <li>Post false, misleading, or fraudulent information</li>
            <li>Attempt to gain unauthorized access to our systems or user accounts</li>
            <li>Distribute spam, viruses, or other harmful content</li>
            <li>Circumvent or manipulate our fee structure or payment systems</li>
            <li>Compete directly with our business using information obtained from our platform</li>
            <li>Use automated systems to scrape or collect data from our platform</li>
          </ul>

          <h4 className="text-lg font-medium text-gray-900 dark:text-white">Content Guidelines</h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
            <li>All content must be relevant, appropriate, and professional</li>
            <li>Do not post copyrighted material without permission</li>
            <li>Profile photos must be of yourself or your business logo</li>
            <li>Reviews and ratings must be honest and based on actual experiences</li>
            <li>Do not post personal contact information in public areas</li>
          </ul>

          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-xl p-4">
            <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">Violations</h4>
            <p className="text-red-700 dark:text-red-400 text-sm">
              Violations of these conduct rules may result in warnings, account suspension, or permanent termination 
              of your access to our Service.
            </p>
          </div>
        </div>
      )
    },
    liability: {
      title: "Liability & Disclaimers",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Service Disclaimer</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Our Service is provided "as is" and "as available" without warranties of any kind, either express 
            or implied. We do not guarantee the accuracy, completeness, or usefulness of any information on our platform.
          </p>

          <h4 className="text-lg font-medium text-gray-900 dark:text-white">Limitation of Liability</h4>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            To the fullest extent permitted by law, Servicely shall not be liable for:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
            <li>Any indirect, incidental, special, or consequential damages</li>
            <li>Loss of profits, revenue, data, or business opportunities</li>
            <li>The quality, safety, or legality of services provided by third parties</li>
            <li>Actions or inactions of service providers or customers</li>
            <li>Unauthorized access to or use of your account or information</li>
            <li>Interruption or cessation of our Service</li>
          </ul>

          <h4 className="text-lg font-medium text-gray-900 dark:text-white">Indemnification</h4>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            You agree to indemnify and hold harmless Servicely and its officers, directors, employees, and agents 
            from any claims, damages, losses, or expenses arising from your use of our Service or violation of these Terms.
          </p>

          <h4 className="text-lg font-medium text-gray-900 dark:text-white">Insurance & Safety</h4>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            While we require service providers to maintain appropriate insurance, you should verify coverage before 
            engaging services. Always prioritize your safety and report any concerns immediately.
          </p>
        </div>
      )
    },
    privacy: {
      title: "Privacy & Data",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Data Collection</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            We collect and use your personal information as described in our Privacy Policy. By using our Service, 
            you consent to such collection and use.
          </p>

          <h4 className="text-lg font-medium text-gray-900 dark:text-white">Information We Collect</h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
            <li>Account registration information (name, email, phone number)</li>
            <li>Profile information and service preferences</li>
            <li>Payment and billing information</li>
            <li>Communication records between users and providers</li>
            <li>Usage data and analytics</li>
            <li>Location data when you use location-based features</li>
          </ul>

          <h4 className="text-lg font-medium text-gray-900 dark:text-white">How We Use Your Data</h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
            <li>To provide and improve our Service</li>
            <li>To facilitate connections between customers and providers</li>
            <li>To process payments and prevent fraud</li>
            <li>To send important updates and notifications</li>
            <li>To provide customer support</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h4 className="text-lg font-medium text-gray-900 dark:text-white">Data Sharing</h4>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            We do not sell your personal information. We may share limited information with service providers 
            to facilitate bookings, with payment processors for transactions, and with law enforcement when 
            required by law.
          </p>
        </div>
      )
    },
    termination: {
      title: "Termination",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Account Termination</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Either party may terminate this agreement at any time. You may delete your account through your 
            account settings, and we may terminate accounts for violations of these Terms.
          </p>

          <h4 className="text-lg font-medium text-gray-900 dark:text-white">Immediate Termination</h4>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            We may immediately terminate or suspend your account if you:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
            <li>Violate these Terms of Service</li>
            <li>Engage in fraudulent or illegal activities</li>
            <li>Pose a safety risk to other users</li>
            <li>Fail to pay required fees (for service providers)</li>
            <li>Repeatedly receive negative feedback or complaints</li>
          </ul>

          <h4 className="text-lg font-medium text-gray-900 dark:text-white">Effect of Termination</h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
            <li>Your access to the Service will be immediately revoked</li>
            <li>Outstanding payments and obligations remain in effect</li>
            <li>We may retain certain information as required by law</li>
            <li>Scheduled services may be canceled with appropriate notice</li>
            <li>You may lose access to messages, reviews, and account data</li>
          </ul>

          <h4 className="text-lg font-medium text-gray-900 dark:text-white">Data Retention</h4>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            After account termination, we may retain your information for legal, regulatory, and business purposes 
            as outlined in our Privacy Policy. You may request data deletion subject to applicable laws.
          </p>
        </div>
      )
    },
    general: {
      title: "General Provisions",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Governing Law</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            These Terms shall be governed by and construed in accordance with the laws of the State of California, 
            without regard to its conflict of law principles.
          </p>

          <h4 className="text-lg font-medium text-gray-900 dark:text-white">Dispute Resolution</h4>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Any disputes arising from these Terms or your use of our Service shall be resolved through binding 
            arbitration in accordance with the rules of the American Arbitration Association.
          </p>

          <h4 className="text-lg font-medium text-gray-900 dark:text-white">Changes to Terms</h4>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            We reserve the right to modify these Terms at any time. Significant changes will be communicated 
            via email or platform notification. Continued use after changes constitutes acceptance of new Terms.
          </p>

          <h4 className="text-lg font-medium text-gray-900 dark:text-white">Severability</h4>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            If any provision of these Terms is found to be unenforceable, the remaining provisions will remain 
            in full force and effect.
          </p>

          <h4 className="text-lg font-medium text-gray-900 dark:text-white">Contact Information</h4>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            If you have questions about these Terms, please contact us at:
          </p>
          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 space-y-2">
            <p className="text-gray-700 dark:text-gray-300"><strong>Email:</strong> legal@servicely.com</p>
            <p className="text-gray-700 dark:text-gray-300"><strong>Address:</strong> Servicely Inc., 123 Innovation Drive, San Francisco, CA 94105</p>
            <p className="text-gray-700 dark:text-gray-300"><strong>Phone:</strong> +1 (555) 123-4567</p>
          </div>
        </div>
      )
    }
  };


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
            Terms of <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Service</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Please review our terms below.</p>
        </div>
        {/* Section Navigation (optional, can be added for UX) */}
        {/* ...existing code... */}
        {/* Render active section (for now, just show all sections) */}
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

export default TermsOfService;