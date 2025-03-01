/**
 * @name About
 * @description Container to render the about page
 */
import { FC } from 'react';
import GithubIcon from '@assets/icons/github.svg';
import LinkedInIcon from '@assets/icons/LinkedIn_icon.svg';
import PhoneIcon from '@assets/icons/phone-solid.svg';
import EmailIcon from '@assets/icons/envelope-solid.svg';
import AboutImg from '@assets/about.svg';

interface IconButtons {
  icon: string;
  alt: string;
  link?: string;
  text: string;
}

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
      <div className="flex flex-row justify-center items-center gap-4">
        <h2 className="text-center">About</h2>
        <h1 className="text-center pt-[10px] md:pt-0 lg:pt-0">Me</h1>
      </div>
      <div className="flex justify-center items-center mt-8 flex-col md:w-[40%] text-center gap-4">
        <p>
          Highly-motivated remote Full Stack Web Developer with a background in
          Graphic Design. Effective at problem solving and weaving in creativity
          with function. Known among coworkers and clients for being versatile
          and reliable, works well both individually led and in a team
          environment.
        </p>
        <p>
          Novice scuba diver. Local menace. I like sushi, art, chickens, playing
          video games with the family, and this one real cool dude called
          husband.
        </p>
        <h3 className="font-bold mt-8">Get to know me!</h3>
      </div>
      <div className="flex justify-center items-center mt-12 mb-[98px] flex-col gap-8 md:flex-row md:gap-16 lg:gap-24">
        {iconButtons.map((item) => (
          <div className="flex flex-col items-center gap-2" key={item.alt}>
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
          </div>
        ))}
      </div>
      <img
        alt="about"
        src={AboutImg}
        className="lg:max-h-[700px] md:max-h-[400px]"
      />
    </div>
  );
};

export default About;
