import React from 'react';
import { useNavigate } from 'react-router-dom';

const blogs = [
  {
    id: 1,
    image: 'src/assets/Blog_test_1.jpeg',
    category: 'Apps',
    heading: 'YouTube Music is testing an AI-generated radio feature and adding a song recognition tool',
    paragraph: 'YouTube Music is introducing two new ways to boost song discovery on its platform. YouTube announced on Monday that it’s experimenting with an AI-generated conversational radio feature, and rolling out a new Shazam-like tool to help users discover the name of a song by singing, humming or playing parts of it.'
  },
  {
    id: 2,
    image: 'src/assets/Blog_test_1.jpeg',
    category: 'Technology',
    heading: 'New Advancements in Quantum Computing',
    paragraph: 'Recent advancements in quantum computing have sparked excitement and speculation about its potential applications. Researchers have achieved significant milestones in qubit stability and quantum error correction, paving the way for practical quantum computing solutions.'
  }
];

const BlogSection = () => {
  const navigate = useNavigate();

  return (
    <div className=''>
      <div className='text-white text-3xl sm:text-5xl flex justify-center font-semibold pt-4 pb-10 sm:pb-20 '>Our Blogs</div>
      <div className='flex flex-wrap justify-center'>
        {blogs.map(blog => (
          <div key={blog.id} className='max-w-md sm:max-w-lg lg:max-w-xl w-full md:w-4/5 flex flex-col rounded-xl mx-4 my-6 bg-[#1e1e1e] shadow-md'>
            <div className='img'>
              <img className='rounded-t-xl w-full h-64 object-cover' src={blog.image} alt='' />
            </div>
            <div className='px-6 py-4 flex flex-col justify-between flex-1'>
              <div>
                <div className='text-xl font-bold text-white'>{blog.category}</div>
                <div className='text-lg font-semibold mt-2 text-gray-300'>{blog.heading}</div>
              </div>
              <div className='text-gray-500 mt-4'>{blog.paragraph}</div>
            </div>
          </div>
        ))}
      </div>
      <div className='px-6 md:px-10 flex justify-center md:justify-end'>
        <button onClick={() => navigate("/blog")} className='text-white bg-blue-500 px-6 py-3 rounded-lg text-lg font-semibold hover:scale-105 hover:bg-blue-900 focus:outline-none'>
          Read More
        </button>
      </div>
    </div>
  );
}

export default BlogSection;
