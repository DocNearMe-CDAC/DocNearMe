

const Carousel = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="false"
      style={{
        borderRadius: "15px",
        overflow: "hidden",
        boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
        marginTop: "12px",
      }}
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="/images/intro.jpg"
            className="d-block w-100"
            alt="Healthcare professionals"
            style={{
              height: "400px",
              objectFit: "cover",
              filter: "brightness(0.9)",
            }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h3 className="fw-bold mb-3">Welcome to Our Clinic</h3>
            <p className="lead">Experience world-class medical care</p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src="/images/intro.jpg"
            className="d-block w-100"
            alt="Modern equipment"
            style={{
              height: "400px",
              objectFit: "cover",
              filter: "brightness(0.9)",
            }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h3 className="fw-bold mb-3">State-of-the-Art Facilities</h3>
            <p className="lead">Cutting-edge technology for better diagnosis</p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src="/images/intro.jpg"
            className="d-block w-100"
            alt="Friendly staff"
            style={{
              height: "400px",
              objectFit: "cover",
              filter: "brightness(0.9)",
            }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h3 className="fw-bold mb-3">Caring Professionals</h3>
            <p className="lead">Compassionate care for all patients</p>
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
          style={{ transform: "scale(1.5)" }}
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
          style={{ transform: "scale(1.5)" }}
        ></span>
        <span className="visually-hidden">Next</span>
      </button>

      <style jsx>{`
        .carousel-indicators button {
          width: 12px !important;
          height: 12px !important;
          border-radius: 50%;
          margin: 0 8px !important;
          border: 2px solid #fff;
          background-color: transparent;
          transition: all 0.3s ease;
        }

        .carousel-indicators .active {
          background-color: #0d6efd !important;
          transform: scale(1.2);
        }

        .carousel-control-prev,
        .carousel-control-next {
          width: 8%;
          background: rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .carousel-control-prev:hover,
        .carousel-control-next:hover {
          background: rgba(0, 0, 0, 0.2);
        }

        .carousel-caption {
          background: rgba(0, 0, 0, 0.5);
          padding: 2rem;
          border-radius: 10px;
          bottom: 25% !important;
          left: 50% !important;
          transform: translateX(-50%);
          width: 80%;
          max-width: 800px;
        }

        .carousel-caption h3 {
          font-size: 2.5rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        .carousel-caption p {
          font-size: 1.4rem;
        }

        @media (max-width: 768px) {
          .carousel-caption {
            bottom: 15% !important;
            padding: 1rem;
          }

          .carousel-caption h3 {
            font-size: 1.5rem;
            margin-bottom: 0.5rem !important;
          }

          .carousel-caption p {
            font-size: 1rem;
          }

          img {
            height: 300px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Carousel;
