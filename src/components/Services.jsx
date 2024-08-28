import React from "react";
import service from "../../src/assets/services_video.mp4";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "From lightweight MVPs to complex web-based products, our experts can help make your vision a reality, while relieving you of all technical concerns.",
      backgroundUrl:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "eCommerce Development",
      description:
        "Our experts can create a modern, intuitive and eco-friendly store to exhibit your products and services to people worldwide.",
      backgroundUrl:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Digital Marketing Services",
      description:
        "We could really assist you in enhancing brand authority and exposure. You are really only one tap away from reaching your intended audience.",
      backgroundUrl:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "UI/UX Designing",
      description:
        "Our experts create extraordinary UI/UX design ideas consistent with the latest trends and technologies.",
      backgroundUrl:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Portfolio Design & Development",
      description:
        "We design and develop stunning portfolios that showcase your work professionally, helping you impress clients and employers.",
      backgroundUrl:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Hire Developers",
      description:
        "We have a team of experienced developers. Hire dedicated developers on an hourly or monthly basis.",
      backgroundUrl:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const pricingPlans = [
    {
      title: "Standard Plan",
      originalPrice: "₹25,000",
      discountedPrice: "₹22,500",
      gst: "18% GST ₹ 3960",
      features: [
        "8 pages Website",
        "1 Year Free Domain Name (.com .in .org)",
        "1 Year Free Hosting (Unlimited Space)",
        "Dynamic Website (Premium Design)",
        "Admin Access",
        "Lifetime 24/7 Free Hosting Support",
        "Unlimited Images & Videos Upload",
        "Free SSL Certificates",
        "5 Free Email id",
        "SEO Friendly Website",
        "100% Responsive Website",
        "Live Chat Integration",
        "Payment Gateway Integration",
        "Social Media Integration",
        "Call Button Integration",
        "WhatsApp Button Integration",
        "Inquiry Form",
        "1 Year Free Technical Support For Website",
        "Annual Renewal For Hosting Rs.3000",
      ],
      buttonText: "Call Now",
    },
    {
      title: "Premium Plan",
      originalPrice: "₹50,000",
      discountedPrice: "₹45,000",
      gst: "18% GST ₹ 2520",
      features: [
        "12 pages Website",
        "1 Year Free Domain Name (.com .in .org)",
        "1 Year Free Hosting (Unlimited Space)",
        "Dynamic Website (Premium Design)",
        "Admin Access",
        "Google Search Console Setup",
        "Lifetime 24/7 Free Hosting Support",
        "Unlimited Images & Videos Upload",
        "Free SSL Certificates",
        "10 Free Email id",
        "SEO Friendly Website",
        "100% Responsive Website",
        "Live Chat Integration",
        "Payment Gateway Integration",
        "Social Media Integration",
        "Call Button Integration",
        "WhatsApp Button Integration",
        "Inquiry Form",
        "Woocommerce Features",
        "1 Year Free Technical Support For Website",
        "Annual Renewal For Hosting Rs.3000",
      ],
      buttonText: "Call Now",
    },
    {
      title: "Custom Plan",
      originalPrice: "₹???",
      discountedPrice: "₹????",
      gst: "18% GST Applicable",
      features: [
        "Pages: According to Requirement",
        "1 Year Free Domain Name (.com .in .org)",
        "1 Year Free Hosting (Unlimited Space)",
        "Dynamic Website",
        "Admin Access",
        "Google Search Console Setup",
        "Lifetime 24/7 Free Hosting Support",
        "Unlimited Images & Videos Upload",
        "Free SSL Certificates",
        "10 Free Email id",
        "SEO Friendly Website",
        "100% Responsive Website",
        "Live Chat Integration",
        "Payment Gateway Integration",
        "Social Media Integration",
        "Call Button Integration",
        "WhatsApp Button Integration",
        "Inquiry Form",
        "Woocommerce Features",
        "1 Year 24/7 Free Support For Website",
        "Annual Renewal For Hosting Rs.4000",
      ],
      buttonText: "Call Now",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen main-screen">
        <div className="w-full absolute opacity-40 inset-0 overflow-hidden">
          <video
            className="videoTag w-full h-full object-cover"
            autoPlay
            loop
            muted
          >
            <source src={service} type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center text-white z-10 px-4 md:pl-28">
          <div className="text-3xl sm:text-5xl md:text-6xl font-bold">
            Services
          </div>
          <div className="w-full md:w-3/4 py-4 text-sm sm:text-lg md:text-xl">
            Leverage our expertise to design, build, and fast-track your
            software lifecycle, utilizing advanced processes for efficiency and
            competitive advantage in your sector.
          </div>
          <div className="pt-4 sm:pt-10">
            <button className="rounded-lg bg-blue-600 py-2 px-6 sm:py-3 sm:px-10">
              Request Free Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16  px-4 sm:px-8 lg:px-16">
        <div className="text-white text-3xl sm:text-4xl lg:text-5xl flex justify-center font-bold">
          Our Development & Digital Marketing Services
        </div>
        <div className="flex justify-center py-6">
          <div className="text-white text-center md:py-6 text-sm  md:text-lg w-full lg:w-10/12">
            Our team delivers custom and universal features for seamless
            customer journeys, ensuring quick, reliable, and secure eCommerce
            web services. With extensive software engineering expertise, we
            offer comprehensive product engineering services. Our data-driven
            digital marketing strategies boost lead generation and conversion
            rates, driving significant revenue growth.
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-black relative  text-white border hover:border-blue-900 border-gray-800 p-4 rounded-md transition duration-300 transform hover:scale-105"
            >
              <img
                className="absolute top-0 left-0 right-0  opacity-0 w-full h-full object-cover hover:opacity-60"
                src={service.backgroundUrl}
                alt=""
              />
              <div className="text-lg   sm:text-xl font-extrabold my-2">
                {service.title}
              </div>
              <div className="py-4 sm:py-6 text-sm sm:text-base">
                {service.description}
              </div>
              <div className="flex justify-end px-4 text-blue-500 py-4 text-sm sm:text-base">
                Know More
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Plans Section */}
      <div className="plans py-10 px-4 sm:px-8 lg:px-16">
        <div className="text-white text-3xl sm:text-4xl lg:text-5xl flex justify-center py-6 font-bold">
          Our Plans
        </div>
        <div className="text-white text-lg sm:text-2xl font-semibold flex justify-center">
          Pricing For Web Application
        </div>
        <div className="bg-black text-white p-4 sm:p-6 flex flex-col lg:flex-row justify-center space-y-6 lg:space-y-0 lg:space-x-6">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="border relative border-blue-500 rounded-lg overflow-hidden shadow-lg w-full lg:w-1/3"
            >
              <div className="bg-blue-600 text-center p-4">
                <h2 className="text-xl sm:text-2xl font-bold">{plan.title}</h2>
              </div>
              <div className="p-4 text-center">
                <p className="text-lg sm:text-xl line-through">
                  {plan.originalPrice}
                </p>
                <p className="text-2xl sm:text-3xl font-bold">
                  {plan.discountedPrice}
                </p>
                <p className="text-sm">{plan.gst}</p>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">Features Include:</h3>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="text-center p-4">
                <button className="bg-orange-500 text-white py-2 px-4 rounded-md">
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
