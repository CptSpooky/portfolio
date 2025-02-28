/**
 * @description Common Layout with Header and Footer
 */
import { Outlet } from 'react-router-dom';
import { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Nav from '@components/app/Nav';

const PageLayout: FC = () => {
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
        <div className="flex w-full min-h-screen bg-[url('../assets/paperbg.jpg')] bg-no-repeat bg-cover bg-center">
          <Nav />
          <Outlet />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageLayout;
