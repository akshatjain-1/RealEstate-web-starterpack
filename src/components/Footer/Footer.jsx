import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className='f-wrapper'>
        <div className='flexCenter paddings innerWidth f-container'>
            {/* Left Section */}

            <div className='flexColStart f-left'>
            <span className='primaryText'> Location </span>

            <div className='map-section'>
            <div className='gmap-frame'>
            <iframe width="100%" height="399" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=3a,%20Chord%20Rd,%20near%20Swathi%20Restaurant,%20West%20of%20Chord%20Road%202nd%20Stage,%20West%20of%20Chord%20Road,%20Stage%202,%20Basaveshwar%20Nagar,%20Bengaluru,%20Karnataka%20560079,%20India+(JUST%20SHOP)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps tracker sport</a></iframe></div>
            
            </div>
            </div>
           
            {/* Right Section */}

            <div className='flexColStart f-right'>
                <span className='primaryText'> Information </span>
                <span className='hello'> Near Swathi Restraunt, Rajajinagar, Bengaluru, karnataka.
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