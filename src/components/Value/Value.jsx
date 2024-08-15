import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css';
import {MdOutlineArrowDropDown} from 'react-icons/md'
import './Value.css'
import data from '../../utils/accordion.jsx'
import { useState } from 'react';

const Value = () => {
  return (
    <section className='v-wrapper'>
        <div className=' flexCenter paddings innerWidth v-container'>
            {/* Left Section */}

            <div className='flexColStart v-left'>

                <div className='image-container'>
                    <img src='./value.png' alt='value'/>
                </div>
            </div>

            {/* Right Section */}

            <div className='flexColStart v-right'>
                <span className='orangeText'>Our values
                </span>
                <span className='primaryText'>Values we give to your
                </span>
                <span className='secondaryText'>
                We are always ready to help providing the best choices for you.
                <br/>
                We believe in quality and customer satisfaction.
                </span>

                

                <Accordion 
                className='accordion'
                allowMultipleExpanded={false}
                preExpanded={[0]}
                >   
                    {
                        data.map((item, i) => {
                            const [className, setClassName] = useState(null)
                         return (
                            <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                                <AccordionItemHeading>
                                    <AccordionItemButton className='flexCenter accordionButton'>

                                    <AccordionItemState>
                                        {({expanded}) => 
                                        expanded 
                                        ? setClassName("expanded")
                                        : setClassName("collapsed")
                                        }
                                    </AccordionItemState>
                                        <div className='flexCenter icon'>{item.icon}</div>
                                        <span className='myText'>{item.heading}</span>
                                        <div className='flexCenter icon'><MdOutlineArrowDropDown size={20}/></div>
                                    </AccordionItemButton>

                                </AccordionItemHeading>

                                <AccordionItemPanel>
                                    <p className='myText'>{item.detail}</p>
                                </AccordionItemPanel>

                            </AccordionItem>

                         );
                        })
                    }
                    
                </Accordion>

            </div>
        </div>
    </section>
  )
}

export default Value