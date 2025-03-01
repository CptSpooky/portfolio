import twentyFourSevenFeesThumb from '@assets/projects/24sevenfees/thumb.png';
import twentyFourSevenFeesImg from '@assets/projects/24sevenfees/quote.png';
import twentyFourSevenFeesImg2 from '@assets/projects/24sevenfees/netsheet.png';
import printDriverThumb from '@assets/projects/printdriver/thumb.png';
import airtableThumb from '@assets/projects/airtable/thumb.png';
import { ProjectCardTypes } from '@models/ProjectCard.types.ts';

const Projects: ProjectCardTypes[] = [
  {
    id: 0,
    title: '24 Seven Fees',
    subtitle: 'Lead Front End Developer',
    description:
      '24 Seven Fees is a fintech SAAS solution for the Title sphere, where Title companies and their employees can generate customizable quotes/netsheets/buyers estimates in the market. First written in vue and then react, I became lead front end developer and I was responsible for designing and coding features, fixing bugs and security vulnerabilities, Jira tasking, deployments, and managing the front end aspects on AWS. I also coded a desktop tool with Tauri and Vue for our SMEs so they could quickly configure settings for clients.',
    thumbnail: twentyFourSevenFeesThumb,
    images: [
      twentyFourSevenFeesThumb,
      twentyFourSevenFeesImg,
      twentyFourSevenFeesImg2,
    ],
  },
  {
    id: 1,
    title: '24 Seven Print Driver',
    subtitle: 'Lead Full Stack Developer',
    description:
      'A print driver desktop app that allows users to send documents to their company’s Resware instance. I built both the front end and the back end. Front end built with Tauri, React/React-Redux toolkit, Vite, Tailwind css. The backend was built with Typescript, NestJs, Swagger, Node, Prisma and aws.',
    thumbnail: printDriverThumb,
    images: [printDriverThumb],
  },
  {
    id: 2,
    title: 'Airtable Translators',
    subtitle: 'Lead Backend Developer',
    description:
      'I built several different backend apps that acted as an intermediary title-software-to-airtable translators to solve our Client’s title production issues. Using either the Qualia/Softpro Apis or reports, my api would translate orders into easily digestible data on airtable that streamlined and automated our clients processes, allowing them to see a better picture of the data they needed, manage employee workloads and easily see statuses of each order. Built with Typescript/Node/AWS Lambda & App Runner.',
    thumbnail: airtableThumb,
    images: [airtableThumb],
  },
  {
    id: 3,
    title: 'CRWN Clothing',
    subtitle: 'Web Development',
    description:
      'An eCommerce website utilizing ReactJS, React-Redux, SASS CSS, Firebase and Stripe.',
    thumbnail: 'https://i.imgur.com/sfG9x2L.jpg',
    images: [
      'https://i.imgur.com/bmbrzTH.png',
      'https://i.imgur.com/sz3n467.png',
      'https://i.imgur.com/0lR5cYS.png',
    ],
  },
  {
    id: 4,
    title: 'Mocannbizcon',
    subtitle: 'UX Design',
    description:
      'Mocannbizcon is a business and technology conference for cannabis professionals hosted in Saint Louis, MO. The purpose of the website was to be a central hub where industry professionals could get information on the event, become sponsors, vendors and purchase tickets.',
    thumbnail: 'https://i.imgur.com/oM18nJO.jpg',
    images: [
      'https://i.imgur.com/y0ccemW.jpg',
      'https://i.imgur.com/u6npM8c.jpg',
      'https://i.imgur.com/GWvjSP2.png',
    ],
  },
  {
    id: 5,
    title: 'Pixel Patch',
    subtitle: 'Full Stack Lead / UX Design',
    description:
      'A pumpkin stencil app where users can create their own stencils and print them out. Focused heavily on illustrating and coding most of the front end as well as back end. Utilizes Express, Node, Jquery/JavaScript, MySQL/sequelize, Ajax and Passport.',
    thumbnail: 'https://i.imgur.com/m3OHwvo.jpg',
    images: [
      'https://i.imgur.com/ovvEFEV.png',
      'https://i.imgur.com/nseksEV.png',
      'https://i.imgur.com/KNEEE6H.png',
    ],
  },
  {
    id: 6,
    title: 'DBUG ME',
    subtitle: 'Web Development / UX Design',
    description:
      'DBugMe is a public platform curated for up and coming developers, it allows the user to save important posts on their profile. DBugMe also allows the user to connect with a mentor to help work through problems. The App can be used to share one’s knowledge and collaborate with other developers while learning new tips and tricks. Built alongside a team where I led front end with ReactJS, Create-React-App, and Bootstrap-React. Back end utilized MongoDB, Mongoose, and several authenticator libraries.',
    thumbnail: 'https://i.imgur.com/Ra4ygrT.png',
    images: [
      'https://i.imgur.com/1WUOSrc.png',
      'https://i.imgur.com/9KKQtVv.png',
      'https://i.imgur.com/pFXXTcI.png',
    ],
  },
  {
    id: 7,
    title: 'Sensient Pharma',
    subtitle: 'Front End / UX Design',
    description:
      'A series of blogs designed and coded for Sensient Pharmaceutical. Utilized html, css, wordpress, and php.',
    thumbnail: 'https://i.imgur.com/kyEbw6j.png',
    images: [
      'https://i.imgur.com/23A4ju8.png',
      'https://i.imgur.com/s7fFtHW.png',
      'https://i.imgur.com/WRpopmC.png',
    ],
  },
  {
    id: 8,
    title: "LinkedIn's Organic and Paid eBook",
    subtitle: 'Graphic Design',
    description:
      'Designed and illustrated an ebook for LinkedIn to help marketers drive engagement through both organic and paid opportunities. Visually directed by the concept of meshing natural(organic) and manmade(paid) objects/architecture.',
    thumbnail: 'https://i.imgur.com/NmFHHxA.png',
    images: [
      'https://i.imgur.com/NmFHHxA.png',
      'https://i.imgur.com/N5WLe5i.png',
      'https://i.imgur.com/gNi2svT.png',
    ],
  },
  {
    id: 9,
    title: "Microsoft's The Innovator's Guide to Smarter Collaboration",
    subtitle: 'Graphic Design',
    description:
      'Designed and illustrated an ebook for Microsoft taking a look at how different businesses are utilizing Microsoft tools to empower their workforce and foster collaboration.',
    thumbnail: 'https://i.imgur.com/WmtfWtJ.png',
    images: [
      'https://i.imgur.com/WmtfWtJ.png',
      'https://i.imgur.com/UqrBmrG.png',
      'https://i.imgur.com/UB61Z7m.png',
    ],
  },
  {
    id: 10,
    title: "Microsoft's 5 Ways Azure AI helps you drive innovation",
    subtitle: 'Graphic Design',
    description:
      'Designed and illustrated an infographic for Microsoft Azure that demonstrates ways AI can benefit humanity.',
    thumbnail: 'https://i.imgur.com/JSjiUNO.png',
    images: [
      'https://i.imgur.com/JSjiUNO.png',
      'https://i.imgur.com/L4nQN1P.png',
      'https://i.imgur.com/jxD1lmN.jpg',
    ],
  },
  {
    id: 11,
    title: "Microsoft's The Data Expedition Roll Call",
    subtitle: 'Graphic Design',
    description:
      'Designed and illustrated an infographic for Microsoft Azure that demonstrates ways AI can benefit humanity.',
    thumbnail: 'https://i.imgur.com/R8zsLcr.png',
    images: [
      'https://i.imgur.com/4rm0vMB.png',
      'https://i.imgur.com/mYld2VY.png',
      'https://i.imgur.com/8xfauFD.jpg',
    ],
  },
];

export default Projects;
