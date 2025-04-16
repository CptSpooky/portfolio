/**
 * @name About
 * @description Container to render the about page
 */
import { FC } from 'react';
import { motion } from 'framer-motion';
import { IconButtons } from '@models/IconButtons.types';
import GithubIcon from '@assets/icons/github.svg';
import LinkedInIcon from '@assets/icons/LinkedIn_icon.svg';
import PhoneIcon from '@assets/icons/phone-solid.svg';
import EmailIcon from '@assets/icons/envelope-solid.svg';
import AboutImg from '@assets/about.svg';

const About: FC = () => {
  const iconButtons: IconButtons[] = [
    {
      icon: GithubIcon,
      alt: 'Github',
      link: 'https://github.com/CptSpooky',
      text: '/CptSpooky',
    },
    {
      icon: LinkedInIcon,
      alt: 'LinkedIn',
      link: 'https://www.linkedin.com/in/daniellevarela/',
      text: '/daniellevarela',
    },
    { icon: PhoneIcon, alt: 'Phone', text: '828-808-7956' },
    { icon: EmailIcon, alt: 'Email', text: 'legacyofthedonut@gmail.com' },
  ];
  return (
    <div className="flex items-center w-full m-12 flex-col mb-0">
      <motion.div
        className="flex flex-row justify-center items-center gap-4"
        initial={{ y: -100, opacity: 0 }} // Start off-screen to the top
        animate={{ y: 0, opacity: 1 }} // Slide into place
        transition={{ type: 'spring', stiffness: 100, damping: 15 }}
      >
        <h2 className="text-center">About</h2>
        <h1 className="text-center pt-[10px] md:pt-0 lg:pt-0">Me</h1>
      </motion.div>
      <motion.div
        className="flex justify-center items-center mt-8 flex-col md:w-[40%] text-center gap-4"
        initial={{ y: -100, opacity: 0 }} // Start off-screen to the top
        animate={{ y: 0, opacity: 1 }} // Slide into place
        transition={{ type: 'spring', stiffness: 100, damping: 15 }}
      >
        <p>
          Hi there! I&apos;m a highly-motivated remote Full Stack Web Developer
          and UI/UX Designer with a background in Graphic Design. Among my
          coworkers I am known as an effective and creative problem solver, as
          well as being versatile and reliable! Got a team project, or need me
          to take the lead and get things done on my own? No problem.
        </p>
        <p>
          When I&apos;m not working I like to eat sushi, create art, take care
          of my reptiles, play video games with the family, and I love hanging
          out with this one real cool dude called husband.
        </p>
        <h3 className="font-bold mt-8">Get to know me!</h3>
      </motion.div>
      <div className="flex justify-center items-center mt-12 mb-[98px] flex-col gap-8 md:flex-row md:gap-16 lg:gap-24">
        {iconButtons.map((item) => (
          <motion.div
            className="flex flex-col items-center gap-2"
            key={item.alt}
            initial={{ scale: 0.3, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 20,
            }}
          >
            <button
              key={item.alt}
              className="btn btn-xl btn-circle btn-primary drop-shadow-lg"
            >
              <img
                src={item.icon}
                alt={item.alt}
                className="w-[30px] brightness-0 invert"
              />
            </button>
            <div className="text-sm text-slate-700 font-bold mt-2 text-center text-wrap">
              {item.text}
            </div>
          </motion.div>
        ))}
      </div>
      <img
        alt="about"
        src={AboutImg}
        className="mb-[18px] md:mb-0 lg:max-h-[700px] md:max-h-[400px]"
      />
    </div>
  );
};

export default About;
