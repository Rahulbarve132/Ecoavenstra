import React, { useState, useEffect } from 'react'
import { FaArrowRight } from "react-icons/fa";
import axios from 'axios';

// ShimmerCard component
const ShimmerCard = () => {
  return (
    <div className="w-full md:w-1/3 bg-gray-800 rounded-2xl overflow-hidden animate-pulse">
      <div className="h-48 bg-gray-700"></div>
      <div className="p-4">
        <div className="flex justify-between mb-2">
          <div className="h-4 bg-gray-700 w-1/4 rounded"></div>
          <div className="h-4 bg-gray-700 w-1/4 rounded"></div>
        </div>
        <div className="h-6 bg-gray-700 w-3/4 rounded mb-2"></div>
        <div className="h-4 bg-gray-700 w-full rounded"></div>
      </div>
    </div>
  );
};

const dummyArticles = [
  {
    id: 1,
    title: "The Future of Renewable Energy",
    category: "Technology",
    updatedAt: "2024-08-15T00:00:00.000Z",
    shortDescription: "Exploring the latest advancements in solar and wind power technologies and their impact on global energy consumption.",
    coverImage: "src/assets/testimonial 3.jpeg"
  },
  {
    id: 2,
    title: "Artificial Intelligence in Healthcare",
    category: "Health",
    updatedAt: "2024-08-14T00:00:00.000Z",
    shortDescription: "How AI is revolutionizing medical diagnosis, treatment planning, and patient care in hospitals around the world.",
    coverImage: "src/assets/testimonial 3.jpeg"
  },
  {
    id: 3,
    title: "The Rise of Sustainable Fashion",
    category: "Lifestyle",
    updatedAt: "2024-08-13T00:00:00.000Z",
    shortDescription: "Examining the growing trend of eco-friendly clothing and its impact on the fashion industry and consumer behavior.",
    coverImage: "src/assets/testimonial 3.jpeg"
  },
  {
    id: 4,
    title: "Space Tourism: The Next Frontier",
    category: "Travel",
    updatedAt: "2024-08-12T00:00:00.000Z",
    shortDescription: "An in-depth look at the emerging space tourism industry and what it means for the future of travel and exploration.",
    coverImage: "src/assets/testimonial 3.jpeg"
  }
];

const BlogPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://ecoavenstra-be.onrender.com/api/v1/admin/articles');
        setArticles(response?.data?.articles.length > 0 ? response?.data?.articles : dummyArticles);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching articles:', error);
        // setArticles(dummyArticles);
      } finally {
        setLoading(false);
      }
      console.log(response.data.length)
    };

    fetchArticles();
    
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
  };

  const truncateDescription = (description, wordLimit) => {
    const words = description.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return description;
  };

  const featuredArticle = articles[0] || dummyArticles[0];

  console.log(articles)

  return (
    <div className='px-4 sm:px-8 md:px-16 main-container'>
      {loading ? (
        <div className="w-full h-96 bg-gray-800 animate-pulse rounded-xl"></div>
      ) : (
        <div className='1st-big-container-1st w-full py-8 md:py-14 flex flex-col md:flex-row'>
          <div className='half-pic w-full md:w-1/2 mb-8 md:mb-0'>
            <div className='p-3 rounded-xl border border-gray-600'>
              <img className='w-full h-64 object-cover rounded-xl opacity-80' src={featuredArticle.coverImage || "src/assets/testimonial 3.jpeg"} alt={featuredArticle.title} />
            </div>
          </div>
          <div className='another-half w-full md:w-1/2 flex flex-col md:px-10'>
            <div className='upper-circle bg-gray-600 flex py-1 text-xs justify-center items-center w-fit px-1 gap-2 rounded-full'>
              <div className='bg-blue-500 flex justify-center items-center px-2 py-1 font-semibold rounded-full'>News !</div>
              <div className='text-white font-semibold'>Read continue</div>
            </div>
            <div className='big-heading text-white py-4 text-3xl md:text-4xl lg:text-5xl'>
              {featuredArticle.title}
            </div>
            <div className='description text-white text-sm py-4'>
              {truncateDescription(featuredArticle.shortDescription, 30)}
            </div>
            <div>
              <button className='flex justify-center items-center gap-4 text-blue-500 font-semibold'>
                Read More <FaArrowRight size={15} color='#1d5fd3' />
              </button>
            </div>
          </div>
        </div>
      )}
      
      <div className='2ed-big-container pt-4 pb-10 flex flex-col gap-2'>
        <div className='text-white text-2xl md:text-3xl font-semibold'>Our Recent Articles</div>
        <div className='text-gray-100 text-xs'>Stay Informed With Our Latest Insight</div>
        <div className='big-3 w-full pt-4 flex flex-col md:flex-row gap-6'>
          {loading ? (
            <>
              <ShimmerCard />
              <ShimmerCard />
              <ShimmerCard />
            </>
          ) : (
            articles.slice(1, 4).map((article) => (
              <div key={article.id} className='w-full md:w-1/3 bg-red flex flex-col rounded-2xl mb-6 md:mb-0'>
                <img className='w-full h-48 object-cover rounded-2xl opacity-90' src={article.coverImage || "src/assets/testimonial 3.jpeg"} alt={article.title} />
                <div className='upper-2 flex justify-between py-2'>
                  <div className='text-blue-500 font-bold text-sm'>{article.category}</div>
                  <div className='text-white font-semibold text-sm'>{formatDate(article.updatedAt)}</div>
                </div>
                <div className='heading text-white text-lg font-bold'>{article.title}</div>
                <div className='description py-2 text-gray-300 text-xs'>{truncateDescription(article.shortDescription, 20)}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default BlogPage