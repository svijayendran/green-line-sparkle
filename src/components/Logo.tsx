import React from 'react';
import Glogo from "../assets/GL_logo.png";
import GlogoWight from "../assets/GL_logo_1.png";
interface LogoProps {
  className?: string;
  isScrolled: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-24 w-auto", isScrolled }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={isScrolled ?  Glogo : GlogoWight } 
        alt="GreenLine Automation" 
        className="h-full w-auto object-contain transition-all duration-300"
      />
    </div>
  );
};

export default Logo;