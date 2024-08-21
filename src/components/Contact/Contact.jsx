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
                
                <span className='primaryText' size={500}>Contact us</span>
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
                                <span> 7795959702</span>
                               
                            </div>
                        </div>
                        
                    </div>

                    {/* Second mode */}
                    <div className='flexColStart mode'>
                        <div className='flexStart'>
                            <div className='flexCenter icon'>
                                <BsFillChatDotsFill size={18}/>
                            </div>
                            <div className='flexColStart detail'>
                                <span className='primaryText'> Mail  </span>
                                <span> justshop4568@gmail.com </span>
                               
                            </div>
                        </div>
                       
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
                                <span className='primaryText'> WhatsApp  </span>
                                <span> 7795959702 / 8011001813</span>
                               
                            </div>
                        </div>
                     
                    </div>

                    {/* Second mode */}
                    <div className='flexColStart mode'>
                        <div className='flexStart'>
                            <div className='flexCenter icon'>
                                <BsFillChatDotsFill size={18}/>
                            </div>
                            <div className='flexColStart detail'>
                                <span className='primaryText'> Socials  </span>
                                <span> <img src='instagram_logo.png' width={100}>
                                
                                
                                     </img>
                                     </span>
                               
                            </div>
                        </div>
                        
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