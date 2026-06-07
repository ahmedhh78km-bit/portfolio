
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  protfolio,
  threejs,
  Ecommerce,
  full
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
  title: "Frontend Developer",
  icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },

];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Freelance / Personal Projects",
    icon: web,
    iconBg: "#383E56",
    date: "2023 - Present",
    points: [
      "Building responsive web applications using React.js and Tailwind CSS.",
      "Creating modern UI components with clean and reusable code.",
      "Implementing animations and interactive user experiences using Framer Motion.",
      "Ensuring mobile-first design and cross-browser compatibility.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Learning & Practice",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "2023 - Present",
    points: [
      "Developing RESTful APIs using Node.js and Express.",
      "Working with MongoDB for database management.",
      "Handling authentication and secure API structures.",
      "Integrating backend services with frontend applications.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Freelance Projects",
icon: web,
      iconBg: "#383E56",
    date: "2024 - Present",
    points: [
      "Developing full stack applications using MERN stack.",
      "Connecting frontend interfaces with backend APIs.",
      "Deploying projects and managing production environments.",
      "Building scalable and performance-optimized web apps.",
    ],
  },
  {
    title: "Personal Projects",
    company_name: "Portfolio Work",
    icon: mobile,
    iconBg: "#E6DEDD",
    date: "2023 - Present",
    points: [
      "Creating real-world projects to improve development skills.",
      "Experimenting with new technologies like Three.js and animations.",
      "Building portfolio-ready applications for clients and practice.",
      "Continuously improving code quality and architecture understanding.",
    ],
  },
];
const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];
const projects = [
  {
    name: "Personal Portfolio Website",
    description:
      "My personal developer portfolio built with React, Tailwind CSS, and Framer Motion. It showcases my skills, experience, and projects in a modern interactive design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "framer motion",
        color: "pink-text-gradient",
      },
    ],
        image: protfolio,

    source_code_link: "https://github.com/ahmedhh78km-bit",
    live_link: "https://github.com/ahmedhh78km-bit",
  },

  {
    name: "E-commerce Platform",
    description: "Coming soon...",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
            image: Ecommerce,

    source_code_link: "#",
    live_link: "#",
  },

  {
    name: "Full Stack Web App",
    description: "Coming soon...",
    tags: [
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
    ],
    image: full,
    source_code_link: "#",
    live_link: "#",
  },
];

export { services, technologies, experiences, testimonials, projects };

