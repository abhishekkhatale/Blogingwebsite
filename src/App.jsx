import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BlogInfo from './pages/BlogInfo';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AdminPage from './pages/AdminPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogInfo />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;