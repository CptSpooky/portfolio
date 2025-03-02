/**
 * @name Work
 * @description Container to render the work experience page
 */

import { FC } from 'react';
import ListIcon from '@assets/icons/list-check-solid.svg';
import TargetIcon from '@assets/icons/bullseye-solid.svg';
import ProjectCard from '@components/projectCard/ProjectCard';
import ProjectList from '@utils/projectList';
import { motion } from 'framer-motion';

interface BulletPoint {
  text: string;
  icon: string;
  alt: string;
}

interface WorkSection {
  title: string;
  date: string;
  description: string;
  bulletPoints?: BulletPoint[];
}

const Work: FC = () => {
  const workSections: WorkSection[] = [
    {
      title: 'Full Stack Engineer and UX/UI Designer',
      date: 'VIKING SASQUATCH | 2021-Present',
      description:
        'Agile lead front end and back end developer for several client and in-house projects. Responsible for meeting SOC2 compliance, releases, code quality, managing AWS accounts pertaining to my projects, collaborating with different teams, project management via Jira, designing UI’s, in house marketing assets, website design and branding.',
      bulletPoints: [],
    },
    {
      title: 'Full Stack Engineer | UX/UI Designer | Graphic Designer',
      date: 'FREELANCE | 2019-Present',
      description:
        'Remote contracting where tasks included delivering dozens of high-click static and animated social media ads weekly, creating brand guidelines for several agencies as well as designing and developing several apps and blogs.',
      bulletPoints: [],
    },
    {
      title: 'Jr-Senior Designer and Microsoft Brand Lead',
      date: 'SCORCH AGENCY | 2014-2019',
      description:
        'Worked both as an in-house and remote graphic designer individually and in a group setting to develop design concepts and creative solutions for both digital and print. Presented final concepts and layouts to the Creative Director and participated in client calls.',
      bulletPoints: [
        {
          text: 'Maintained brand identities for a multitude of clients and managed the transition between the old and new visual identities smoothly.',
          icon: ListIcon,
          alt: 'List Icon',
        },
        {
          text: 'Spearheaded dozens of projects including being lead Designer for the heavily illustrated Microsoft in Business campaign, as well as several of LinkedIn’s highly successful Sophisticated Guides for the Marketer.',
          icon: TargetIcon,
          alt: 'Target Icon',
        },
      ],
    },
  ];
  return (
    <div className="flex flex-col w-full m-12 flex-wrap lg:flex-nowrap">
      <motion.div
        className="flex flex-col md:flex-row md:gap-4 md:items-center"
        initial={{ x: -100, opacity: 0 }} // Start off-screen to the left
        animate={{ x: 0, opacity: 1 }} // Slide into place
        transition={{ type: 'spring', stiffness: 100, damping: 15 }}
      >
        <h2 className="mb-3 md:text-center mr-8 text-nowrap">Work &</h2>
        <h1 className="mb-3 md:text-center">Experience</h1>
      </motion.div>
      <div className="flex flex-col flex-wrap 2xl:flex-row lg:flex-nowrap justify-between">
        <motion.div
          className="flex flex-col justify-center w-full 2xl:max-w-[700px]"
          initial={{ x: -100, opacity: 0 }} // Start off-screen to the left
          animate={{ x: 0, opacity: 1 }} // Slide into place
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
        >
          {workSections.map((section) => (
            <div
              className="flex justify-center mt-8 flex-col"
              key={section.title}
            >
              <p className="font-bold">{section.title}</p>
              <p className="font-italic mt-[-4px] mb-2">{section.date}</p>
              <p className="body-text">{section.description}</p>
              {section.bulletPoints && (
                <div className="flex flex-col gap-4 mt-4">
                  {section.bulletPoints.map((point) => (
                    <div className="flex gap-2" key={point.text}>
                      <img
                        src={point.icon}
                        alt={point.text}
                        className="w-[32px] mr-4"
                      />
                      <p className="body-text">{point.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <p className="font-bold mt-12">Skills</p>
          <div>
            <p className="body-text">
              <b>Languages: </b>HTML/CSS, JavaScript, JQuery, Typescript.
            </p>
            <p className="body-text">
              <b>Libraries/APIs: </b>Ajax, Node.js, MySQL, Postgres, MongoDB,
              Mongoose, Sequelize, Axios, Handlebars.js, Express, ReactJS, JSX,
              React-Redux, Prisma, Vuejs, Vuex, NESTJs, AWS Lambda, AWS S3, AWS
              Amplify, AWS Route 53, Tauri, Electron, NSIS, Tailwind CSS,
              Swagger, Insomnia, Storybook, Vite, Auth0, SOC2, Agile/Scrum,
              Husky, Linters.
            </p>
            <p className="body-text">
              <b>Design: </b>UX/UI Design, Illustration, Motion Graphics, Print
              and Digital layouts, Adobe Suite proficiency, Figma proficiency.
            </p>
          </div>
        </motion.div>
        <div className="flex justify-center w-full md:w-fit">
          <div className="flex flex-row w-full gap-6 flex-wrap mt-8 mb-[98px] 2xl:max-w-[700px] mt-0">
            {ProjectList.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
                images={project.images}
                thumbnail={project.thumbnail}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
