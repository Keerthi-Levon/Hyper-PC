import React from "react";
import Motherboard from "../../Assets/Images/Motherboard.png";

const MotherboardPage = () => {
  return (
    <div className=" equipment-page-head">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img
              src={Motherboard}
              alt="Motherboard"
              className="equipment-cpu-image"
            />
          </div>
          <div className="col-lg-6 p-4 equipment-cpu-text">
            <h5>Motherboard</h5>
            <h4>ASUS ROG STRIX X870-A GAMING [DDR5, Wi-Fi]</h4>
            <p>
              The ASUS ROG Strix X870-A Gaming is a motherboard with a sleek
              white surface and support for AMD Ryzen™ 9000 series processors,
              providing the power and connectivity needed for advanced AI
              applications. With support for DDR5, full PCIe 5.0 capabilities,
              dual USB4 ports, and WiFi 7, it offers the perfect combination of
              style and performance.
            </p>
            <div className="d-flex gap-4 equipment-cpu-links">
              <a href="#">Details</a>
              <a href="#">Change</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotherboardPage;
