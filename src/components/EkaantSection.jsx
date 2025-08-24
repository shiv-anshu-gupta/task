import React from "react";
import "../../Styles/EkaantSection.css";
import siteContent from "../../Api/site-content.json"; // ✅ Import JSON data

const EkaantSection = () => {
  const ekaantData = siteContent.ekaant; // shortcut

  return (
    <section className="ekaant-section">
      <div className="ekaant-container">
        {/* Left Content */}
        <div className="ekaant-content">
          <h2 className="ekaant-title">{ekaantData.title}</h2>

          {ekaantData.paragraphs.map((para, index) => (
            <p key={index}>{para}</p>
          ))}

          <a href={ekaantData.button.href}>
            <button className="ekaant-button">
              {ekaantData.button.label} →
            </button>
          </a>
        </div>

        {/* Right Image */}
        <div className="ekaant-image">
          <img src={ekaantData.image.src} alt={ekaantData.image.alt} />
        </div>
      </div>
    </section>
  );
};

export default EkaantSection;
