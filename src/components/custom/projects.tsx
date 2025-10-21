import { FaPython, FaReact } from "react-icons/fa";
import Card from "./card"
import { SiExpress, SiGooglegemini, SiHuggingface, SiLangchain, SiMongodb, SiOpenai, SiPostgresql, SiSpringboot } from "react-icons/si";

const cardItems = [
     {
        imgSrc: "https://github.com/aymanhaque/Cross-Mart/blob/main/frontEnd/src/assets/crossmart.png?raw=true",
        title: "Cross Mart",
        description: "OuterBuddy is a cross-country marketplace platform designed to help users purchase items from overseas at fair prices, bypassing the exorbitant costs typically associated with importing or using platforms like Amazon.",
        link: "https://github.com/aymanhaque/Cross-Mart",
        extraComponents: [<SiSpringboot size={20}/>, <SiPostgresql size={20}/>, <FaReact size={20}/>]
    },
    {
        imgSrc: "https://teachtix.com/assets/images/shows/prism.jpg",
        title: "PRISM",
        description: "AI-powered assistant designed for investors, analysts, and shareholders. It leverages Retrieval-Augmented Generation (RAG), to make financial reports accessible, understandable, and actionable.",
        link: "https://github.com/aymanhaque/HackAI25",
        extraComponents: [<FaPython size={20} />, <FaReact size={20} />, <SiLangchain size={20}/>, <SiGooglegemini size={20} />, <SiHuggingface size={20} />]
    },
    {
        imgSrc: "https://github.com/acm-projects/Harmoni/blob/main/frontEnd/img/harmoni.png?raw=true",
        title: "Harmoni",
        description: "A social media app where people can create groups, sync calendars, and find overlapping free times for event planning",
        link: "https://github.com/acm-projects/Harmoni",
        extraComponents: [<SiMongodb size={20} />, <FaReact size={20} />, <SiExpress size={20} />]
    },
    {
        imgSrc: "https://github.com/fintechutd/roboAdvisorMaster/blob/main/Frontend/robo-advisor/src/assets/fintechLogo.png?raw=true",
        title: "Robo Advisor",
        description: "AI-powered financial advisor that provides personalized investment recommendations based on user preferences and market trends.",
        link: "https://github.com/fintechutd/roboAdvisorMaster",
      extraComponents: [<FaPython size={20} />, <FaReact size={20}/>, <SiPostgresql size={20} />]
    },
    {
        imgSrc: "https://storage.googleapis.com/kaggle-datasets-images/1869236/3053020/65e790e04b6c5be05e05e1a36d6bc272/dataset-card.png?t=2022-01-17-10-05-13?t=2022-01-20-05-34-06",
        title: "CyberBully Detector",
        description: "Logic-based detector that detects cyberbullying in chat messages, helping to create safer online environments.",
        link: "https://github.com/manthranatarajan/HackReason2025",
        extraComponents: [<FaPython size={20}/>, <SiOpenai size={20}/>, <FaReact size={20}/>]
  },
];

const Projects = () => {
  return (
    <div className='mt-30 w-full mb-50'>
      <h1 className='text-7xl text-neutral-200 flex justify-center mb-5'>Projects</h1>
      <div className='flex justify-center m-20 flex-wrap gap-10'>
        {cardItems.map((item, idx) => (
          <Card key={idx} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Projects