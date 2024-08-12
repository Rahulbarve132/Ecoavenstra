import React from 'react'
import { useNavigate } from 'react-router-dom';

const PlansHome = () => {


    const pricingData = [
        {
          plan: "Web Development",
          standard: "$1,999 Per Month",
          premium: "$2,999 Per Month",
          enterprise: "$5,999 Per Month"
        },
        {
          plan: "eCommerce Development",
          standard: "$600 Per Month",
          premium: "$1,000 Per Month",
          enterprise: "$2,000 Per Month"
        },
        {
          plan: "Digital Marketing Services",
          standard: "$1,499 Per Month",
          premium: "$1,999 Per Month",
          enterprise: "$2,499 Per Month"
        },
        {
          plan: "UI/UX Designing",
          standard: "$499 Per Month",
          premium: "$599 Per Month",
          enterprise: "$799 Per Month"
        },
        {
          plan: "Portfolio Design & Development",
          standard: "$999 Per Month",
          premium: "$1,499 Per Month",
          enterprise: "$1,999 Per Month"
        }
      ];


      const navigate = useNavigate();
  return (
    <div>
       <div>
      <div className='text-5xl text-white py-16 text-center px-4'>Customized  Packages According Your Business Needs</div>

<div>
    <div className="bg-black text-white p-6">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-black text-white">
              <th className="p-4 py-6 border  border-gray-700">Plan</th>
              <th className="p-4 py-6 border border-gray-700">Standard</th>
              <th className="p-4 py-6 border border-gray-700">Premium</th>
              <th className="p-4 py-6 border border-gray-700">Custom</th>
            </tr>
          </thead>
          <tbody>
            {pricingData.map((item, index) => (
              <tr key={index} className="bg-black text-white">
                <td className="p-4 py-6 border border-gray-700 ">{item.plan}</td>
                <td className="p-4 py-6 border border-gray-700">{item.standard}</td>
                <td className="p-4 py-6 border border-gray-700">{item.premium}</td>
                <td className="p-4 py-6 border border-gray-700">{item.enterprise}</td>
              </tr>
            ))}
            <tr className="bg-black text-white">
              <td className="p-4 border border-gray-700" colSpan={3}>
                Need more information? <a href="#" className="text-blue-500">Talk to Sales</a>
              </td>
              <td className="p-4 border border-gray-700 text-center">
                <button onClick={()=> navigate("/services")} className="bg-blue-500 text-white py-2 px-4 rounded-md">Know More</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  





    </div>
    </div>
  )
}

export default PlansHome
