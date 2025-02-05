import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [isDoctor, setIsDoctor] = useState(false);
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);

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

  const handleSubmit = () => {
    if (file) {
      console.log("File uploaded:", file);
    }
    console.log("Form submitted!");
  };

  const toggleForm = () => {
    setIsDoctor(!isDoctor);
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-2xl w-full sm:w-96 transform transition-all duration-500 hover:scale-105 z-10">
      <div className="text-center">
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
          Register as {isDoctor ? "Doctor" : "Patient"}
        </h2>
        <button
          onClick={toggleForm}
          className="mt-4 text-sm text-blue-600 hover:text-blue-500"
        >
          Switch to {isDoctor ? "Patient" : "Doctor"} Registration
        </button>
      </div>

      <form className="mt-8 space-y-6">
        {isDoctor ? (
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
              <label className="block text-sm font-medium text-gray-700 text-left">
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
        ) : (
          <div className="space-y-4">
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="Enter your Name"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-900 bg-white placeholder-gray-500"
              />
            </div>
            <div>
              <input
                type="tel"
                name="phoneNumber"
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
                placeholder="Enter your Email"
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-900 bg-white placeholder-gray-500"
              />
            </div>
            <div>
              <input
                type="number"
                name="age"
                placeholder="Enter your Age"
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-900 bg-white placeholder-gray-500"
              />
            </div>
            <div>
              <input
                type="text"
                name="address"
                placeholder="Enter your Address"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-900 bg-white placeholder-gray-500"
              />
            </div>
            <div>
              <textarea
                name="medicalHistory"
                placeholder="Enter Your Medical History or Allergies"
                rows="4"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-900 bg-white placeholder-gray-500"
              />
            </div>
            <div>
              <select
                name="gender"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-900 bg-white placeholder-gray-500"
              >
                <option value="" disabled selected hidden>
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
              Register as Patient
            </button>
          </div>
        )}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Log in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
