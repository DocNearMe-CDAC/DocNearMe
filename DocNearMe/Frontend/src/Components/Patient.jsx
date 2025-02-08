import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Patient = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    age: "",
    address: "",
    medicalHistory: "",
    gender: "",
    password: "",
    confirmPassword: "",
    role: "PATIENT",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/patient/register",
        JSON.stringify(formData),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.error(error);
      alert(
        error.response?.data?.message || "An error occurred during registration"
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          name="fullName"
          placeholder="Enter your Name"
          value={formData.fullName}
          onChange={handleChange}
          className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-900 bg-white placeholder-gray-500"
        />
      </div>

      <div>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          inputMode="numeric"
          pattern="[0-9]{10}"
          placeholder="Enter Contact Number"
          className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-900 bg-white placeholder-gray-500"
          onInput={(e) => {
            e.target.value = e.target.value.replace(/[^0-9]/g, "");
          }}
        />
      </div>

      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your Email"
          required
          className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-900 bg-white placeholder-gray-500"
        />
      </div>

      <div>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Enter your Age"
          required
          className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-900 bg-white placeholder-gray-500"
        />
      </div>

      <div>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter your Address"
          className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-900 bg-white placeholder-gray-500"
        />
      </div>

      <div>
        <textarea
          name="medicalHistory"
          value={formData.medicalHistory}
          onChange={handleChange}
          placeholder="Enter Your Medical History or Allergies"
          rows="4"
          className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-900 bg-white placeholder-gray-500"
        />
      </div>

      <div>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-900 bg-white placeholder-gray-500"
        >
          <option value="" disabled hidden>
            Select Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter Password"
          className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-900 bg-white placeholder-gray-500"
        />
      </div>

      <div>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-900 bg-white placeholder-gray-500"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
      >
        Register as Patient
      </button>
    </form>
  );
};

export default Patient;
