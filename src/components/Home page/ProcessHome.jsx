import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProcessHome = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Client Familiarization.',
      description: 'The first step of every success story at Think To Share starts with us getting to know you and your company as we take our time to understand your vision and assess your business growth needs.'
    },
    {
      number: '02',
      title: 'Data-based Market Research and team Understanding.',
      description: 'The second step is when we categorize our understanding of your current business situation and measure it with the yardstick of your competitors situations with extensive market research'
    },
    {
      number: '03',
      title: 'Plan-Of-Action & Strategy Formulation',
      description: 'The third step of this journey is when we create an action plan and formulate data-based strategies based on our services to find solutions that improve your business standing and brand authority.'
    },
    {
      number: '04',
      title: 'Strategy Execution',
      description: 'We come to the last step of this growth journey as we execute our plan of action so that all the research, planning and execution brings to fruition concrete results in the form of your business growth.'
    }
  ];

  return (
    <div className="bg-black text-white p-8 py-20 flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 pr-0 md:pr-8 flex flex-col justify-center items-center mb-8 md:mb-0">
        <div className="text-4xl font-semibold mb-2 bg-purple-200 text-black p-2 w-full md:w-[400px] flex justify-center py-8 transform transition-transform duration-700 -skew-y-6 hover:skew-y-1 ease-in-out">
          Our process
        </div>
        <div className="text-4xl font-semibold mb-2 bg-pink-200 text-black p-2 w-full md:w-[400px] flex justify-center py-8 transform transition-transform duration-700 skew-y-3 hover:skew-y-6 ease-in-out">
          Simple, seamless
        </div>
        <div className="text-4xl font-semibold bg-yellow-100 text-black p-2 w-full md:w-[400px] flex justify-center py-8 transform -skew-y-3 transition-transform duration-700 ease-in-out hover:skew-y-2">
          Streamlined.
        </div>
      </div>
      <div className="w-full md:w-1/2 space-y-8 relative">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start relative">
            <div className="absolute -left-4 w-16 h-16 bg-orange-500 rounded-full flex flex-col items-center justify-center text-3xl font-bold z-10">
              <div>{step.number}</div>
              <div className="font-thin text-xs">Steps</div>
            </div>
            <div className="ml-20">
              <h4 className="text-orange-500 font-bold mb-1">{step.title}</h4>
              <p className="text-sm text-gray-400">{step.description}</p>
            </div>
          </div>
        ))}
        <button className="ml-8 mt-4 bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors">
          Book A Call
        </button>
      </div>
    </div>
  );
};

export default ProcessHome;
