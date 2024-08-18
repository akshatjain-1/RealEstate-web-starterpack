import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className='f-wrapper'>
      <div className='innerWidth flexCenter paddings f-container'>
        <div className='flexCenter f-menu'>
          <a href='#'>Home</a>
          <a href='#'>About</a>
          <a href='#'>Services</a>
          <a href='#'>Contact</a>
        </div>
        <div className='flexCenter f-socials'>
          <a href='#'>Facebook</a>
          <a href='#'>Instagram</a>
          <a href='#'>Twitter</a>
        </div>
        <div className='flexCenter f-contacts'>
          <p>Address: 1234 Street Name, City Name, United States</p>
          <p>Phone: +123-456-7890</p>
          <p>Email:
          </p>
          </div>
      </div>
        
    </section>
  )
}

export default Footer