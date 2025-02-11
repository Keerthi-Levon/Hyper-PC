import React from "react";
import { RiMenuAddLine } from "react-icons/ri";
import banner from "../../Assets/Images/home-card-bg.jpg";
import { FiClock, FiShoppingCart, FiUsers } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";

const CyberBanner = () => {
  return (
    <>
      <div className=" cyber-banner-section p-4">
        <div className="container">
          <div className="row">
          <div className="col-lg-6"></div>
        <div className="col-lg-6 cyber-banner-content">
          <h2 className="mb-2">
            HYPERPC <br /> <span className="text-uppercase">CYBER</span>
          </h2>
          <p className="mb-3 banner-link">
            <RiMenuAddLine /> Compare
          </p>
          <p className="cyber-content">
            Ready for the future. Aggressive futuristic design, made for true
            cyber warriors.
          </p>
          <img
            src={banner}
            alt="Cyber Banner"
            className="img-fluid d-block d-lg-none my-3"
          />
          <hr className="border-line-cyber" />
          <div className=" cyber-banner-add-to-cart">
            <div className="price-cyber">
              <span className="mb-1">Price AED 24,520</span>
              <p className="loan-calculator">Loan calculator</p>
            </div>

            <button className="custom-cart-btn">
              <div className="cart-icon-section">
                <FiShoppingCart />
              </div>
              <span className="cart-text">ADD TO CART</span>
            </button>

            <div>
              <span className="loan-calculator">Buy Now</span>
            </div>
          </div>
          <hr className="border-line-cyber" />
          <div className="row">
            <div className="d-flex justify-content-between col-lg-6">
              <div className="configurator-container">
                <div className="config-icon">
                  <FiClock />
                </div>
                <div className="config-text">
                  <p className="title">Make to order, 3 - 4 d.</p>
                  <p className="subtitle">Ways to receive</p>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between col-lg-6">
              <div className="configurator-container">
                <div className="config-icon">
                  <IoSettingsOutline />
                </div>
                <div className="config-text-one">
                  <p className="title">Configurator</p>
                  <p className="subtitle">Create your own</p>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between col-lg-6">
              <div className="configurator-container">
                <div className="config-icon">
                  <FiUsers />
                </div>
                <div className="config-text-one">
                  <p className="title">Need help?</p>
                  <p className="subtitle">Ask for advice</p>
                </div>
              </div>
            </div>
          </div>
        </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default CyberBanner;
