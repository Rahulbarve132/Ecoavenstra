import React, { useState } from 'react';

const EmployerForm = () => {
  const [formData, setFormData] = useState({
    lookingFor: '',
    name: '',
    contactNumber: '',
    companyType: '',
    companyName: '',
    employees: '',
    designationName: '',
    emailId: '',
    city: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <p className="mb-2 text-gray-700">I am looking for</p>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input type="radio" name="lookingFor" value="recruitment" onChange={handleChange} className="form-radio text-blue-600" />
              <span className="ml-2">Recruitment solutions</span>
            </label>
            
          </div>
        </div>

        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />

        <input
          type="tel"
          name="contactNumber"
          placeholder="Contact number"
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />

        <div className="mb-4 flex space-x-4">
          <label className="inline-flex items-center">
            <input type="radio" name="companyType" value="company" onChange={handleChange} className="form-radio text-blue-600" />
            <span className="ml-2">Company</span>
          </label>
          <label className="inline-flex items-center">
            <input type="radio" name="companyType" value="consultant" onChange={handleChange} className="form-radio text-blue-600" />
            <span className="ml-2">Consultant</span>
          </label>
        </div>

        <input
          type="text"
          name="companyName"
          placeholder="Company/Consultancy name"
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />

        <select
          name="employees"
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        >
          <option value="">No. of employees</option>
          <option value="1-10">1-10</option>
          <option value="11-50">11-50</option>
          <option value="51-200">51-200</option>
          <option value="201+">201+</option>
        </select>

        <input
          type="text"
          name="designationName"
          placeholder="Designation name"
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />

        <input
          type="email"
          name="emailId"
          placeholder="Email ID"
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />

        <button
          type="submit"
          className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Get a callback
        </button>
      </form>
    </div>
  );
};

export default EmployerForm;