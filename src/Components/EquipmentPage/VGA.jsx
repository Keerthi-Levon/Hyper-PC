import React from "react";
import VGA from "../../Assets/Images/VGA.png";

const VGAPage = () => {
  return (
    <div className="equipment-page-head">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 equipment-cpu-text">
            <h5>VGA</h5>
            <h4>ASUS ROG Astral GeForce RTX 5080 Black [16GB, 10752 CUDA]</h4>
            <p>
              The ROG Astral GeForce RTX 5080 introduces the first ROG graphics
              card with a quad-fan design, increased heatsink fin density, the
              highest out-of-the-box clock speeds, enhanced power delivery, and
              more. These premium innovations, complemented by an eye-catching
              die-cast frame and metal GPU bracket, deliver absolute performance
              capable of tackling even the most demanding gaming scenarios.
            </p>
            <div className="d-flex gap-4 equipment-cpu-links">
              <a href="#">Details</a>
              <a href="#">Change</a>
            </div>
          </div>
          <div className="col-lg-6">
            <img src={VGA} alt="cpu" className="equipment-cpu-image" />
          </div>
          <hr className="equipment-page-horizontal-line"></hr>
        </div>
      </div>
    </div>
  );
};

export default VGAPage;
