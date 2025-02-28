/**
 * @name Home
 * @description Container to render the home page
 */

import { FC } from 'react';
import Portrait from '@assets/portrait.svg';

const Home: FC = () => {
  return (
    <div className="flex items-center justify-between w-full m-8 flex-wrap">
      <div className="flex flex-col justify-center grow items-center">
        <h2 className="mb-3 text-center">Hello World!</h2>
        <h1 className="mb-3 text-center">I&apos;m Danielle.</h1>
        <h3 className="text-center">Full Stack Engineer | UX/UI Designer</h3>
      </div>
      <div className="flex justify-center grow items-center mt-8">
        <img
          alt="portrait"
          src={Portrait}
          className="lg:max-h-[700px] md:max-h-[400px]"
        />
      </div>
    </div>
  );
};

export default Home;
