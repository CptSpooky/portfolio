import { InfoSection } from '@models/InfoSection.types';
import ListIcon from '@assets/icons/list-check-solid.svg';
import TargetIcon from '@assets/icons/bullseye-solid.svg';

const WorkSections: InfoSection[] = [
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

  export default WorkSections;