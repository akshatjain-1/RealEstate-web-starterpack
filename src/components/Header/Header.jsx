import React, { useState } from 'react';  
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';
import { Link } from 'react-router-dom'; // Modified code
const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false)

  const getMenuStyles = (menuOpened) => {
    if(document.documentElement.clientWidth <= 768) 
    {
      return {right: !menuOpened && "-100%"}
    }
  }
  return (
    <section classname="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">

            <img src='././logo1.png' alt='logo' width={100}/>
            <h1> JUST SHOP</h1>

            <OutsideClickHandler
            onOutsideClick={()=>{
              setMenuOpened(false)
            }}>



            <div className='flexCenter h-menu'
            style={getMenuStyles(menuOpened)} 
            >
                <a href='#'>
                Home
                </a>
                <a href=''>About</a> {/* Modified code */}

                <a href='#'>Services</a>
                <button className='button'>
                <a href=''>Contact</a>
                </button>
            </div>
            </OutsideClickHandler>

            <div className='menu-icon' onClick={() => setMenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={50}/>
        </div>
        </div>
        
       

    </section>
   
  );


}

export default Header