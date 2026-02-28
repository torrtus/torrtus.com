import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CustomCursor from './components/CustomCursor';
import SpaceBackground from './components/SpaceBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Clients from './components/Clients';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Features from './components/Features';
import QueryBuilder from './components/QueryBuilder';
import Connect from './components/Connect';
import CEOSection from './components/CEOSection';
import Footer from './components/Footer';
import AdminLogin from './components/AdminLogin';
import IntroSequence from './components/IntroSequence';

// Main Layout Component
const MainLayout = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <CustomCursor />
      <SpaceBackground />
      
      {showIntro && <IntroSequence onComplete={() => setShowIntro(false)} />}
      
      {/* Main Content Area - Render fully, but hide overflow or opacity if needed, 
          actually it's better to just render it underneath so it's ready when doors open */}
      <div style={{ opacity: showIntro ? 0 : 1, transition: 'opacity 1s ease', pointerEvents: showIntro ? 'none' : 'auto' }}>
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
          <Connect />
          <Footer />
        </div>
      </div>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        {/* Wildcard param to capture any client name like /admin-dashboard/yogicsoul */}
        <Route path="/admin-dashboard/:clientName" element={<AdminLogin />} />
        {/* User requested client-dashboard but we will support both for safety based on the exact query */}
        <Route path="/client-dashboard/:clientName" element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
