import React from 'react'
import './HeroStyles.css'
import gif from './cards.gif'


function Hero() {

    return (
        <div name='hero' className='hero'>
            <img id='video' src={gif} alt="loading..." />
            <div className="overlay"></div>
            <div className="content">
                <h1 id='heading1'>Welcome to our PRODUCTIVITY APP</h1>
                <h2 id='heading1'>Here, you'll get everything you need!!!</h2>
               
            </div>
        </div>
    )
}

export default Hero