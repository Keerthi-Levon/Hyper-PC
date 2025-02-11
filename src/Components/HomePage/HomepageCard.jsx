import React from "react";
import home_card_img from "../../Assets/Images/home-card-bg.jpg";
import home_card_circle from "../../Assets/Images/home-card-circle.png";
import VGA_icon from "../../Assets/Images/VGA-icon.png";
import CPU_icon from "../../Assets/Images/CPU-icon.png";
import motherBoard_icon from "../../Assets/Images/motherboard-icon.png";
import RAM_icon from "../../Assets/Images/RAM-icon.png";
import SSD_icon from "../../Assets/Images/SSD-icon.png";
import card_graph_icon from "../../Assets/Images/Card-graph-icon.png";
import explementary from "../../Assets/Images/EPS-game-div-explementary.png";
import { useNavigate } from "react-router-dom";
import { Divider } from "antd";
import { MdAdd } from "react-icons/md";

const pcComponents = [
  {
    icon: VGA_icon,
    title: "VGA",
    description: "ASUS ROG Astral GeForce RTX 5080",
  },
  { icon: CPU_icon, title: "CPU", description: "Intel Core i9 12th Gen" },
  {
    icon: motherBoard_icon,
    title: "Motherboard",
    description: "ASUS ROG Maximus Z990",
  },
  {
    icon: RAM_icon,
    title: "RAM",
    description: "Corsair Vengeance RGB Pro 32GB",
  },
  { icon: SSD_icon, title: "SSD", description: "Samsung 980 PRO 2TB" },
];

const HomepageCard = () => {
    const navigate=useNavigate();
  return (
    <div className="homepage-card-div">
      <h1 className="homepageCard-header">PCs with GeForce RTX™ 5080</h1>
      <div className="d-flex justify-content-center">
        <div className="homePage-card mt-4" style={{ position: "relative" }}>
          <img
            className="Card-graph-icon"
            width={20}
            src={card_graph_icon}
            alt=""
          />
          <img
            style={{ cursor: "pointer" }}
            width={280}
            src={home_card_img}
            alt=""
          />
          <div className="home-card-text">
            <div className="d-flex justify-content-center mt-3">
              <div className="d-flex justify-content-center homecard-whiteCircle">
                {" "}
              </div>
            </div>
            <p>White</p>
            <h3 style={{ fontWeight: 700 }}>CYBER</h3>
            <p style={{ width: "280px" }}>
              Ready for the future. Aggressive futuristic design, made for true
              cyber warriors.
            </p>
            <h5 style={{ fontWeight: 600 }}>from AED 24,520 </h5>
            <p>or from AED 912 per month</p>
          </div>
          <div className="d-flex justify-content-center">
            <button className="configurate-button">Configurate and buy</button>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <button className="detaiils-button" onClick={()=>navigate("/gaming-pc/cyber")}>Details</button>
          </div>

          <div className="d-flex justify-content-center flex-column mt-3">
            <div className="d-flex justify-content-between EPS-game-div">
              <div className="d-flex align-items-center gap-3">
                <div style={{ position: "relative" }}>
                  <img width={43} src={home_card_circle} alt="" />
                  <p className="home-cardGraph-count">197</p>
                </div>
                <div>
                  <h6 className="mb-0">FPS in games</h6>
                  <p className="mb-0">Ultra settings</p>
                </div>
              </div>
              <img width={18} height={18} src={explementary} alt="" />
            </div>
            {pcComponents.map((component, index) => (
              <div
                key={index}
                className="d-flex align-items-center gap-3 homeCard-items-div mt-2"
              >
                <img width={25} src={component.icon} alt="" />
                <div className="mt-2">
                  <p className="mb-0 title">{component.title}</p>
                  <p className="mb-0 description">{component.description}</p>
                </div>
              </div>
            ))}
            <div style={{ position: "relative" }}>
              <Divider className="card-divider" />
              <button className="homeCard-add-button">
                <MdAdd />
              </button>
            </div>
            <div className="d-flex justify-content-center">
              <p className="fullSpecification">Show full specification</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageCard;
