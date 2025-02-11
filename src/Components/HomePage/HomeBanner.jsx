import React from "react";
import { Link } from "react-router-dom"; 
import homeIcon from "../../Assets/Images/home-icon.png";
import { FaChevronRight } from "react-icons/fa6";
import banner from "../../Assets/Images/home-banner-bg - Copy.png";

import "../../Pages/HomePage/Home.css";
export const HomeBanner = () => {
  return (
    <div className="home-page-banner">
      <nav>
        <div>
          <ul className="breadcrumb">
            <li>
              <Link to="/">
                <img src={homeIcon} className="homeIcon" /> &nbsp;
                <FaChevronRight className="breadcrumb-arrow" />
              </Link>
            </li>
            <li>
              <Link to="/gaming-pcs">Gaming PCs</Link>
              <FaChevronRight className="breadcrumb-arrow" />
            </li>
            <li>
              <Link to="/gaming-pcs/nvidia-geforce-rtx-5080">
                Gaming PCs with NVIDIA GeForce RTX 5080
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="home-banner-div mt-5">
        <div className="row">
          <div className="col-lg-5">
            <h1>PCs with GeForce RTX 5080 Graphics Cards</h1>
            <p>
              Gear up for next-level experiences with HYPERPC gaming PCs powered
              by the NVIDIA® GeForce RTX™ 5080 and AI-powered DLSS 4. Built on
              the NVIDIA Blackwell architecture and equipped with ultra-fast
              GDDR7 memory, these systems let you run the most graphically
              demanding games and creative applications with stunning clarity
              and performance. With NVIDIA Studio, bring your creative visions
              to life faster than ever before.
            </p>
            <img
            src={banner}
            alt="Cyber Banner"
            className="d-block d-lg-none my-3 home-banner-image"
          />
          </div>
          <div className="col-lg-7"></div>
        </div>
      </div>
    </div>
  );
};
