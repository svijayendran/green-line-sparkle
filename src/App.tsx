import type { ReactNode } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Index from './pages/Index';
import Impact from './pages/Impact';
import About from './pages/About';
import Contact from './pages/Contact';
import Industries from './pages/Industries';
import Projects from './pages/Projects';
import Products from './pages/Products';
import NotFound from './pages/NotFound';
import HMIProject from './pages/HMIProject';

const queryClient = new QueryClient();

const PageTransition = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, x: 28, filter: 'blur(2px)' }}
    animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
    exit={{ opacity: 0, x: -20, filter: 'blur(2px)' }}
    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait' initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<PageTransition><Index /></PageTransition>} />
        <Route path='/about' element={<PageTransition><About /></PageTransition>} />
        <Route path='/contact' element={<PageTransition><Contact /></PageTransition>} />
        <Route path='/industries' element={<PageTransition><Industries /></PageTransition>} />
        <Route path='/projects' element={<PageTransition><Projects /></PageTransition>} />
        <Route path='/products' element={<PageTransition><Products /></PageTransition>} />
        <Route path='/impact' element={<PageTransition><Impact /></PageTransition>} />
        <Route path='/projects/hmi' element={<PageTransition><HMIProject /></PageTransition>} />
        <Route path='*' element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;