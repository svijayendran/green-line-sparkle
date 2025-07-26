import React from 'react';
import Glogo from "../assets/G_logo.png";
interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-10 w-auto" }) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="relative">
        {/* Logo SVG */}
        <svg 
          width="40" 
          height="40" 
          viewBox="0 0 40 40" 
          className="rounded-lg"
          xmlns={Glogo}
        >

          
          <rect width="40" height="40" rx="6" fill="hsl(var(--automation-green))" />
          
          {/* Leaf */}
          <path 
            d="M12 28C12 22 15 15 22 12C20 18 17 22 12 28Z" 
            fill="hsl(var(--automation-green-light))" 
          />
          
          {/* Circuit connections */}
          <circle cx="16" cy="24" r="2" fill="white" />
          <circle cx="24" cy="20" r="2" fill="white" />
          <circle cx="28" cy="28" r="2" fill="white" />
          
          {/* Connection lines */}
          <line x1="18" y1="24" x2="22" y2="20" stroke="white" strokeWidth="2" />
          <line x1="26" y1="20" x2="26" y2="28" stroke="white" strokeWidth="2" />
        </svg>
      </div>
      {/* <span className="text-xl lg:text-2xl font-bold text-foreground">
        GreenLine Automation
      </span> */}
    </div>
  );
};

export default Logo;