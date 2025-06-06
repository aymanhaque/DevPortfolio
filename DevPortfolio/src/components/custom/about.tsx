import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    return (
        <motion.div
            className='text-neutral-50 flex w-full'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
        >
            <div className="">
                {/* Text Section */}
                <div className=''>
                    <p className='text-2xl text-zinc-400'>Hey, I'm</p>
                    <h1 className=' text-9xl bg-gradient-to-b from-white to-zinc-800 text-transparent bg-clip-text my-4'>
                        Muhd Haque  
                    <p className='flex text-5xl'>• Computer Science @ UTD</p>
                    </h1>
                </div>
                <p className=' text-xl text-zinc-400 w-3/5 my-8'>
                    Passionate developer with experience in software development, backend engineering, and creating impactful applications. My work spans mobile app development, system monitoring, and building efficient APIs.
                    Proficient in Python, JavaScript, ReactJS, and MongoDB, I enjoy solving challenges and contributing to innovative projects.
                </p>
                {/* Image Section */}
            </div>
            <div className='flex justify-center w-full relative'>
                {/* Large blue gradient blur behind image */}
                <div className="absolute  top-2/4 -translate-y-1/2 w-[70rem] h-[60rem] pointer-events-none">
                    <div
                        className="w-full h-full rounded-full"
                        style={{
                            background: "radial-gradient(ellipse 70% 50% at 60% 40%, #52525b 0%, #27272a 60%, transparent 100%)",
                            filter: "blur(90px)",
                        }}
                    />
                </div>
                <img
                    src="https://media.licdn.com/dms/image/v2/C4E03AQHWrgOaaqCbWQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1652730550426?e=1754524800&v=beta&t=B1E9nSFw8Q_qHqBVyXLbhI0a6tRQ97PYBeWQN4TmS50"
                    alt="Muhd Haque"
                    className="w-80 h-80 rounded-full object-cover shadow-lg relative left-5"
                />
            </div>
        </motion.div>
    );
};

export default About;