import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  EnvelopeIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/introBBQ_25_smol.jpg';
import AHLogo from '../images/logos/AH_Logo.png';
import avondaleLogo from '../images/logos/Avondale_Logo.png';
import homecareLogo from '../images/logos/Homecare_Logo.png';
import JPLogo from '../images/logos/JP_Logo.png';
import ruLogo from '../images/logos/RU_logo.png';
import tccLogo from '../images/logos/TCC_Logo.png';
import thaliaLogo from '../images/logos/Thalia_Logo.png';
import webdevLogo from '../images/logos/WebDev_Logo.png';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Roel Nijhuis | Computing Science Graduate / Software Engineer',
  description: 'Personal website and resume for Roel Nijhuis, a calm and curious software engineer from the Netherlands.',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'experience',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Roel Nijhuis.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Computing Science Graduate</strong> based in the Netherlands, with a focus on
        building practical web applications.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Calm and approachable by nature, I enjoy collaborating with others, learning new skills, and solving problems
        in a thoughtful way. Outside of work I like <strong className="text-stone-100">playing music</strong>,
        <strong className="text-stone-100">hockey</strong>, <strong className="text-stone-100">running</strong>, and
        a good game of <strong className="text-stone-100">chess</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/CV_Roel_Nijhuis.pdf',
      text: 'Resume',
      primary: true,
      download: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Calm and approachable, with the ability to get along well with almost everyone, is how I would describe
myself. I'm attentive to the needs of others and enjoy contributing to a positive work environment. I consider myself
to be an eager learner and I regularly seek opportunities to build new skills, whether through collaboration or
self-directed learning such as online content.`,
  aboutItems: [
    {label: 'Location', text: 'Nijmegen, Netherlands', Icon: MapIcon},
    {label: 'Study', text: 'Radboud University', Icon: AcademicCapIcon},
    // {label: 'Employment', text: 'JP Activiteiten', Icon: BuildingOffice2Icon},
    {label: 'Interests', text: 'Music, hockey, running, chess', Icon: SparklesIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'C++',
        level: 8,
      },           
      {
        name: 'Python',
        level: 7,
      },
      {
        name: 'SQL',
        level: 6,
      },
      {
        name: 'Javascript/TypeScript',
        level: 6,
      },
      {
        name: 'CSS',
        level: 6,
      },      
      {
        name: 'LaTeX',
        level: 8,
      }, 
    ],
  },
    {
    name: 'Spoken Languages',
    skills: [
      {
        name: 'Dutch',
        level: 10,
      },
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'German',
        level: 8,
      },
      {
        name: 'French',
        level: 4,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Other Skills',
    skills: [
      {
        name: 'Frontend',
        subtitle: 'React, Vue',
        level: 8,
      },
      {
        name: 'Backend',
        subtitle: 'Django, Laravel Nova',
        level: 7,
      },
      {
        name: 'Git',
        level: 7,
      },
      {
        name: 'Docker',
        level: 6,
      },
      {
        name: 'Photoshop',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2020 - 2026',
    location: 'Radboud University',
    title: 'Bachelor Computing Science',
    logoSrc: ruLogo,
    content: (
      <p>
        Specialisation tracks in Data Science and Cyber Security. Minors in Physics and Business.
      </p>
    ),
  },
  {
    date: '2019 - 2020',
    location: 'Radboud University',
    title: 'Bachelor Physics & Astronomy',
    logoSrc: ruLogo,
    content: <p>Built a strong scientific base before focusing fully on Computing Science.</p>,
  },
  {
    date: '2018',
    location: 'Avondale College, Auckland, New Zealand',
    title: 'International High School',
    logoSrc: avondaleLogo,
    content: <p>Completed part of my high school education abroad.</p>,
  },
  {
    date: '2012 - 2019',
    location: 'Twents Carmel College',
    title: 'VWO Atheneum',
    logoSrc: tccLogo,
    content: <p>Profile NT, with business economics as an additional course.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2025 - 2026',
    location: 'JP Activiteiten',
    title: 'Software Engineer',
    logoSrc: JPLogo,
    content: <p>Full-stack development for the web app daarisenzaaltjevoor.nl.</p>,
  },
  {
    date: '2024 - 2025',
    location: 'Radboud University',
    title: 'Teaching Assistant',
    logoSrc: ruLogo,
    content: <p>Tutoring for the course Algorithms & Data Structures.</p>,
  },
  {
    date: '2021 - Present',
    location: 'Study Association Thalia',
    title: 'Committee Work',
    logoSrc: thaliaLogo,
    content: <p>Events Committee, Partner Committee, Lustrum Committee (Chair), and Audit Committee.</p>,
  },
  {
    date: '2023 - 2024',
    location: 'Study Association Thalia',
    title: 'Board Year - Treasurer',
    logoSrc: thaliaLogo,
    content: <p>Responsible for the association's finances as treasurer during the board year.</p>,
  },
  {
    date: '2021 - 2023',
    location: 'Private residence',
    title: 'Home Care Support',
    logoSrc: homecareLogo,
    content: <p>Household assistance for an individual with mobility challenges.</p>,
  },
  {
    date: '2015 - 2019',
    location: 'Twents Carmel College',
    title: 'Private Tutor',
    logoSrc: tccLogo,
    content: <p>Tutored scientific subjects including Physics, Chemistry, and Mathematics.</p>,
  },
  {
    date: '2016 -2018',
    location: 'Albert Heijn, Oldenzaal',
    title: 'Restocking',
    logoSrc: AHLogo,
    content: <p>Worked in store operations with restocking and coordination tasks.</p>,
  },
  {
    date: '2016',
    location: 'Massage practice of an acquaintance',
    title: 'Website Design',
    logoSrc: webdevLogo,
    content: <p>Designed the website for massage-ayuda.nl.</p>,
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  testimonials: [],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description:
    'If you would like to collaborate, chat about software, or just say hello, feel free to reach out through email or LinkedIn.',
  items: [
    {
      type: ContactType.Email,
      text: 'roel.nijhuis@gmail.com',
      href: 'mailto:roel.nijhuis@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Nijmegen, Netherlands',
      href: 'https://www.google.com/maps/search/Nijmegen,+Netherlands',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Roel Nijhuis',
      href: 'https://www.linkedin.com/in/roel-nijhuis-9a1a7733b',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Email', Icon: EnvelopeIcon, href: 'mailto:roel.nijhuis@gmail.com'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/roel-nijhuis-9a1a7733b'},
  {label: 'GitHub', Icon: GithubIcon, href: 'https://github.com/BigRoelof'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/roelof_01/'},
];
