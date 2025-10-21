import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import profile from '/profile.png'
const About: React.FC = () => {
    const [gradientOpacity, setGradientOpacity] = useState(1);
    
    // Update gradient opacity based on window width
    useEffect(() => {
        const updateOpacity = () => {
            const width = window.innerWidth;
            if (width > 1280) {
                setGradientOpacity(1); // Full opacity for large screens
            } else if (width > 1024) {
                setGradientOpacity(0.85); // Large screens
            } else if (width > 768) {
                setGradientOpacity(0.7); // Medium screens
            } else if (width > 640) {
                setGradientOpacity(0.5); // Small screens
            } else {
                setGradientOpacity(0.3); // Extra small screens
            }
        };
        
        // Set initial opacity
        updateOpacity();
        
        // Update opacity on resize
        window.addEventListener('resize', updateOpacity);
        
        // Clean up
        return () => window.removeEventListener('resize', updateOpacity);
    }, []);
    
    return (
        <motion.div
            className='text-neutral-50 flex w-full mx-8'
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
                    Passionate developer with experience in Devops, 
                    Backend Engineering, and creating impactful applications. 
                    My work spans mobile app development, system monitoring, and building efficient APIs. Proficient in languages like 
                    Python, Javascript, Java, I enjoy solving challenges and contributing to innovative projects.
                </p>
                
                <a 
                    href="/Muhd_Haque_Resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-6 py-2.5 rounded-lg bg-zinc-800 text-white hover:bg-zinc-700 transition-colors duration-300 my-2 border border-zinc-700 shadow-md"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m-9 6h14" />
                    </svg>
                    Open Resume
                </a>
                
                {/* Image Section */}
            </div>
            <div className='flex justify-center w-full relative'>
                {/* Large blue gradient blur behind image */}
                <div className="absolute top-2/4 -translate-y-1/2 w-[70rem] h-[60rem] pointer-events-none">
                    <div
                        className="w-full h-full rounded-full"
                        style={{
                            background: "radial-gradient(ellipse 70% 50% at 60% 40%, #52525b 0%, #27272a 60%, transparent 100%)",
                            filter: "blur(90px)",
                            opacity: gradientOpacity
                        }}
                    />
                </div>
                <img
                    src={profile}
                    alt="Muhd Haque"
                    className="w-80 h-80 rounded-full object-cover shadow-lg relative left-5"
                />
            </div>
        </motion.div>
    );
};

export default About;