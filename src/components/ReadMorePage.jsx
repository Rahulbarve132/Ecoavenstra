import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ReadMorePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://ecoavenstra-be.onrender.com/api/v1/admin/articles/${id}`);
        setArticle(response.data.article);
      } catch (error) {
        console.error('Error fetching article:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) {
    return <div className=" py-10 my-10 w-full h-96 bg-[#222222] animate-pulse"></div>;
  }

  if (!article) {
    return (<div className='flex w-full h-[90vh] bg-black justify-center items-center'>
    <div className="text-white text-xl ">Article not found.</div>
    </div>);
  }

  return (
    <div className=' mx-auto px-10 py-8'>
     
      {article.coverImage && (
        <img src={article.coverImage} alt={article.title} className='w-full h-96 object-cover mb-4' />
      )}

      <div className='text-white py-2 text-4xl font-bold'>{article.title}</div>
      <div className='flex justify-between user-date'>
       <div className='flex items-center text-sm text-gray-600 mb-4'>
        <div className='text-white text-sm font-thin'>{article.user}</div>
        <div className='mx-2'>•</div>
        <div className='text-white text-sm font-thin'>{new Date(article.createdAt).toLocaleDateString()}</div>
      </div>
      <div className='flex justify-end mb-4'>
        <button className='mr-2 text-white'>Share</button>
        <button className='text-white'>More</button>
      </div>
      </div>
      <p className='text-gray-200 text-xl mb-4'>{article.shortDescription}</p>
      <div className='text-gray-200 text-xs mb-4' dangerouslySetInnerHTML={{ __html: article.description }}></div>
      
      {/* Note: The API response doesn't include top stories, so we've removed that section */}
    </div>
  );
};

export default ReadMorePage;