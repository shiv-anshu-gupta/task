import "../../Styles/HeroSection.css";
import siteContent from "../../Api/site-content.json";

const HeroSection = () => {
  const heroData = siteContent.hero;

  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${heroData.backgroundImage.src})` }}
    >
      <div className="hero-overlay"></div>
      {/* optional overlay for readability */}
      <div className="hero-content">
        <h1 className="hero-title">{heroData.title}</h1>
        <p className="hero-subtitle">{heroData.subtitle}</p>
      </div>
    </section>
  );
};

export default HeroSection;
