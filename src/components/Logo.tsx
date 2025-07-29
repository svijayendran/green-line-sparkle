import React from 'react';
import Glogo from "../assets/GL_logo.png";
interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-24 w-auto" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={Glogo} 
        alt="GreenLine Automation" 
        className="h-full w-auto object-contain"
      />
    </div>
  );
};

export default Logo;