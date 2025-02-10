import React from 'react'
import home_card_img from '../../Assets/Images/home-card-bg.png'

const HomepageCard = () => {
  return (
    <div className='homepage-card-div'>
      <h1 className='homepageCard-header'>PCs with GeForce RTX™ 5080</h1>
      <div className='homePage-card'>
            <img width={500} src={home_card_img} alt="" />
      </div>
    </div>
  )
}

export default HomepageCard
