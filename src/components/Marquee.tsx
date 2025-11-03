import React from 'react';
import './Marquee.scss';

interface MarqueeProps {
  text: string;
  speed?: number;
}

const Marquee: React.FC<MarqueeProps> = ({ text, speed = 50 }) => {
  // Speed is in pixels per second, convert to animation duration
  // Assuming ~240px initial padding + text width, use speed to calculate duration
  const duration = Math.max(5, 100 / speed); // Faster speed = lower duration
  return (
    <div className="marquee-container">
      <div className="marquee-content" style={{ animationDuration: `${duration}s` }}>
        <span className="marquee-text">{text}</span>
        <span className="marquee-text">{text}</span>
      </div>
    </div>
  );
};

export default Marquee;
