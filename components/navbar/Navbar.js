import React, { useState } from 'react'
// import { BiSearch } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { FaFacebook,FaTwitter } from 'react-icons/fa'


import { Link } from 'react-scroll'

import './NavbarStyles.css'

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    return (
        <div name='home' className={nav ? 'navbar navbar-bg' : 'navbar'}>
            <div className={nav ? 'logo dark' : 'logo'}>
                <h2>EVENTOS.</h2>
            </div>
            <ul className="nav-menu">
                
                <Link to='/../fest' smooth={true} duration={500} ><li>FEST</li></Link>
               
                
                <Link to='carousel' smooth={true} duration={500} ><li>CAROUSEL</li></Link>
                <Link to='search' smooth={true} duration={500} ><li>ABOUT</li></Link>
                
            </ul>
            <div className="nav-icons">
                {/* <BiSearch className='icon' style={{ marginRight: '1rem' }} /> */}
                <BsPerson className='icon' />
            </div>
            <div className="hamburger" onClick={handleNav}>
                {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : (<AiOutlineClose style={{ color: '#000' }} className='icon' />)}

            </div>

            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className="mobile-nav">
                <Link to='home' smooth={true} duration={500} ><li>FEST</li></Link>
                
                <Link to='carousel' smooth={true} duration={500} ><li>CAROUSEL</li></Link>
                <Link to='search' smooth={true} duration={500} ><li>ABOUT</li></Link>
                </ul>
                <div className="mobile-menu-bottom">
                    <div className="menu-icons">
                        {/* <button>Search</button> */}
                        <button>Account</button>
                    </div>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/nsecollegetig/"><FaFacebook className='icon' /></a>
                        
                        <a href="https://twitter.com/_nsec_official_?lang=en"><FaTwitter className='icon' /></a>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar
