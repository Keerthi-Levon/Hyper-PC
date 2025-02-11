import React from "react";
import CPU from "../../Assets/Images/CPU.png";

const CPUPage = () => {
  return (
    <div className="equipment-page-head">
      <div className="container">
        <div className=" equipment-page-title">
          <h3>Equipment HYPERPC CYBER</h3>
        </div>
        <hr className="equipment-page-horizontal-line"></hr>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img src={CPU} alt="cpu" className="equipment-cpu-image" />
          </div>
          <div className="col-lg-6 equipment-cpu-text">
            <h5>CPU</h5>
            <h4>AMD Ryzen 7 9800X3D [up to 5.2GHz, 8 cores]</h4>
            <p>
              The AMD Ryzen 7 9800X3D is a high-performance 8-core, 16-thread
              processor designed for gaming and content creation. With AMD 3D
              V-Cache technology, it delivers enhanced gaming performance with a
              clockspeed of up to 5.2 GHz. Supporting DDR5 memory and PCIe 5.0,
              this processor is ideal for modern gamingsystems and demanding
              creative workloads.
            </p>
            <div className="d-flex gap-4 equipment-cpu-links">
              <a href="#">Details</a>
              <a href="#">Change</a>
            </div>
          </div>
          <hr className="equipment-page-horizontal-line"></hr>
        </div>
      </div>
    </div>
  );
};

export default CPUPage;
