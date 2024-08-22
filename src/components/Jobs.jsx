import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./Spinner.css"

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://ecoavenstra-be.onrender.com/api/v1/admin/jobs');
        setJobs(response.data.jobs);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setError('Failed to fetch jobs. Please try again later.');
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) return(
    <div className='h-[90vh] flex w-full justify-center items-center'>
      <div class="spinner">
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</div>
</div>
   
  ) ;
  if (error) return <div className="text-white">{error}</div>;

  return (
    <div className="px-20 py-10">
      {jobs.map((job) => (
        <div key={job.id} className="bg-white p-4 rounded-lg shadow mb-4">
          <h2 className="text-lg font-semibold text-blue-600">{job.jobTitle}</h2>
          <p className="text-sm text-gray-600">{job.companyName}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="inline-flex items-center text-sm">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              {job.jobType}
            </span>
            <span className="inline-flex items-center text-sm">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              {job.jobLocation}
            </span>
            <span className="inline-flex items-center text-sm">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              {job.salaryRange}
            </span>
          </div>
          <div className="mt-2 text-sm text-gray-500 flex gap-2">
            <div>Job Openings -</div>
            <div>{job.vacancy}</div>
          </div>
          <div className="mt-2 text-xs text-gray-400">
            {new Date(job.createdAt).toLocaleString()} ago
          </div>
          <Link to={`/jobs/job/${job.id}`}>
            <button className="mt-2 border border-blue-600 px-2 rounded-lg text-blue-600 hover:text-blue-800 text-sm py-1">Apply Now</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Jobs;