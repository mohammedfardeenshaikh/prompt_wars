import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import LiveExperience from './pages/LiveExperience';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="app-container">
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <div className="main-content">
        <Navbar />
        <div className="page-wrapper">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            
            {/* Must be logged in */}
            <Route path="/live" element={<ProtectedRoute><LiveExperience /></ProtectedRoute>} />
            <Route path="/user" element={<ProtectedRoute><UserDashboard /></ProtectedRoute>} />
            
            {/* Must be admin */}
            <Route path="/admin" element={<ProtectedRoute requireAdmin={true}><AdminDashboard /></ProtectedRoute>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
