import React, { useState, useEffect } from "react";

export default function Dashboard() {
  const [view, setView] = useState("doctors");
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8085/doctor/getAllDoctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));

    fetch("http://localhost:8085/patients")
      .then((res) => res.json())
      .then((data) => setPatients(data));

    fetch("http://localhost:8085/appointments")
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gradient-to-br from-purple-50 to-blue-50 min-h-screen flex flex-col items-center">
      {/* Header */}
      <h1 className="text-4xl font-bold text-gray-800 mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
        Admin Dashboard
      </h1>

      {/* Navigation Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button
          onClick={() => setView("doctors")}
          className={`px-6 py-3 text-white font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105 ${
            view === "doctors"
              ? "bg-gradient-to-r from-blue-600 to-blue-800"
              : "bg-gradient-to-r from-blue-400 to-blue-600"
          }`}
        >
          Doctors
        </button>
        <button
          onClick={() => setView("patients")}
          className={`px-6 py-3 text-white font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105 ${
            view === "patients"
              ? "bg-gradient-to-r from-green-600 to-green-800"
              : "bg-gradient-to-r from-green-400 to-green-600"
          }`}
        >
          Patients
        </button>
        <button
          onClick={() => setView("appointments")}
          className={`px-6 py-3 text-white font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105 ${
            view === "appointments"
              ? "bg-gradient-to-r from-purple-600 to-purple-800"
              : "bg-gradient-to-r from-purple-400 to-purple-600"
          }`}
        >
          Appointments
        </button>
      </div>

      {/* Content Section */}
      <div className="bg-white p-6 rounded-lg shadow-2xl w-full max-w-2xl border border-gray-100">
        {view === "doctors" && (
          <ul className="divide-y divide-gray-200">
            {doctors.map((doc) => (
              <li
                key={doc.id}
                className="py-4 hover:bg-gray-50 transition-colors duration-200"
              >
                <p className="text-lg font-semibold text-gray-800">{doc.name}</p>
                <p className="text-sm text-gray-600">{doc.specialty}</p>
              </li>
            ))}
          </ul>
        )}
        {view === "patients" && (
          <ul className="divide-y divide-gray-200">
            {patients.map((pat) => (
              <li
                key={pat.id}
                className="py-4 hover:bg-gray-50 transition-colors duration-200"
              >
                <p className="text-lg font-semibold text-gray-800">{pat.name}</p>
                <p className="text-sm text-gray-600">Age: {pat.age}</p>
              </li>
            ))}
          </ul>
        )}
        {view === "appointments" && (
          <ul className="divide-y divide-gray-200">
            {appointments.map((app) => (
              <li
                key={app.id}
                className="py-4 hover:bg-gray-50 transition-colors duration-200"
              >
                <p className="text-lg font-semibold text-gray-800">
                  {app.patient} has an appointment with {app.doctor}
                </p>
                <p className="text-sm text-gray-600">Date: {app.date}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}