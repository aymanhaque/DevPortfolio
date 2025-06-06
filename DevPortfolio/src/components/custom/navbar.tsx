import { ButtonColor } from './ButtonColor';

const Navbar = () => {
    return (
        <nav className='fixed top-0 left-0 w-full flex justify-center p-1 bg-gray-900 opacity-60'>
                <ButtonColor label={'Home'}></ButtonColor>
                <ButtonColor label={'Projects'}></ButtonColor>
                <ButtonColor label={'Contact'}></ButtonColor>
        </nav>
    );
};

export default Navbar;