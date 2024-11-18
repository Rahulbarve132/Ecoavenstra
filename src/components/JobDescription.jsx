import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./Spinner.css"
import Modal from './Home page/Modal';
import ApplyJobs from './ApplyJobs';

const JobDescription = () => {
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchJob = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://ecoavenstra-be.onrender.com/api/v1/admin/jobs/${id}`);
        setJob(response.data.job);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching job:', error);
        setError('Failed to fetch job details. Please try again later.');
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  if (loading) return (
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
  );
  if (error) return <div className='text-white'>{error}</div>;
  if (!job) return <div className='text-white'>No job found</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-white">{job.jobTitle}</h1>
      <p className="text-gray-300 mb-4">{job.companyName} - {job.jobLocation}</p>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-3">Job description</h2>
        <h3 className="font-semibold mb-2">What You Will Do:</h3>
        <div className="whitespace-pre-wrap mb-4">{job.jobDescription}</div>
        
        <h3 className="font-semibold mb-2">What You Will Need:</h3>
        <ul className="list-disc pl-5 mb-4">
          <li>Overall experience of 3-5 yrs with at least 2 yrs in product management in a tech-led company.</li>
          <li>Experience in working with SQL: Dashboard creation & Automation using SQL and Excel.</li>
          <li>Experience in handling both - Regular publishing of dashboards and performing ROAs for any requirements.</li>
          <li>Exceptional problem-solving skills based on first principles of thinking.</li>
          <li>Strong bias for action and creating impact.</li>
          <li>Good understanding, and comfort with product management processes such as A/B experimentation, writing requirement documents, managing backlogs, and creating roadmaps.</li>
          <li>Good communication and stakeholder management skills to get work done across different functions and drive product development.</li>
          <li>Experience in working with Data Science is preferred.</li>
        </ul>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="font-semibold mb-2">Additional Information:</h3>
        <p><strong>Role:</strong> {job.jobTitle}</p>
        <p><strong>Industry Type:</strong> FinTech / Payments</p>
        <p><strong>Employment Type:</strong> {job.jobType}</p>
      </div>

      <button 
            className="text-white py-2 px-6 bg-[#222222] my-5 rounded-lg font-semibold"
            onClick={openModal}
          >
            Apply Here
          </button>

          <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ApplyJobs/>
      </Modal>
    </div>
  );
};

export default JobDescription;