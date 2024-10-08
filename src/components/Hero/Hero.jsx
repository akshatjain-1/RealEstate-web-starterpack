import React from 'react'
import './Hero.css'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <section className='hero-wrapper'>
        <div className='flexCenter paddings innerWidth hero-container'>

            {/* Left Section */}
            <div className='flexColStart hero-left'>
               <div className='hero-title'>
                    <div className='orange-circle'></div>
                        <motion.h1
                        initial={{y: "10rem", opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{
                            duration: 2,
                           
                        }}

                        >Discover <br />
                         Most suitable destination for your <br/>
                        fashion.
                        </motion.h1>
                     </div>

                <div className='flexColStart hero-description'>
                    <span className='desc'>Find a variety of choices from different brands</span>
                    <span className='desc'>Easy, Efficient and EffortLess Shopping Experiece</span>

                </div>
                <div className="flexCenter search-bar">
                    <HiLocationMarker color='var(--blue)' size={25}/>
                    <input type='text' placeholder='Find what you seek.'/>
                    <button className='button'>Search</button>
                </div>

                <div className='flexCenter stats'>
                    <div classname="flexColCenter stat">
                    <span>
                        <CountUp start={0} end={6000}/>
                        <span>+</span>
                    <span className='secondaryText'>   Premium Products</span>                  
                    </span>
                    </div>

                    <div classname="flexColStart stat">
                    <span>
                        <CountUp start={0} end={5000}/>
                        <span>+</span>
                    <span className='secondaryText'>  Customers Served</span>                  
                    </span>
                    </div>

                </div>
            </div>
            {/* Right Section */}
            <div className='flexCenter hero-right'>
            <motion.div 
            initial={{x: "10rem", opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{
                duration: 2,
               
            }}
            className='image-container'>
                <img src='./img1.jpg' alt='hero'/>
            </motion.div>
                
            </div>
        </div>

    </section>

  )
}

export default Hero