import {
  FaJava,
  FaPython,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";

import { SiSpringboot, SiMysql, SiPostman, SiTailwindcss } from "react-icons/si";

const tools = [
  // Languages
  { name: "Java", icon: <FaJava />, level: "Advanced", type: "Backend" },
  { name: "Python", icon: <FaPython />, level: "Intermediate", type: "Backend" },
  { name: "C", icon: <FaDatabase />, level: "Intermediate", type: "Backend" },
  { name: "JavaScript", icon: <FaJs />, level: "Intermediate", type: "Frontend" },

  // Frameworks
  { name: "Spring Boot", icon: <SiSpringboot />, level: "Advanced", type: "Backend" },
  { name: "React", icon: <FaReact />, level: "Intermediate", type: "Frontend" },
  { name: "HTML", icon: <FaHtml5 />, level: "Advanced", type: "Frontend" },
  { name: "CSS", icon: <FaCss3Alt />, level: "Advanced", type: "Frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, level: "Intermediate", type: "Frontend" },

  // Database & Cloud
  { name: "MySQL", icon: <SiMysql />, level: "Advanced", type: "Database" },
  { name: "AWS EC2", icon: <FaAws />, level: "Beginner", type: "Cloud" },
  { name: "AWS S3", icon: <FaAws />, level: "Beginner", type: "Cloud" },

  // Tools
  { name: "Git", icon: <FaGitAlt />, level: "Advanced", type: "Tools" },
  { name: "GitHub", icon: <FaGithub />, level: "Advanced", type: "Tools" },
  { name: "Postman", icon: <SiPostman />, level: "Intermediate", type: "Tools" },
];

export default tools;
