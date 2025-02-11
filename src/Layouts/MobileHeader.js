import React, { useState } from "react";
import {
  ShoppingCartOutlined,
  UserOutlined,
  BarChartOutlined,
  SendOutlined,
  GlobalOutlined,
  MenuOutlined,
  ArrowLeftOutlined

} from "@ant-design/icons";
import "./Layout.css"
import logo from "../Assets/Images/hyperpc-logo.svg";

const MobileHeader = ({ menuData }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [selectedSubmenu, setSelectedSubmenu] = useState(null);

  const handleBackClick = () => {
    if (selectedSubmenu) {
      setSelectedSubmenu(null);
    } else if (activeMenu) {
      setActiveMenu(null);
    } else {
      setIsMenuOpen(false);
    }
  };

  const renderTopBar = () => (
    <div className="mobile-top-bar">
      <div className="mobile-top-bar-left">
        <span className="mobile-top-bar-item">
          <SendOutlined /> <span>UAE</span>
        </span>
        <span className="mobile-top-bar-item">
          <GlobalOutlined /> <span>EN</span>
        </span>
      </div>
      <div className="mobile-top-bar-right">+971 4 526 3600</div>
    </div>
  );

  const renderMainNav = () => (
    <div className="mobile-main-nav">
      <div className="mobile-nav-left">
        
        <img src={logo} alt="HYPERPC Logo" className="mobile-logo" />
      </div>
      <div className="mobile-nav-icons">
       
        <UserOutlined />
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="mobile-menu-button"
        >
          <MenuOutlined />
        </button>
      </div>
    </div>
  );

  const renderMobileMenu = () => (
    <div className={`mobile-menu ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="mobile-menu-header">
        <button onClick={handleBackClick} className="mobile-back-button">
          <ArrowLeftOutlined />
        </button>
        <span className="mobile-menu-title">
          {selectedSubmenu ? selectedSubmenu : activeMenu ? activeMenu : 'Menu'}
        </span>
      </div>

      <div className="mobile-menu-content">
        {!activeMenu && !selectedSubmenu && (
          <div className="mobile-main-menu">
            {Object.keys(menuData).map((menuItem) => (
              <div
                key={menuItem}
                onClick={() => setActiveMenu(menuItem)}
                className="mobile-menu-item"
              >
                {menuItem}
              </div>
            ))}
          </div>
        )}

        {activeMenu && !selectedSubmenu && (
          <div className="mobile-submenu">
            {menuData[activeMenu].columns.map((column, index) => (
              <div key={index} className="mobile-submenu-section">
                <h3 className="mobile-submenu-title">{column.title}</h3>
                {column.links.map((link) => (
                  <div
                    key={link}
                    onClick={() => setSelectedSubmenu(link)}
                    className="mobile-submenu-item"
                  >
                    {link}
                  </div>
                ))}

                {column.secondSection && (
                  <>
                    <h3 className="mobile-submenu-title">
                      {column.secondSection.title}
                    </h3>
                    {column.secondSection.links.map((link) => (
                      <div
                        key={link}
                        onClick={() => setSelectedSubmenu(link)}
                        className="mobile-submenu-item"
                      >
                        {link}
                      </div>
                    ))}
                  </>
                )}

                {column.thirdSection && (
                  <>
                    <h3 className="mobile-submenu-title">
                      {column.thirdSection.title}
                    </h3>
                    {column.thirdSection.links.map((link) => (
                      <div
                        key={link}
                        onClick={() => setSelectedSubmenu(link)}
                        className="mobile-submenu-item"
                      >
                        {link}
                      </div>
                    ))}
                  </>
                )}
              </div>
            ))}
          </div>
        )}

        {selectedSubmenu && (
          <div className="mobile-detail-view">
            <h2 className="mobile-detail-title">{selectedSubmenu}</h2>
            <p className="mobile-detail-content">Content for {selectedSubmenu}</p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="mobile-header">
      {renderTopBar()}
      {renderMainNav()}
      {renderMobileMenu()}
    </div>
  );
};

export default MobileHeader;