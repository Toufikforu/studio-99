import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <>
      <footer
        style={{
          backgroundImage: "url('./img/footer-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          padding: "50px 0",
          position: "relative",
          marginTop: "auto", // Ensure the footer stays at the bottom of the page
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          }}
        ></div>

        {/* Footer Content */}
        <div className="container position-relative footer-inside">
          <div className="row">
            {/* Left Column with Page Lists (4 Columns) */}
            <div className="col-md-10 row">
              {/* Column 1 */}
              <div className="col-md-4">
                <ul className="list-unstyled">
                  <li>
                    <Link to="/" className="text-white">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/drama" className="text-white">
                      Drama Reality & Sitcoms
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/talk-shows" className="text-white">
                      Talk Shows
                    </Link>
                  </li>
                  
                </ul>
              </div>
              {/* Column 2 */}
              <div className="col-md-4">
                <ul className="list-unstyled">
                  <li className="nav-item">
                    <Link to="/movies" className="text-white">
                      Movies
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/music" className="text-white">
                      Music
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/ebooks" className="text-white">
                      E-Books
                    </Link>
                  </li>
                  
                </ul>
              </div>
              {/* Column 3 */}
              <div className="col-md-4">
                <ul className="list-unstyled">
                  <li>
                    <Link to="/ssl" className="text-white">
                      SSL
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms" className="text-white">
                      TERMS OF USE
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy" className="text-white">
                      PRIVACY
                    </Link>
                  </li>
                  <li>
                    <Link to="/cookies" className="text-white">
                      COOKIES
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Column 4 */}
              {/* <div className="col-md-3">
                <ul className="list-unstyled">
                  <li>
                    <Link to="/demo-drop" className="text-white">
                      DEMO DROP
                    </Link>
                  </li>
                  <li>
                    <Link to="/add-my-show" className="text-white">
                      ADD MY SHOW
                    </Link>
                  </li>
                  <li>
                    <Link to="/watch-snippet" className="text-white">
                      WATCH A SNIPPET
                    </Link>
                  </li>
                  <li>
                    <Link to="/show-line-up" className="text-white">
                      SHOW LINE UP
                    </Link>
                  </li>
                </ul>
              </div> */}
            </div>

            {/* Right Column with Contact Us and Login/Sign-Up Links */}
            <div className="col-md-2">
              <ul className="list-unstyled">
                <li>
                  <Link to="/contact-us" className="text-white">
                    Subscribe
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="text-white">
                    Login/Sign-Up
                  </Link>
                </li>
              </ul>
              {/* Logo at the Bottom */}
              <div className="mt-4">
                <img src="/icon/ssl.png" alt="SSL" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Social Icons and Copyright */}
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            padding: "15px 0",
            position: "absolute",
            bottom: "0", // Ensure it's at the very bottom
            width: "100%", // Full width
          }}
        >
          <div className="container d-flex justify-content-between align-items-center">
            {/* Social Icons */}
            <div>
              <a href="#" className="text-white me-3">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
            {/* Copyright */}
            <div>
              <small>&copy; 2019-2025 All Rights Reserved</small>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
