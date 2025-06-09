import React from 'react';
import skillItems from './skillsitems';

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"


const Box: React.FC<{ children: React.ReactNode; name: string; description: string; link: string }> = ({ children, name, description, link }) => {
    const isEmptyIcon = name === "";
    if (isEmptyIcon) {
      return (
        <div className='w-20 aspect-square rounded-md bg-zinc-900 text-neutral-200 flex 
                        justify-center items-center border-1 border-zinc-600 m-5 hover:scale-90 transition-transform duration-300'>
          {/* Added glow effect to logo */}
          <div className="drop-shadow-[0_0_4px_rgba(255,255,255,0.5)]">
            {children}
          </div>
        </div>
      );
    }
    
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                {link ? (
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <div className='w-20 aspect-square rounded-md bg-zinc-900 text-neutral-200 flex 
                                justify-center items-center hover:scale-110 duration-300
                                border-1 border-zinc-600 m-5 shadow hover:shadow-xl hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]'>
                      {/* Added glow effect to logo */}
                      <div className="drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]">
                        {children}
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className='w-20 aspect-square rounded-md bg-zinc-900 text-neutral-200 flex 
                                justify-center items-center hover:scale-110 duration-300
                                border-1 border-zinc-600 m-5 shadow hover:shadow-xl hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]'>
                    {/* Added glow effect to logo */}
                    <div className="drop-shadow-[0_0_4px_rgba(255,255,255,0.5)]">
                      {children}
                    </div>
                  </div>
                )}
            </HoverCardTrigger>
            <HoverCardContent>
                <div className='text-zinc-400'>
                  {name} – {description}.
                </div>
            </HoverCardContent>
        </HoverCard>
    );
}

// Arrow function that returns twenty empty boxes
const renderEmptyBoxes = () => 
  Array.from({ length: 20 }, (_, idx) => (
    <Box name="" description="" link="" key={idx}>
      <></>
    </Box>
  ));


const Skills: React.FC = () => {
    return (
        <div className='mt-130 w-'>
            <h1 className='text-7xl text-neutral-200 flex justify-center mb-5'>Skills</h1>
            {/* Boxes container with vertical fading effect */}
            <div 
              className='flex flex-wrap w-full gap-x-1 gap-y-8 justify-center '
              style={{
                maskImage: "linear-gradient(to bottom, transparent, black 60%, black 50%, transparent)",
                WebkitMaskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)"
              }}
            >
                {renderEmptyBoxes()}
                {skillItems.map((item) => (
                    <Box
                        name={item.name}
                        description={item.description}
                        link={item.link}
                    >
                        {item.icon}
                    </Box>
                ))}
                {renderEmptyBoxes()}
            </div>

            
        </div>
    );
};

export default Skills;