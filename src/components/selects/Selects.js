import React from 'react'
import './SelectsStyles.css'

import sports from '../../assets/sports.jpeg'
import fest from '../../assets/fest pic 2.jpg'
import clubs from '../../assets/clubs.JPG'
import availability from '../../assets/availability.png'
import payment from '../../assets/payment.png'
import bookticket from '../../assets/book ticket.jpg'

import SelectsImg from '../SelectsImg/SelectsImg'


function Selects() {
    return (
        <div name='views' className='selects'>
            <div className='container'>
                <SelectsImg bgImg={sports} text='sports' />
                <SelectsImg bgImg={fest}  text='fest'/>
                <SelectsImg bgImg={clubs} text='clubs' />
                <SelectsImg bgImg={availability} text='check availability' />
                <SelectsImg bgImg={payment} text='make payment' />
                <SelectsImg bgImg={bookticket} text='book ' />
            </div>

        </div>
    )
}

export default Selects
