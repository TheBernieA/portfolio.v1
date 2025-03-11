import { assets } from "@/public/assets";
import { dwellFinders } from "@/public/assets/project-images";

export const workData = [
  {
    title: "dwell finders",
    description:
      "A comprehensive online platform to facilitate house hunting by providing detailed listings for rentals and sales.",
    githubLink: "",
    externalLink: "https://dwellfinders.com/",
    bgImage: dwellFinders,
    tools: [
      "typescript",
      "nextjs",
      "react leaflet",
      "motion framer",
      "prisma",
      "postgressql",
      "express",
      "nodejs",
      "socket",
      "digitalocean",
      "docker",
    ],
  },
];

export const toolsData = [
  assets.vscode,
  assets.firebase,
  assets.mongodb,
  assets.figma,
  assets.git,
];

export const presentation = `A software engineer based in Palermo, Italy, specializing in frontend technologies and building scalable systems.
Currently bringing ideas to life at TechFusion, my own startup 🚀`;

export const aboutMe = `Front-End Developer with 4+ years of experience building high-performance, cross-browser compliant web apps. Passionate about creating scalable and efficient solutions while continuously learning and pushing the boundaries of web development. Always ready to build the next big thing.`;

export const links = [
  { name: "github", url: "https://github.com/TheBernieA" },
  { name: "linkedin", url: "https://www.linkedin.com/in/theberniea/" },
];

export const experiences: any = {
  "Tech Fusion": {
    title: " Founder & Lead Full-Stack Developer @ Tech Fusion",
    companyLink: "",
    date: "November 2024 - Present",
    details: [
      "Developed features and implemented end-to-end testing for a SaaS reporting and auditing platform.",
      "Created accessible, efficient, and secure user interfaces for various platforms.",
      "Led the development of multi-domain web applications with features such as internationalization, localization, secure authentication, and CSV data processing, delivering simple yet sophisticated UI solutions.",
    ],
  },
  Develhope: {
    title: "Frontend Engineer and Tutor Assistant/Lead @ Develhope",
    companyLink: "https://www.develhope.co/",
    date: "december 2021 - december 2024",
    details: [
      "Developed 10+ responsive UIs in Angular/React, boosting user engagement via A/B testing.",
      "Documented APIs and codebases using Swagger and JSDoc, accelerating onboarding for new developers.",
      "Conducted code reviews, reducing runtime errors through Jest and ESLint integration.",
      "Mentored 20+ students in React, Agular, Node.js, TypeScript, and AWS, achieving a 95% course completion rate. ",
    ],
  },
};

export const frontend = [
  "HTML5",
  "CSS3",
  "Python",
  "Typescript",
  "Javascript ES6+",
  "RxJS",
  "Redux",
  "Ngrx",
  "Angular > 12",
  "Reactjs",
  "Nextjs",
  "Tailwind",
  "Bootstrap",
  "Motion framer",
  "Material Design",
];
export const backend = ["NodeJS", "MongoDB", "Express", "Prisma", "REST APIs"];
export const database = ["MongoDB", "PostgresSQL"];
export const tools = [
  "Git/GitHub",
  "Docker",
  "AWS(EC2, s3)",
  "CI/CD",
  "DigitalOcean",
  "vscode",
  "figma",
];

export const otherProjects = [
  {
    gitHubLink: "https://github.com/TheBernieA/portfolio.v1",
    externalLink: "http://bernardamankwah.vercel.app/",
    title: "Personal Website",
    description: `My first portfolio website, built using Next.js and Framer Motion for animations. This project was a great learning experience, helping me understand the power of Next.js for performance optimization and how Framer Motion makes creating smooth, interactive animations effortless. It was a fun and insightful journey into building modular and dynamic web experiences.`,
    tools: ["nextjs", "tailwind", "motion framer", "vercel"],
  },
  {
    gitHubLink: "https://github.com/TheBernieA/CRUD-API",
    externalLink: "",
    title: "CRUD API",
    description: `I developed a CRUD API using Node.js and Express, which was a valuable learning experience in backend development. This project helped me understand how controllers structure an application and how authentication mechanisms work to secure user data. Through this process, I gained hands-on experience with RESTful principles, middleware, and user authentication strategies, strengthening my backend development skills.`,
    tools: ["nodejs", "express", "multer", "jwt"],
  },
  {
    gitHubLink: "https://github.com/TheBernieA/tradebot",
    externalLink: "",
    title: "Trade execution system",
    description: `I build a trading execution system which allows users to place as many trades they want to place at the click of a button. Although my knowledge in trading is very low, I was able to bring this idea to life and I had a lot of fun doing it.`,
    tools: ["python", "javascript", "html", "css", "Flask", "MetaTrader5"],
  },
  {
    gitHubLink: "https://github.com/TheBernieA/todo-angular-19",
    externalLink: "",
    title: "Todo",
    description: `I build a simple todo app using angular 19 to explore the lastest features angular has to offer with my main focus on understanding how signals work.`,
    tools: ["angular 19", "angular signals", "typescript"],
  },
  {
    gitHubLink: "",
    externalLink: "https://fancy-pony-c2738c.netlify.app/",
    title: "a nike landing page",
    description: `A sleek and fully responsive landing page web application built with React.js and styled using Tailwind CSS. This project not only enhanced my understanding of Tailwind's utility-first approach but also deepened my expertise in creating modern, responsive user interfaces.`,
    tools: ["reactjs", "tailwind CSS", "typescript", "netlify"],
  },
];
