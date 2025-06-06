import React from 'react';
import { FaPython,FaReact,FaNode, FaJava} from 'react-icons/fa';
import { SiFlask, SiMongodb, SiSpringboot } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';
import { IoLogoJavascript } from 'react-icons/io5';
import { motion } from 'framer-motion';

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

const logoSize = 40;

const Box: React.FC<{ children: React.ReactNode; idx: number; name: string; description: string; link: string }> = ({ children, idx, name, description, link }) => {
    return (
        <HoverCard>
            <HoverCardTrigger asChild className='text-neutral-50'>
                <motion.div
                    className='w-20 aspect-square rounded-md bg-zinc-900 text-neutral-200 flex 
                                justify-center items-center hover:scale-110 transition-transform duration-300
                                border-1 border-zinc-600 m-5'
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                    {children}
                </motion.div>
            </HoverCardTrigger>
            <HoverCardContent>
                <a className='text-zinc-400 underline' href={link}>{name}</a>
                 – {description}.
            </HoverCardContent>
        </HoverCard>
    )
}

const skillItems = [
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
];

const Skills: React.FC = () => {
    return (
        <div className='mt-130 w-full'>
            <h1 className='text-7xl text-neutral-200 flex justify-center mb-5'>Skills</h1>
            <div className='flex justify-center'>
                {skillItems.map((item, idx) => (
                    <Box
                        key={idx}
                        idx={idx}
                        name={item.name}
                        description={item.description}
                        link={item.link}
                    >
                        {item.icon}
                    </Box>
                ))}
            </div>

            
        </div>
    );
};

export default Skills;