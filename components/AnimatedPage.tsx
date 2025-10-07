import React from 'react';

interface AnimatedPageProps {
  children: React.ReactNode;
}

const AnimatedPage: React.FC<AnimatedPageProps> = ({ children }) => {
  return (
    <div style={{ animation: 'slide-in-up 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}>
      {children}
    </div>
  );
};

export default AnimatedPage;
