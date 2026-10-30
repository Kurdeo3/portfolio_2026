import { assets } from "../../assets/assets";

export const profile = {
    name: "Eulogius Kurdeo Hesay",
    firstName: "Eulogius Kurdeo",
    lastName: "Hesay",
    role: "FullStack Developer",
    location: "Kediri, East Java, Indonesia",
    introduction: "Passionate about building reliable web applications, combining analytical thinking with backend and frontend development skills to create practical solutions that address user needs.",
    // introduction: "I'm a fresh graduated Informatics Student at Universitas Atma Jaya Yogyakarta, passionate about Software Development with a strong interest in web development and database as a full-stack developer.",
    email: "eulogiushesay@gmail.com",
    github: "https://github.com/Kurdeo3",
    linkedin: "https://www.linkedin.com/in/eulogius-kurdeo-hesay-863923258/",
    portfolioUrl: "https://eulogiuskurdeohesay.vercel.app/",
    cvUrl: "/CV_Eulogius Kurdeo Hesay.pdf",
};

export const about = {
    description: "I am an Informatics graduate from Universitas Atma Jaya Yogyakarta with a strong foundation in software development and database technologies. As a Full Stack Developer Intern, I contributed to several web applications, gaining experience in requirements analysis, database design, development, and testing. I also mentored over 120 students as a Database Assistant Lecturer. With strong analytical thinking and problem-solving skills, I enjoy translating requirements into effective technical solutions and collaborating to build software that meets user needs as Backend or Fullstack Developer.",
    education: "Universitas Atma Jaya Yogyakarta",
    degree: "Bachelor's Degree in Informatics",
    period: "2022 - 2026",
    gpa: "3.92 / 4.00",
};

export const experiences = [
    {
        role: "FullStack Developer Intern",
        company: "PT Digital Nusantara Adisolusi",
        period: "Aug 2025 - Feb 2026",
        type: "Internship",
        description: "Contributed to multiple web application projects, working on backend services, database integration, API development, and frontend implementation.",
        highlights: [
            "Contributed to backend and frontend development, from requirements analysis and system design to implementation, testing, debugging, and deployment.",
            "Designed database structures, diagrams, and schemas based on project requirements.",
            "Developed backend functionalities and REST APIs using Native PHP, Node.js, and Express.js, with MySQL and MongoDB for data management.",
            "Developed React and TypeScript frontend features, including dashboard and portfolio features, responsive interfaces, UI adjustments, and bug fixing.",
            "Performed API testing and System Integration Testing using Postman, including positive and negative test cases and test documentation.",
            "Collaborated with development teams using GitHub, GitLab, Bitbucket, and Jira for version control, task management, and progress tracking.",
        ],
        technologies: [
            "PHP",
            "Node.js",
            "Express.js",
            "React",
            "TypeScript",
            "Java",
            "MySQL",
            "PostgreSQL",
            "MongoDB",
            "Figma"
        ],
    },
    {
        role: "Assistant Lecturer - Database",
        company: "Universitas Atma Jaya Yogyakarta",
        period: "Aug 2024 - Feb 2025",
        type: "Academic Contract",
        description: "Assisted students in learning database concepts, queries, and practical exercises across relational and non-relational database technologies.",
        highlights: [
            "Guided more than 120 students through database practical sessions.",
            "Prepared and delivered hands-on database practical sessions using Oracle, MongoDB, and GraphDB.",
            "Guided students through SQL queries, JOINs, subqueries, set operators, aggregation, DDL, and DML.",
            "Evaluated students' practical work and assignments, providing feedback to improve their technical skills and application of database concepts.",
        ],
        technologies: [
            "Oracle",
            "MongoDB",
            "GraphDB",
            "SQL",
            "NoSQL"
        ],
    },
];

export type Skill = {
    name: string;
    icon?: (typeof assets)[keyof typeof assets];
};

export type SkillGroup = {
    title: string;
    description: string;
    skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
    {
        title: "Programming Languages",
        description:
        "Programming languages used for application development and database queries.",
        skills: [
        { name: "C", icon: assets.c },
        { name: "PHP", icon: assets.php },
        { name: "Java", icon: assets.java },
        { name: "JavaScript", icon: assets.javascript },
        { name: "TypeScript", icon: assets.typescript },
        { name: "Dart", icon: assets.dart },
        { name: "Node.js", icon: assets.node_js },
        ],
    },
    {
        title: "Frameworks & Libraries",
        description:
        "Frameworks and libraries used to build web and mobile applications.",
        skills: [
        { name: "Laravel", icon: assets.laravel },
        { name: "React", icon: assets.react },
        { name: "Flutter", icon: assets.flutter },
        { name: "Express.js", icon: assets.express_js },
        { name: "Tailwind CSS", icon: assets.tailwind },
        { name: "Bootstrap", icon: assets.bootstrap },
        ],
    },
    {
        title: "Database",
        description:
        "Database technologies used to store, manage, and query application data.",
        skills: [
        { name: "MySQL", icon: assets.mysql },
        { name: "PostgreSQL", icon:assets.postgresql },
        { name: "Oracle", icon: assets.oracle },
        { name: "MongoDB", icon: assets.mongo_db },
        { name: "Firebase", icon: assets.firebase },
        ],
    },
    {
        title: "Tools & Practices",
        description:
        "Tools used for version control, API testing, design, and collaboration.",
        skills: [
        { name: "VS Code", icon: assets.vscode },
        { name: "Git", icon: assets.git },
        { name: "GitHub", icon: assets.github },
        { name: "GitLab", icon:assets.gitlab },
        { name: "Bitbucket", icon:assets.bitbucket },
        { name: "Postman", icon: assets.postman },
        { name: "Figma", icon: assets.figma },
        { name: "Jira", icon:assets.jira },
        ],
    },
];



