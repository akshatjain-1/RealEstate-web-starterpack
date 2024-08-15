import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className='f-wrapper'>
        <div className='flexCenter paddings innerWidth f-container'>
            {/* Left Section */}

            <div className='flexColStart f-left'>
            <h1> JUST SHOP</h1>
                <img src='./logo1.png' className='logo' alt='' width={100}></img>

                <span className='orangeText'> Our vision</span>
            </div>

            {/* Right Section */}

            <div className='flexColStart f-right'>
                <span className='primaryText'> Information </span>
                <span className='secondaryText'> Near Swathi Restraunt, Rajajinagar, Bengaluru, karnataka.
                </span>
                <div className='flexCenter f-menu'>
                    <span> Home</span>
                    <span> About</span>
                    <span> Services</span>
                    <span> Contact</span>
                </div>


            </div>

                
            
        </div>
    </section>
  )
}

export default Footer