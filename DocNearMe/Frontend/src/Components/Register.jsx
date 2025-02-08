import React, { useState } from "react";
import { Link } from "react-router-dom";
import Doctor from "./Doctor";
import Patient from "./Patient";

const Register = () => {
  const [isDoctor, setIsDoctor] = useState(false);

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

      
        {isDoctor ? <Doctor /> : <Patient />}
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
    </div>
  );
};

export default Register;
