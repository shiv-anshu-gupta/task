import React, { useState } from "react";
import "../../Styles/FAQSection.css";
import siteContent from "../../Api/site-content.json"; // Import JSON

const FAQSection = () => {
  const faqData = siteContent.faq; // shortcut
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      {/* Heading */}
      <div className="faq-heading">
        <h2>{faqData.heading}</h2>
      </div>

      {/* Grid of FAQs */}
      <div className="faq-grid">
        {faqData.items.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <span>Q. {faq.question}</span>
              <span className="faq-icon">
                {activeIndex === index ? "▲" : "▼"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
