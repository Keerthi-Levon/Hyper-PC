import React, { useState } from 'react';
import { ShoppingCartOutlined, UserOutlined, BarChartOutlined, SendOutlined, GlobalOutlined } from '@ant-design/icons';
import logo from "../Assets/Images/hyperpc-logo.svg";
const Header = () => {
  const [isSubNavVisible, setIsSubNavVisible] = useState(false);

  return (
    <div className="header-container">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-left">
          <span>
            <SendOutlined />
            <span>United Arab Emirates</span>
          </span>
          <span>
            <GlobalOutlined />
            <span>English</span>
          </span>
        </div>
        <div className="top-bar-right">
          +971 4 526 3600
        </div>
      </div>

      {/* Main Navigation */}
      <div className="main-nav">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="HYPERPC Logo" className="logo-icon" />
          <nav className="nav-links">
            <div
              className="nav-link"
              onMouseEnter={() => setIsSubNavVisible(true)}
              onMouseLeave={() => setIsSubNavVisible(false)}
            >
              Gaming PCs
            </div>
            {['Workstations', 'Servers', 'Accessories', 'Services', 'Support', 'Company'].map((item) => (
              <a key={item} href="#" className="nav-link">
                {item}
              </a>
            ))}
          </nav>
        </div>
        <div className="nav-icons">
          <BarChartOutlined style={{ fontSize: '20px' }} />
          <ShoppingCartOutlined style={{ fontSize: '20px' }} />
          <UserOutlined style={{ fontSize: '20px' }} />
        </div>
      </div>

      {/* Dropdown Menu */}
      {isSubNavVisible && (
        <div
          className="sub-nav"
          onMouseEnter={() => setIsSubNavVisible(true)}
          onMouseLeave={() => setIsSubNavVisible(false)}
        >
          {/* Model Range */}
          <div className="sub-nav-column">
            <h3>Model range</h3>
            <div className="sub-nav-links">
              {['All models', 'In stock', 'Help me choose', 'Configurator'].map((item) => (
                <a key={item} href="#" className="sub-nav-bar">
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Select by Tasks */}
          <div className="col">
            <h3>Select by Tasks</h3>
            <div className="sub-nav-links">
              {[
                'For Work and Study',
                'For eSports',
                'For streaming',
                'PCs for 2K Gaming',
                'PCs for 4K Gaming'
              ].map((item) => (
                <a key={item} href="#" className="sub-nav-link">
                  {item}
                </a>
              ))}
            </div>


            <h3>Select by Graphics Cards</h3>
            <div className="sub-nav-links">
              {[
                'GeForce RTX 4060 / Ti',
                'GeForce RTX 4070 / Ti',
                'GeForce RTX 4080',
                'GeForce RTX 5080',
                'GeForce RTX 5090'
              ].map((item) => (
                <a key={item} href="#" className="sub-nav-link">
                  {item}
                </a>
              ))}
              </div>
          </div>

          {/* Select by Game */}
          <div className="col">
            <h3>Select by Game</h3>
            <div className="sub-nav-links">
              {[
                'Counter-Strike 2',
                'DOTA 2',
                'PUBG',
                'GTA 5',
                'View all games'
              ].map((item) => (
                <a key={item} href="#" className="sub-nav-link">
                  {item}
                </a>
              ))}
            </div>

            <h3>Select by Price</h3>
            <div className="sub-nav-links">
              {[
                'AED 10,000',
                'AED 15,000',
                'AED 20,000',
                'AED 25,000'
              ].map((item) => (
                <a key={item} href="#" className="sub-nav-link">
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Select by feature */}
          <div className="sub-nav-column">
            <h3>Select by feature</h3>
            <div className="sub-nav-links">
              {[
                'Wall mounted computer',
                'Touchscreen computer',
                'Gaming Station',
                'Compact PC',
                'Powered by ASUS'
              ].map((item) => (
                <a key={item} href="#" className="sub-nav-link">
                  {item}
                </a>
              ))}
            </div>
          </div>

        
        </div>
      )}
    </div>
  );
};

export default Header;