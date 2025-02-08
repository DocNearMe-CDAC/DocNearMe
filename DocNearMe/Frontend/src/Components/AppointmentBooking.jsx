import React, { useState, useEffect } from "react";
import axios from "axios";

const AppointmentBooking = () => {
  const [doctors, setDoctors] = useState([]);
  const [doctorName, setDoctorName] = useState("");
  const [patientName, setPatientName] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Fetch doctors from the Spring Boot backend API
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get("http://localhost:8085/api/doctors"); //yha pe apne api ka link 
        setDoctors(response.data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
        setErrorMessage("Failed to load doctors. Please try again.");
      }
    };

    fetchDoctors();
  }, []);

  // Function to check if the slot is available from the backend API
  const isSlotAvailable = async (doctorName, date, time) => {
    try {
      const response = await axios.get("http://localhost:8080/api/check-slot", {   //checkslot wala api ka link
        params: {
          doctorName,
          appointmentDate: date,
          appointmentTime: time
        }
      });
      return response.data; // returns true if slot is available, false if not
    } catch (error) {
      console.error("Error checking slot availability:", error);
      return false;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const slotAvailable = await isSlotAvailable(doctorName, appointmentDate, appointmentTime);

    if (!slotAvailable) {
      setErrorMessage("This slot is already booked. Please choose a different time.");
      setSuccessMessage("");
    } else {
      setErrorMessage("");
      setSuccessMessage(`Appointment successfully booked for ${patientName} with ${doctorName} on ${appointmentDate} at ${appointmentTime}.`);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Book an Appointment</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="doctor-name" className="text-gray-700">Doctor Name</label>
            <select
              id="doctor-name"
              name="doctor-name"
              value={doctorName}
              onChange={(e) => setDoctorName(e.target.value)}
              className="mt-2 p-2 border rounded-md"
              required
            >
              <option value="">Select a Doctor</option>
              {doctors.map((doctor) => (
                <option key={doctor.id} value={doctor.name}>
                  {doctor.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="patient-name" className="text-gray-700">Patient Name</label>
            <input
              type="text"
              id="patient-name"
              name="patient-name"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              className="mt-2 p-2 border rounded-md"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="appointment-date" className="text-gray-700">Appointment Date</label>
            <input
              type="date"
              id="appointment-date"
              name="appointment-date"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
              className="mt-2 p-2 border rounded-md"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="appointment-time" className="text-gray-700">Appointment Time</label>
            <input
              type="time"
              id="appointment-time"
              name="appointment-time"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
              className="mt-2 p-2 border rounded-md"
              required
            />
          </div>

          {errorMessage && (
            <div className="text-red-600 mt-4">
              <p>{errorMessage}</p>
            </div>
          )}
          {successMessage && (
            <div className="text-green-600 mt-4">
              <p>{successMessage}</p>
            </div>
          )}

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentBooking;
