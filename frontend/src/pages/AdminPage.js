import { useState } from 'react';
import { createEmployee } from '../api/employee';

const AdminPage = () => {
  
  const [formData, setFormData] = useState({
    f_Id: '',           // Add ID field
    f_Name: '',
    f_Email: '',
    f_Mobile: '',
    f_Designation: '',
    f_gender: '',
    f_Course: '',
    f_Image: null,     // Field for the image
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'f_Image') {
      setFormData({ ...formData, [name]: files[0] }); // Store the selected file
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSubmit = new FormData();
    
    // Append all form fields to FormData
    for (const key in formData) {
      formDataToSubmit.append(key, formData[key]);
    }
  
    try {
      const response = await createEmployee(formDataToSubmit);
      console.log(response.msg);
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="flex flex-col md:flex-row max-w-5xl mx-auto p-6 bg-white border rounded-lg shadow-md">
      <div className="md:w-1/2 p-6">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Create Employee</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* ID Field */}
          <div>
            <label className="block text-gray-600 mb-1">Employee ID:</label>
            <input
              type="number" // Use type="number" for ID
              name="f_Id"
              value={formData.f_Id}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Name Field */}
          <div>
            <label className="block text-gray-600 mb-1">Name:</label>
            <input
              type="text"
              name="f_Name"
              value={formData.f_Name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          
          {/* Email Field */}
          <div>
            <label className="block text-gray-600 mb-1">Email:</label>
            <input
              type="email"
              name="f_Email"
              value={formData.f_Email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Mobile Field */}
          <div>
            <label className="block text-gray-600 mb-1">Mobile:</label>
            <input
              type="tel"
              name="f_Mobile"
              value={formData.f_Mobile}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Designation Field */}
          <div>
            <label className="block text-gray-600 mb-1">Designation:</label>
            <input
              type="text"
              name="f_Designation"
              value={formData.f_Designation}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Gender Field */}
          <div>
            <label className="block text-gray-600 mb-1">Gender:</label>
            <select
              name="f_gender"
              value={formData.f_gender}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Course Field */}
          <div>
            <label className="block text-gray-600 mb-1">Course:</label>
            <input
              type="text"
              name="f_Course"
              value={formData.f_Course}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Image Upload Field */}
          <div>
            <label className="block text-gray-600 mb-1">Image:</label>
            <input
              type="file"
              name="f_Image"
              accept="image/*"
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-200"
          >
            Create Employee
          </button>
        </form>
      </div>
      <div className="md:w-1/2 flex items-center justify-center p-6">
        <img
          src="/path/to/your/image.jpg" // Replace with your image path
          alt="Admin Section"
          className="max-w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default AdminPage;
