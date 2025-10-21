import React, { useMemo } from 'react';
import skillItems from './skillsitems';

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"


const Box: React.FC<{ children: React.ReactNode; name: string; description: string; link: string }> = ({ 
  children, name, description, link
}) => {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                {link ? (
                  <a href={link} target="_blank" rel="noopener noreferrer" className="block">
                    <div className='w-20 aspect-square rounded-md bg-zinc-900 text-neutral-200 flex 
                                justify-center items-center hover:scale-105 transition-transform duration-200 ease-out
                                border-1 border-zinc-600 m-2 mx-auto shadow'>
                      <div>
                        {children}
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className='w-20 aspect-square rounded-md bg-zinc-900 text-neutral-200 flex 
                                justify-center items-center hover:scale-105 transition-transform duration-200 ease-out
                                border-1 border-zinc-600 m-2 mx-auto shadow'>
                    <div>
                      {children}
                    </div>
                  </div>
                )}
            </HoverCardTrigger>
            <HoverCardContent sideOffset={10} className="z-50">
                <div className='text-zinc-400'>
                  {name} – {description}.
                </div>
            </HoverCardContent>
        </HoverCard>
    );
}

const Skills: React.FC = () => {
    // Filter out only the actual skill items (non-empty ones)
    const actualSkills = useMemo(() => 
      skillItems.filter(item => item.name !== ""), 
    []);
    
    return (
        <div className='mt-130 w-full'>
            <h1 className='text-7xl text-neutral-200 flex justify-center mb-8'>Skills</h1>
            
            <div className="flex flex-wrap justify-center gap-x-30 gap-y-10 w-full max-w-4xl mx-auto mb-100">
                {actualSkills.map((skill, idx) => (
                  <Box
                    key={idx}
                    name={skill.name}
                    description={skill.description}
                    link={skill.link}
                  >
                    {skill.icon}
                  </Box>
                ))}
            </div>
        </div>
    );
};

export default Skills;