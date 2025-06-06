import React from 'react';
import { FaPython,FaReact,FaNode, FaJava} from 'react-icons/fa';
import { SiFlask, SiMongodb } from 'react-icons/si';
import { BiLogoPostgresql, BiLogoSpringBoot } from 'react-icons/bi';
import { IoLogoJavascript } from 'react-icons/io5';
import { motion } from 'framer-motion';

const Box: React.FC<{ children: React.ReactNode; idx: number }> = ({ children, idx }) => {
    return (
        <motion.div
            className='w-20 aspect-square rounded-md bg-zinc-900 text-neutral-200 flex 
                        justify-center items-center hover:scale-110 transition-transform duration-300
                         border-1 border-zinc-800 m-5'
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            // whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
        >
            {children}
        </motion.div>
    )
}

const skillItems = [
    <FaPython size={40}/>,
    <FaReact size={40}/>,
    <FaNode size={40}/>,
    <FaJava size={40}/>,
    <SiFlask size={40}/>,
    <BiLogoPostgresql size={40}/>,
    <BiLogoSpringBoot size={40}/>,
    <IoLogoJavascript size={40}/>,
    <SiMongodb size={40}/>,
    
];

const Skills: React.FC = () => {
    return (
        <div className='mt-130 w-full'>
            <h1 className='text-7xl text-neutral-200 flex justify-center mb-5'>Skills</h1>
            <div className='flex justify-center'>
                {skillItems.map((item, idx) => (
                    <Box key={idx} idx={idx}>{item}</Box>
                ))}
            </div>
        </div>
    );
};

export default Skills;