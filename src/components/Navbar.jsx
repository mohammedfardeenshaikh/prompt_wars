import React from 'react';
import { Bell, Search, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const { userRole, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="navbar">
      <div className="navbar-brand">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h2 style={{ margin: 0, fontSize: '1.25rem', color: 'var(--neon-cyan)' }}>ArenaPulse</h2>
        </Link>
      </div>
      <div className="search-bar">
        <Search size={18} className="search-icon" />
        <input type="text" placeholder="Find events or seats..." />
      </div>
      
      <div className="nav-actions">
        <button className="icon-btn relative">
          <Bell size={20} />
          <span className="notification-dot animate-pulse-glow"></span>
        </button>
        {userRole && (
          <button className="icon-btn text-xs flex items-center gap-1" onClick={handleLogout} title="Log Out">
            <LogOut size={16} /> Logout
          </button>
        )}
        <div className="user-profile">
          <img src="https://ui-avatars.com/api/?name=JS&background=06b6d4&color=fff" alt="User" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
