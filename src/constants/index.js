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
  git,
  figma,
  skillup,
  movieapp,
  splitcost,
  calculator,
  ToDo,
  imagelayout,
  threejs

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
    title: "Javascript Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Developer",
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },

];

const experiences = [

  {
    title: "Frontend Web Developer",
    company_name: "Skillup Labs",
    icon: skillup,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: "Train fleet Presentation Team",
    company_name: "Downer",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE12apNoBJNP_opmZ452k5kDbbm701e9xknt-vDKsxHg&s",
    iconBg: "#E6DEDD",
    date: "Sep 2021 - Mar 2024",
    points: [
      "Carrying out presentation work for Sydney Trains fleet",
    ],
  },
];
const educations = [
  {
    degree: "Bachelor in IT",
    school: "Kent Institute",
    year: "2023 - 2024",
    location: "sydney, Australia",
    icon: "https://kent.edu.au/wp-content/uploads/Kent-Institute-Logo.png",
    iconBg: "#E6DEDD",
  },
  {
    degree: "Bachelor in IT",
    school: "Victorian Institute of Technology",
    year: "2021 - 2023",
    location: "sydney, Australia",
    icon: "https://www.vit.edu.au/assets/logo.png",
    iconBg: "#E6DEDD",
  }
]
const testimonials = [
  {
    testimonial:
      "Sarad is a top developer—energetic, motivated, and adept at tackling challenges. He consistently delivers high-quality work on time.",
    name: "Nabin Singh",
    designation: "Mentor",
    company: "Skillup Labs",
    url: "https://www.linkedin.com/in/nabinsingh/",
    image: "https://media.licdn.com/dms/image/C5603AQFYZUGwpAeKjA/profile-displayphoto-shrink_200_200/0/1590555681223?e=1718236800&v=beta&t=4CO6uwQDloBr2LJey1g1OQcYKoritMhf6q9U8XsOSn0",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Sarad does.",
    name: "Sushil Poudel",
    designation: "CEO",
    company: "Pkr tech service ",
    url: "https://www.linkedin.com/in/dollarboysushil/",
    image: "https://media.licdn.com/dms/image/D5603AQHvSX7FV7Y9Cw/profile-displayphoto-shrink_100_100/0/1697834949432?e=1718236800&v=beta&t=xTq41NU1YLpsqZFmVuLeGgp0vPviBWvftyeaxsLl8nE",
  },
  {
    testimonial:
      "After Sarad optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Khadka",
    designation: "Manager",
    company: "Neplalese Foodary",
    url: "",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/actress-5691543-4741084.png",
  },
];

const projects = [
  {
    name: "Movie Search App",
    description:
      "Developed a movie search web app using the TMDb API, showcasing skills in API data fetching, dynamic UI creation with JavaScript, and presenting engaging movie.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "api",
        color: "white-text-gradient",
      },
    ],
    image: movieapp,
    source_code_link: "hhttps://github.com/saradpoudel/Movie-Search-App",
  },
  {
    name: "Split-Cost App",
    description:
      "Developed a web tool to simplify splitting costs among friends using javascript. You can add expenses, assign shares, and calculate settlements. ",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: splitcost,
    source_code_link: "https://github.com/saradpoudel/Split-Cost",
  },
  {
    name: "Scientific Calculator",
    description:
      "Created a full-featured scientific calculator app. It handles various mathematical functions and ensures accurate calculations.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: calculator,
    source_code_link: "https://github.com/saradpoudel/calculator",
  },
  {
    name: "To Do App",
    description:
      "Built a web app to manage to-do lists. You can show, add, delete, and mark tasks as complete. ",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: ToDo,
    source_code_link: "https://github.com/saradpoudel/TO-DO-lists",
  },
  {
    name: "Image Layout App ",
    description:
      "Developed an app using JavaScript to dynamically create and arrange image layouts.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: imagelayout,
    source_code_link: "https://github.com/saradpoudel/image-layout",
  },
];

export { services, technologies, experiences, testimonials, projects, educations };