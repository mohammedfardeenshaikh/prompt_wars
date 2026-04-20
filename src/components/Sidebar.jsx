import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Activity, LayoutDashboard, Route, UserCircle2, Radar, Menu as HamburgerMenu } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import './Sidebar.css';

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const { userRole } = useAuth();

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <Link to="/" className="sidebar-logo" style={{ textDecoration: 'none' }}>
          <Radar className="logo-icon animate-pulse-glow" size={28} />
          {!isCollapsed && <span className="logo-text">ArenaPulse</span>}
        </Link>
        <button className="menu-btn" onClick={() => setIsCollapsed(!isCollapsed)} style={{ padding: '0.5rem', color: '#fff' }}>
          {/* Hamburger Menu Icon */}
          <HamburgerMenu size={24} style={{ stroke: '#00E5FF' }} />
        </button>
      </div>
      
      <nav className="sidebar-nav">
        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'} end title="Overview">
          <Route size={20} />
          {!isCollapsed && <span>Overview</span>}
        </NavLink>
        <NavLink to="/live" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'} title="Live Ops">
          <Activity size={20} />
          {!isCollapsed && <span>Live Ops</span>}
        </NavLink>
        <NavLink to="/user" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'} title="My Tickets">
          <UserCircle2 size={20} />
          {!isCollapsed && <span>My Tickets</span>}
        </NavLink>
        
        {userRole === 'admin' && (
          <NavLink to="/admin" className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'} title="Command Center">
            <LayoutDashboard size={20} />
            {!isCollapsed && <span>Command Center</span>}
          </NavLink>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;
