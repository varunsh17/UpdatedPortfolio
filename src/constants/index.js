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
  redux,
  tailwind,
  nodejs,
  burpsuite,
  mongodb, logo,
  git,
  figma,
  docker,
  logo1,
  carrent,
  download12,
  jobit,
  tripguide,
  firechat, chrome_extension, maps,
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
    title: "Devops",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Freelancer",
    icon: creator,
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
    name: "burpsuite",
    icon: burpsuite,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
  // {
  //   name: "kubernetes",
  //   icon: download12,
  // },

];

const experiences = [


  {
    title: "Freelancing",
    company_name: "Freelancer/upwork",
    icon: logo,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using MERN stack and other related technologies.",
      "Delivering clients products within desired amount of time with maximum output.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer Intern",
    company_name: "Skyware Automation",
    icon: logo1,
    iconBg: "#E6DEDD",
    date: "May 2022 - July 2022",
    points: [
      "Reduced data storage up to 22% with help of UseContext hook that increases site efficiency by 15% .",
      "Developed and deployed React Hooks, improving code Readability and Component Tree.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Developing and maintaining web applications using React.js and other related technologies.",

    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Hackathon hosted by DTU for product development in which our team made a google search. I handled the API fetching and displaying part to the website.",
    name: "VIHAAN 4.0",
    designation: "Node.js developer",
    company: "DTU",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "A individual competition in which I made a movie website that uses API for fetching the movies and Bootstrap for the frontend part",
    name: "Quollab Product Development",
    designation: "Fullstack developer",
    company: "NSUT",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Open-source contribution in organizations mainly in Reactjs and Backend development, and exposure of Freelancing.",
    name: "Hacktoberfest",
    designation: "Developer",
    company: "Open-source",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Chrome Extension",
    description: "A Water Reminder for drinking water in desired amount of time to Stay hydrated during coding.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: chrome_extension,
    source_code_link: "https://chrome.google.com/webstore/detail/stay-hydrated/fomabijmpnfclpemikfcenpgpampogmo?hl=en-US",
  },
  {
    name: "Firechat",
    description:
      "A Chatting website made using Firebase and React-js as real time database with google authentication",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: firechat,
    source_code_link: "https://firechat17.netlify.app/",
  },
  {
    name: "Travel Maps",
    description:
      "Google Maps clone using API and get to know your current area of location",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: maps,
    source_code_link: "https://maps-clone-varun.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
