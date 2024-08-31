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

  const handleWhatsAppClick = () => {
    const phoneNumber = "9098201840";
    const message = "Hello Rahul";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  https://wa.link/4q1dhw

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
            <button
              className="rounded-lg bg-blue-600 py-2 px-6 sm:py-3 sm:px-10"
              onClick={handleWhatsAppClick}
            >
              Request Free Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 px-4 sm:px-8 lg:px-16">
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
              className="bg-cover bg-center h-64 flex items-center justify-center text-white text-xl font-semibold"
              style={{ backgroundImage: `url(${service.backgroundUrl})` }}
            >
              <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Plans Section */}
      <div className="py-16 px-4 sm:px-8 lg:px-16 bg-blue-600">
        <div className="text-white text-3xl sm:text-4xl lg:text-5xl flex justify-center font-bold">
          Our Pricing Plans
        </div>
        <div className="flex justify-center py-6">
          <div className="text-white text-center md:py-6 text-sm  md:text-lg w-full lg:w-10/12">
            Affordable pricing plans tailored to meet your business needs. Each
            plan comes with exceptional features and support to ensure your
            success.
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg text-black text-center"
            >
              <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
              <p className="text-lg line-through">{plan.originalPrice}</p>
              <p className="text-3xl font-bold text-blue-600">
                {plan.discountedPrice}
              </p>
              <p className="text-sm text-gray-600 mb-4">{plan.gst}</p>
              <ul className="text-left mb-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-sm">
                    - {feature}
                  </li>
                ))}
              </ul>
              <button className="rounded-lg bg-blue-600 text-white py-2 px-6 sm:py-3 sm:px-10">
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
