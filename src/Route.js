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
import EquipmentPage from "./Pages/EquipmentPage/EquipmentPage";

const AppRoutes = () => {
  
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          {/* <Route path="/" element={<HomePage />} />   */}
          <Route path="/" element={<CyberIndexPage />} />  
          {/* <Route path="/equipment-page" element={<EquipmentPage />} />  */}
        </Routes>

         <Footer /> 
      </Router>
    </>
  );
};
export default AppRoutes;
