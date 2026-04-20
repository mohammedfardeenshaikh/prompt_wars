import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children, requireAdmin = false }) => {
  const { userRole } = useAuth();
  const location = useLocation();

  if (!userRole) {
    // Not logged in, forward location state
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (requireAdmin && userRole !== 'admin') {
    // Logged in but not admin
    return (
      <div className="flex-center" style={{ height: '100%', flexDirection: 'column' }} role="alert">
        <h2 className="text-accent-red mb-2">Access Denied</h2>
        <p>You do not have administrator privileges to view this page.</p>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
