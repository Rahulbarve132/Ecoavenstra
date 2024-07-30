import React from 'react';

const blogs = [
  {
    id: 1,
    image: 'src/assets/testimonial 1.jpeg',
    date: '18th Jun 2024',
    heading: 'Exploring the Best Front End Development Frameworks in 2024',
    subheading: 'Techosquare',
    description: 'The front-end is the face of your application. It is the first thing users see and interact with. It is crucial to get it right. Front-end matters! The look and feel of your website may make or break your business\'s reputation, search engine rankings, and overall success. Therefore, it is crucial to explore the right front-end framework for your website that works the best for your business, which gives it a touch of superiority over the rest and makes your website an example for others to follow.',
    link: '#',
  },
  {
    id: 2,
    image: 'src/assets/service1.png',
    date: '20th Jul 2024',
    heading: 'Understanding the Importance of UX Design',
    subheading: 'DesignWorld',
    description: 'UX design is critical in creating an engaging user experience. A well-thought-out UX design ensures users have a positive interaction with your product, leading to higher satisfaction and retention rates. It is essential to focus on user needs and behaviors to craft intuitive and accessible interfaces.',
    link: '#',
  },
];

const BlogCard = ({ blog }) => {
  return (
    <div className="flex flex-col md:flex-row shadow-lg overflow-hidden m-4">
      <div className='md:w-1/3'>
        <img className="w-full hover:scale-105 transition-transform duration-300" src={blog.image} alt={blog.heading} />
      </div>
      <div className="md:w-2/3 p-6 flex flex-col bg-black hover:bg-gradient-to-r hover:from-[#000000] hover:via-[#08003c] hover:to-black justify-between">
        <div>
          <p className="text-gray-100 text-sm">{blog.date}</p>
          <h3 className="font-bold text-white text-xl my-2">{blog.heading}</h3>
          <h4 className="text-blue-200 font-semibold">{blog.subheading}</h4>
          <p className="text-gray-300 text-base mt-4">{blog.description}</p>
        </div>
        <a href={blog.link} className="text-blue-500 hover:text-blue-700 mt-4 inline-block">Read More</a>
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <section className="py-8 px-1">
      <div className="relative w-full overflow-hidden" style={{ height: '70vh' }}>
        <video className="absolute opacity-50 top-0 left-0 w-full h-full object-cover" autoPlay loop muted src="src/assets/blog_Background.mp4"></video>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="text-[#fff] text-7xl font-bold  p-4 rounded-lg">
            Blogs
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
