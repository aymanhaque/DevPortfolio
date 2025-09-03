import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactCard: React.FC<{ 
  icon: React.ReactNode; 
  title: string; 
  subtitle: string; 
  link: string; 
  linkText: string 
}> = ({ icon, title, subtitle, link, linkText }) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block"
    >
      <div className="bg-zinc-900/70 rounded-xl p-6 border border-zinc-800 hover:scale-105 transition-transform duration-300 hover:shadow-xl hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] w-80 cursor-pointer">
        <div className="flex items-center justify-center mb-4">
          <div className="text-neutral-200 drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-semibold text-neutral-100 text-center mb-2">{title}</h3>
        <p className="text-zinc-400 text-center mb-4">{subtitle}</p>
        <p className="text-indigo-400 text-center font-medium">{linkText}</p>
      </div>
    </a>
  );
};

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: <MdEmail size={48} />,
      title: "Email",
      subtitle: "Drop me a line anytime",
      link: "mailto:muhd.ayman.haque@gmail.com",
      linkText: "muhd.ayman.haque@gmail.com"
    },
    {
      icon: <FaLinkedin size={48} />,
      title: "LinkedIn", 
      subtitle: "Let's connect professionally",
      link: "https://www.linkedin.com/in/muhd-haque-prof",
      linkText: "muhd-haque-prof"
    },
    {
      icon: <FaGithub size={48} />,
      title: "GitHub",
      subtitle: "Check out my code",
      link: "https://github.com/aymanhaque",
      linkText: "aymanhaque"
    }
  ];

  return (
    <div className="mt-30 w-full">
      <h1 className='text-7xl text-neutral-200 flex justify-center mb-5'>Contact</h1>
      <p className="text-xl text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
        Have a question or want to work together? Feel free to reach out through any of these channels.
      </p>
      <div className="flex justify-center flex-wrap gap-8 px-4">
        {contactMethods.map((method, index) => (
          <ContactCard key={index} {...method} />
        ))}
      </div>
    </div>
  );
};

export default Contact;