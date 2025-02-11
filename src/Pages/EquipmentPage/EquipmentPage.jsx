import React from 'react'
import './Equipment.css'
import CPUPage from '../../Components/EquipmentPage/CPU'
import VGAPage from '../../Components/EquipmentPage/VGA'
import MotherboardPage from '../../Components/EquipmentPage/Motherboard'
import SpecificationsPage from '../../Components/EquipmentPage/Specifications'
const EquipmentPage = () => {
	return (
		<>
		  <CPUPage />
          <VGAPage />
          <MotherboardPage />
          <SpecificationsPage />
		</>
	)
}

export default EquipmentPage

