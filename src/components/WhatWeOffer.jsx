import React from "react";
import "../../Styles/WhatWeOffer.css";
import siteContent from "../../Api/site-content.json"; // ✅ Import JSON file

const WhatWeOffer = () => {
  const offersData = siteContent.offers; // shortcut

  return (
    <section className="offer-section">
      {/* Heading with SVG border background */}
      <div className="offer-heading">
        <h2>{offersData.heading}</h2>
      </div>

      {/* Grid of Cards */}
      <div className="offer-grid">
        {offersData.items.map((item, index) => (
          <div className="offer-card" key={index}>
            <img src={item.img} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="offer-btn-wrapper">
        <a href={offersData.button.href}>
          <button className="offer-button">{offersData.button.label} →</button>
        </a>
      </div>
    </section>
  );
};

export default WhatWeOffer;
