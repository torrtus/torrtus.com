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

const MainLayout = () => (
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
      <Connect />
      <Footer />
    </div>
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/admin-dashboard/:clientName" element={<AdminLogin />} />
        <Route path="/client-dashboard/:clientName" element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
