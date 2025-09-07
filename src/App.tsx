import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Landing from './pages/Landing/Landing';
import Browse from './pages/Browse/Browse';
import ProviderProfile from './pages/ProviderProfile/ProviderProfile';
import UserDashboard from './pages/UserDashboard/UserDashboard';
import ProviderDashboard from './pages/ProviderDashboard/ProviderDashboard';
import SignIn from './pages/Auth/Sign in/Sign in';
import Register from './pages/Auth/Register/Register';
import ForgotPassword from './pages/Auth/ForgotPassword/ForgotPassword';
import About from './pages/About/About';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService/TermsOfService';
import FAQ from './pages/FAQ/FAQ';
import Careers from './pages/Careers/Careers';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';
import HelpCenter from './pages/HelpCenter/HelpCenter';
import './index.css';

const App: React.FC = () => {
  return (
    <Router>
  <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-sans">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/provider/:id" element={<ProviderProfile />} />
            <Route path="/user/dashboard" element={<UserDashboard />} />
            <Route path="/provider/dashboard" element={<ProviderDashboard />} />
            <Route path="/login" element={<SignIn />} />
             <Route path="/signup" element={<Register />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/help" element={<HelpCenter />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
