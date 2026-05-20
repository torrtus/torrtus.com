import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Clients from './components/Clients';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Features from './components/Features';
import QueryBuilder from './components/QueryBuilder';
import CEOSection from './components/CEOSection';
import Connect from './components/Connect';
import Footer from './components/Footer';
import AdminLogin from './components/AdminLogin';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import OAuthCallback from './components/OAuthCallback';
import FAQSection from './components/FAQSection';
import { useSEO } from './hooks/useSEO';

const MainLayout = () => {
  useSEO({
    title: 'AI Automation & SaaS Development India',
    description: "Torrtus is India's premier IT services company. We build SaaS products, AI automation agents, and deploy apps across Web, iOS & Android. 7+ brands served. ~2 week delivery.",
    canonical: 'https://torrtus.com/',
  });
  return (
    <>
      <div className="site-bg" />
      <Navbar />
      <div className="app-container">
        <Hero />
        <Clients />
        <About />
        <Services />
        <Products />
        <Features />
        <QueryBuilder />
        <CEOSection />
        <FAQSection />
        <Connect />
        <Footer />
      </div>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/admin-dashboard/:clientName" element={<AdminLogin />} />
        <Route path="/client-dashboard/:clientName" element={<AdminLogin />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/callback" element={<OAuthCallback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
