import React from 'react'
import CyberBanner from '../../Components/CyberPage/CyberBanner'
import './cyber.css'
import EquipmentPage from '../EquipmentPage/EquipmentPage'
import GamingPerformanceChart from '../../Components/CyberPage/GamingPerformanceChart'
const CyberIndexPage = () => {
	return (
		<>
		  <CyberBanner />
		  <EquipmentPage />
		  <GamingPerformanceChart/>
		</>
	)
}

export default CyberIndexPage

