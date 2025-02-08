import "./App.css";
import Body from "./Components/Body";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import DoctorDashboard from "./Components/DoctorDashboard";
//import PatientDashboard from "./Components/PatientDashboard";
import AdminDashboard from "./Components/AdminDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        {/* <Route path="/patient-dashboard" element={<PatientDashboard />} /> */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/body" element={<Body />} />
      </Routes>
    </Router>
  );
}

export default App;
