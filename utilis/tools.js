import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

import { BiNetworkChart } from "react-icons/bi";
import { AiFillDatabase } from "react-icons/ai";

const navLinks = [
  {
    title: "About",
    id: "about",
  },
  {
    title: "Skills",
    id: "skills",
  },

  {
    title: "Works",
    id: "works",
  },
  {
    title: "Contact",
    id: "contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: "/service/web.png",
  },
  {
    title: "Backend",
    icon: "/service/backend.png",
  },
  {
    title: "Mobile",
    icon: "/service/mobile.png",
  },
  {
    title: "Content Creator",
    icon: "/service/creator.png",
  },
];
const socialContacts = [
  {
    id: "facebook",
    link: "https://www.facebook.com/MissileMan47/",
    icon: <FaFacebook />,
  },
  {
    id: "twitter",
    link: "https://twitter.com/Abu_Talha2020",
    icon: <FaTwitter />,
  },
  {
    id: "linkedin",
    link: "https://www.linkedin.com/in/abutalha2022/",
    icon: <FaLinkedin />,
  },
];

const technologies = [
  {
    name: "HTML 5",
    value: 90,
    icon: "/tech/html.png",
    color: "#ea580c",
  },
  {
    name: "CSS 3",
    value: 100,
    icon: "/tech/css.png",
    color: "#4338ca",
  },
  {
    name: "JavaScript",
    value: 70,
    icon: "/tech/javascript.png",
    color: "#fbbf24",
  },
  {
    name: "TypeScript",
    value: 20,
    icon: "/tech/typescript.png",
    color: "blue",
  },
  {
    name: "React JS",
    value: 60,
    icon: "/tech/reactjs.png",
    color: "blue",
  },
  {
    name: "Redux Toolkit",
    value: 70,
    icon: "/tech/redux.png",
    color: "indigo",
  },
  {
    name: "Tailwind CSS",
    value: 90,
    icon: "/tech/tailwind.png",
    color: "blue",
  },
  {
    name: "Node JS",
    value: 45,
    icon: "/tech/nodejs.png",
    color: "blue",
  },
  {
    name: "MongoDB",
    value: 45,
    icon: "/tech/mongodb.png",
    color: "green",
  },
  {
    name: "Three JS",
    value: 10,
    icon: "/tech/threejs.svg",
    color: "gray",
  },
  {
    name: "git",
    value: 30,
    icon: "/tech/git.png",
    color: "#ea580c",
  },
  {
    name: "figma",
    value: 10,
    icon: "/tech/figma.png",
    color: "#800080",
  },
  {
    name: "docker",
    value: 5,
    icon: "/tech/docker.png",
    color: "blue",
  },
];
const experiences = [
  {
    title: "Front End Developer",
    company_name: "Call for refferal",
    icon: <BiNetworkChart />,
    iconBg: "#383E56",
    date: "November 2022 - April 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "New Tech Computer Training Center",
    icon: <AiFillDatabase />,
    iconBg: "#383E56",
    date: "December 2016 - Current",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];
const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Jhanker Mahbub",
    designation: "CEO",
    company: "Programming Hero",
    link: "https://www.linkedin.com/in/jhankar/",
    image: "https://i.ibb.co/zJLCk9h/jhanker.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Arnab Shaho",
    designation: "CEO",
    company: "Call For Referral",
    link: "https://www.linkedin.com/in/arnab-sahoo-0b3427187/",
    image: "https://i.ibb.co/M5FF6mg/arnab.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Muhammad Rifat",
    designation: "job Placement Executive",
    company: "Programming Hero",
    link: "https://www.linkedin.com/in/sheikh-mohammad-rifat/",
    image: "https://i.ibb.co/ChD8TwJ/rifat.jpg",
  },
];

const projects = [
  {
    name: "Car Service",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: "https://i.ibb.co/mFfRq6c/Capture-1.png",
    source_code_link: "https://github.com/Abutalha400212/Car-Service",
  },
  {
    name: "Doctor Portal",
    description:
      "Web application that enables users to search doctor for treatment, view estimated visit slot time for booking. user can review on that doctor and admin can add or remove doctor",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "blue-text-gradient",
      },
    ],
    image: "https://i.ibb.co/1d44Td4/Capture-1.png",
    source_code_link: "https://github.com/Abutalha400212/doctors-portal",
  },
  {
    name: "Resale Market",
    description:
      "Web application that enables users to search used mobile, view estimated old and new price for buying and manage mobile from various providers a convenient needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
    ],
    image: "https://i.ibb.co/VMs3yPW/Capture-1.png",
    source_code_link: "https://github.com/Abutalha400212/Resale-Market",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "blue-text-gradient",
      },
    ],
    image: "https://i.ibb.co/JQzYSrn/Capture-2.png",
    source_code_link: "https://github.com/Abutalha400212/domestic-portal",
  },
  {
    name: "Job Portal",
    description:
      "A job portal, also known as a career portal, is a modern name for an online job board that helps applicants find jobs and aids employers in their quest to locate ideal candidates. Anyone can not add job except admin but explore all.",
    tags: [
      {
        name: "next JS",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
    ],
    image: "https://i.ibb.co/9t316Cq/Capture.png",
    source_code_link: "https://github.com/Abutalha400212/job-portal",
  },
  {
    name: "Newcleus Media",
    description:
      "A socila platform for people tha is very Effective sharing expression and feedbacd. There are two type authentication system, use can sign in Or sign Up your account then he/she can be accessed",
    tags: [
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "blue-text-gradient",
      },
      {
        name: "node JS",
        color: "green-text-gradient",
      },
    ],
    image: "https://i.ibb.co/HzTbTN3/Capture1.png",
    source_code_link: "https://github.com/Abutalha400212/SocialMediaClient",
  },
];
export {
  socialContacts,
  services,
  navLinks,
  technologies,
  experiences,
  projects,
  testimonials,
};
