
import React from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = '', delay = 0 }) => {
  const [ref, isVisible] = useOnScreen<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`${className} transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ animation: isVisible ? `slide-in-up 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms both` : 'none' }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
