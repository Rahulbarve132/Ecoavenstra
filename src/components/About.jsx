import React from 'react';
import aboutImage from '../assets/login_sky.jpg'; // Ensure this is the correct path
import HomeServices from '../components/Home page/HomeServices'
const About = () => {
  return (
    <section className="bg-black py-12">
      <div className="container mx-auto px-6  lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Content Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-lg text-green-400 font-semibold mb-4">About Us</h2>
          <h1 className="text-4xl font-bold text-white mb-6">
            Our Mission to Revolutionize Tech Dropshipping
          </h1>
          <p className="text-lg text-gray-300 mb-4">
            EcoAvenstra was created to offer a seamless, eco-conscious tech dropshipping solution.
            Our goal is to connect tech enthusiasts, brands, and sellers globally while reducing environmental impact.
            We stand for:
          </p>
          
          {/* Core Values */}
          <ul className="list-none space-y-4 mb-6">
            <li className="flex items-center">
              <svg className="w-6 h-6 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-200">Sustainability</span>
            </li>
            <li className="flex items-center">
              <svg className="w-6 h-6 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-200">Innovation</span>
            </li>
            <li className="flex items-center">
              <svg className="w-6 h-6 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-200">Customer Focus</span>
            </li>
            <li className="flex items-center">
              <svg className="w-6 h-6 text-green-400 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-200">Global Reach</span>
            </li>
          </ul>

          <a
            href="#"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-500 transition duration-300 transform hover:scale-105"
          >
            Discover More
          </a>
        </div>

        {/* Right Image Section */}
        <div className="flex items-center justify-center h-screen">
          <img
            src={aboutImage} // Your uploaded image here
            alt="About EcoAvenstra"
            className="w-full rounded-lg shadow-lg h-screen"
          />
        </div>
      </div>
     <HomeServices/> 
    </section>
  );
};

export default About;
