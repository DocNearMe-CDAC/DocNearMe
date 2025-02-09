import { Link } from "react-router-dom";
import RoleNav from "./RoleNav";
import "../styles/header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark py-2">
      <div className="container">
        {/* Branding Section */}
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center hover-scale"
          style={{ transition: "transform 0.3s ease" }}
        >
          <img
            src="/images/h_logo.png"
            width="50"
            height="50"
            className="d-inline-block me-2 pulse"
            alt="DocNearMe Logo"
          />
          <span className="fw-bold fs-4 gradient-text">DocNearMe</span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Items */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-center me-lg-4">
            <li className="nav-item mx-2">
              <Link
                to="/about"
                className="nav-link position-relative hover-underline"
                activeclassname="active"
              >
                About Us
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link
                to="/contact"
                className="nav-link position-relative hover-underline"
                activeclassname="active"
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Role-Based Navigation */}
          <RoleNav />
        </div>
      </div>

      <style jsx>{`
        nav {
          background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
        }

        .hover-underline::after {
          content: "";
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: #fff;
          transition: width 0.3s ease;
        }

        .hover-underline:hover::after,
        .active::after {
          width: 100%;
        }

        .gradient-text {
          background: linear-gradient(45deg, #fff, #a8d0ff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hover-scale:hover {
          transform: scale(1.05);
        }

        .pulse {
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }

        @media (max-width: 992px) {
          .navbar-collapse {
            background: rgba(0, 0, 0, 0.9);
            padding: 1rem;
            border-radius: 10px;
            margin-top: 1rem;
          }

          .nav-item {
            margin: 0.5rem 0;
          }
        }
      `}</style>
    </nav>
  );
};

export default Header;
