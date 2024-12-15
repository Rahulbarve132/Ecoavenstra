import React, { useState } from "react";
import Ecoavenstra from "/src/assets/Ecoavenstra.png";
import Blogspot from "/src/assets/blogspot.png";
import Urbn from "/src/assets/Urbn.png";

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "Ecoavenstra Website",
      description:
        "A full-stack web application focused on sustainable solutions, developed using React, Node.js, and Tailwind CSS.",
      image: Ecoavenstra, // Replace with your image path
    },
    {
      id: 2,
      title: "Blogspot",
      description:
        "Blogspot is a modern blogging platform built with React, Node.js, and Express.js, offering seamless content creation and user-friendly interfaces. It combines performance and scalability to provide a smooth experience for bloggers and readers alike.",
      image: Blogspot, // Replace with your image path
    },
    {
      id: 3,
      title: "Urbn - Home rental services",
      description:
        "Urbn is a modern home rental platform built with React, Node.js, and Express.js, providing a seamless and user-friendly experience for property owners and renters. It offers easy browsing, booking, and management of rental properties in an intuitive and responsive interface.",
      image: Urbn, // Replace with your image path
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-black text-white py-12">
      <div className="container mx-auto px-4 overflow-hidden">
        <div className="text-5xl font-semibold text-center mb-10">
          Our Previous Work
        </div>
        <div className="relative max-w-5xl mx-auto overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${projects.length * 100}%`,
            }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex-shrink-0 w-full p-6  rounded-lg shadow-lg"
              >
                <div className="h-92 py-10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-[1000px]  object-cover rounded-md"
                />
                </div>
                
                <div className="mt-4 bg-black w-[1000px]">
  <h3 className="text-2xl font-semibold text-blue-400">{project.title}</h3>
  <p className="text-gray-300 mt-2  break-words">{project.description}</p>
</div>
              </div>
            ))}
          </div>
          {/* Navigation */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full shadow-lg hover:bg-[#1c3987]"
          >
            ❮
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full shadow-lg hover:bg-[#1c3987]"
          >
            ❯
          </button>
        </div>
        {/* Indicators */}
        <div className="flex justify-center mt-6 space-x-3">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-blue-400" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
