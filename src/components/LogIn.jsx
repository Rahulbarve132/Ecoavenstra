import React, { useState, useEffect, useRef, useContext } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

const ToggleSignIn = () => {
  const { setIsLogin } = useContext(AuthContext);
  const [userToEmployee, setUserToEmployee] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [isRegister, setIsRegister] = useState(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  
  const Email = useRef(null);
  const Password = useRef(null);
  const Name = useRef(null);
  const navigate = useNavigate();
  const handlePasswordVisible = ()=>{
    setIsPasswordVisible(!isPasswordVisible);
  }

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleSubmit = async () => {
    const email = Email.current.value;
    const password = Password.current.value;
    const name = isRegister ? Name.current.value : undefined;
    const role = userToEmployee ? 'USER' : 'EMPLOYER';

    try {
      let response;
      if (isRegister) {
        response = await axios.post('https://ecoavenstra-be.onrender.com/api/v1/user/signup', {
          name,
          role,
          email,
          password,
        });
      } else {
        response = await axios.post('https://ecoavenstra-be.onrender.com/api/v1/user/login', {
          email,
          password,
        });
      }
      console.log(response.data);
      
      navigate('/');
      login();
      toast.success('Logged In Successfully!');
      console.log('Logged In Successfully!');
    } catch (error) {
      toast.error('Invalid Credentials! ');

      console.error('Error:', error.response ? error.response.data : error.message);
      // Handle error here (e.g., show error message)
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-md rounded p-6">
      <Toaster />

        <div className="flex justify-between mb-6">
          <button
            className={`w-1/2 py-2 text-center ${userToEmployee ? 'border-b-2 border-blue-500 dark:text-white' : 'text-gray-500 dark:text-gray-300'}`}
            onClick={() => {
              setUserToEmployee(true);
              setIsRegister(false);
            }}
          >
            {isRegister ? 'User Sign Up' : 'User Sign In'}
          </button>
          <button
            className={`w-1/2 py-2 text-center ${!userToEmployee ? 'border-b-2 border-blue-500 dark:text-white' : 'text-gray-500 dark:text-gray-300'}`}
            onClick={() => {
              setUserToEmployee(false);
              setIsRegister(false);
            }}
          >
            {isRegister ? 'Employer Sign Up' : 'Employer Sign In'}
          </button>
        </div>

        <div className="mb-6 flex justify-end">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-sm text-gray-500 dark:text-gray-300 focus:outline-none"
          >
            {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
        </div>

        <div>
          {isRegister && (
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                ref={Name}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter your name"
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="email">
              Email ID
            </label>
            <input
              ref={Email}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter registered email ID"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">

            <input
              ref={Password}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type= {isPasswordVisible ? 'password' : 'text'}
              placeholder="Enter password"
              />
              <div className="absolute right-2 top-2">
                {
                  isPasswordVisible ? <FaRegEyeSlash size={22} onClick={handlePasswordVisible} color='white' />: <FaRegEye size={22} color='white' onClick={handlePasswordVisible}/> 
                }
              </div>
              </div>
            <a href="#" className="inline-block align-baseline font-bold text-sm text-blue-500 dark:text-blue-300 hover:text-blue-800">
              Forgot password?
            </a>
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              {isRegister ? 'Create Account' : 'Log in'}
            </button>
          </div>
          <div className="mt-4 text-center">
            <button
              className="text-sm text-blue-500 dark:text-blue-300 focus:outline-none"
              onClick={() => setIsRegister(!isRegister)}
            >
              {isRegister ? 'Already have an account? Log in' : "Don't have an account? Create one"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToggleSignIn;
