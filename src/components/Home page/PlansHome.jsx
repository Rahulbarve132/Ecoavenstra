import React from 'react';
import { CheckIcon, XIcon } from 'lucide-react';

const PlansHome = () => {
  const plans = ['START', 'BASIC', 'PREMIUM', 'UNLIMITED', 'PRIVILEGE'];
  const features = [
    { name: 'Low-Res PNG file (200x200 px)', start: true, basic: true, premium: true, unlimited: true, privilege: true },
    { name: 'High resolution files', start: false, basic: true, premium: true, unlimited: true, privilege: true },
    { name: 'Vector files (PDF & SVG)', start: false, basic: true, premium: true, unlimited: true, privilege: true },
    { name: 'Transparent background', start: false, basic: true, premium: true, unlimited: true, privilege: true },
    { name: 'Unlimited edition of your logo', start: false, basic: false, premium: false, unlimited: true, privilege: true },
    { name: 'Brand ToolKit', start: false, basic: false, premium: true, unlimited: true, privilege: true },
    { name: 'No editing time restrictions', start: false, basic: '7 days', premium: true, unlimited: true, privilege: true },
    { name: 'Elements of your brand', start: false, basic: 'Optional (s)', premium: true, unlimited: true, privilege: true },
  ];

  return (
    <div className="bg-black text-white p-6">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="p-4 border-b border-gray-700"></th>
              {plans.map((plan) => (
                <th key={plan} className="p-4 border-b border-gray-700 text-center">{plan}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index} className="bg-gray-800">
                <td className="p-4 border-b border-gray-700">{feature.name}</td>
                {plans.map((plan) => (
                  <td key={plan} className="p-4 border-b border-gray-700 text-center">
                    {renderFeatureStatus(feature[plan.toLowerCase()])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const renderFeatureStatus = (status) => {
  if (typeof status === 'boolean') {
    return status ? <CheckIcon className="inline-block text-blue-500" /> : <XIcon className="inline-block text-red-500" />;
  }
  return status;
};

export default PlansHome;