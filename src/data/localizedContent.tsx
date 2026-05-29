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
import type {Locale} from '../context/LocaleContext';
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
import {SectionId} from './data';
import type {About, ContactSection, Hero, HomepageMeta, SkillGroup, Social, TimelineItem} from './dataDef';
import {ContactType} from './dataDef';
import enText from './localizedContent/en.json';
import nlText from './localizedContent/nl.json';

export interface LocalizedContent {
  homePageMeta: HomepageMeta;
  hero: Hero;
  about: About;
  aboutHeading: string;
  skills: SkillGroup[];
  education: TimelineItem[];
  experience: TimelineItem[];
  resumeLabels: {
    education: string;
    work: string;
    skills: string;
  };
  navLabels: {
    about: string;
    resume: string;
    contact: string;
  };
  contact: ContactSection;
  contactForm: {
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    submit: string;
    sending: string;
    success: string;
    failure: string;
    networkError: string;
  };
  footer: {
    builtWith: string;
    copyright: string;
  };
  socialLinks: Social[];
}

type LocaleText = typeof enText;

const localeTexts: Record<Locale, LocaleText> = {
  en: enText,
  nl: nlText,
};

const baseSocialLinks: Array<Omit<Social, 'label'>> = [
  {Icon: EnvelopeIcon, href: 'mailto:roel.nijhuis@gmail.com'},
  {Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/roel-nijhuis-9a1a7733b'},
  {Icon: GithubIcon, href: 'https://github.com/BigRoelof'},
  {Icon: InstagramIcon, href: 'https://www.instagram.com/roelof_01/'},
];

const linkifyDomains = (text: string, domains: string[]) => {
  const pattern = domains.map(domain => domain.replace(/\./g, '\\.')).join('|');
  const parts = text.split(new RegExp(`(${pattern})`));

  return (
    <>
      {parts.map((part, index) =>
        domains.includes(part) ? (
          <a href={`https://${part.replace(/^www\./, '')}`} key={index} rel="noopener noreferrer" target="_blank">
            {part}
          </a>
        ) : (
          part
        ),
      )}
    </>
  );
};

const makeSkillGroups = (strings: LocaleText): SkillGroup[] => [
  {
    name: strings.skillGroups.programming,
    skills: [
      {name: 'C++', level: 8},
      {name: 'Python', level: 7},
      {name: 'SQL', level: 6},
      {name: 'Javascript/TypeScript', level: 6},
      {name: 'CSS', level: 6},
      {name: 'LaTeX', level: 8},
    ],
  },
  {
    name: strings.skillGroups.spoken,
    skills: [
      {name: 'Dutch', level: 10},
      {name: 'English', level: 10},
      {name: 'German', level: 8},
      {name: 'French', level: 4},
      {name: 'Spanish', level: 3},
    ],
  },
  {
    name: strings.skillGroups.other,
    skills: [
      {name: 'Frontend (React, Vue)', level: 8},
      {name: 'Backend (Django, Laravel Nova)', level: 7},
      {name: 'Git', level: 7},
      {name: 'Docker', level: 6},
      {name: 'Photoshop', level: 7},
    ],
  },
  {
    name: strings.skillGroups.instruments,
    skills: [
      {name: 'Trumpet', level: 9.5},
      {name: 'Piano', level: 8},
      {name: 'Drums', level: 8},
      {name: 'Synthesizers', level: 7},
      {name: 'Saxophone', level: 6},
      {name: 'Guitar', level: 5},
    ],
  },
];

const makeEducation = (strings: LocaleText): TimelineItem[] => [
  {
    date: '2020 - 2026',
    location: strings.education.location.radboud,
    title: strings.education.title,
    logoSrc: ruLogo,
    content: <p>{strings.education.content}</p>,
  },
  {
    date: '2019 - 2020',
    location: strings.education.location.radboud,
    title: strings.education.title2,
    logoSrc: ruLogo,
    content: <p>{strings.education.content2}</p>,
  },
  {
    date: '2018',
    location: strings.education.location.avondale,
    title: strings.education.title3,
    logoSrc: avondaleLogo,
    content: <p>{strings.education.content3}</p>,
  },
  {
    date: '2012 - 2019',
    location: strings.education.location.tcc,
    title: strings.education.title4,
    logoSrc: tccLogo,
    content: <p>{strings.education.content4}</p>,
  },
];

const makeExperience = (strings: LocaleText): TimelineItem[] => [
  {
    date: '2025 - 2026',
    location: strings.experience.location.jp,
    title: strings.experience.title,
    logoSrc: JPLogo,
    content: <p>{linkifyDomains(strings.experience.content, ['daariseenzaaltjevoor.nl'])}</p>,
  },
  {
    date: '2024 - 2025',
    location: strings.experience.location.radboud,
    title: strings.experience.title2,
    logoSrc: ruLogo,
    content: <p>{strings.experience.content2}</p>,
  },
  {
    date: '2021 - Present',
    location: strings.experience.location.thalia,
    title: strings.experience.title3,
    logoSrc: thaliaLogo,
    content: <p>{strings.experience.content3}</p>,
  },
  {
    date: '2023 - 2024',
    location: strings.experience.location.thalia,
    title: strings.experience.title4,
    logoSrc: thaliaLogo,
    content: <p>{strings.experience.content4}</p>,
  },
  {
    date: '2021 - 2023',
    location: strings.experience.location.privateResidence,
    title: strings.experience.title5,
    logoSrc: homecareLogo,
    content: <p>{strings.experience.content5}</p>,
  },
  {
    date: '2015 - 2019',
    location: strings.experience.location.tcc,
    title: strings.experience.title6,
    logoSrc: tccLogo,
    content: <p>{strings.experience.content6}</p>,
  },
  {
    date: '2016 -2018',
    location: strings.experience.location.ah,
    title: strings.experience.title7,
    logoSrc: AHLogo,
    content: <p>{strings.experience.content7}</p>,
  },
  {
    date: '2016',
    location: strings.experience.location.massage,
    title: strings.experience.title8,
    logoSrc: webdevLogo,
    content: (
      <p>
        {strings.experience.content8.replace(/\.$/, '')} (
        <a href="http://www.massage-ayuda.nl" rel="noopener noreferrer" target="_blank">
          {strings.experience.massageWebsiteLabel}
        </a>
        ).
      </p>
    ),
  },
];

export const getLocalizedContent = (locale: Locale): LocalizedContent => {
  const strings = localeTexts[locale];

  return {
    homePageMeta: strings.homePageMeta,
    hero: {
      imageSrc: heroImage,
      name: locale === 'nl' ? 'Ik ben Roel.' : "I'm Roel Nijhuis.",
      description: (
        <>
          <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">{strings.hero.intro}</p>
          <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">{strings.hero.body}</p>
        </>
      ),
      actions: [
        {
          href: '/CV_Roel_Nijhuis.pdf',
          text: strings.hero.resume,
          primary: true,
          download: true,
          Icon: ArrowDownTrayIcon,
        },
        {
          href: `#${SectionId.Contact}`,
          text: strings.hero.contact,
          primary: false,
        },
      ],
    },
    about: {
      profileImageSrc: profilepic,
      description: strings.aboutDescription,
      aboutItems: [
        {label: strings.aboutItems[0].label, text: strings.aboutItems[0].text, Icon: MapIcon},
        {label: strings.aboutItems[1].label, text: strings.aboutItems[1].text, Icon: AcademicCapIcon},
        {label: strings.aboutItems[2].label, text: strings.aboutItems[2].text, Icon: SparklesIcon},
      ],
    },
    aboutHeading: strings.aboutHeading,
    skills: makeSkillGroups(strings),
    education: makeEducation(strings),
    experience: makeExperience(strings),
    resumeLabels: strings.resume,
    navLabels: strings.nav,
    contact: {
      headerText: strings.contact.headerText,
      description: strings.contact.description,
      items: [
        {
          type: ContactType.Email,
          text: 'roel.nijhuis@gmail.com',
          href: 'mailto:roel.nijhuis@gmail.com',
        },
        {
          type: ContactType.Location,
          text: strings.contact.locationValue,
          href: 'https://www.google.com/maps/search/Nijmegen,+Netherlands',
        },
        {
          type: ContactType.LinkedIn,
          text: 'Roel Nijhuis',
          href: 'https://www.linkedin.com/in/roel-nijhuis-9a1a7733b',
        },
      ],
    },
    contactForm: strings.contactForm,
    footer: strings.footer,
    socialLinks: baseSocialLinks.map((item, index) => ({
      ...item,
      label: [
        strings.socialLabels.email,
        strings.socialLabels.linkedin,
        strings.socialLabels.github,
        strings.socialLabels.instagram,
      ][index],
    })),
  };
};
