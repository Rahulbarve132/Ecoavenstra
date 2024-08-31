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
    <div className="max-w-lg mx-auto mt-12 p-8 bg-white rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Employer Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <p className="text-gray-700 font-medium mb-2">I am looking for</p>
          <div className="flex items-center space-x-6">
            <label className="flex items-center text-gray-600">
              <input type="radio" name="lookingFor" value="recruitment" onChange={handleChange} className="form-radio text-blue-600 focus:ring-blue-500" />
              <span className="ml-2">Recruitment solutions</span>
            </label>
            <label className="flex items-center text-gray-600">
              <input type="radio" name="lookingFor" value="talent" onChange={handleChange} className="form-radio text-blue-600 focus:ring-blue-500" />
              <span className="ml-2">Talent acquisition</span>
            </label>
          </div>
        </div>

        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="tel"
          name="contactNumber"
          placeholder="Contact number"
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="mb-6 flex items-center space-x-6">
          <label className="flex items-center text-gray-600">
            <input type="radio" name="companyType" value="company" onChange={handleChange} className="form-radio text-blue-600 focus:ring-blue-500" />
            <span className="ml-2">Company</span>
          </label>
          <label className="flex items-center text-gray-600">
            <input type="radio" name="companyType" value="consultant" onChange={handleChange} className="form-radio text-blue-600 focus:ring-blue-500" />
            <span className="ml-2">Consultant</span>
          </label>
        </div>

        <input
          type="text"
          name="companyName"
          placeholder="Company/Consultancy name"
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          name="employees"
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          name="emailId"
          placeholder="Email ID"
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={handleChange}
          className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Get a Callback
        </button>
      </form>
    </div>
  );
};

export default EmployerForm;
