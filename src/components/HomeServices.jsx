import React from 'react';
import service1 from "../assets/service1.png"
import eCommerceDev from "../assets/eCommerce-Development.png"
import digital from "../assets/Digital-Marketing-Services.png"
import UiUx from "../assets/Designing-Services.png"
import openSource from "../assets/Open-Source-Development-2.png"
import HireDevelopers from "../assets/Hire-Developers.png"


const services = [
  {
    title: "Web Development",
    description: "From lightweight MVPs to complex web-based products, our experts can help make your vision a reality, while relieving you of all technical concerns.",
    icon: service1,
    bgColor: "bg-indigo-900"
  },
  {
    title: "eCommerce Development",
    description: "Our experts can create a modern, intuitive and eco-friendly store to exhibit your products and services to people worldwide.",
    icon: eCommerceDev,
    bgColor: "bg-orange-900"
  },
  {
    title: "Digital Marketing Services",
    description: "We could really assist you in enhancing brand authority and exposure. You are really only one tap away from reaching your intended audience.",
    icon: digital,
    bgColor: "bg-yellow-900"
  },
  {
    title: "UI/UX Designing",
    description: "Our experts create extraordinary UI/UX design ideas consistent with the latest trends and technologies.",
    icon: UiUx,
    bgColor: "bg-purple-900"
  },
  {
    title: "Open Source Development",
    description: "We can turn even the most complicated of your business ideas into reality with advanced open-source development technology.",
    icon: openSource,
    bgColor: "bg-green-900"
  },
  {
    title: "Hire Developers",
    description: "We have a team of experienced developers. Hire dedicated developers on an hourly or monthly basis.",
    icon: HireDevelopers,
    bgColor: "bg-red-900"
  }
];

const HomeServices = () => {
  return (
    <section className="bg-black text-white py-8">
      <div className="container mx-auto text-center">
      <div className='text-white text-3xl sm:text-5xl flex justify-center font-semibold pt-4 pb-10 sm:pb-20'>
                Our Services
            </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <div key={index} className={`flex flex-col items-center p-6 rounded-lg shadow-lg w-full sm:w-1/2 lg:w-1/3 hover:border hover:border-red-500 ${service.bgColor}`}>
              <img src={service.icon} alt={`service_${index}`} className="text-4xl h-40 py-3"></img>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">All Services</button>
      </div>
    </section>
  );
};

export default HomeServices;
