import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '@/components/Logo';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const darkHeroPages = ['/', '/projects', '/products', '/industries', '/about', '/impact', '/career'];
  const useSolidNav = !darkHeroPages.includes(location.pathname) || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Home', id: 'hero', type: 'scroll' as const },
    { name: 'About', path: '/about', type: 'route' as const },
    { name: 'Projects', path: '/projects', type: 'route' as const },
    { name: 'Industries', path: '/industries', type: 'route' as const },
    { name: 'Products', path: '/products', type: 'route' as const }
  ];

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        useSolidNav
          ? 'bg-background/95 backdrop-blur-md shadow-card border-b border-border'
          : isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 md:h-16 lg:h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Logo isScrolled={useSolidNav} className="h-10 md:h-16 lg:h-20 w-auto" />
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => {
              const isActive =
                item.type === 'scroll'
                  ? location.pathname === '/'
                  : location.pathname === item.path;
              return (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() =>
                    item.type === 'scroll'
                      ? scrollToSection(item.id)
                      : handleNavigation(item.path)
                  }
                  className={`${useSolidNav ? 'text-foreground hover:text-automation-green' : 'text-white hover:text-automation-green'} ${isActive ? 'text-automation-green' : ''} transition-colors duration-300 font-medium relative group`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-automation-green transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </motion.button>
              );
            })}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                variant="default"
                onClick={() => handleNavigation('/contact')}
                className="shadow-elegant hover:shadow-glow transition-all duration-300"
              >
                Get Started
              </Button>
            </motion.div>
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`md:hidden p-2 ${useSolidNav ? 'text-foreground' : 'text-white'} transition-colors duration-300`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-background/95 backdrop-blur-md border-t border-border"
            >
              <div className="py-4 space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={() =>
                      item.type === 'scroll'
                        ? scrollToSection(item.id)
                        : handleNavigation(item.path)
                    }
                    className="block w-full text-left px-4 py-2 text-foreground hover:text-automation-green transition-colors duration-300"
                  >
                    {item.name}
                  </motion.button>
                ))}
                <div className="px-4">
                  <Button
                    variant="default"
                    onClick={() => handleNavigation('/contact')}
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;