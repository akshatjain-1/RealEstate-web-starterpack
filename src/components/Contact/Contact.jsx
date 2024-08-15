import React from 'react'
import './Contact.css'
import { MdCall } from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

const Contact = () => {
  return (
    <section className='c-wrapper'>
        <div className=' flexCenter paddings innerWidth c-container'>
            {/* Left Section */}

            <div className='flexColStart c-left'>
                <span className='orangeText'> Our contacts</span>
                <span className='primaryText'>Contact us</span>
                <span className='myText'> We are always ready to assist you.</span>

                <div className='flexColStart contactModes'>
                {/*  First row */}
                <div className='flexStart Row'>
                    <div className='flexColStart mode'>
                        <div className='flexStart'>
                            <div className='flexCenter icon'>
                                <MdCall size={18}/>
                            </div>
                            <div className='flexColStart detail'>
                                <span className='primaryText'> Call  </span>
                                <span> 8011001813</span>
                               
                            </div>
                        </div>
                        <div className='flexColStart button'> Call Now</div>
                    </div>

                    {/* Second mode */}
                    <div className='flexColStart mode'>
                        <div className='flexStart'>
                            <div className='flexCenter icon'>
                                <BsFillChatDotsFill size={18}/>
                            </div>
                            <div className='flexColStart detail'>
                                <span className='primaryText'> Chat  </span>
                                <span> 8011001813</span>
                               
                            </div>
                        </div>
                        <div className='flexColStart button'> Chat Now</div>
                    </div>
                </div>
                    
                    {/* Second row */}

                    <div className='flexStart Row'>
                    <div className='flexColStart mode'>
                        <div className='flexStart'>
                            <div className='flexCenter icon'>
                                <BsFillChatDotsFill size={18}/>
                            </div>
                            <div className='flexColStart detail'>
                                <span className='primaryText'> Connect  </span>
                                <span> 8011001813</span>
                               
                            </div>
                        </div>
                        <div className='flexColStart button'> ++++ </div>
                    </div>

                    {/* Second mode */}
                    <div className='flexColStart mode'>
                        <div className='flexStart'>
                            <div className='flexCenter icon'>
                                <BsFillChatDotsFill size={18}/>
                            </div>
                            <div className='flexColStart detail'>
                                <span className='primaryText'> Chat  </span>
                                <span> 8011001813</span>
                               
                            </div>
                        </div>
                        <div className='flexColStart button'> Chat Now</div>
                    </div>
                </div>
            </div>
        </div>



            {/* Right Section */}

            <div className='flexColStart c-right'>

                <div className='image-container'>
                    <img src='./img2.jpg' alt='contact'/>
                </div>
               
                
            </div>

        </div>
        
    </section>
  )
}

export default Contact