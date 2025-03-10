import { assets } from "@/public/assets";

export const workData = [
  {
    title: "Frontend project",
    description: "Web Design",
    bgImage: assets.work1,
  },
  {
    title: "Geo based app",
    description: "Mobile App",
    bgImage: assets.work2,
  },
  {
    title: "Photography site",
    description: "Web Design",
    bgImage: assets.work3,
  },
  {
    title: "UI/UX designing",
    description: "UI/UX Design",
    bgImage: assets.work4,
  },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Web design",
    description: "Web development is the process of building, programming...",
    link: "",
  },
  {
    icon: assets.mobile_icon,
    title: "Mobile app",
    description:
      "Mobile app development involves creating software for mobile devices...",
    link: "",
  },
  {
    icon: assets.ui_icon,
    title: "UI/UX design",
    description:
      "UI/UX design focuses on creating a seamless user experience...",
    link: "",
  },
  {
    icon: assets.graphics_icon,
    title: "Graphics design",
    description: "Creative design solutions to enhance visual communication...",
    link: "",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description: "HTML, CSS, JavaScript React Js, Next Js",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "B.Tech in Computer Science",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built more than 5 projects",
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

export const aboutMe = `Front-End Developer with 4+ years of experience building high-performance, cross-browser compliant web apps. Passionate about creating scalable and efficient solutions while continuously learning and pushing the boundaries of web development. Always ready to build the next big thing.






`;

export const links = [
  { name: "github", url: "https://github.com/TheBernieA" },
  { name: "linkedin", url: "https://www.linkedin.com/in/theberniea/" },
];

export const experiences: any = {
  "Tech Fusion": {
    title: " Founder & Lead Full-Stack Developer @ Tech Fusion",
    date: "November 2024 - Present",
    details: [
      "Developed features and implemented end-to-end testing for a SaaS reporting and auditing platform.",
      "Created accessible, efficient, and secure user interfaces for various platforms.",
      "Led the development of multi-domain web applications with features such as internationalization, localization, secure authentication, and CSV data processing, delivering simple yet sophisticated UI solutions.",
    ],
  },
  Develhope: {
    title: "Frontend Engineer and Tutor Assistant/Lead @ Develhope",
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
];
