/**
 * @description Common layout shared across all pages
 */
import { Outlet, useLocation } from 'react-router-dom';
import { FC, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Nav from '@components/app/Nav';

const PageLayout: FC = () => {
  const { pathname } = useLocation(); // Get current route

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [pathname]);

  return (
    <AnimatePresence mode="sync">
      <motion.div
        className="w-full h-auto"
        key={1}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="__page-layout">
          <Nav />
          <Outlet />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageLayout;
