import React from 'react';
import { Ticket, Map, Zap, ShieldCheck, Trophy } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="text-gradient">Experience The Game Like Never Before</h1>
          <p>ArenaPulse brings you closer to the action with real-time navigation, seamless food delivery, and frictionless entry.</p>
          <div className="hero-actions">
            <Button icon={Ticket} onClick={() => navigate('/user')} className="btn-large">Book Ticket</Button>
            <Button variant="outline" icon={Map} onClick={() => navigate('/live')} className="btn-large subdued">View Live Map</Button>
          </div>
        </div>
        <div className="hero-visual">
          <img src="/stadium.png" alt="ArenaPulse Visual" className="hero-image animate-fade-in" />
        </div>
      </section>

      {/* Event Banner */}
      <section className="event-banner">
        <div className="banner-info">
          <span className="badge badge-red mb-2">LIVE NOW</span>
          <h2>Championship Finals 2026</h2>
          <p>Neon City FC vs. Metro United</p>
        </div>
        <div className="banner-stats">
          <div className="stat">
            <span className="stat-value">62k</span>
            <span className="stat-label">Attendance</span>
          </div>
          <div className="stat">
            <span className="stat-value">72°F</span>
            <span className="stat-label">Weather</span>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="features-section mt-4">
        <h3 className="mb-4">Smart Capabilities</h3>
        <div className="grid grid-cols-3">
          <Card className="feature-card">
            <Zap className="feature-icon" size={32} />
            <h4>Lightning Fast Entry</h4>
            <p>Biometric smart gates eliminate queues completely.</p>
          </Card>
          <Card className="feature-card">
            <Map className="feature-icon" size={32} />
            <h4>AR Seat Navigation</h4>
            <p>Find your seat, restrooms, and exits using augmented reality.</p>
          </Card>
          <Card className="feature-card">
            <ShieldCheck className="feature-icon" size={32} />
            <h4>Secure & Connected</h4>
            <p>High-speed 6G Wi-Fi with end-to-end encrypted transactions.</p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
