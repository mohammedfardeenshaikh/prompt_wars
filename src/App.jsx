import React, { useState, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import SkipLink from './components/SkipLink';
import ProtectedRoute from './components/ProtectedRoute';

// Lazy loading heavy pages
const Home = lazy(() => import('./pages/Home'));
const LiveExperience = lazy(() => import('./pages/LiveExperience'));
const UserDashboard = lazy(() => import('./pages/UserDashboard'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));
const Login = lazy(() => import('./pages/Login'));

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="app-container">
      <SkipLink targetId="main-content" />
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <div className="main-content">
        <Navbar />
        <main id="main-content" className="page-wrapper">
          <Suspense fallback={<div style={{ color: 'var(--text-secondary)', padding: '2rem' }}>Loading application modules...</div>}>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
              
              {/* Must be logged in */}
              <Route path="/live" element={<ProtectedRoute><LiveExperience /></ProtectedRoute>} />
              <Route path="/user" element={<ProtectedRoute><UserDashboard /></ProtectedRoute>} />
              
              {/* Must be admin */}
              <Route path="/admin" element={<ProtectedRoute requireAdmin={true}><AdminDashboard /></ProtectedRoute>} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
