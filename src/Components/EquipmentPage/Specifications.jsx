import React from "react";
import { GoCpu } from "react-icons/go";
import { BsMotherboard } from "react-icons/bs";
import {
  FaMemory,
  FaSnowflake,
  FaHdd,
  FaPowerOff,
  FaDesktop,
  FaFan,
  FaLightbulb,
  FaWindows,
} from "react-icons/fa";
import specific from "../../Assets/Images/specifications.png";

const specifications = [
  {
    icon: <GoCpu />,
    label: "CPU",
    value: "AMD Ryzen 7 9800X3D [up to 5.2GHz, 8 cores]",
  },
  {
    icon: <BsMotherboard />,
    label: "MOTHERBOARD",
    value: "ASUS ROG STRIX X870-A GAMING [DDR5, Wi-Fi]",
  },
  {
    icon: <FaMemory />,
    label: "RAM",
    value: "32GB Corsair DOMINATOR Titanium RGB White [DDR5, 6400MHz, 2x16GB]",
  },
  {
    icon: <FaSnowflake />,
    label: "COOLING",
    value: "NZXT Kraken Elite 360 RGB Black",
  },
  {
    icon: <FaHdd />,
    label: "SSD",
    value:
      "2TB Samsung 990 PRO [7450MB/s, Gen4] \n 1TB Samsung 990 PRO [7450MB/s, Gen4]",
  },
  {
    icon: <FaPowerOff />,
    label: "POWER SUPPLY",
    value: "1000W ASUS ROG STRIX Aura Edition [80+ Gold]",
  },
  { icon: <FaDesktop />, label: "CASES", value: "Antec Torque White" },
  { icon: <FaFan />, label: "FANS", value: "6 x NZXT F120 RGB Core White" },
];

const personalization = [
  {
    icon: <FaLightbulb />,
    label: "CUSTOM CABLES",
    value: "CableMod Pro Kit White",
  },
  { icon: <FaLightbulb />, label: "LIGHTING", value: "Standard Violet" },
];

const software = [
  { icon: <FaWindows />, label: "OS", value: "Windows 11 Pro" },
];

const Section = ({ title, items }) => (
  <div className="section-container">
    <h4 className="specific-title">{title}</h4>
    <hr className="section-divider" />
    {items.map((item, index) => (
      <div key={index} className="spec-row">
        <div className="spec-label">
          <span className="icon">{item.icon}</span>
          <span>{item.label}</span>
        </div>
        <div className="spec-value">{item.value}</div>
      </div>
    ))}
  </div>
);

const SpecificationsPage = () => {
  return (
    <div className="equipment-page-head">
      <div className="">
        <div className="equipment-page-title">
          <h3>Specifications HYPERPC CYBER</h3>
        </div>
        <div className="d-flex justify-content-center">
          <img
            src={specific}
            alt="cpu"
            className="equipment-specifications-image"
          />
        </div>
      </div>
      <div className="container equipment-specification-container" >
        <div className="specifications-content">
          <Section title="Hardware" items={specifications} />
          <Section title="Personalization" items={personalization} />
          <Section title="Software" items={software} />
        </div>
      </div>
    </div>
  );
};

export default SpecificationsPage;
