import { useEffect, useRef } from 'react';

interface AnimatedBackgroundProps {
  variant?: 'default' | 'tech' | 'data' | 'particles';
}

const AnimatedBackground = ({ variant = 'default' }: AnimatedBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation particles
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;
      type: string;
    }> = [];

    // Create particles based on variant
    const createParticles = () => {
      const particleCount = variant === 'particles' ? 50 : 30;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.1,
          color: getParticleColor(),
          type: Math.random() > 0.5 ? 'circle' : 'square'
        });
      }
    };

    const getParticleColor = () => {
      const colors = {
        default: ['rgba(59, 130, 246, 0.3)', 'rgba(147, 51, 234, 0.3)', 'rgba(236, 72, 153, 0.3)'],
        tech: ['rgba(34, 197, 94, 0.3)', 'rgba(59, 130, 246, 0.3)', 'rgba(168, 85, 247, 0.3)'],
        data: ['rgba(249, 115, 22, 0.3)', 'rgba(239, 68, 68, 0.3)', 'rgba(59, 130, 246, 0.3)'],
        particles: ['rgba(99, 102, 241, 0.3)', 'rgba(139, 92, 246, 0.3)', 'rgba(236, 72, 153, 0.3)']
      };
      
      const colorArray = colors[variant] || colors.default;
      return colorArray[Math.floor(Math.random() * colorArray.length)];
    };

    // Animate particles
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.speedX *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.speedY *= -1;

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;

        if (particle.type === 'circle') {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillRect(particle.x - particle.size, particle.y - particle.size, particle.size * 2, particle.size * 2);
        }

        ctx.restore();

        // Connect nearby particles with lines
        if (variant === 'tech' || variant === 'data') {
          particles.forEach((otherParticle, otherIndex) => {
            if (index !== otherIndex) {
              const dx = particle.x - otherParticle.x;
              const dy = particle.y - otherParticle.y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < 100) {
                ctx.save();
                ctx.globalAlpha = (100 - distance) / 100 * 0.1;
                ctx.strokeStyle = particle.color;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                ctx.stroke();
                ctx.restore();
              }
            }
          });
        }
      });

      requestAnimationFrame(animate);
    };

    createParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [variant]);

  return (
    <>
      {/* CSS Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5"></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full animate-float opacity-20"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-accent/10 rotate-45 animate-float-delayed opacity-20"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-secondary/10 rounded-lg animate-float-slow opacity-20"></div>
        <div className="absolute bottom-32 right-1/3 w-20 h-20 bg-primary/10 rounded-full animate-pulse opacity-30"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full" 
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          ></div>
        </div>
      </div>

      {/* Canvas for Advanced Animations */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: -1 }}
      />
    </>
  );
};

export default AnimatedBackground;