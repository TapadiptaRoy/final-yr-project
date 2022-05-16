import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaTwitter } from 'react-icons/fa'


function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <h3>EVENTOS</h3>
                    <div className="social">
                     <a href="https://www.facebook.com/nsecollegetig/"><FaFacebook className='icon' /></a>
                       
                      <a href="https://twitter.com/_nsec_official_?lang=en">  <FaTwitter className='icon' /></a>
                      
                    </div>
                </div>
                <div className="bottom">
                    <div className="left">
                        <ul>
                            <li>About</li>
                            <li>Partnerships</li>
                            <li>Careers</li>
                            <li>Newsroom</li>
                            <li>Advertising</li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <li>Contact</li>
                            <li>Terms</li>
                            <li>Policy</li>
                            <li>Privacy</li>
                            <li>Pricing</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
