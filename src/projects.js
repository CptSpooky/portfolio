import twentyFourSevenFeesThumb from "./assets/24sevenfees/thumb.png";
import twentyFourSevenFeesImg from "./assets/24sevenfees/quote.png";
import twentyFourSevenFeesImg2 from "./assets/24sevenfees/netsheet.png";
import printDriverThumb from "./assets/printdriver/thumb.png";
import airtableThumb from "./assets/airtable/thumb.png";

const Projects = [
  {
      id: 0,
      title: "24 Seven Fees",
      role: "Lead Front End Developer",
      description: "24 Seven Fees is a fintech SAAS solution for the Title sphere, where Title companies and their employees can generate customizable quotes/netsheets/buyers estimates in the market. First written in vue and then react, I became lead front end developer and I was responsible for designing and coding features, fixing bugs and security vulnerabilities, Jira tasking, deployments, and managing the front end aspects on AWS. I also coded a desktop tool with Tauri and Vue for our SMEs so they could quickly configure settings for clients.",
      deployed: "https://24sevenfees.com",
      github:"",
      imagesShown: 3,
      image: twentyFourSevenFeesThumb,
      cimage1: twentyFourSevenFeesThumb,
      cimage2: twentyFourSevenFeesImg,
      cimage3: twentyFourSevenFeesImg2,
      ux: ""
  },
  {
    id: 1,
    title: "24 Seven Print Driver",
    role: "Lead Full Stack Developer",
    description: "A print driver desktop app that allows users to send documents to their company’s Resware instance. I built both the front end and the back end. Front end built with Tauri, React/React-Redux toolkit, Vite, Tailwind css. The backend was built with Typescript, NestJs, Swagger, Node, Prisma and aws.",
    deployed: "",
    github:"",
    imagesShown: 1,
    image: printDriverThumb,
    cimage1: printDriverThumb,
    cimage2: "",
    cimage3: "",
    ux: ""
  },
  {
    id: 2,
    title: "Airtable Translators",
    role: "Lead Back End Developer",
    description: "I built several different backend apps that acted as an intermediary title-software-to-airtable translators to solve our Client’s title production issues. Using either the Qualia/Softpro Apis or reports, my api would translate orders into easily digestible data on airtable that streamlined and automated our clients processes, allowing them to see a better picture of the data they needed, manage employee workloads and easily see statuses of each order. Built with Typescript/Node/AWS Lambda & App Runner.",
    deployed: "",
    github:"",
    imagesShown: 1,
    image: airtableThumb,
    cimage1: airtableThumb,
    cimage2: "",
    cimage3: "",
    ux: ""
  },
  {
      id: 3,
      title: "CRWN Clothing",
      role: "Web Development",
      description: "An eCommerce website utilizing ReactJS, React-Redux, SASS CSS, Firebase and Stripe.",
      deployed: "",
      github:"https://github.com/CptSpooky/eCommerce-App",
      imagesShown: 3,
      image: "https://i.imgur.com/sfG9x2L.jpg",
      cimage1: "https://i.imgur.com/bmbrzTH.png",
      cimage2: "https://i.imgur.com/sz3n467.png",
      cimage3: "https://i.imgur.com/0lR5cYS.png",
      ux:""
  },
  {
      id: 4,
      title: "Mocannbizcon",
      role: "UX Design",
      description: "Mocannbizcon is a business and technology conference for cannabis professionals hosted in Saint Louis, MO. The purpose of the website was to be a central hub where industry professionals could get information on the event, become sponsors, vendors and purchase tickets.",
      deployed: "https://mocannbizcon.com/",
      github:"",
      image: "https://i.imgur.com/oM18nJO.jpg",
      imagesShown: 3,
      cimage1: "https://i.imgur.com/y0ccemW.jpg",
      cimage2: "https://i.imgur.com/u6npM8c.jpg",
      cimage3: "https://i.imgur.com/GWvjSP2.png",
      ux: "https://www.figma.com/file/SPg6fDvtRop3kK8RoCAvpn/UX-Projects?node-id=55%3A1"
  },
  {
      id: 5,
      title: "Pixel Patch",
      role: "Web Development / UX Design",
      description: "A pumpkin stencil app where users can create their own stencils and print them out. Focused heavily on illustrating and coding most of the front end as well as back end. Utilizes Express, Node, Jquery/JavaScript, MySQL/sequelize, Ajax and Passport.",
      deployed: "",
      github:"https://github.com/SeanPCummings/Project-2",
      imagesShown: 3,
      image: "https://i.imgur.com/m3OHwvo.jpg",
      cimage1: "https://i.imgur.com/ovvEFEV.png",
      cimage2: "https://i.imgur.com/nseksEV.png",
      cimage3: "https://i.imgur.com/KNEEE6H.png",
      ux: "https://www.figma.com/file/SPg6fDvtRop3kK8RoCAvpn/UX-Projects?node-id=55%3A0"
  },
  {
      id: 6,
      title: "DBUG ME",
      role: "Web Development / UX Design",
      description: "DBugMe is a public platform curated for up and coming developers, it allows the user to save important posts on their profile. DBugMe also allows the user to connect with a mentor to help work through problems. The App can be used to share one’s knowledge and collaborate with other developers while learning new tips and tricks. Built alongside a team where I led front end with ReactJS, Create-React-App, and Bootstrap-React. Back end utilized MongoDB, Mongoose, and several authenticator libraries.",
      deployed: "",
      github:"https://github.com/jesseodonoghue/project-3",
      imagesShown: 3,
      image: "https://i.imgur.com/Ra4ygrT.png",
      cimage1: "https://i.imgur.com/1WUOSrc.png",
      cimage2: "https://i.imgur.com/9KKQtVv.png",
      cimage3: "https://i.imgur.com/pFXXTcI.png",
      ux: "https://www.figma.com/file/SPg6fDvtRop3kK8RoCAvpn/UX-Projects?node-id=0%3A1"
  },
  {
      id: 7,
      title: "Sensient Pharma",
      role: "Web Development / UX Design",
      description: "A series of blogs designed and coded for Sensient Pharmaceutical. Utilized html, css, wordpress, and php.",
      deployed: "https://sensientpharma.com/health-and-wellness/",
      github:"",
      image: "https://i.imgur.com/kyEbw6j.png",
      imagesShown: 3,
      cimage1: "https://i.imgur.com/23A4ju8.png",
      cimage2: "https://i.imgur.com/s7fFtHW.png",
      cimage3: "https://i.imgur.com/WRpopmC.png",
      ux: "https://www.figma.com/file/SPg6fDvtRop3kK8RoCAvpn/UX-Projects?node-id=55%3A2"
  },
  {
      id: 8,
      title: "LinkedIn's Organic and Paid eBook",
      role: "Graphic Design",
      description: "Designed and illustrated an ebook for LinkedIn to help marketers drive engagement through both organic and paid opportunities. Visually directed by the concept of meshing natural(organic) and manmade(paid) objects/architecture.",
      deployed: "https://business.linkedin.com/marketing-solutions/blog/linkedin-b2b-marketing/2018/introducing-the-organic---paid-playbook",
      github:"",
      imagesShown: 3,
      image: "https://i.imgur.com/NmFHHxA.png",
      cimage1: "https://i.imgur.com/NmFHHxA.png",
      cimage2: "https://i.imgur.com/N5WLe5i.png",
      cimage3: "https://i.imgur.com/gNi2svT.png",
      ux: ""
  },
  {
      id: 9,
      title: "Microsoft's The Innovator's Guide to Smarter Collaboration",
      role: "Graphic Design",
      description: "Designed and illustrated an ebook for Microsoft taking a look at how different businesses are utilizing Microsoft tools to empower their workforce and foster collaboration.",
      deployed: "https://www.techrepublic.com/index.php/resource-library/whitepapers/innovator-s-guide-to-smarter-collaboration/",
      github:"",
      imagesShown: 3,
      image: "https://i.imgur.com/WmtfWtJ.png",
      cimage1: "https://i.imgur.com/WmtfWtJ.png",
      cimage2: "https://i.imgur.com/UqrBmrG.png",
      cimage3: "https://i.imgur.com/UB61Z7m.png",
      ux: ""
  },
  {
      id: 10,
      title: "Microsoft's 5 Ways Azure AI helps you drive innovation",
      role: "Graphic Design",
      description: "Designed and illustrated an infographic for Microsoft Azure that demonstrates ways AI can benefit humanity.",
      deployed: "",
      github:"",
      imagesShown: 3,
      image: "https://i.imgur.com/JSjiUNO.png",
      cimage1: "https://i.imgur.com/JSjiUNO.png",
      cimage2: "https://i.imgur.com/L4nQN1P.png",
      cimage3: "https://i.imgur.com/jxD1lmN.jpg",
      ux: ""
  },
  {
      id: 11,
      title: "Microsoft's The Data Expedition Roll Call",
      role: "Graphic Design",
      description: "Designed and illustrated an infographic for Microsoft Azure that demonstrates ways AI can benefit humanity.",
      deployed: "",
      github:"",
      imagesShown: 3,
      image: "https://i.imgur.com/R8zsLcr.png",
      cimage1: "https://i.imgur.com/4rm0vMB.png",
      cimage2: "https://i.imgur.com/mYld2VY.png",
      cimage3: "https://i.imgur.com/8xfauFD.jpg",
      ux: ""
  }
];

  export default Projects;