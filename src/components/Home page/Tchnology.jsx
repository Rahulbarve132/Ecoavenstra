import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const data = [
  
  {
    title: 'Frontend',
    categories: [
      { subtitle: 'Technologies', items: 'HTML5, CSS3, Javascript, Typescript, PHP, EJS' },
      { subtitle: 'Frameworks & Tools', items: 'Bootstrap, CodeIgniter, Laravel, ReactJS, Redux, WordPress, AntDesign, Reactstrap, React Bootstrap' }
    ]
  },
  {
    title: 'Backend',
    categories: [
      { subtitle: 'Technologies', items: 'NodeJS, Express JS, PHP, MySQL, MongoDB, PostgreSQL, GraphQL' },
      { subtitle: 'Frameworks & Tools', items: 'Nodemailer, CORS, JWT' }
    ]
  },
  {
    title: 'DevOps',
    categories: [
      { subtitle: 'CI/CD', items: 'Github Actions, Gitlab Pipelines, Azure Pipelines, Jenkins' },
      { subtitle: 'Monitoring, Tracking & Logging', items: 'Github Actions, Gitlab Pipelines, Azure Pipelines, Jenkins' }
    ]
  },
  {
    title: 'Cloud',
    categories: [
      { subtitle: 'Technologies', items: 'AWS, Azure, GCP' },
      { subtitle: 'Libraries', items: 'Serverless, AWS CLI' }
    ]
  },
  {
    title: 'Android',
    categories: [
      { subtitle: 'Languages', items: 'Kotlin, Java, JavaScript, Typescript' },
      { subtitle: 'Frameworks & Tools', items: 'Native Android, React Native, Expo, Android Studio, Push Notifications, Location Services, Google Places API, Google Fit & Biometric Authentication' }
    ]
  },
  {
    title: 'iOS',
    categories: [
      { subtitle: 'Languages', items: 'Swift, Objective-C, JavaScript, Typescript' },
      { subtitle: 'Frameworks & Tools', items: 'Native iOS, React Native, Expo, Xcode, Push Notifications, Location Services, Google Places API, Apple Health APIs, Biometric Authentication' }
    ]
  }
 
];

const Tchnology = () => {
  AOS.init()  

   
  return (
    <div className='px-4 py-8'>
      <div data-aos="fade-up" className='text-white text-3xl sm:text-5xl flex justify-center font-semibold pt-4 pb-10 sm:pb-20'>Technologies We Master</div>
      <div className='flex flex-wrap justify-center'>
        {data.map((item, index) => (
          <div key={index} data-aos="flip-right"  className=' box h-[450px] p-8 py-4 sm:w-1/4 w-full font-semibold bg-[#1a1a1a] flex flex-col rounded-xl mx-4 mb-8'>
            
            <div className='flex py-6 text-white text-4xl'>{item.title}</div>
            {item.categories.map((category, idx) => (
              <div key={idx}>
                <div className='text-2xl font-semibold text-white py-1'>{category.subtitle}</div>
                <div className='text-white font-light'>{category.items}</div>
              </div>
            ))}
          
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tchnology;
