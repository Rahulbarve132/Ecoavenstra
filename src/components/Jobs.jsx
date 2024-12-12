import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Spinner.css';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filters
  const [profile, setProfile] = useState('');
  const [location, setLocation] = useState('');
  const [workFromHome, setWorkFromHome] = useState(false);
  const [partTime, setPartTime] = useState(false);
  const [salaryRange, setSalaryRange] = useState([0, 10]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://ecoavenstra-be.onrender.com/api/v1/admin/jobs');
        setJobs(response.data.jobs);
        setFilteredJobs(response.data.jobs); // Initially show all jobs
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setError('Failed to fetch jobs. Please try again later.');
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Apply filters dynamically
  useEffect(() => {
    const filterJobs = () => {
      const isAnyFilterActive =
        profile || location || workFromHome || partTime || salaryRange[0] > 0 || salaryRange[1] < 10;

      if (!isAnyFilterActive) {
        setFilteredJobs(jobs);
        return;
      }

      const result = jobs.filter((job) => {
        const matchesProfile = profile ? job.jobTitle.toLowerCase().includes(profile.toLowerCase()) : true;
        const matchesLocation = location ? job.jobLocation.toLowerCase().includes(location.toLowerCase()) : true;

        const matchesSalary = salaryRange
          ? parseSalaryRange(job.salaryRange, salaryRange)
          : true;

        const matchesWorkFromHome = workFromHome
          ? job.jobType.toLowerCase().includes('work from home') || job.jobLocation.toLowerCase().includes('work from home')
          : true;

        const matchesPartTime = partTime
          ? job.jobType.toLowerCase().includes('part-time')
          : true;

        return matchesProfile && matchesLocation && matchesSalary && matchesWorkFromHome && matchesPartTime;
      });

      setFilteredJobs(result);
    };

    filterJobs();
  }, [profile, location, salaryRange, workFromHome, partTime, jobs]);

  // Helper function to parse salary range
  const parseSalaryRange = (jobSalary, selectedRange) => {
    try {
      const cleanSalary = jobSalary.replace(/[^\d-]/g, '');
      const salaryParts = cleanSalary.split('-').map((part) => parseInt(part.trim(), 10));

      if (salaryParts.length < 2) return true;

      const minSalary = selectedRange[0] * 100000;
      const maxSalary = selectedRange[1] * 100000;

      return salaryParts[0] >= minSalary && salaryParts[1] <= maxSalary;
    } catch (error) {
      console.error('Salary parsing error:', error);
      return true;
    }
  };

  if (loading)
    return (
      <div className="h-[90vh] flex w-full justify-center items-center">
        <div className="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  if (error) return <div className="text-white">{error}</div>;

  return (
    <div className="w-full flex">
      {/* Filters Section */}
      <div className="w-1/3 mt-10 text-white filters border h-fit border-white p-4">
        <h2 className="text-lg font-bold mb-4">Filters</h2>
        <div className="mb-4">
          <label className="block text-sm mb-1">Profile</label>
          <input
            type="text"
            className="w-full p-2 border rounded text-black"
            value={profile}
            onChange={(e) => setProfile(e.target.value)}
            placeholder="e.g., Graphic Design"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-1">Location</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g., Delhi"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm">Work Options</label>
          <div className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={workFromHome}
              onChange={() => setWorkFromHome(!workFromHome)}
            />
            <span>Work from Home</span>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={partTime}
              onChange={() => setPartTime(!partTime)}
            />
            <span>Part-time</span>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-1">Annual Salary (in Lakhs)</label>
          <input
            type="range"
            min="0"
            max="10"
            step="1"
            value={salaryRange[1]}
            onChange={(e) => setSalaryRange([salaryRange[0], parseInt(e.target.value)])}
          />
          <div className="flex justify-between text-xs">
            <span>{salaryRange[0]} L</span>
            <span>{salaryRange[1]} L</span>
          </div>
        </div>
      </div>

      {/* Jobs Listing Section */}
      <div className="px-20 py-10 w-2/3">
        {filteredJobs.length === 0 ? (
          <div className="text-white text-center text-xl">No jobs found matching your criteria</div>
        ) : (
          filteredJobs.map((job) => (
            <div key={job.id} className="bg-white p-4 rounded-lg shadow mb-4">
              <h2 className="text-lg font-semibold text-blue-600">{job.jobTitle}</h2>
              <p className="text-sm text-gray-600">{job.companyName}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="inline-flex items-center text-sm">{job.jobType}</span>
                <span className="inline-flex items-center text-sm">{job.jobLocation}</span>
                <span className="inline-flex items-center text-sm">{job.salaryRange}</span>
              </div>
              <div className="mt-2 text-sm text-gray-500 flex gap-2">
                <div>Job Openings -</div>
                <div>{job.vacancy}</div>
              </div>
              <div className="mt-2 text-xs text-gray-400">
                {new Date(job.createdAt).toLocaleString()} ago
              </div>
              <Link to={`/jobs/job/${job.id}`}>
                <button className="mt-2 border border-blue-600 px-2 rounded-lg text-blue-600 hover:text-blue-800 text-sm py-1">
                  Apply Now
                </button>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Jobs;
