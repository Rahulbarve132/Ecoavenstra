import React from 'react';
import service1 from "../../assets/service1.png";
import eCommerceDev from "../../assets/eCommerce-Development.png";
import digital from "../../assets/Digital-Marketing-Services.png";
import UiUx from "../../assets/Designing-Services.png";
import openSource from "../../assets/Open-Source-Development-2.png";
import HireDevelopers from "../../assets/Hire-Developers.png";
import { useNavigate } from 'react-router-dom';

const services = [
  {
    title: "Web Development",
    description: "From lightweight MVPs to complex web-based products, our experts can help make your vision a reality, while relieving you of all technical concerns.",
    icon: service1
  },
  {
    title: "eCommerce Development",
    description: "Our experts can create a modern, intuitive and eco-friendly store to exhibit your products and services to people worldwide.",
    icon: eCommerceDev
  },
  {
    title: "Digital Marketing Services",
    description: "We could really assist you in enhancing brand authority and exposure. You are really only one tap away from reaching your intended audience.",
    icon: digital
  },
  {
    title: "UI/UX Designing",
    description: "Our experts create extraordinary UI/UX design ideas consistent with the latest trends and technologies.",
    icon: UiUx
  },
  {
    title: "Open Source Development",
    description: "We can turn even the most complicated of your business ideas into reality with advanced open-source development technology.",
    icon: openSource
  },
  {
    title: "Hire Developers",
    description: "We have a team of experienced developers. Hire dedicated developers on an hourly or monthly basis.",
    icon: HireDevelopers
  }
];

const HomeServices = () => {
  const navigate = useNavigate();

  const Services = () => {
    navigate("/services");
  };

  return (
    <section className="bg-black text-white py-8 px-10">
      <div className="container mx-auto text-center">
        <div className='text-white text-3xl sm:text-5xl flex justify-center font-semibold pt-4 pb-10 sm:pb-20'>
          Our Services
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 rounded-lg shadow-lg hover:border transition border-transparent bg-[#222222] hover:bg-blue-600"
            >
              <img
                src={service.icon}
                alt={`service_${index}`}
                className="text-4xl h-40 py-3 hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <button
          onClick={Services}
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          All Services
        </button>
      </div>
    </section>
  );
};

export default HomeServices;
