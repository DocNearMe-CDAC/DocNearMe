import React from "react";
import { useState } from "react";

const Doctor = () => {
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);

  const [formData, setFormData] = useState({
    doctorName: "",
    specialization: "",
    email: "",
    address: "",
    openingTime: "09:00",
    closingTime: "17:00",
    password: "",
    confirmPassword: "",
  });
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object
    const formDataToSend = new FormData();

    // Append regular form fields
    formDataToSend.append("doctorName", formData.doctorName);
    formDataToSend.append("specialization", formData.specialization);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("address", formData.address);
    formDataToSend.append("openingTime", formData.openingTime);
    formDataToSend.append("closingTime", formData.closingTime);
    formDataToSend.append("password", formData.password);
    formDataToSend.append("confirmPassword", formData.confirmPassword);

    // Append file
    if (File) {
      formDataToSend.append("licenseImage", filePreview);
    }

    try {
      const response = await fetch(
        "http://localhost:8080/api/doctor/register",
        {
          method: "POST",
          body: formDataToSend,
          // Headers are automatically set by browser for FormData
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Registration failed");
      }

      const data = await response.json();
      console.log("Registration successful:", data);
      // Handle success (redirect, show message, etc.)
    } catch (error) {
      console.error("Registration error:", error);
      // Handle error (show error message)
    }
  };


  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);

      if (selectedFile.type.startsWith("image")) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFilePreview(reader.result);
        };
        reader.readAsDataURL(selectedFile);
      } else {
        setFilePreview(null);
      }
    }
  };

  

  return (
    <form onSubmit={handleSubmit}>
    <div className="space-y-4">
      <div>
        <input
          type="text"
          name="doctorName"
          placeholder="Enter your Name"
          className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-900 bg-white placeholder-gray-500"
        />
      </div>
      <div>
        <input
          type="text"
          name="doctorSpecialization"
          placeholder="Enter Specialization"
          className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-900 bg-white placeholder-gray-500"
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Enter your Email"
          required
          className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-900 bg-white placeholder-gray-500"
        />
      </div>
      <div>
        <input
          type="text"
          name="address"
          placeholder="Enter your Clinic Address"
          className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-900 bg-white placeholder-gray-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 text-left">
          Clinic Opening Time
        </label>
        <input
          type="time"
          name="openingTime"
          required
          className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-900 bg-white placeholder-gray-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 text-left">
          Clinic Closing Time
        </label>
        <input
          type="time"
          name="closingTime"
          required
          className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-900 bg-white placeholder-gray-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Upload License
        </label>
        <input
          type="file"
          name="license"
          onChange={handleFileChange}
          className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-900 bg-white placeholder-gray-500"
        />
        {filePreview && (
          <img
            src={filePreview}
            alt="Preview"
            className="mt-2 w-24 h-24 rounded-lg object-cover"
          />
        )}
        <p className="mt-2 text-sm text-gray-500">
          {file ? `Selected file: ${file.name}` : "No file selected"}
        </p>
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-900 bg-white placeholder-gray-500"
        />
      </div>
      <div>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-900 bg-white placeholder-gray-500"
        />
      </div>
      <button
        type="button"
        onClick={handleSubmit}
        className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
      >
        Register as Doctor
      </button>
    </div>
    </form>
  );
};

export default Doctor;
