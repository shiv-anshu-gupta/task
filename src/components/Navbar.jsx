import React from "react";
import "../../Styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="\logo.png" alt="Ekaant Logo" />
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#home">HOME</a>
        </li>
        <li>
          <a href="#amenities">AMENITIES</a>
        </li>
        <li>
          <a href="#gallery">PHOTO GALLERY</a>
        </li>
        <li>
          <a href="#contact">CONTACT US</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
