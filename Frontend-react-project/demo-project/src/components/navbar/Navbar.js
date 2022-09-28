import React, { useState } from 'react'

import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { TiWeatherPartlySunny, TiWeatherSunny } from 'react-icons/ti'

import { Link } from 'react-scroll'
// import Calendar from './calendar'
import './NavbarStyles.css'

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)
    
    return (
        <div name='home' className={nav ? 'navbar navbar-bg' : 'navbar'}>
            <div className={nav ? 'logo dark' : 'logo'}>
                <h1>Productivity</h1>
            </div>
            <ul className="nav-menu">
                <Link to='hero' smooth={true} duration={500} ><ul>Home</ul></Link>
                <Link to='SetNotes' smooth={true} duration={500} ><ul>To-do List</ul></Link>
          
                <Link to='Calendar' smooth={true} duration={500} ><ul>Calendar</ul></Link>
                
    
                <Link to='footer' smooth={true} duration={500} ><ul>Contact Us</ul></Link>
           
            </ul>
            {/* <div className="nav-icons" > 
            <Link  to="weatherApp" smooth={true} duration={500}>   <TiWeatherPartlySunny className='icon' style={{ marginRight: '1rem',fontSize: 'relative' }} /> </Link>
                 
            </div> */}
            <div className="hamburger" onClick={handleNav}>
                {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : (<AiOutlineClose style={{ color: 'white' }} className='icon' />)}

            </div>
            
        
               
            </div>

        
    )
}

export default Navbar
