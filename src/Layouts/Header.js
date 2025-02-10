import React, { useState } from 'react';
import { ShoppingCartOutlined, UserOutlined, BarChartOutlined, SendOutlined, GlobalOutlined } from '@ant-design/icons';
import './Layout.css';
import logo from "../Assets/Images/hyperpc-logo.svg";

const Header = () => {
  const [isSubNavVisible, setIsSubNavVisible] = useState(false);

  return (
    <div className="header-container">
      <div className="top-bar">
        <div className="top-bar-left">
          <span>
            <SendOutlined />{" "}
            <span>United Arab Emirates</span>
          </span>
          <span >
            <GlobalOutlined />{" "}
            <span>English</span>
          </span>
        </div>
        <div className="top-bar-right">
          +971 4 526 3600
        </div>
      </div>

      <div className="main-nav">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="Logo" className="logo-icon" />
          <nav className="nav-links">
            <div
              className="nav-link"
              onMouseEnter={() => setIsSubNavVisible(true)}
              onMouseLeave={() => setIsSubNavVisible(false)}
            >
              Gaming PCs
            </div>
            <a href="#" className="nav-link">Workstations</a>
            <a href="#" className="nav-link">Servers</a>
            <a href="#" className="nav-link">Accessories</a>
            <a href="#" className="nav-link">Services</a>
            <a href="#" className="nav-link">Support</a>
            <a href="#" className="nav-link">Company</a>
          </nav>
        </div>
        <div className="nav-icons">
          <BarChartOutlined style={{ fontSize: '20px' }} />
          <ShoppingCartOutlined style={{ fontSize: '20px' }} />
          <UserOutlined style={{ fontSize: '20px' }} />
        </div>
      </div>

      {isSubNavVisible && (
        <div
          className="sub-nav"
          onMouseEnter={() => setIsSubNavVisible(true)}
          onMouseLeave={() => setIsSubNavVisible(false)}
        >
          <div className="sub-nav-column">
            <h3>Model range</h3>
            <div className="sub-nav-links">
              <a href="#" className="sub-nav-bar">All models</a>
              <a href="#" className="sub-nav-bar">In stock</a>
              <a href="#" className="sub-nav-bar">Help me choose</a>
              <a href="#" className="sub-nav-bar">Configurator</a>
            </div>
          </div>

          <div className="sub-nav-column">
            <h3>Select by Tasks</h3>
            <div className="sub-nav-links">
              <a href="#" className="sub-nav-link">For Work and Study</a>
              <a href="#" className="sub-nav-link">For eSports</a>
              <a href="#" className="sub-nav-link">For streaming</a>
              <a href="#" className="sub-nav-link">PCs for 2K Gaming</a>
              <a href="#" className="sub-nav-link">PCs for 4K Gaming</a>
            </div>
          </div>

          <div className="sub-nav-column">
            <h3>Select by Game</h3>
            <div className="sub-nav-links">
              <a href="#" className="sub-nav-link">Counter-Strike 2</a>
              <a href="#" className="sub-nav-link">DOTA 2</a>
              <a href="#" className="sub-nav-link">PUBG</a>
              <a href="#" className="sub-nav-link">GTA 5</a>
              <a href="#" className="sub-nav-link">View all games</a>
            </div>
          </div>

          <div className="sub-nav-column">
            <h3>Select by feature</h3>
            <div className="sub-nav-links">
              <a href="#" className="sub-nav-link">Wall mounted computer</a>
              <a href="#" className="sub-nav-link">Touchscreen computer</a>
              <a href="#" className="sub-nav-link">Gaming Station</a>
              <a href="#" className="sub-nav-link">Compact PC</a>
              <a href="#" className="sub-nav-link">Powered by ASUS</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
