import React from 'react'
import './hero1.css'
import {AiOutlineSearch} from 'react-icons/ai'

import Video from '../../assets/fest video.mp4'

function Hero1() {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={Video} type='video/mp4' />
            </video>
            <div className="overlay"></div>
            
        </div>
    )
}

export default Hero1
