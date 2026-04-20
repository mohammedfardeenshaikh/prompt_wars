import React from 'react';
import { QrCode, CreditCard, Clock, BellRing, MapPin } from 'lucide-react';
import Card from '../components/Card';
import './UserDashboard.css';

const UserDashboard = () => {
  return (
    <div className="user-dashboard animate-fade-in">
      <div className="page-header mb-4">
        <h2>My Dashboard</h2>
        <p>Access your tickets, orders, and personalized stadium alerts.</p>
      </div>

      <div className="grid grid-cols-3">
        {/* Digital Ticket */}
        <Card className="ticket-card">
          <div className="ticket-header text-center mb-4">
            <h3 className="text-neon-cyan">Digital Ticket</h3>
            <p className="text-xs">Championship Finals 2026</p>
          </div>
          <div className="qr-container flex-center mb-4 relative">
            <div className="scanner-line"></div>
            <QrCode size={150} strokeWidth={1} className="text-main" />
          </div>
          <div className="seat-details grid grid-cols-3 gap-2 text-center border-t border-b py-2 mb-4">
            <div>
              <span className="text-xs text-muted block">Sec</span>
              <strong>104</strong>
            </div>
            <div>
              <span className="text-xs text-muted block">Row</span>
              <strong>G</strong>
            </div>
            <div>
              <span className="text-xs text-muted block">Seat</span>
              <strong>21</strong>
            </div>
          </div>
          <button className="btn btn-outline w-full text-sm">Add to Apple Wallet</button>
        </Card>

        <div className="col-span-2 flex flex-col gap-4">
          {/* Active Orders */}
          <Card title="Active Orders (Food & Drink)">
            <div className="order-item flex-between border-b pb-3 mb-3">
              <div className="flex items-center gap-3">
                <div className="icon-box bg-blue-subtle text-neon-blue">
                  <Clock size={20} />
                </div>
                <div>
                  <h4>Classic Hot Dog Combo</h4>
                  <p className="text-xs text-muted">Order #4429 • Preparing</p>
                </div>
              </div>
              <span className="badge badge-orange animate-pulse">In Progress</span>
            </div>
            
            <div className="order-item flex-between">
              <div className="flex items-center gap-3">
                <div className="icon-box bg-green-subtle text-accent-green">
                  <CreditCard size={20} />
                </div>
                <div>
                  <h4>Stadium IPA (x2)</h4>
                  <p className="text-xs text-muted">Order #4410 • Delivered</p>
                </div>
              </div>
              <span className="badge badge-green">Completed</span>
            </div>
          </Card>

          {/* Live Alerts */}
          <Card title="Live Venue Alerts">
            <div className="alert-list">
              <div className="alert-item group">
                <BellRing size={16} className="text-neon-cyan mt-1 min-w-[16px]" />
                <div>
                  <p className="text-sm">Halftime show starting in 15 minutes. Expect high traffic near the concourse.</p>
                  <span className="text-xs text-muted">2 mins ago</span>
                </div>
              </div>
              <div className="alert-item group">
                <MapPin size={16} className="text-neon-blue mt-1 min-w-[16px]" />
                <div>
                  <p className="text-sm">Gate B (VIP Express) wait time dropped to 4 minutes.</p>
                  <span className="text-xs text-muted">18 mins ago</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
