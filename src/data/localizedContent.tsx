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

const baseSocialLinks: Array<Omit<Social, 'label'>> = [
  {Icon: EnvelopeIcon, href: 'mailto:roel.nijhuis@gmail.com'},
  {Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/roel-nijhuis-9a1a7733b'},
  {Icon: GithubIcon, href: 'https://github.com/BigRoelof'},
  {Icon: InstagramIcon, href: 'https://www.instagram.com/roelof_01/'},
];

const localeStrings = {
  en: {
    homePageMeta: {
      title: 'Roel Nijhuis',
      description: 'Personal website and resume for Roel Nijhuis, a calm and curious software engineer from the Netherlands.',
    },
    hero: {
      intro: "I'm a Computing Science Graduate based in Nijmegen (the Netherlands), with a focus on building practical web applications.",
      body: 'Calm and approachable by nature, I enjoy collaborating with others, learning new skills, and solving problems in a thoughtful way. Outside of work/studies I like playing music, hockey, running, and a good game of chess.',
      resume: 'Resume',
      contact: 'Contact',
    },
    aboutHeading: 'About me',
    aboutDescription:
      "Calm and approachable, with the ability to get along well with almost everyone, is how I would describe myself. I'm attentive to the needs of others and enjoy contributing to a positive work environment. I consider myself to be an eager learner and I regularly seek opportunities to build new skills, whether through collaboration or self-directed learning such as online content.",
    aboutItems: [
      {label: 'Location', text: 'Nijmegen, Netherlands'},
      {label: 'Study', text: 'Radboud University'},
      {label: 'Interests', text: 'Music, hockey, running, chess'},
    ],
    skills: {
      programming: 'Programming Languages',
      spoken: 'Spoken Languages',
      other: 'Other Skills',
      instruments: 'Instruments',
    },
    education: {
      title: 'Bachelor Computing Science',
      content: 'Specialisation tracks in Data Science and Cyber Security. Minor in Physics and minor in Business.',
      title2: 'Bachelor Physics & Astronomy',
      content2: 'Built a strong scientific base before focusing fully on Computing Science.',
      title3: 'International High School',
      content3: 'Completed part of my high school education abroad.',
      title4: 'VWO Atheneum',
      content4: 'Profile NT, with business economics as an additional course.',
    },
    experience: {
      title: 'Software Engineer',
      content: 'Full-stack development for the web app daariseenzaaltjevoor.nl.',
      title2: 'Teaching Assistant',
      content2: 'Tutoring for the course Algorithms & Data Structures.',
      title3: 'Committee Work',
      content3: 'Events Committee, Partner Committee, Lustrum Committee (Chair), and Audit Committee.',
      title4: 'Board Year - Treasurer',
      content4: "Responsible for the association's finances as treasurer during the board year.",
      title5: 'Home Care Support',
      content5: 'Household assistance for an individual with mobility challenges.',
      title6: 'Private Tutor',
      content6: 'Tutored scientific subjects including Physics, Chemistry, and Mathematics.',
      title7: 'Restocking',
      content7: 'Worked in store operations with restocking and coordination tasks.',
      title8: 'Website Design',
      content8: 'Designed simple website for an acquaintance. ',
    },
    contact: {
      headerText: 'Get in touch.',
      description:
        'If you would like to collaborate, chat about software, or just say hello, feel free to reach out through email or LinkedIn.',
      email: 'Email',
      location: 'Location',
      linkedin: 'LinkedIn',
    },
    contactForm: {
      namePlaceholder: 'Name',
      emailPlaceholder: 'Email',
      messagePlaceholder: 'Message',
      submit: 'Send Message',
      sending: 'Sending...',
      success: 'Success! Your message has been sent.',
      failure: 'Something went wrong. Please try again.',
      networkError: 'Network error. Please try again.',
    },
    footer: {
      builtWith: 'Built with',
      copyright: 'Copyright',
    },
    nav: {
      about: 'About me',
      resume: 'Experience',
      contact: 'Contact',
    },
    resume: {
      education: 'Education',
      work: 'Work',
      skills: 'Skills',
    },
    socialLabels: {
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      instagram: 'Instagram',
    },
    skillGroups: {
      programming: 'Programming Languages',
      spoken: 'Spoken Languages',
      other: 'Other Skills',
      instruments: 'Instruments',
    },
  },
  nl: {
    homePageMeta: {
      title: 'Roel Nijhuis',
      description: 'Persoonlijke website en cv van Roel Nijhuis, een rustige en nieuwsgierige software engineer uit Nederland.',
    },
    hero: {
      intro: 'Onlangs heb ik mijn bachelordiploma behaald in Computing Science aan de Radboud Universiteit, en in september start ik aan mijn master Information Science. Mijn focus ligt op het bouwen van praktische webapplicaties.',
      body: 'Ik ben een rustige jongen en kan in principe met iedereen goed overweg. Ik werk graag samen met anderen, ben leergierig en los problemen op een doordachte manier op. Buiten werk/studie houd ik van muziek maken, hockey, hardlopen. Af en toe speel ik ook een potje schaak.',
      resume: 'CV',
      contact: 'Contact',
    },
    aboutHeading: 'Over mij',
    aboutDescription:
      'Rustig en benaderbaar, met de eigenschap om goed met vrijwel iedereen overweg te kunnen, zo zou ik mezelf omschrijven. Ik heb aandacht voor de behoeften van anderen en draag graag bij aan een positieve werkomgeving. Ik zie mezelf als een leergierig persoon en zoek regelmatig kansen om nieuwe vaardigheden op te bouwen, zowel via samenwerking als via zelfstandig leren (zoals online content).',
    aboutItems: [
      {label: 'Locatie', text: 'Nijmegen, Nederland'},
      {label: 'Opleiding', text: 'Radboud Universiteit'},
      {label: 'Interesses', text: 'Muziek, hockey, hardlopen, schaken'},
    ],
    skills: {
      programming: 'Programmeertalen',
      spoken: 'Gesproken talen',
      other: 'Overige vaardigheden',
      instruments: 'Instrumenten',
    },
    education: {
      title: 'Bachelor Informatica',
      content: 'Specialisatie tracks in Data Science en Cyber Security. Minor in Natuurkunde en minor in Bedrijfskunde.',
      title2: 'Bachelor Natuurkunde & Sterrenkunde',
      content2: 'Begonnen met een studie Natuurkunde voordat ik me volledig ben gaan richten op Informatica.',
      title3: 'Internationale Highschool',
      content3: 'Een deel van mijn middelbare schooltijd heb ik in het buitenland gevolgd.',
      title4: 'VWO Atheneum',
      content4: 'Profiel Natuur & Techniek, met bedrijfseconomie als extra vak.',
    },
    experience: {
      title: 'Software engineer',
      content: 'Full-stack ontwikkeling voor de webapp daariseenzaaltjevoor.nl.',
      title2: 'Docentassistent',
      content2: 'Begeleiding bij het vak Algorithms & Data Structures.',
      title3: 'Commissiewerk',
      content3: 'Werk voor verschillende commissies, waaronder de Evenementencommissie, Partnercommissie, Lustrumcommissie (voorzitter) en Kascommissie en nog een aantal anderen.',
      title4: 'Bestuursjaar - Penningmeester',
      content4: 'Verantwoordelijk voor de financiën van de vereniging.',
      title5: 'Thuiszorgondersteuning',
      content5: 'Huishoudelijke ondersteuning voor een persoon met mobiliteitsbeperkingen.',
      title6: 'Bijlesdocent',
      content6: 'Bijles gegeven in betavakken zoals natuurkunde, scheikunde en wiskunde.',
      title7: 'Vakkenvullen',
      content7: 'Werkzaam geweest in de winkel met vakkenvullen en coördinerende taken.',
      title8: 'Websiteontwerp',
      content8: 'Simpele website ontworpen voor een kennis. ',
    },
    contact: {
      headerText: 'Neem contact op.',
      description:
        'Wil je samenwerken, praten over software of gewoon hallo zeggen? Neem dan gerust contact op via e-mail of LinkedIn.',
      email: 'E-mail',
      location: 'Locatie',
      linkedin: 'LinkedIn',
    },
    contactForm: {
      namePlaceholder: 'Naam',
      emailPlaceholder: 'E-mail',
      messagePlaceholder: 'Bericht',
      submit: 'Bericht versturen',
      sending: 'Versturen...',
      success: 'Gelukt! Je bericht is verzonden.',
      failure: 'Er ging iets mis. Probeer het opnieuw.',
      networkError: 'Netwerkfout. Probeer het opnieuw.',
    },
    footer: {
      builtWith: 'Gemaakt met',
      copyright: 'Copyright',
    },
    nav: {
      about: 'Over mij',
      resume: 'Ervaring',
      contact: 'Contact',
    },
    resume: {
      education: 'Opleiding',
      work: 'Werkervaring',
      skills: 'Vaardigheden',
    },
    socialLabels: {
      email: 'E-mail',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      instagram: 'Instagram',
    },
    skillGroups: {
      programming: 'Programmeertalen',
      spoken: 'Gesproken talen',
      other: 'Overige vaardigheden',
      instruments: 'Instrumenten',
    },
  },
} as const;

// Helper: replace matched domain substrings with clickable anchors
const linkifyDomains = (text: string, domains: string[]) => {
  const pattern = domains.map(d => d.replace(/\./g, '\\.')).join('|');
  const re = new RegExp(`(${pattern})`);
  const parts = text.split(re);

  return (
    <>
      {parts.map((p, i) =>
        domains.includes(p) ? (
          <a href={`https://${p.replace(/^www\./, '')}`} key={i} rel="noopener noreferrer" target="_blank">
            {p}
          </a>
        ) : (
          p
        ),
      )}
    </>
  );
};

const makeSkillGroups = (locale: Locale): SkillGroup[] => {
  const strings = localeStrings[locale].skillGroups;

  return [
    {
      name: strings.programming,
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
      name: strings.spoken,
      skills: [
        {name: 'Dutch', level: 10},
        {name: 'English', level: 10},
        {name: 'German', level: 8},
        {name: 'French', level: 4},
        {name: 'Spanish', level: 3},
      ],
    },
    {
      name: strings.other,
      skills: [
        {name: 'Frontend (React, Vue)', level: 8},
        {name: 'Backend (Django, Laravel Nova)', level: 7},
        {name: 'Git', level: 7},
        {name: 'Docker', level: 6},
        {name: 'Photoshop', level: 7},
      ],
    },
    {
      name: strings.instruments,
      skills: [
        {name: 'Trumpet', level: 9},
        {name: 'Piano', level: 8},
        {name: 'Drums', level: 8},
        {name: 'Synthesizers', level: 7},
        {name: 'Saxophone', level: 6},
        {name: 'Guitar', level: 5},
      ],
    },
  ];
};

const makeEducation = (locale: Locale): TimelineItem[] => {
  const strings = localeStrings[locale].education;

  return [
    {
      date: '2020 - 2026',
      location: 'Radboud University',
      title: strings.title,
      logoSrc: ruLogo,
      content: <p>{strings.content}</p>,
    },
    {
      date: '2019 - 2020',
      location: 'Radboud University',
      title: strings.title2,
      logoSrc: ruLogo,
      content: <p>{strings.content2}</p>,
    },
    {
      date: '2018',
      location: 'Avondale College, Auckland, New Zealand',
      title: strings.title3,
      logoSrc: avondaleLogo,
      content: <p>{strings.content3}</p>,
    },
    {
      date: '2012 - 2019',
      location: 'Twents Carmel College',
      title: strings.title4,
      logoSrc: tccLogo,
      content: <p>{strings.content4}</p>,
    },
  ];
};

const makeExperience = (locale: Locale): TimelineItem[] => {
  const strings = localeStrings[locale].experience;

  return [
    {
      date: '2025 - 2026',
      location: 'JP Activiteiten',
      title: strings.title,
      logoSrc: JPLogo,
      content: <p>{linkifyDomains(strings.content, ['daariseenzaaltjevoor.nl'])}</p>,
    },
    {
      date: '2024 - 2025',
      location: 'Radboud University',
      title: strings.title2,
      logoSrc: ruLogo,
      content: <p>{strings.content2}</p>,
    },
    {
      date: '2021 - Present',
      location: 'Study Association Thalia',
      title: strings.title3,
      logoSrc: thaliaLogo,
      content: <p>{strings.content3}</p>,
    },
    {
      date: '2023 - 2024',
      location: 'Study Association Thalia',
      title: strings.title4,
      logoSrc: thaliaLogo,
      content: <p>{strings.content4}</p>,
    },
    {
      date: '2021 - 2023',
      location: 'Private residence',
      title: strings.title5,
      logoSrc: homecareLogo,
      content: <p>{strings.content5}</p>,
    },
    {
      date: '2015 - 2019',
      location: 'Twents Carmel College',
      title: strings.title6,
      logoSrc: tccLogo,
      content: <p>{strings.content6}</p>,
    },
    {
      date: '2016 -2018',
      location: 'Albert Heijn, Oldenzaal',
      title: strings.title7,
      logoSrc: AHLogo,
      content: <p>{strings.content7}</p>,
    },
    {
      date: '2016',
      location: 'Massage practice of an acquaintance',
      title: strings.title8,
      logoSrc: webdevLogo,
      content: (
        <p>{strings.content8}
           (
          <a href="http://www.massage-ayuda.nl" rel="noopener noreferrer" target="_blank">
            www.massage-ayuda.nl
          </a>
          )
        </p>
      ),
    },
  ];
};

export const getLocalizedContent = (locale: Locale): LocalizedContent => {
  const strings = localeStrings[locale];

  return {
    homePageMeta: strings.homePageMeta,
    hero: {
      imageSrc: heroImage,
      name: locale === 'nl' ? 'Ik ben Roel.' : `I'm Roel Nijhuis.`,
      description: (
        <>
          <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
            {strings.hero.intro}
          </p>
          <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
            {strings.hero.body}
          </p>
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
    skills: makeSkillGroups(locale),
    education: makeEducation(locale),
    experience: makeExperience(locale),
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
          text: locale === 'nl' ? 'Nijmegen, Nederland' : 'Nijmegen, Netherlands',
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
      label: [strings.socialLabels.email, strings.socialLabels.linkedin, strings.socialLabels.github, strings.socialLabels.instagram][index],
    })),
  };
};
