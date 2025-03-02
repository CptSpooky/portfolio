/**
 * @name Home
 * @description Container to render the home page
 */

import { FC } from 'react';
import Portrait from '@assets/portrait.svg';
import { motion } from 'framer-motion';

const Home: FC = () => {
  return (
    <div className="flex items-center justify-between w-full m-8 flex-wrap">
      <motion.div
        className="flex flex-col justify-center grow items-center"
        initial={{ x: -100, opacity: 0 }} // Start off-screen to the left
        animate={{ x: 0, opacity: 1 }} // Slide into place
        transition={{ type: 'spring', stiffness: 100, damping: 15 }}
      >
        <h2 className="mb-3 text-center">Hello World!</h2>
        <h1 className="mb-3 text-center">I&apos;m Danielle.</h1>
        <h3 className="text-center">Full Stack Engineer | UX/UI Designer</h3>
      </motion.div>

      <div className="flex justify-center grow items-center mt-8">
        <motion.img
          alt="portrait"
          src={Portrait}
          className="lg:max-h-[700px] md:max-h-[400px]"
          initial={{ scale: 0.3, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 20,
          }}
        />
      </div>
    </div>
  );
};

export default Home;
