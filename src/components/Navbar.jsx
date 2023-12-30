import { NavLink } from 'react-router-dom';
import { logoFull } from '../assets/images';


const Navbar = () => {
  return (
    <header className='header'>
      
      <NavLink to="/" className="text-xl flex items-center justify-between font-bold justify-center">
        <img src={logoFull} alt="Logo" className="pr-2 w-15 h-10" />
        <p className='blue-gradient_text'>Gonzalo Diez</p>
      </NavLink>
      
      <nav className='flex text-lg gap-7 font-medium'>
          <NavLink to="/about" className={ ({isActive}) =>
           isActive ? 'text-blue-500' : 'text-black' }>
              About
          </NavLink>
          <NavLink to="/projects" className={ ({isActive}) =>
           isActive ? 'text-blue-500' : 'text-black' }>
              Projects
          </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;