import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Send, Users, Activity, AlertTriangle } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import './AdminDashboard.css';

const initialData = [
  { time: '17:00', attendance: 12000, queueAvg: 2 },
  { time: '17:30', attendance: 25000, queueAvg: 5 },
  { time: '18:00', attendance: 45000, queueAvg: 12 },
  { time: '18:30', attendance: 58000, queueAvg: 18 },
  { time: '19:00', attendance: 61000, queueAvg: 8 },
  { time: '19:30', attendance: 62000, queueAvg: 4 },
];

const AdminDashboard = () => {
  const [data, setData] = useState(initialData);

  // Simulate incoming live data
  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => {
        const last = prev[prev.length - 1];
        const [hours, mins] = last.time.split(':').map(Number);
        
        let newMins = mins + 30;
        let newHours = hours;
        if (newMins >= 60) {
          newMins -= 60;
          newHours += 1;
        }
        
        const newTime = `${String(newHours).padStart(2, '0')}:${String(newMins).padStart(2, '0')}`;
        const newAttendance = Math.min(65000, last.attendance + Math.floor(Math.random() * 500) - 100);
        const newQueue = Math.max(1, last.queueAvg + Math.floor(Math.random() * 4) - 2);

        const newData = [...prev.slice(1), { time: newTime, attendance: newAttendance, queueAvg: newQueue }];
        return newData;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="admin-dashboard animate-fade-in">
      <div className="page-header mb-4 flex-between">
        <div>
          <h2>Command Center</h2>
          <p>Venue control, analytics, and crowd management.</p>
        </div>
        <div className="flex gap-2">
          <span className="badge badge-green flex items-center gap-1">
            <Activity size={12} /> Live Ops Normal
          </span>
        </div>
      </div>

      <div className="grid grid-cols-4 mb-4">
        <Card className="stat-card">
          <p className="text-muted text-sm mb-1">Total Attendance</p>
          <div className="flex items-end gap-2">
            <h3>{data[data.length - 1].attendance.toLocaleString()}</h3>
            <span className="badge badge-green text-xs">+1.2%</span>
          </div>
        </Card>
        <Card className="stat-card">
          <p className="text-muted text-sm mb-1">Avg Gate Wait</p>
          <div className="flex items-end gap-2">
            <h3>{data[data.length - 1].queueAvg} min</h3>
            <span className="badge badge-blue text-xs">Optimal</span>
          </div>
        </Card>
        <Card className="stat-card">
          <p className="text-muted text-sm mb-1">Active Staff</p>
          <div className="flex items-end gap-2">
            <h3>452</h3>
            <span className="text-xs text-muted">across 8 zones</span>
          </div>
        </Card>
        <Card className="stat-card border-warning">
          <p className="text-muted text-sm mb-1 flex items-center gap-1"><AlertTriangle size={14} className="text-accent-orange"/> Incidents</p>
          <div className="flex items-end gap-2">
            <h3 className="text-accent-orange">2</h3>
            <span className="text-xs text-muted">Being resolved</span>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {/* Charts */}
        <Card className="col-span-2 chart-card" title="Attendance & Queue Dynamics">
          <div className="chart-container" style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorAttendance" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--neon-cyan)" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="var(--neon-violet)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-subtle)" vertical={false} />
                <XAxis dataKey="time" stroke="var(--text-muted)" fontSize={12} tickLine={false} />
                <YAxis stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-neon)', borderRadius: '8px' }}
                  itemStyle={{ color: 'var(--text-main)' }}
                />
                <Area type="monotone" dataKey="attendance" stroke="url(#theme-gradient)" fillOpacity={1} fill="url(#colorAttendance)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Global Announcements */}
        <Card className="flex flex-col" title="Broadcast System">
          <p className="text-sm text-muted mb-4">Send push notifications and stadium screen takeovers instantly.</p>
          
          <div className="flex flex-col gap-3 flex-1">
            <div className="input-group">
              <label>Target Audience</label>
              <select className="form-select">
                <option>All Attendees</option>
                <option>VIP Section Only</option>
                <option>South Concourse</option>
                <option>Staff / Ops</option>
              </select>
            </div>
            <div className="input-group flex-1">
              <label>Message</label>
              <textarea className="form-textarea" placeholder="Type announcement here..." rows="4"></textarea>
            </div>
          </div>
          
          <Button icon={Send} className="w-full mt-4">Send Broadcast</Button>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
