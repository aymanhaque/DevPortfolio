import { FaPython, FaReact } from "react-icons/fa";
import Card from "./card"
import { SiExpress, SiGooglegemini, SiHuggingface, SiLangchain, SiMongodb, SiOpenai, SiPostgresql, SiSpringboot } from "react-icons/si";

const cardItems = [
     {
        imgSrc: "https://private-user-images.githubusercontent.com/131044870/503522933-df28020c-695d-4402-a98f-5cd185847b3a.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjEwMjgzNzAsIm5iZiI6MTc2MTAyODA3MCwicGF0aCI6Ii8xMzEwNDQ4NzAvNTAzNTIyOTMzLWRmMjgwMjBjLTY5NWQtNDQwMi1hOThmLTVjZDE4NTg0N2IzYS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMDIxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTAyMVQwNjI3NTBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04Y2IyZjc3ODA2MDI1N2Y4NTJiZTYzZjBjMGQ4NDFjOGU5Y2U1YzU3ODcyMDk0MDYyNGRhMWU2OTczNzI2Yzg2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.8z8DNgiCFtjJ3z8Cz1bLhjf9BpTz8agShCW7a1RxqFA",
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