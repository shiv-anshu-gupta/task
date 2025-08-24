import React from "react";
import "../../styles/HowToReach.css";

// Import SVGs
import pointRoad from "/point-road.svg";
import hut from "/hut.svg";
import upperStroke from "/upper-stroke.svg";
import bottomStroke from "/bottom-stroke.svg";

const HowToReach = () => {
  return (
    <section className="reach-section">
      {/* Top Decorative Stroke */}
      <img
        src={upperStroke}
        alt="Top Stroke"
        className="decorative-stroke top-stroke"
      />

      <div className="reach-container">
        {/* Left Side with Illustration */}
        <div className="reach-left">
          <h2>
            HOW TO REACH <br /> EKAANT
          </h2>

          <div className="reach-graphics">
            <img src={hut} alt="Hut Illustration" className="hut0" />
            <img src={pointRoad} alt="Point and Road" className="point-road" />
            <img src={hut} alt="Hut Illustration" className="hut" />
          </div>
        </div>

        {/* Right Side with Info */}
        <div className="reach-right">
          <div className="reach-block">
            <h3>By Road</h3>
            <ul>
              <li>80 Km From Nagpur</li>
              <li>40 Km From Wardha</li>
              <li>Well Connected Via NH-361 And Local Village Roads</li>
              <li>Ample Parking Available At The Property</li>
            </ul>
          </div>

          <div className="dashed-line"></div>

          <div className="reach-block">
            <h3>By Train</h3>
            <ul>
              <li>
                Nearest Railway Station: Seloo (10 Km), Wardha Junction (40 Km)
              </li>
              <li>Taxis And Local Autos Available From Stations</li>
            </ul>
          </div>

          <div className="dashed-line"></div>

          <div className="reach-block">
            <h3>By Air</h3>
            <ul>
              <li>
                Nearest Airport: Nagpur Dr. Babasaheb Ambedkar International
                Airport (Approx. 90 Km)
              </li>
              <li>Car Rentals Or Private Taxis Available</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Stroke */}
      <img
        src={bottomStroke}
        alt="Bottom Stroke"
        className="decorative-stroke bottom-stroke"
      />
    </section>
  );
};

export default HowToReach;
