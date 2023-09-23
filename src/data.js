import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './images/assets/project-1.png';
import Work2 from './images/assets/project-2.jpg';
import Work3 from './images/assets/project-3.jpeg';
import Work4 from './images/assets/project-4.jpeg';
import Work5 from './images/assets/project-5.jpg';
import Work6 from './images/assets/project-6.jpg';

import Theme1 from './images/assets/purple.png';
import Theme2 from './images/assets/red.png';
import Theme3 from './images/assets/blueviolet.png';
import Theme4 from './images/assets/blue.png';
import Theme5 from './images/assets/goldenrod.png';
import Theme6 from './images/assets/magenta.png';
import Theme7 from './images/assets/yellowgreen.png';
import Theme8 from './images/assets/orange.png';
import Theme9 from './images/assets/green.png';
import Theme10 from './images/assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '',
    hashId: 'home'
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '#about',
    hashId: 'about'
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '#portfolio',
    hashId: 'portfolio'
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '#contact',
    hashId: 'contact'
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Shubham',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Kulkarni',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '25 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'SambhajiNagar',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+919604514363',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'shubhamkulkarni731@gmail.com',
  },

  {
    id: 9,
    title: 'Skype : ',
    description: '',
  },

  {
    id: 10,
    title: 'Languages : ',
    description: 'Marathi, English, Hindi',
  },
];

export const stats = [
  {
    id: 1,
    no: '1+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '20+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '100+',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '5+',
    title: 'Awards <br /> Won',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'Sept 2022 - PRESENT',
    title: 'MERN Stack Developer <span> SDLC CORP </span>',
    desc: 'Here my role is to build response web page in React JS, Next JS with backend Node JS.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'Dec 2021 - Aug 2022',
    title: 'Python Web Scraper <span> Deep Compute </span>',
    desc: 'Here my role is find blog, articles sites and build crawler config to scrap all data from this sites.',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2019 - 2021',
    title: 'Freelancer <span> Chegg.com </span>',
    desc: 'Here i am helping students with their questions with proper explanation.',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2021',
    title: 'MSc (Computer) <span> Rajarshi Shahu Mahavidyalaya, Deolali Pravara (SPPU) </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2015',
    title: 'HSC (Science) <span> Chattrapati Shivaji Mahavidyalaya, Deolali Pravara </span>',
    desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2013',
    title: 'SSC <span> Pravara Vidyalaya, Guha </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '90',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '75',
  },

  {
    id: 3,
    title: 'CSS',
    percentage: '80',
  },

  {
    id: 4,
    title: 'Tailwind CSS',
    percentage: '80',
  },

  {
    id: 5,
    title: 'Express JS',
    percentage: '70',
  },

  {
    id: 6,
    title: 'Jquery',
    percentage: '50',
  },

  {
    id: 7,
    title: 'React JS',
    percentage: '75',
  },

  {
    id: 8,
    title: 'Node JS',
    percentage: '75',
  },

  {
    id: 9,
    title: 'Next JS',
    percentage: '80',
  },

  {
    id: 10,
    title: 'Blockchain',
    percentage: '40',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Fancy Clock',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Analog & Digital Clock',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Shubham',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://fancy-clock-by-shubham.netlify.app/',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Website Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Video Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Premium',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Video Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Premium',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Landing Page',
    details: [
      {
        title: 'Project : ',
        desc: 'Website',
      },
      {
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        title: 'Language : ',
        desc: 'React JS, Node JS',
      },
      {
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Photo Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dibble.com',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(187, 80%, 50%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(0, 80%, 50%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(289, 80%, 50%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(255, 80%, 50%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(66, 80%, 50%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 80%, 50%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(94, 80%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 80%, 50%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(111, 80%, 40%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(51, 90%, 50%)',
  },
];
