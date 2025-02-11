import React, { useState } from "react";
import "./Layout.css";
import {
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaLinkedinIn,
  FaChevronRight,
} from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link for navigation
import homeIcon from "../Assets/Images/home-icon.png"
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Footer = () => {
  const [openDropdown, setOpenDropdown] = useState(null);


  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };
  const footerData = [
    {
      title: "Gaming PCs",
      links: ["All models", "In stock", "Configurator", "Help me choose"],
    },
    {
      title: "Workstations",
      links: ["All models", "Configurator", "Help me choose"],
    },
    {
      title: "Servers",
      links: ["HYPERPC FORCE", "HYPERPC HYDRO"],
    },
    {
      title: "Accessories",
      links: ["All Accessories", "Monitors", "Keyboards", "Mice", "Headsets", "Mouse Pads", "Microphones", "Chairs"],
    },
    {
      title: "Services",
      links: ["All Services", "Modernization", "Trade-In", "Maintenance"],
    },
    {
      title: "For Business",
      links: ["Game clubs"],
    },
    {
      title: "For Owners",
      links: ["Return and Exchange"],
    },
    {
      title: "For Buyers",
      links: ["Installment", "Payment and delivery", "Warranty", "Trade-in"],
    },
    {
      title: "Company",
      links: ["Contacts", "About us", "Production", "Career", "Blog"],
    },
    {
      title: "Projects",
      links: ["Bloggers", "eSports", "Events"],
    },
    {
      title: "Blog",
      links: ["News and Articles"],
    },
  ];

  return (
    <>
      <footer className="main-footer">
        <div className="container">
          <nav >
            <div className="container">
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
          <hr />
          <div className="mobile-footer">
            {footerData.map((section, index) => (
              <div key={index} className="dropdown">
                <h5 onClick={() => toggleDropdown(index)} className="dropdown-header">
                  {section.title}
                  <span className="dropdown-icon">
                    {openDropdown === index ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </h5>
                <ul className={`footer-nav ${openDropdown === index ? "show-dropdown" : ""}`}>
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="desktop-footer row">
            {/* {/ Gaming PCs Column /} */}
            <div className="col">
              <h5>Gaming PCs</h5>
              <ul className="footer-nav">
                <li>
                  <a href="#">All models</a>
                </li>
                <li>
                  <a href="#">In stock</a>
                </li>
                <li>
                  <a href="#">Configurator</a>
                </li>
                <li>
                  <a href="#">Help me choose</a>
                </li>
              </ul>

              <h5>Workstations</h5>
              <ul className="footer-nav">
                <li>
                  <a href="#">All models</a>
                </li>
                <li>
                  <a href="#">Configurator</a>
                </li>
                <li>
                  <a href="#">Help me choose</a>
                </li>
              </ul>
            </div>

            {/* {/ Servers & Accessories Column /} */}
            <div className="col">
              <h5>Servers</h5>
              <ul className="footer-nav">
                <li>
                  <a href="#">HYPERPC FORCE</a>
                </li>
                <li>
                  <a href="#">HYPERPC HYDRO</a>
                </li>
              </ul>

              <h5>Accessories</h5>
              <ul className="footer-nav">
                <li>
                  <a href="#">All Accessories</a>
                </li>
                <li>
                  <a href="#">Monitors</a>
                </li>
                <li>
                  <a href="#">Keyboards</a>
                </li>
                <li>
                  <a href="#">Mice</a>
                </li>
                <li>
                  <a href="#">Headsets</a>
                </li>
                <li>
                  <a href="#">Mouse Pads</a>
                </li>
                <li>
                  <a href="#">Microphones</a>
                </li>
                <li>
                  <a href="#">Chairs</a>
                </li>
              </ul>
            </div>

            {/* {/ Services Column /} */}
            <div className="col">
              <h5>Services</h5>
              <ul className="footer-nav">
                <li>
                  <a href="#">All Services</a>
                </li>
                <li>
                  <a href="#">Modernization</a>
                </li>
                <li>
                  <a href="#">Trade-In</a>
                </li>
                <li>
                  <a href="#">Maintenance</a>
                </li>
              </ul>

              <h5>For Business</h5>
              <ul className="footer-nav">
                <li>
                  <a href="#">Game clubs</a>
                </li>
              </ul>
            </div>

            {/* {/ For buyers Column /} */}
            <div className="col">
              <h5>For Owners</h5>
              <ul className="footer-nav">
                <li>
                  <a href="#">Return and Exchange</a>
                </li>
              </ul>

              <h5>For buyers</h5>
              <ul className="footer-nav">
                <li>
                  <a href="#">Installment</a>
                </li>
                <li>
                  <a href="#">Payment and delivery</a>
                </li>
                <li>
                  <a href="#">Warranty</a>
                </li>
                <li>
                  <a href="#">Trade-in</a>
                </li>
              </ul>
            </div>

            {/* {/ Projects Column /} */}
            <div className="col">
              <h5>Company</h5>
              <ul className="footer-nav">
                <li>
                  <a href="#">Contacts</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Production</a>
                </li>
                <li>
                  <a href="#">Career</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>

              <h5>Projects</h5>
              <ul className="footer-nav">
                <li>
                  <a href="#">Bloggers</a>
                </li>
                <li>
                  <a href="#">eSports</a>
                </li>
                <li>
                  <a href="#">Events</a>
                </li>
              </ul>

              <h5>Blog</h5>
              <ul className="footer-nav">
                <li>
                  <a href="#">News and Articles</a>
                </li>
              </ul>
            </div>
          </div>

          {/* {/ Bottom Section /} */}
          <div className="footer-bottom">
            <div className="d-flex justify-content-between flex-column flex-md-row">
              <div className="visit-info">
                We invite you to visit our{" "}
                <a href="#" className="highlight">
                  showroom in Dubai
                </a>
                . Call us at +971 4 526 3600 or{" "}
                <a href="#" className="highlight">
                  write to us
                </a>
                .
              </div>
              <div className="social-media-container">
                <a href="#" className="social-icon youtube">
                  <FaYoutube size={20} />
                </a>
                <a href="#" className="social-icon instagram">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="social-icon facebook">
                  <FaFacebook size={20} />
                </a>
                <a href="#" className="social-icon linkedin">
                  <FaLinkedinIn size={20} />
                </a>
              </div>
            </div>
            <hr className="d-none d-md-block" />
            <div className="footer-meta">
              <div className="copyright">Copyright © 2009-2025 HYPERPC</div>
              <div className="footer-links">
                <a href="#">Legal Information</a>
                <span className="separator">|</span>
                <a href="#">Site Map</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
