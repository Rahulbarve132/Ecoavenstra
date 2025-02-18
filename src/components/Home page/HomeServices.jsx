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
            <div key={service.id} className="parent">
              <div className="card">
                <div className="content-box">
                  <span className="card-title">{service.title}</span>
                  <p className="card-content">
                    {service.shortDescription}
                  </p>
                  <span className="see-more" onClick={handleNavigate}>See More</span>
                </div>
                <div className="date-box">
                  <img src={icons[service.title] || service1} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .parent {
          width: 300px;
          padding: 20px;
          perspective: 1000px;
        }

        .card {
          padding-top: 50px;
          border: 3px solid rgb(255, 255, 255);
          transform-style: preserve-3d;
          background: linear-gradient(135deg,#0000 18.75%,#f3f3f3 0 31.25%,#0000 0),
              repeating-linear-gradient(45deg,#f3f3f3 -6.25% 6.25%,#ffffff 0 18.75%);
          background-size: 60px 60px;
          background-position: 0 0, 0 0;
          background-color: #f0f0f0;
          width: 100%;
          box-shadow: rgba(142, 142, 142, 0.3) 0px 30px 30px -10px;
          transition: all 0.5s ease-in-out;
        }

        .card:hover {
          background-position: -100px 100px, -100px 100px;
          transform: rotate3d(0.5, 1, 0, 30deg);
        }

        .content-box {
          background: #1c3988;
          transition: all 0.5s ease-in-out;
          padding: 60px 25px 25px 25px;
          transform-style: preserve-3d;
        }

        .content-box .card-title {
          display: inline-block;
          color: white;
          font-size: 25px;
          font-weight: 900;
          transition: all 0.5s ease-in-out;
          transform: translate3d(0px, 0px, 50px);
        }

        .content-box .card-content {
          margin-top: 10px;
          font-size: 12px;
          font-weight: 700;
          color: #f2f2f2;
          transition: all 0.5s ease-in-out;
          transform: translate3d(0px, 0px, 30px);
        }

        .content-box .see-more {
          cursor: pointer;
          margin-top: 1rem;
          display: inline-block;
          font-weight: 900;
          font-size: 9px;
          text-transform: uppercase;
          color: rgb(24, 0, 183);
          background: white;
          padding: 0.5rem 0.7rem;
          transition: all 0.5s ease-in-out;
          transform: translate3d(0px, 0px, 20px);
        }

        .date-box {
          position: absolute;
          top: 30px;
          right: 30px;
          height: 60px;
          width: 60px;
          background: white;
          border: 1px solid rgb(7, 185, 255);
          padding: 10px;
          transform: translate3d(0px, 0px, 80px);
          box-shadow: rgba(100, 100, 111, 0.2) 0px 17px 10px -10px;
        }

        .date-box span {
          display: block;
          text-align: center;
        }

        .date-box .month {
          color: rgb(6, 62, 215);
          font-size: 9px;
          font-weight: 700;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .parent {
            width: 100%;
            padding: 10px;
          }

          .content-box {
            padding: 30px 15px 15px 15px;
          }

          .content-box .card-title {
            font-size: 20px;
          }

          .content-box .card-content {
            font-size: 10px;
          }

          .content-box .see-more {
            font-size: 8px;
            padding: 0.3rem 0.5rem;
          }

          .date-box {
            top: 10px;
            right: 10px;
            height: 40px;
            width: 40px;
          }

          .date-box .month,
          .date-box .date {
            font-size: 7px;
          }
        }
      `}</style>
    </section>
  );
};

export default HomeServices;