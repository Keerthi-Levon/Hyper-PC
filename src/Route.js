import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import  Footer  from "./Layouts/Footer";
import  Header  from "./Layouts/Header";
// import { HomePage } from "./Pages/HomePage/HomePage";
import CyberIndexPage from "./Pages/CyberPage/CyberIndexPage";
import { HomePage } from "./Pages/HomePage/HomePage";

const AppRoutes = () => {
  
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage />} />  
          <Route path="/gaming-pc/cyber" element={<CyberIndexPage />} />  
        </Routes>
         <Footer /> 
      </Router>
    </>
  );
};
export default AppRoutes;
