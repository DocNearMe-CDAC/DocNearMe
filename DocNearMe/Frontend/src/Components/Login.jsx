import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for error messages

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error state before submitting

    try {
      const response = await axios.post(
        "http://localhost:8080/api/users/login",
        {
          email,
          password,
        }
      );
      console.log(response.data);
    } catch (err) {
      setError("Invalid email or password!");
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-2xl w-full sm:w-96 transform transition-all duration-500 hover:scale-105 z-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Welcome Back!
      </h1>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}{" "}
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <input
            id="email"
            type="email"
            placeholder="Enter your Email"
            required
            className="mt-1 mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-900 bg-white placeholder-gray-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-8">
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            required
            autoComplete="off"
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-900 bg-white placeholder-gray-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        >
          Log In
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-gray-600">
        New here?{" "}
        <Link
          to="/register"
          className="text-blue-600 hover:text-blue-700 font-medium transition-all"
        >
          Create an account
        </Link>
      </p>
    </div>
  );
}

export default Login;
