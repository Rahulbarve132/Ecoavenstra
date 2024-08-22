import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux';
import { toggleLogin, toggleLogout } from "./Redux/LoginSlice";

const Navbar = ({ toggleSidebar }) => {
  const isLogin = useSelector((store) => store.login.isLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(prevState => !prevState);
  };

  const handleLoginClick = () => {
    navigate('/login');
    toggleSidebar();
    dispatch(toggleLogin());
  };

  const handleLogoutClick = () => {
    dispatch(toggleLogout());  // Dispatch the toggleLogout action
    toggleSidebar();
    localStorage.removeItem("token")
    localStorage.removeItem("profile Name")
    localStorage.removeItem("profile Email")

    navigate('/login');

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
        <Link to="/cart">
          <li className="listItem hover:scale-105 flex">
            <AiOutlineShoppingCart size={20} />
            <p className="relative bottom-2 text-sm font-bold">2</p>
          </li>
        </Link>
      </ul>
      {isLogin ? (
        <button onClick={handleLoginClick} className="login mt-4 md:mt-0 text-zinc-400 hover:text-green-600 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-1 px-6 shadow hover:shadow-green-600 duration-700">Log In</button>
      ) : (
        <div className="relative">
          <img
            id="avatarButton"
            type="button"
            onClick={toggleDropdown}
            className="w-10 h-10 rounded-full cursor-pointer"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
            alt="User dropdown"
          />
          {dropdownOpen && (
            <div
              id="userDropdown"
              className="absolute right-0 top-full mt-2 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
            >
              <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                <div>{localStorage.getItem("profile_Name")}</div>
                <div className="font-medium truncate">{localStorage.getItem("profile_Email")}</div>
              </div>
              <div className="py-1">
                <button
                  onClick={handleLogoutClick}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Log out
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
