// src/menu.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./menu.css";

const Menu: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      {/* Top Bar */}
      {/*
      <div className="bg-dark text-white py-2">
        <div className="container d-flex justify-content-between flex-wrap">
          <div className="d-flex gap-3 flex-wrap">
            <Link to="/" className="text-white text-decoration-none">
              STUDIO NETWORK
            </Link>
            <Link to="/" className="text-white text-decoration-none">
              STUDIO MUSIC
            </Link>
            <Link to="/" className="text-white text-decoration-none">
              STUDIO MOVIES
            </Link>
            <Link to="/" className="text-white text-decoration-none">
              STUDIO ON LOCATION
            </Link>
          </div>
          <div>
            <Link to="/login" className="text-white text-decoration-none">
              LOGIN
            </Link>{" "}
            /{" "}
            <Link to="/sign-up" className="text-white text-decoration-none">
              SIGN UP
            </Link>
          </div>
        </div>
      </div>
      */}
      {/* Main Header: Hamburger + Logo + Buttons + Store Icons */}
      <div className="main-menu-bar bg-black text-white py-2 px-3 d-flex align-items-center justify-content-between flex-wrap">
        {/* Left: Hamburger + Logo */}
        <div className="d-flex align-items-center">
          <button
            className="menu-toggle btn btn-outline-light me-3"
            onClick={toggleSidebar}
          >
            <i className="fas fa-bars fa-lg"></i>
          </button>

          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img
              src="/img/logo.png"
              alt="STUDIO 99 PLUS"
              className="img-fluid"
              style={{ height: "70px", objectFit: "contain" }}
            />
          </Link>
        </div>

        {/* Center: Buttons */}
        <div className="menu-center d-flex gap-3">
          <Link to="/" className="btn btn-outline-light btn-sm tou-btn active">
            Home
          </Link>
          <Link
            to="/livestream"
            className="btn btn-outline-light btn-sm tou-btn"
          >
            Live TV
          </Link>
        </div>

        {/* Right: Store Icons */}
        <div className="menu-right d-flex align-items-center gap-3">
          {/* <!-- Apple App Store Button --> */}
          <a
            href="https://apps.apple.com/app/idYOUR_APP_ID"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/icon/apple_1.png" className="img-fluid store-btn" />
          </a>

          {/* <!-- Google Play Store Button --> */}
          <a
            href="https://play.google.com/store/apps/details?id=your.app.id"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/icon/play_1.png"
              alt="Get it on Google Play"
              className="img-fluid store-btn"
            />
          </a>
        </div>
      </div>
      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={closeSidebar}>
          ×
        </button>

        {/* Login Section */}
        <div className="text-center py-4">
          <i className="fas fa-user-circle fa-3x mb-2 text-secondary"></i>
          <div className="fw-bold text-black">
            <Link to="/login" onClick={closeSidebar}>
              Login/Sign Up
            </Link>
          </div>
        </div>

        {/* Divider line */}
        <hr className="my-0" />

        <ul className="nav flex-column p-3">
          <li className="nav-item">
            <Link to="/drama" onClick={closeSidebar}>
              Drama Reality & Sitcoms
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/talk-shows" onClick={closeSidebar}>
              Talk Shows
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/inspirational" onClick={closeSidebar}>
              Inspirational
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/movies" onClick={closeSidebar}>
              Movies
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/music" onClick={closeSidebar}>
              Music
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/ebooks" onClick={closeSidebar}>
              E-Books
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/legality" onClick={closeSidebar}>
              Legality
            </Link>
          </li>
        </ul>
      </div>
      {/* Backdrop */}
      {sidebarOpen && (
        <div className="sidebar-backdrop" onClick={closeSidebar}></div>
      )}
    </>
  );
};

export default Menu;
