import React, { useState, useEffect } from 'react';
import { MapPin, Navigation2, Car, Pizza, Users, Droplets, DoorOpen } from 'lucide-react';
import Card from '../components/Card';
import './LiveExperience.css';

const LiveExperience = () => {
  const [queues, setQueues] = useState({
    gateA: 12, gateB: 4, gateC: 25
  });
  const [activeMarker, setActiveMarker] = useState(null);

  const facilitiesInfo = {
    'washroom-w': { type: 'washroom', title: 'West Restrooms', distance: '120m', time: '2 mins', crowd: 'Medium (5m wait)' },
    'fire-exit-n': { type: 'fire-exit', title: 'North Emergency Exit', distance: '30m', time: '30 secs', crowd: 'Clear path' },
    'washroom-e': { type: 'washroom', title: 'East Restrooms', distance: '250m', time: '5 mins', crowd: 'High (15m wait)' },
    'fire-exit-s': { type: 'fire-exit', title: 'South Emergency Exit', distance: '80m', time: '1 min', crowd: 'Clear path' },
  };

  // Simulate live data updates (30% animation)
  useEffect(() => {
    const interval = setInterval(() => {
      setQueues({
        gateA: Math.max(0, queues.gateA + (Math.random() > 0.5 ? 1 : -1)),
        gateB: Math.max(0, queues.gateB + (Math.random() > 0.5 ? 1 : -1)),
        gateC: Math.max(0, queues.gateC + (Math.random() > 0.5 ? 2 : -2)),
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [queues]);

  const getStatusColor = (time) => {
    if (time < 10) return 'badge-green';
    if (time < 20) return 'badge-orange';
    return 'badge-red';
  };

  return (
    <div className="live-page animate-fade-in">
      <div className="page-header mb-4">
        <h2>Live Experience Map</h2>
        <p>Real-time analytics and navigation for your convenience.</p>
      </div>

      <div className="grid grid-cols-3 live-layout">
        {/* Heatmap & Map visual */}
        <Card className="col-span-2 heatmap-card">
          <div className="heatmap-header flex-between mb-4">
            <h3>Stadium Heatmap</h3>
            <span className="badge badge-blue"><Users size={12} className="inline mr-1" /> LIVE</span>
          </div>
          <div className="map-container">
            {/* Abstract Stadium Map */}
            <div className="abstract-stadium">
              <div className="field"></div>
              <div className="stand top pulse-high"></div>
              <div className="stand bottom pulse-low"></div>
              <div className="stand left pulse-med"></div>
              <div className="stand right pulse-high"></div>

              {/* Interactive Markers */}
              <button className={`facility-marker marker-washroom ${activeMarker === 'washroom-w' ? 'active' : ''}`} style={{ top: '20%', left: '15%' }} onClick={() => setActiveMarker('washroom-w')} title="West Restrooms">
                <Droplets size={16} />
              </button>
              <button className={`facility-marker marker-fire-exit ${activeMarker === 'fire-exit-n' ? 'active' : ''}`} style={{ top: '8%', left: '50%' }} onClick={() => setActiveMarker('fire-exit-n')} title="North Emergency Exit">
                <DoorOpen size={16} />
              </button>
              <button className={`facility-marker marker-washroom ${activeMarker === 'washroom-e' ? 'active' : ''}`} style={{ bottom: '25%', right: '15%' }} onClick={() => setActiveMarker('washroom-e')} title="East Restrooms">
                <Droplets size={16} />
              </button>
              <button className={`facility-marker marker-fire-exit ${activeMarker === 'fire-exit-s' ? 'active' : ''}`} style={{ bottom: '8%', left: '50%' }} onClick={() => setActiveMarker('fire-exit-s')} title="South Emergency Exit">
                <DoorOpen size={16} />
              </button>
            </div>
          </div>
        </Card>

        {/* Dynamic Panels */}
        <div className="side-panels flex flex-col gap-4">
          <Card title="Smart Gates (Wait Times)">
            <div className="queue-list">
              <div className="queue-item flex-between border-b pb-2 mb-2">
                <span>Gate A (North)</span>
                <span className={`badge ${getStatusColor(queues.gateA)} transition-all`}>{queues.gateA} mins</span>
              </div>
              <div className="queue-item flex-between border-b pb-2 mb-2">
                <span>Gate B (VIP Express)</span>
                <span className={`badge ${getStatusColor(queues.gateB)} transition-all`}>{queues.gateB} mins</span>
              </div>
              <div className="queue-item flex-between">
                <span>Gate C (South)</span>
                <span className={`badge ${getStatusColor(queues.gateC)} transition-all`}>{queues.gateC} mins</span>
              </div>
            </div>
          </Card>

          <Card className="navigation-card">
            {activeMarker && facilitiesInfo[activeMarker] ? (
              <div className="animate-fade-in">
                <div className="flex items-center gap-3 mb-2">
                  {facilitiesInfo[activeMarker].type === 'fire-exit' ? <DoorOpen className="text-accent-red" /> : <Droplets className="text-neon-cyan" />}
                  <h3>{facilitiesInfo[activeMarker].title}</h3>
                </div>
                <div className="direction-info bg-dark-subtle p-3 rounded-lg mb-3" style={{ background: 'rgba(0,0,0,0.2)', padding: '0.75rem', borderRadius: '8px' }}>
                  <p className="text-sm mb-1"><strong className="text-muted">Distance:</strong> <span className="text-main">{facilitiesInfo[activeMarker].distance} ({facilitiesInfo[activeMarker].time})</span></p>
                  <p className="text-sm mb-1"><strong className="text-muted">Status:</strong> <span className={facilitiesInfo[activeMarker].type === 'fire-exit' ? 'text-accent-green' : 'text-neon-cyan'}>{facilitiesInfo[activeMarker].crowd}</span></p>
                </div>
                <button className={`btn w-full text-sm py-2 ${facilitiesInfo[activeMarker].type === 'fire-exit' ? 'btn-outline border-red text-red' : 'btn-primary'}`} style={facilitiesInfo[activeMarker].type === 'fire-exit' ? { boxShadow: 'inset 0 0 0 1px var(--accent-red)', color: 'var(--accent-red)' } : {}}>
                  {facilitiesInfo[activeMarker].type === 'fire-exit' ? 'Start Emergency Route' : 'Navigate Here'}
                </button>
              </div>
            ) : (
              <div className="animate-fade-in">
                <div className="flex items-center gap-3 mb-2">
                  <Navigation2 className="text-neon-cyan" />
                  <h3>Seat Navigation</h3>
                </div>
                <p className="text-sm mb-3">Your seat: Sec 104, Row G, Seat 21</p>
                <p className="text-xs text-muted mb-3 italic">Tap a marker on the map to navigate to facilities.</p>
                <button className="btn btn-primary w-full text-sm py-2">Start AR Guide</button>
              </div>
            )}
          </Card>

          <div className="grid grid-cols-2 gap-4">
            <Card className="quick-action-card hover-lift">
              <Car className="mb-2 text-neon-blue" />
              <h4>Parking</h4>
              <span className="badge badge-green mt-1 text-xs">84% Full</span>
            </Card>
            <Card className="quick-action-card hover-lift">
              <Pizza className="mb-2 text-neon-blue" />
              <h4>Food</h4>
              <span className="badge badge-orange mt-1 text-xs">Order Now</span>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveExperience;
