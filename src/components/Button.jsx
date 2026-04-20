import React from 'react';

const Button = ({ children, variant = 'primary', className = '', onClick, icon: Icon }) => {
  const baseClass = variant === 'primary' ? 'btn-primary' : 'btn-outline';
  
  return (
    <button className={`btn ${baseClass} ${className}`} onClick={onClick}>
      {Icon && <Icon size={18} />}
      {children}
    </button>
  );
};

export default Button;
