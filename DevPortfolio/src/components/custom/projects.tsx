import Card from "./card"

const cardItems = [
    {
        imgSrc: "https://teachtix.com/assets/images/shows/prism.jpg",
        title: "PRISM",
        description: "AI-powered assistant designed for investors, analysts, and shareholders. It leverages Retrieval-Augmented Generation (RAG), to make financial reports accessible, understandable, and actionable.",
        link: "https://github.com/aymanhaque/HackAI25"
    },
    {
        imgSrc: "https://github.com/acm-projects/Harmoni/blob/main/frontEnd/img/harmoni.png?raw=true",
        title: "Harmoni",
        description: "A social media app where people can create groups, sync calendars, and find overlapping free times for event planning",
        link: "https://github.com/aymanhaque/weather-app"
    },
    {
        imgSrc: "https://github.com/fintechutd/roboAdvisorMaster/blob/main/Frontend/robo-advisor/src/assets/fintechLogo.png?raw=true",
        title: "Robo Advisor",
        description: "AI-powered financial advisor that provides personalized investment recommendations based on user preferences and market trends.",
        link: "https://github.com/aymanhaque/weather-app"
    },
    {
        imgSrc: "https://storage.googleapis.com/kaggle-datasets-images/1869236/3053020/65e790e04b6c5be05e05e1a36d6bc272/dataset-card.png?t=2022-01-17-10-05-13?t=2022-01-20-05-34-06",
        title: "CyberBully Detector",
        description: "Logic-based detector that detects cyberbullying in chat messages, helping to create safer online environments.",
        link: "https://github.com/aymanhaque/weather-app"
    },
];

const Projects = () => {
  return (
    <div className='mt-30 w-full'>
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