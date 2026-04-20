export const VENUE_INFO = {
  NAME: 'ArenaPulse Stadium',
  SECTIONS: ['North', 'South', 'East', 'West', 'VIP'],
  GATES: {
    GATE_A: 'Gate A (North)',
    GATE_B: 'Gate B (VIP Express)',
    GATE_C: 'Gate C (South)',
  },
  THRESHOLDS: {
    QUEUE_OPTIMAL: 10,
    QUEUE_WARNING: 20,
    ATTENDANCE_MAX: 65000,
  }
};

export const FACILITIES = {
  'washroom-w': { type: 'washroom', title: 'West Restrooms', distance: '120m', time: '2 mins', crowd: 'Medium (5m wait)' },
  'fire-exit-n': { type: 'fire-exit', title: 'North Emergency Exit', distance: '30m', time: '30 secs', crowd: 'Clear path' },
  'washroom-e': { type: 'washroom', title: 'East Restrooms', distance: '250m', time: '5 mins', crowd: 'High (15m wait)' },
  'fire-exit-s': { type: 'fire-exit', title: 'South Emergency Exit', distance: '80m', time: '1 min', crowd: 'Clear path' },
};
