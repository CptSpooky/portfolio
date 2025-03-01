/**
 * @name Education
 * @description Container to render the Education page
 */

import { FC } from 'react';
import EducationImg from '@assets/education.svg';

interface EducationSections {
  title: string;
  date: string;
  description: string;
}

const Education: FC = () => {
  const educationSections: EducationSections[] = [
    {
      title: 'Continuous Learning',
      date: 'Present',
      description:
        'Technology is always changing, theres always things to learn, so I never stop learning!',
    },
    {
      title: 'Figma Academy 2.0',
      date: 'dive.club/advanced-figma | 2025',
      description:
        'A intensive course on Figma, focusing on large scale multi-brand design systems, prototyping, and collaboration. Used by tech giants such as Google, Amazon, Salesforce, and more. ',
    },
    {
      title: 'Certificate in Full Stack Web Development',
      date: 'UNC Chapel Hill, North Carolina | 2020',
      description:
        'A 24-week intensive bootcamp program focused on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Node Js, MySQL, MongoDB, Express, Handelbars.js & ReactJS.',
    },
    {
      title: 'Internship at the Inspiration Network',
      date: 'Charlotte, North Carolina | 2013',
      description:
        'A month long internship where I helped produce photoshoot layouts and commercial motion graphic slips for the shows Happy Days, The Waltons, and Dr Quinn Medicine Woman. Originally unpaid, but my coworkers liked me so much they compensated me for my work.',
    },
    {
      title: 'Bachelor of Fine Arts',
      date: 'Western Carolina University, North Carolina | 2013',
      description:
        'A 4 year undergrad program with a specialization in Graphic Design, motion graphics, web development, typography and print where I graduated with high honors.',
    },
  ];
  return (
    <div className="flex flex-row w-full m-12 flex-wrap lg:flex-nowrap">
      <div className="flex flex-col justify-center">
        <div className="flex flex-col md:flex-row md:gap-4 md:items-center">
          <h2 className="mb-3 md:text-center">My</h2>
          <h1 className="mb-3 md:text-center">Education</h1>
        </div>
        {educationSections.map((section) => (
          <div
            className="flex justify-center mt-8 flex-col lg:max-w-[70%]"
            key={section.title}
          >
            <p className="font-bold">{section.title}</p>
            <p className="font-italic mt-[-4px] mb-2">{section.date}</p>
            <p className="body-text">{section.description}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-8 md:w-[100%] lg:w-[70%]">
        <img alt="EducationImg" src={EducationImg} className="max-h-[900px]" />
      </div>
    </div>
  );
};

export default Education;
