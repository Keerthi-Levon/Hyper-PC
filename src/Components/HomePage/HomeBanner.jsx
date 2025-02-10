import React from 'react'
import { GiMoebiusTriangle } from "react-icons/gi";
import { FaChevronRight } from "react-icons/fa6";
import '../../Pages/HomePage/Home.css'
export const HomeBanner = () => {
  return (
    <div className='home-page-banner'>
      <div className='d-flex gap-3 align-items-center px-4 home-page-banner-header'>
        <GiMoebiusTriangle size={22} className='home-icon '/>
        <FaChevronRight size={11} className='home-icon'/>
        <p className='mb-0'>Gaming PCs</p>
        <FaChevronRight size={11} className='home-icon'/>
        <p className='mb-0'>Gaming PCs with NVIDIA GeForce RTX 5080</p>
      </div>
      <div className='home-banner-div mt-5'>
        <div className="row">
          <div className='col-lg-5'>
            <h1>PCs with GeForce RTX 5080 Graphics Cards</h1>
            <p>Gear up for next-level experiences with HYPERPC gaming PCs powered by the NVIDIA® GeForce RTX™ 5080 and AI-powered DLSS 4. Built on the NVIDIA Blackwell architecture and equipped with ultra-fast GDDR7 memory, these systems let you run the most graphically demanding games and creative applications with stunning clarity and performance. With NVIDIA Studio, bring your creative visions to life faster than ever before.</p>
          </div>
          <div className='col-lg-7'>
            {/* <img width={650} src={home_banner_img} alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  )
}
