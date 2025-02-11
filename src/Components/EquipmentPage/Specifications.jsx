import React from "react";
import specifications from "../../Assets/Images/specifications.png";

const SpecificationsPage = () => {
  return (
    <div className="equipment-page-head">
      <div className="container">
        <div className="equipment-page-title">
          <h3>Specifications HYPERPC CYBER</h3>
        </div>
        <div>
          <img
            src={specifications}
            alt="cpu"
            className="equipment-specifications-image"
          />
        </div>
        <div className="specifications-page-head">
          <div className="specifications-page-head">
            <h4>Hardware</h4>
            <hr className="specifications-page-horizontal-line"></hr>
            <div className="d-flex justify-content-between">
              <div>
                <h5>VGA</h5>
              </div>
              <div>
                <ul>
                  <li>
                    ASUS ROG Astral GeForce RTX 5080 Black [16GB, 10752 CUDA]
                  </li>
                </ul>
              </div>
            </div>
            <hr className="equipment-page-horizontal-line"></hr>
            <div className="d-flex justify-content-between">
              <div>
                <h5>CPU</h5>
              </div>
              <div>
                <ul>
                  <li>AMD Ryzen 7 9800X3D [up to 5.2GHz, 8 cores]</li>
                </ul>
              </div>
            </div>
            <hr className="equipment-page-horizontal-line"></hr>
            <div className="d-flex justify-content-between">
              <div>
                <h5>Motherboard</h5>
              </div>
              <div>
                <ul>
                  <li>ASUS ROG STRIX X870-A GAMING [DDR5, Wi-Fi]</li>
                </ul>
              </div>
            </div>
            <hr className="equipment-page-horizontal-line"></hr>
            <div className="d-flex justify-content-between">
              <div>
                <h5>RAM</h5>
              </div>
              <div>
                <ul>
                  <li>
                    32GB Corsair DOMINATOR Titanium RGB White [DDR5, 6400MHz,
                    2x16GB]
                  </li>
                </ul>
              </div>
            </div>
            <hr className="equipment-page-horizontal-line"></hr>
            <div className="d-flex justify-content-between">
              <div>
                <h5>COOLING</h5>
              </div>
              <div>
                <ul>
                  <li>NZXT Kraken Elite 360 RGB Black</li>
                </ul>
              </div>
            </div>
            <hr className="equipment-page-horizontal-line"></hr>
            <div className="d-flex justify-content-between">
              <div>
                <h5>SSD</h5>
              </div>
              <div>
                <ul>
                  <li>2TB Samsung 990 PRO [7450MB/s, Gen4]</li>
                  <li>1TB Samsung 990 PRO [7450MB/s, Gen4]</li>
                </ul>
              </div>
            </div>
            <hr className="equipment-page-horizontal-line"></hr>
            <div className="d-flex justify-content-between">
              <div>
                <h5>Power supply</h5>
              </div>
              <div>
                <ul>
                  <li>1000W ASUS ROG STRIX Aura Edition [80+ Gold]</li>
                </ul>
              </div>
            </div>
            <hr className="equipment-page-horizontal-line"></hr>
            <div className="d-flex justify-content-between">
              <div>
                <h5>Cases</h5>
              </div>
              <div>
                <ul>
                  <li>Antec Torque White</li>
                </ul>
              </div>
            </div>
            <hr className="equipment-page-horizontal-line"></hr>
            <div className="d-flex justify-content-between">
              <div>
                <h5>Fans</h5>
              </div>
              <div>
                <ul>
                  <li>6 x NZXT F120 RGB Core White</li>
                </ul>
              </div>
            </div>
            <hr className="equipment-page-horizontal-line"></hr>
          </div>
        </div>

        
        <div className="specifications-page-head">
            <h4>Personalization</h4>
            <hr className="specifications-page-horizontal-line"></hr>
            <div className="d-flex justify-content-between">
              <div>
                <h5>Custom cables</h5>
              </div>
              <div>
                <ul>
                  <li>CableMod Pro Kit White</li>
                </ul>
              </div>
            </div>
            <hr className="equipment-page-horizontal-line"></hr>
            <div className="d-flex justify-content-between">
              <div>
                <h5>Lighting</h5>
              </div>
              <div>
                <ul>
                  <li>Standard Violet</li>
                </ul>
              </div>
            </div>
            <hr className="equipment-page-horizontal-line"></hr>
        </div>

        <div className="specifications-page-head">
            <h4>Software</h4>
            <hr className="specifications-page-horizontal-line"></hr>
            <div className="d-flex justify-content-between">
              <div>
                <h5>OS</h5>
              </div>
              <div>
                <ul>
                  <li>Windows 11 Pro</li>
                </ul>
              </div>
            </div>
            <hr className="equipment-page-horizontal-line"></hr>
        </div>


        <div className="specifications-page-head">
            <h4>Service</h4>
            <hr className="specifications-page-horizontal-line"></hr>
            <div className="d-flex justify-content-between">
              <div>
                <h5>Warranty</h5>
              </div>
              <div>
                <ul>
                  <li>HYPERPC Warranty Standard - 12 month</li>
                  <li>Coverage of all manufacturing defects and system failures</li>
                  <li>Free replacement of defective components</li>
                </ul>
              </div>
            </div>
            <hr className="equipment-page-horizontal-line"></hr>
            <div className="d-flex justify-content-between">
              <div>
                <h5>Production</h5>
              </div>
              <div>
                <ul>
                  <li>Standard production time</li>
                  <li>Production according to the estimated deadlines</li>
                </ul>
              </div>
            </div>
            <hr className="equipment-page-horizontal-line"></hr>
        </div>
      </div>
    </div>
  );
};

export default SpecificationsPage;
