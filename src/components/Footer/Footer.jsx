import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <section className='f-wrapper'>
      <div className='innerWidth flexCenter paddings f-container'>
        <div className='flexCenter f-left'>
          <div className='flexCenter f-socials'>
            <h2> Follow Us</h2>
            <div className='f-links'>
              <a href='https://www.facebook.com/profile.php?id=61564394932905&mibextid=ZbWKwL'><img src='facebook_logo.png' alt='Facebook' /></a>
              

            
              <a href=''><img src='instagram_logo.png' alt='Instagram' /></a>
              </div>
            
            
            
          </div>
        </div>

        <div className='flexCenter f-right'>
          <div className='flexCenter f-contacts'>
            <p>Address: Ground floor, NO.6, West of Chord Road, Next to Swathi
            Hotel, Bengaluru, Bengaluru Urban, Karnataka, 560086</p>
            <p>
              <img src='map.png'></img>: <a href="https://www.google.com/maps/search/?api=1&query=round+floor%2C+NO.6%2C+West+of+Chord+Road%2C+Next+to+Swathi+Hotel%2C+Bengaluru%2C+Bengaluru+Urban%2C+Karnataka%2C+560086" target="_blank">View on Google Maps</a>
            </p>
            
         
            <p>Email: justshop4568@gmail.com</p>
            <p>Phone: 7892966366 </p>
            <p>Hours: Mon-Sat, 9:00am-9:00pm</p>
          </div>

        <div className='footer-bottom'>
        <p>&copy; 2024 JUST SHOP. All rights reserved.</p>
        
        <Link to='/privacy-policy'>Privacy Policy </Link>
        <Link to='/terms-of-service'>Terms of Service</Link>

        
        </div>
          
        </div>
      </div>
    </section>
  )
}

export default Footer