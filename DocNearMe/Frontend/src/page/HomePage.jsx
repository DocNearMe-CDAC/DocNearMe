import Carousel from "./Carousel";
import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import DoctorCard from "../UserComponent/DoctorCard";
import Department from "./Department";

const HomePage = () => {
  const [allDoctor, setAllDoctor] = useState([]);

  const retrieveAllDoctor = async () => {
    const response = await axios.get("http://localhost:8080/api/doctor/all");
    return response.data;
  };

  useEffect(() => {
    const getAllDoctor = async () => {
      try {
        const doctors = await retrieveAllDoctor();
        if (doctors.length > 0) {
          setAllDoctor(doctors);
        }
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    getAllDoctor();
  }, []);

  return (
    <div className="container-fluid px-0" style={{ paddingTop: "100px" }}>
      <main className="mb-2">
        {/* Carousel with added margin */}
        <div className="container-fluid px-0 mb-4">
          <Carousel />
        </div>

        {/* Conditionally render "Our Specialists" */}
        {allDoctor.length > 0 && (
          <div className="container mt-5 mb-5">
            <h2 className="text-center mb-4">Our Specialists</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
              {allDoctor.map((doctor) => (
                <div className="col" key={doctor.id}>
                  <DoctorCard item={doctor} />
                </div>
              ))}
            </div>
          </div>
        )}

        <hr className="container" />

        <div className="container my-5">
          <Department />
        </div>
      </main>

      <Footer />

      <style jsx>{`
        @media (max-width: 768px) {
          .container-fluid {
            padding-top: 80px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;
