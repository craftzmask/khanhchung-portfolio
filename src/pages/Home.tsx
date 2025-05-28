import { CircleCheck, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import TypingCodeBlock from "../components/TypingCodeBlock"
import { Separator } from "@/components/ui/separator"
import { FaReact, FaJava, FaPython, FaNode, FaDocker, FaAws, FaHtml5, FaCss3Alt, FaLinkedin, FaGithub } from "react-icons/fa";
import { BiLogoSpringBoot, BiLogoJavascript, BiLogoTypescript, BiLogoMongodb, BiLogoPostgresql, BiLogoGraphql } from "react-icons/bi";
import ProjectList from "@/components/project-list"

const Home = () => {
  const techStack = [
    // Languages
    { name: "JavaScript", icon: BiLogoJavascript, hoverColor: "hover:text-[#F7DF1E]" },
    { name: "TypeScript", icon: BiLogoTypescript, hoverColor: "hover:text-[#3178C6]" },
    { name: "Java", icon: FaJava, hoverColor: "hover:text-[#EA2D2E]" },
    { name: "Python", icon: FaPython, hoverColor: "hover:text-[#3776AB]" },

    // Frontend
    { name: "React", icon: FaReact, hoverColor: "hover:text-[#61DAFB]" },
    { name: "HTML5", icon: FaHtml5, hoverColor: "hover:text-[#E34F26]" },
    { name: "CSS3", icon: FaCss3Alt, hoverColor: "hover:text-[#1572B6]" },

    // Backend
    { name: "Node.js", icon: FaNode, hoverColor: "hover:text-[#68A063]" },
    { name: "Spring Boot", icon: BiLogoSpringBoot, hoverColor: "hover:text-[#6DB33F]" },
    { name: "GraphQL", icon: BiLogoGraphql, hoverColor: "hover:text-[#E10098]" },

    // Databases
    { name: "MongoDB", icon: BiLogoMongodb, hoverColor: "hover:text-[#47A248]" },
    { name: "PostgreSQL", icon: BiLogoPostgresql, hoverColor: "hover:text-[#336791]" },

    // DevOps / Cloud
    { name: "Docker", icon: FaDocker, hoverColor: "hover:text-[#2496ED]" },
    { name: "AWS", icon: FaAws, hoverColor: "hover:text-[#FF9900]" },
  ];

  const projects = [
    {
      name: "FedBridge",
      stack: ["React", "Node.js", "MongoDB", "OpenAI API", "Tailwind", "GCP"],
      description: "An AI-powered job-matching platform for federal workers. Recognized by faculty and led to a referral to IBM.",
      link: "https://fedbridge.app/"
    },
    {
      name: "Seatify",
      stack: ["Java", "Spring Boot", "Spring Security", "JPA", "MongoDB"],
      description: "An OpenTable-style reservation system with service-oriented design and secure authentication.",
      link: "https://github.com/gopinathsjsu/team-project-20201-codecrafters"
    },
    {
      name: "DonutMix",
      stack: ["JavaScript", "React", "PWA", "Charka UI", "Mobile-first design"],
      description: "An ingredient calculator built for a local donut shop owner based on donut type and quantity.",
      link: "https://donutmix.netlify.app/"
    },
  ];
    
  return (
    <div>
      <div className="flex items-center justify-between flex-wrap gap-y-2">
        <h1 className="text-[#666] dark:text-[#C0C0C0] text-xl">
          👋 Hi, I'm a Full <span className="font-bold text-[#FFA500]">Snack</span> Developer
        </h1>
        <Badge variant="success" className="h-fit">
          <CircleCheck /> Available for Work
        </Badge>
      </div>

      <Separator className="my-6" />

      <div className="flex items-center justify-between scroll-m-20 tracking-tight">
        <TypingCodeBlock />
        <Avatar className="w-25 h-25 hidden sm:block">
          <AvatarImage src="./avatar.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>

      <Separator className="my-6" />

      <div>
        <p className=" text-[#666] dark:text-[#C0C0C0] text-xl mb-4">
          <span className="align-middle text-2xl">🍱</span> My Snacks:
        </p>
        <div className="flex flex-wrap gap-x-10 gap-y-4">
          {techStack.map(({ name, icon: Icon, hoverColor }) => (
            <div key={name} className="flex flex-col items-center text-xs">
              <Icon className={`w-10 h-10 transition-transform duration-300 hover:scale-110 ${hoverColor} active:text-[#F7DF1E]`} />
            </div>
          ))}
        </div>
      </div>

      <Separator className="my-6" />

      <div>
        <p className="flex gap-x-2 text-[#666] dark:text-[#C0C0C0] text-xl">
          <Sparkles className="text-purple-400 transition-transform duration-300 hover:-rotate-20" />
          What I have Built:
        </p>
        <div className="flex flex-wrap gap-x-10">
          <ProjectList projects={projects}/>
        </div>
      </div>

      <Separator className="my-6" />

      <div className="flex justify-between">
        <p className="flex gap-x-2 text-[#666] dark:text-[#C0C0C0] text-xl mb-4">
          🤝 Let's connect together
        </p>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          <a
            href="https://www.linkedin.com/in/khanh-d-chung/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-8 h-8 hover:text-[#0A66C2]"/>
          </a>
          <a
            href="https://github.com/craftzmask"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-8 h-8 hover:text-gray-400"/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home