import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { Button } from '../ui/button';

const border = () => {
    return (
        <div className="border-1 border-gray-600 h-6 "></div>
    );
}

const Navbar = () => {
    return (
        <nav className='fixed top-0 left-0 w-full p-1  bg-zinc-950 opacity-90 backdrop-blur-md border-b-1 border-gray-600'>
            <div className='max-w-7xl mx-auto px-4 py-2 flex justify-between items-center'>
                <div className="flex w-full items-center">
                    <Button variant="heading" asChild>
                        <a href="/">Muhd Haque</a>
                    </Button>
                </div>
                <div className='justify-end flex w-full items-center'>
                    <Button variant ="color"asChild>
                        <a href="">About</a>
                    </Button>
                    <Button variant ="color"asChild>
                        <a href="">Skills</a>
                    </Button>
                    <Button variant ="color"asChild>
                        <a href="">Projects</a>
                    </Button>
                    <Button variant ="color"asChild>
                        <a href="">Contact</a>
                    </Button>
                    {border()}
                    <a className=" text-neutral-300 hover:text-indigo-400 transition-colors duration-300 px-3" href="">
                        <FaMoon size={22}></FaMoon>
                    </a>
                    {border()}
                    <a className=" text-neutral-300 hover:text-indigo-400 transition-colors duration-300 px-3" href="">
                        <FaGithub size={22}></FaGithub>
                    </a>
                    <a className=" text-neutral-300 hover:text-indigo-400 transition-colors duration-300 px-3" href="">
                        <FaLinkedin size={22}></FaLinkedin>
                    </a>
                    <a className=" text-neutral-300 hover:text-indigo-400 transition-colors duration-300 px-3" href="">
                        <FaDiscord size={22}></FaDiscord>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;