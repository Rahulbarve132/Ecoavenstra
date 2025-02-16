import React, { useEffect, useState } from 'react';
import service1 from "../../assets/service1.png";
import eCommerceDev from "../../assets/eCommerce-Development.png";
import digital from "../../assets/Digital-Marketing-Services.png";
import UiUx from "../../assets/Designing-Services.png";
import openSource from "../../assets/Open-Source-Development-2.png";
import HireDevelopers from "../../assets/Hire-Developers.png";
import { useNavigate } from 'react-router-dom';

// Static icons map
const icons = {
  "Web Development": service1,
  "eCommerce Development": eCommerceDev,
  "Digital Marketing Services": digital,
  "UI/UX Designing": UiUx,
  "Hire Developers": HireDevelopers
};

const HomeServices = () => {
  const [servicesData, setServicesData] = useState([]);
  const navigate = useNavigate();

  // Fetch services from API
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('https://ecoavenstra-be.onrender.com/api/v1/admin/services');
        const data = await response.json();
        if (data.success) {
          setServicesData(data.services);
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  const handleNavigate = () => {
    navigate("/services");
  };

  return (
    <section className="bg-black text-white py-8 px-4">
      <div className="container mx-auto text-center">
        <div className='text-white text-3xl sm:text-5xl flex justify-center font-semibold pt-4 pb-10 sm:pb-20'>
          Our Services
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div key={service.id} className="flip-card h-64 cursor-pointer">
              <div className="flip-card-inner relative w-full h-full transition-transform duration-500">
                <div className="flip-card-front absolute w-full h-full bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center backface-hidden">
                  <img
                    src={icons[service.title] || service1}
                    alt={`service_${index}`}
                    className="h-20 mx-auto mb-4"
                  />
                  <p className="title text-xl font-semibold">{service.title}</p>
                </div>
                <div className="flip-card-back absolute w-full h-full bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center backface-hidden transform rotate-y-180">
                  <p className="title text-xl font-semibold mb-4">Description</p>
                  <p className="text-sm">{service.shortDescription}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handleNavigate}
          className="mt-8 bg-[#1c3987] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          All Services
        </button>
      </div>
      <style jsx>{`
        .flip-card-inner {
          transform-style: preserve-3d;
        }
        
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default HomeServices;