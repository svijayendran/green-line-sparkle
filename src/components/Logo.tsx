import React from 'react';
import Glogo from "../assets/G_logo.png";
interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-18 w-auto" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={Glogo} 
        alt="GreenLine Automation" 
        className="h-12 w-auto object-contain"
      />
    </div>
  );
};

export default Logo;