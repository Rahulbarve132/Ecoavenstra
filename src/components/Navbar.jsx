import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {AiOutlineShoppingCart} from "react-icons/ai"
import { AuthContext } from '../AuthContext';

const Navbar = ({ toggleSidebar  }) => {
  const { isLogin , login,logout } = useContext(AuthContext);
  const navigate = useNavigate();
 
  const handleLoginClick = () => {
    navigate('/login');
    toggleSidebar();
    login();
  };
  const handleLogoutClick = () => {
    logout();
    navigate('/');
    toggleSidebar();
  };
  return (
    <div className='flex flex-col md:flex-row items-start md:items-center'>
      <ul className='flex flex-col md:flex-row text-white text-sm gap-4 md:gap-8 font-thin mx-6'>
        <li onClick={toggleSidebar}><Link to="/">Home</Link></li>
        <li onClick={toggleSidebar}><Link to="/about">About</Link></li>
        <li onClick={toggleSidebar}><Link to="/services">Services</Link></li>
        <li onClick={toggleSidebar}><Link to="/blog">Blog</Link></li>
        <li onClick={toggleSidebar}><Link to="/jobs">Jobs</Link></li>
        <li onClick={toggleSidebar}><Link to="/contact-us">Contact Us</Link></li>
        <Link to ="/cart">
            <li className="listItem hover:scale-105 flex"><AiOutlineShoppingCart size={20}/> 
            
            <p className="relative bottom-2 text-sm font-bold">2</p>
            </li>
            </Link>
      </ul>
      {isLogin ? (
        <button onClick={handleLogoutClick} className="login mt-4 md:mt-0 text-zinc-400 hover:text-green-600 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-1 px-6 shadow hover:shadow-green-600 duration-700">Log Out</button>
      ) : (
        <button onClick={handleLoginClick} className="login mt-4 md:mt-0 text-zinc-400 hover:text-green-600 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-1 px-6 shadow hover:shadow-green-600 duration-700">Log In</button>
      )}
      
    </div>
  );
};

export default Navbar;