export const projects = [
  {
    number: "01",
    category: "Web Development",
    title: "SD Maria Immaculata Cilacap",
    description:
      "A school profile and e-Rapor website that provides school information and enables teachers to manage student report cards while allowing parents to view and download academic results.",
    technologies: ["PHP", "Laravel", "MySQL", "Tailwind CSS"],
    color: "peach",
    link: "https://sdmariaimmaculatacilacap.web.id/",
    github: "",
    image: "/images/cover_sdmaria.png",
  },
  {
    number: "02",
    category: "Web Application",
    title: "Rumah Karya Vokasi",
    description:
      "A Learning Management System (LMS) designed to support vocational education by providing a digital platform for learning activities involving students and teachers.",
    technologies: ["PHP", "MySQL", "React", "TypeScript"],
    color: "blue",
    link: "https://rumahkaryavokasi.wongsobisa.com/",
    github: "",
    image: "/images/cover_rumahvokasi.png",
  },
  {
    number: "03",
    category: "Web Application",
    title: "MCMI-IV",
    description:
      "A web-based psychological assessment platform that enables clients to complete assessment questionnaires and helps psychologists review results through visual reports and graphs.",
    technologies: ["PHP", "MySQL", "React", "TypeScript"],
    color: "green",
    link: "https://mcmi-iv-dev.mahkotatirtaarum.co.id/",
    github: "",
    image: "/images/cover_mcmi.png",
  },
  {
    number: "04",
    category: "Web Development",
    title: "Padukuhan Jarah III",
    description:
      "A village information website featuring the village profile, local businesses, news, population data, photo galleries, and an admin dashboard for managing website content.",
    technologies: ["PHP", "Laravel", "MySQL", "Tailwind CSS"],
    color: "peach",
    link: "",
    github: "https://github.com/Kurdeo3/Jarah_III.git",
    image: "/images/cover_jarah3.png",
  },
  {
    number: "05",
    category: "Web Development",
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects, technical skills, and professional experience through a modern design and interactive animations.",
    technologies: [
      "Next.js",
      "React",
      "Framer Motion",
      "Tailwind CSS",
      "Vercel",
    ],
    color: "blue",
    link: "https://eulogiuskurdeohesay.vercel.app/",
    github: "",
    image: "/images/cover_porto.png",
  },
  {
    number: "06",
    category: "Web & Mobile Application",
    title: "ReuseMart",
    description:
      "A cross-platform e-commerce application for second-hand goods that supports product sales, donations, consignment, and operational management for buyers, organizations, and staff.",
    technologies: [
      "PHP",
      "JavaScript",
      "Dart",
      "Laravel",
      "Flutter",
      "Bootstrap",
      "Tailwind CSS",
      "MySQL",
    ],
    color: "green",
    link: "",
    github: "",
    image: "/images/cover_reusemart.png",
  },
  {
    number: "07",
    category: "Web Application",
    title: "Atma Hospital",
    description:
      "A hospital service website that allows patients to register for medical checkups and schedule doctor appointments, while administrators manage doctor data and appointment records.",
    technologies: ["PHP", "Laravel", "Bootstrap", "MySQL"],
    color: "peach",
    link: "",
    github: "https://github.com/Kurdeo3/AtmaHospital.git",
    image: "/images/cover_atma_hospital.png",
  },
  {
    number: "08",
    category: "Mobile Application",
    title: "Gym Point",
    description:
      "A gym service booking application that allows users to explore personal trainers, gym equipment, and fitness classes, then book their preferred services through a mobile platform.",
    technologies: ["Dart", "Flutter", "Laravel", "MySQL", "Firebase"],
    color: "blue",
    link: "",
    github: "https://github.com/Kurdeo3/GymPoint.git",
    image: "/images/cover_gym_point.png",
  },
  {
    number: "09",
    category: "Desktop Application",
    title: "Thousand Sunny Hotel",
    description:
      "A hotel service booking application developed in C that enables users to reserve rooms and other hotel services using fundamental data structures and programming concepts.",
    technologies: ["C"],
    color: "green",
    link: "",
    github: "https://github.com/Kurdeo3/ThousandSunnyHotel.git",
    image: "/images/realestatexyz.png",
  },
];

