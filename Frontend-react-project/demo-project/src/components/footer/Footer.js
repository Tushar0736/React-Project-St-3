import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-scroll'


function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <h2>You can also connect with us here!!</h2>
                    <div className="social" >
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                        <FaYoutube className='icon' />
                    </div>
                </div>
                
                    <div className="right">
                        <ul>
                        <a href='\contact.html' target={"_blank"}> <ul>Contact Us</ul></a>
                            <ul>Terms</ul>
                            <ul>Privacy</ul>
                            
                            
                        </ul>
                    </div>
                </div>
            </div>
    

    )
}

export default Footer
