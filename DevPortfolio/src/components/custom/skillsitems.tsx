import { FaPython,FaReact,FaNode, FaJava, FaDocker} from 'react-icons/fa';
import { SiFlask, SiMongodb, SiSpringboot } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';
import { IoLogoJavascript } from 'react-icons/io5';
const logoSize = 40; // Size for the icons

const skillItems = [
    {name:"",description:"",link:"",icon:<></>},
    {name:"",description:"",link:"",icon:<></>},
    {name:"",description:"",link:"",icon:<></>},
    {name:"",description:"",link:"",icon:<></>},
    {name:"",description:"",link:"",icon:<></>},
    

    {
        icon: <FaPython size={logoSize}/>,
        name: "Python",
        description: "A versatile programming language used for web development, data analysis, AI, and more.",
        link: "https://www.python.org/"
    },
    {
        icon: <FaReact size={logoSize}/>,
        name: "React",
        description: "A popular JavaScript library for building user interfaces, especially single-page applications.",
        link: "https://react.dev/"
    },
    {
        icon: <FaNode size={logoSize}/>,
        name: "Node.js",
        description: "A JavaScript runtime for building scalable server-side and networking applications.",
        link: "https://nodejs.org/"
    },
    {
        icon: <FaJava size={logoSize}/>,
        name: "Java",
        description: "A robust, object-oriented programming language widely used for enterprise and Android development.",
        link: "https://www.java.com/"
    },
    {
        icon: <SiFlask size={logoSize}/>,
        name: "Flask",
        description: "A lightweight Python web framework for building web applications and APIs.",
        link: "https://flask.palletsprojects.com/"
    },
    {
        icon: <BiLogoPostgresql size={logoSize}/>,
        name: "PostgreSQL",
        description: "A powerful, open-source object-relational database system.",
        link: "https://www.postgresql.org/"
    },
    {
        icon: <SiSpringboot size={logoSize}/>,
        name: "Spring Boot",
        description: "A Java-based framework used to create stand-alone, production-grade Spring applications.",
        link: "https://spring.io/projects/spring-boot"
    },
    {
        icon: <IoLogoJavascript size={logoSize}/>,
        name: "JavaScript",
        description: "The programming language of the web, used for interactive and dynamic web pages.",
        link: "https://developer.mozilla.org/docs/Web/JavaScript"
    },
    {
        icon: <SiMongodb size={logoSize}/>,
        name: "MongoDB",
        description: "A NoSQL database known for its flexibility and scalability with JSON-like documents.",
        link: "https://www.mongodb.com/"
    },
    {
        icon: <FaDocker size={logoSize}/>,
        name: "Docker",
        description: "A platform for developing, shipping, and running applications in lightweight containers.",
        link: "https://www.docker.com/"
    },
    {name:"",description:"",link:"",icon:<></>},
    {name:"",description:"",link:"",icon:<></>},
    
    {name:"",description:"",link:"",icon:<></>},
    {name:"",description:"",link:"",icon:<></>},
    {name:"",description:"",link:"",icon:<></>},

   

];

export default skillItems;