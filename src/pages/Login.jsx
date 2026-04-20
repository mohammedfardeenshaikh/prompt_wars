import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, User } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (role) => {
    login(role);
    navigate('/');
  };

  return (
    <div className="flex-center" style={{ height: '100%', minHeight: '60vh' }}>
      <Card title="Select Your Portal" className="w-full" style={{ maxWidth: '400px', textAlign: 'center' }}>
        <p className="text-muted text-sm mb-4">For demo purposes, select your role.</p>

        <div className="flex flex-col gap-3">
          <Button onClick={() => handleLogin('user')} variant="outline" icon={User} className="w-full">
            Login as User
          </Button>
          <Button onClick={() => handleLogin('admin')} variant="primary" icon={Shield} className="w-full">
            Login as Administrator
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Login;
