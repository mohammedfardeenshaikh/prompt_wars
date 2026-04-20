import React from 'react';

const SkipLink = ({ targetId = 'main-content' }) => {
  const skipTo = (e) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.setAttribute('tabindex', '-1');
      target.focus();
    }
  };

  return (
    <a 
      href={`#${targetId}`} 
      onClick={skipTo}
      className="skip-link"
    >
      Skip to main content
    </a>
  );
};

export default SkipLink;
