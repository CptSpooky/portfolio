/**
 * @name Education
 * @description Container to render the Education page
 */

import { FC } from 'react';
import { motion } from 'framer-motion';
import EducationImg from '@assets/education.svg';
import EducationSections from '@utils/educationSections';

const Education: FC = () => {
  return (
    <div className="__sections-page">
      <motion.div
        className="flex flex-col justify-center"
        initial={{ x: -100, opacity: 0 }} // Start off-screen to the left
        animate={{ x: 0, opacity: 1 }} // Slide into place
        transition={{ type: 'spring', stiffness: 100, damping: 15 }}
      >
        <div className="flex flex-col md:flex-row md:gap-4 md:items-center">
          <h2 className="mb-3 md:text-center">My</h2>
          <h1 className="mb-3 md:text-center">Education</h1>
        </div>
        {EducationSections.map((section) => (
          <div
            className="flex justify-center mt-8 flex-col lg:max-w-[70%]"
            key={section.title}
          >
            <p className="font-bold">{section.title}</p>
            <p className="font-italic mt-[-4px] mb-2">{section.date}</p>
            <p className="__body-text">{section.description}</p>
          </div>
        ))}
      </motion.div>

      <motion.div
        className="flex justify-center items-center mt-8 md:w-[100%] lg:w-[70%]"
        initial={{ y: -100, opacity: 0 }} // Start off-screen to the top
        animate={{ y: 0, opacity: 1 }} // Slide into place
        transition={{ type: 'spring', stiffness: 100, damping: 15 }}
      >
        <img alt="EducationImg" src={EducationImg} className="max-h-[900px]" />
      </motion.div>
    </div>
  );
};

export default Education;
