import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Services from './components/Services';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Jobs from './components/Jobs';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/contact-us" element={<ContactUs/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
