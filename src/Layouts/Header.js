import React, { useState } from "react";
import {
  ShoppingCartOutlined,
  UserOutlined,
  BarChartOutlined,
  SendOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import logo from "../Assets/Images/hyperpc-logo.svg";
const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Menu data structure
  const menuData = {
    "Gaming PCs": {
      columns: [
        {
          title: "Model range",
          links: ["All models", "In stock", "Help me choose", "Configurator"],
        },
        {
          title: "Select by Tasks",
          links: [
            "For Work and Study",
            "For eSports",
            "For streaming",
            "PCs for 2K Gaming",
            "PCs for 4K Gaming",
          ],
          secondSection: {
            title: "Select by Graphics Cards",
            links: [
              "GeForce RTX 4060 / Ti",
              "GeForce RTX 4070 / Ti",
              "GeForce RTX 4080",
              "GeForce RTX 5080",
              "GeForce RTX 5090",
            ],
          },
          thirdSection: {
            title: "Select by Processor",
            links: ["Intel Core", "AMDRyzen"],
          },
        },

        {
          title: "Select by Game",
          links: [
            "Counter-Strike 2",
            "DOTA 2",
            "PUBG",
            "GTA 5",
            "View all games",
          ],
          secondSection: {
            title: "Select by Price",
            links: ["AED 10,000", "AED 15,000", "AED 20,000", "AED 25,000"],
          },
        },
        {
          title: "Select by feature",
          links: [
            "Wall mounted computer",
            "Touchscreen computer",
            "Gaming Station",
            "Compact PC",
            "Powered by ASUS",
          ],
        },
      ],
    },
    Workstations: {
      columns: [
        {
          title: "Model range",
          links: [
            "All models",
            "GPU Servers",
            "Help me choose",
            "Configurator",
          ],
        },
        {
          title: "Select by Purpose",
          links: [
            "3D modeling",
            "Graphic design",
            "Video production",
            "Development",
            "CAD",
            "Machine learning",
          ],
          secondSection: {
            title: "Select by Graphics Cards",
            links: ["GeForce RTX", "Quadro RTX"],
          },
        },
        {
          title: "By Software",
          links: [
            "Autodesk 3dsMax",
            "Blender",
            "Autodesk AutoCAD",
            "Adobe Premiere Pro",
            "Davinci Resolve",
            "View all program",
          ],
          secondSection: {
            title: "Select by Processor",
            links: ["Intel Core", "AMD Ryzen Threadripper"],
          },
        },
      ],
    },
    Servers: {
      columns: [
        {
          title: "Model range",
          links: ["All models", "GPU Servers"],
        },
        {
          title: "Select by Purpose",
          links: [
            "Machine Learning",
            "Artificial Intelligence",
            "Virtualization",
            "For Office",
            "Video Surveillance",
            "Databases",
            "Mail Server",
            "Backup",
            "Terminal",
            "Domain Controller",
          ],
        },
        {
          title: "Selected by Components",
          links: [
            "AMD EPYC",
            "Intel Xeon",
            "Single-Processor",
            "Dual-Processor",
          ],
          secondSection: {
            title: "Select by Height",
            links: ["1U", "2U", "4U"],
          },
        },
        {
            title: "Select by Form Factor",
            links: [
             "Rack","Tower"
            ],
          },
      ],
    },
    Accessories: {
      columns: [
        {
          title: "Peripherals",
          links: ["Keyboards", "Mice", "Monitors", "Headsets"],
        },
        {
          title: "Components",
          links: ["Graphics Cards", "Memory", "Storage", "Power Supplies"],
        },
      ],
    },
  };

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
        <div className="top-bar-right">+971 4 526 3600</div>
      </div>

      {/* Main Navigation Container */}
      <div className="nav-container">
        {/* Main Navigation */}
        <div className="main-nav">
          <div className="nav-left">
            <img src={logo} alt="HYPERPC Logo" className="logo-icon" />
            <nav className="nav-links">
              {Object.keys(menuData).map((menuItem) => (
                <div
                  key={menuItem}
                  className="nav-link"
                  onMouseEnter={() => setActiveDropdown(menuItem)}
                >
                  {menuItem}
                  {activeDropdown === menuItem && (
                    <div
                      className="hover-bridge"
                      onMouseEnter={() => setActiveDropdown(menuItem)}
                    />
                  )}
                </div>
              ))}
              {["Services", "Support", "Company"].map((item) => (
                <a key={item} href="#" className="nav-link">
                  {item}
                </a>
              ))}
            </nav>
          </div>
          <div className="nav-icons">
            <BarChartOutlined style={{ fontSize: "20px" }} />
            <ShoppingCartOutlined style={{ fontSize: "20px" }} />
            <UserOutlined style={{ fontSize: "20px" }} />
          </div>
        </div>

        {/* Dropdown Menus */}
        {activeDropdown && menuData[activeDropdown] && (
          <div
            className="sub-nav"
            onMouseEnter={() => setActiveDropdown(activeDropdown)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="sub-nav-content">
              {menuData[activeDropdown].columns.map((column, index) => (
                <div key={index} className="sub-nav-column">
                  <h3>{column.title}</h3>
                  <div className="sub-nav-links">
                    {column.links.map((link) => (
                      <a key={link} href="#" className="sub-nav-link">
                        {link}
                      </a>
                    ))}
                  </div>

                  {column.secondSection && (
                    <>
                      <h3>{column.secondSection.title}</h3>
                      <div className="sub-nav-links">
                        {column.secondSection.links.map((link) => (
                          <a key={link} href="#" className="sub-nav-link">
                            {link}
                          </a>
                        ))}
                      </div>
                    </>
                  )}
                  {column?.thirdSection && (
                    <>
                      <h3>{column.thirdSection.title}</h3>
                      <div className="sub-nav-links">
                        {column.thirdSection.links.map((link) => (
                          <a key={link} href="#" className="sub-nav-link">
                            {link}
                          </a>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
