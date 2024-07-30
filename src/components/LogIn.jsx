import React, { useState, useEffect } from 'react';

const ToggleSignIn = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-md rounded p-6">
        <div className="flex justify-between mb-6">
          <button
            className={`w-1/2 py-2 text-center ${isLogin ? 'border-b-2 border-blue-500 dark:text-white' : 'text-gray-500 dark:text-gray-300'}`}
            onClick={() => setIsLogin(true)}
          >
            Login/Register
          </button>
          <button
            className={`w-1/2 py-2 text-center ${!isLogin ? 'border-b-2 border-blue-500 dark:text-white' : 'text-gray-500 dark:text-gray-300'}`}
            onClick={() => setIsLogin(false)}
          >
            Employer Sign In
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

        {isLogin ? (
          <div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="email">
                Email ID
              </label>
              <input
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
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter password"
              />
              <a href="#" className="inline-block align-baseline font-bold text-sm text-blue-500 dark:text-blue-300 hover:text-blue-800">
                Forgot password?
              </a>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Log in
              </button>
              <a href="#" className="inline-block align-baseline font-bold text-sm text-blue-500 dark:text-blue-300 hover:text-blue-800">
                Create account
              </a>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="email">
                Email ID
              </label>
              <input
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
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter password"
              />
              <a href="#" className="inline-block align-baseline font-bold text-sm text-blue-500 dark:text-blue-300 hover:text-blue-800">
                Forgot password?
              </a>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Log in
              </button>
              <a href="#" className="inline-block align-baseline font-bold text-sm text-blue-500 dark:text-blue-300 hover:text-blue-800">
                Create account
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToggleSignIn;
