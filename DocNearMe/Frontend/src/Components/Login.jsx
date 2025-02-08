import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(""); // Could be 'doctor', 'patient', or 'admin'
  const navigate = useNavigate();

  // Handle login logic here
  const handleLogin = (e) => {
    e.preventDefault();

    // Here you would typically call an API to verify credentials
    if (email && password) {
      // Example role-based routing logic after successful login
      if (role === "doctor") {
        navigate("/doctor-dashboard");
      } else if (role === "patient") {
        // navigate("/patient-dashboard");
        console.log("Patient Dashboard not implemented yet");
      } else if (role === "admin") {
        navigate("/admin-dashboard");
      }
    } else {
      alert("Please enter valid credentials.");
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        <select onChange={(e) => setRole(e.target.value)} value={role}>
          <option value="" disabled>Select Role</option>
          <option value="doctor">Doctor</option>
          <option value="patient">Patient</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
