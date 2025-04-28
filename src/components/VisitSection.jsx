import React, { useState } from "react";
import bg from "../assets/bg1.png";

const VisitSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    campus: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // You would typically send this data to your backend
    alert("Form submitted successfully!");
  };

  return (
    <section className="w-full mx-auto p-8">
      <div className="flex gap-20 items-center">
        <div className="hidden lg:block">
          <img
            src={bg}
            alt=""
            className="custom-clip object-cover"
          />
        </div>
        <div className="w-100 grid gap-4">
          <h2 className="text-4xl font-bold text-left text-gray-800 mb-6">
            Visit WISC Campus
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required placeholder="Full Name (*)"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="space-y-1">
             
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                required placeholder="Contact Number (*)"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="space-y-1">
              <select
                id="campus"
                name="campus"
                value={formData.campus}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select your desired campus to contact</option>
                <option value="main">Main Campus</option>
                <option value="north">North Campus</option>
                <option value="south">South Campus</option>
              </select>
            </div>

            <div className="space-y-1">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={1} placeholder="Contact Message (*)"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-18 flex justify-center py-1 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Send 
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default VisitSection;
