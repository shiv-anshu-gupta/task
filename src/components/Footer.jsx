import React from "react";
import "../../Styles/Footer.css"; // Import CSS

const Footer = () => {
  return (
    <footer className="footer">
      {/* Left Side */}
      <div className="footer-left">
        <p>
          WE’D LOVE TO HELP YOU <br />
          PLAN YOUR PEACEFUL <br />
          ESCAPE.
        </p>
      </div>

      {/* Right Side */}
      <div className="footer-right">
        <p>
          <span className="label">CALL/WHATSAPP:</span> +91 9988776655
        </p>
        <p>
          <span className="label">EMAIL:</span> EKANT@NEAVE.TECH
        </p>
        <p>
          <span className="label">INSTAGRAM:</span> EKANT
        </p>
        <p>
          <span className="label">LOCATION:</span> NEAR BOR TIGER RESERVE,{" "}
          <br />
          WARDHA, MAHARASHTRA
        </p>
      </div>
    </footer>
  );
};

export default Footer;
