import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
const navigate = useNavigate();
 const OpenLogin = ()=>{
  navigate('/login') 
  }
  return (
    <div className='flex flex-col md:flex-row items-start md:items-center'>
      <ul className='flex flex-col md:flex-row text-white text-sm gap-4 md:gap-8 font-thin mx-6'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/jobs">Jobs</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
      </ul>
      <button onClick={OpenLogin} className='mt-4 md:mt-0 text-zinc-400 hover:text-green-600 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-1 px-6 shadow hover:shadow-green-600 duration-700'>Log In</button>
    </div>
  );
};

export default Navbar;
