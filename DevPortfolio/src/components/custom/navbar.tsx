import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { Button } from '../ui/button';

const handleScroll = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};

const border = () => {
    return (
        <div className="border-1 border-gray-600 h-6 "></div>
    );
}

const Navbar = () => {
    return (
        <nav className='fixed z-50 top-0 left-0 w-full p-1 bg-zinc-950 opacity-90 border-b-1 backdrop border-gray-600'>
            <div className='max-w-7xl mx-auto px-4 py-2 flex justify-between items-center'>
                <div className="flex w-full items-center">
                    <Button variant="heading" asChild>
                        <a href="/">Muhd Haque</a>
                    </Button>
                </div>
                <div className='justify-end flex w-full items-center'>
                    <Button variant="color" asChild>
                        <a href="#about" onClick={(e) => { e.preventDefault(); handleScroll("about"); }}>About</a>
                    </Button>
                    <Button variant="color" asChild>
                        <a href="#skills" onClick={(e) => { e.preventDefault(); handleScroll("skills"); }}>Skills</a>
                    </Button>
                    <Button variant="color" asChild>
                        <a href="#projects" onClick={(e) => { e.preventDefault(); handleScroll("projects"); }}>Projects</a>
                    </Button>
                    <Button variant="color" asChild>
                        <a href="#contact" onClick={(e) => { e.preventDefault(); handleScroll("contact"); }}>Contact</a>
                    </Button>
                    {/* {border()}
                    <a className=" text-neutral-300 hover:text-indigo-400 transition-colors duration-300 px-3" href="">
                        <FaMoon size={22}></FaMoon>
                    </a> */}
                    {border()}
                    <a className=" text-neutral-300 hover:text-indigo-400 transition-colors duration-300 px-3" 
                        href="https://github.com/aymanhaque">
                        <FaGithub size={22}></FaGithub>
                    </a>
                    <a className=" text-neutral-300 hover:text-indigo-400 transition-colors duration-300 px-3" 
                        href="https://www.linkedin.com/in/muhd-haque-prof">
                        <FaLinkedin size={22}></FaLinkedin>
                    </a>
                    <a className=" text-neutral-300 hover:text-indigo-400 transition-colors duration-300 px-3" 
                        href="mailto:muhd.ayman.haque@gmail.com">
                        <MdEmail size={22}></MdEmail>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;