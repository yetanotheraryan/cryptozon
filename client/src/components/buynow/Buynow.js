import React from 'react';
import './buynow.css';
import Option from './Option';
import Subtotal from './Subtotal';
import Right from './Right';
import { Divider } from '@mui/material';


const Buynow = () => {
  return (
    <div className='buynow_section'>
        <div className='buynow_container'>
            <div className='left_buy'>
                <h1>Shopping Cart</h1>
                <p>Select all items</p>
                <span className='leftbuyprice'>Price</span>
                <Divider/>

                <div className='item_containert'>
                    <img src='https://www.reliancedigital.in/medias/Fire-Boltt-BSW007-Smart-Watch-492850760-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMzEwMXxpbWFnZS9qcGVnfGltYWdlcy9oMjMvaDY2Lzk4NTk3OTkwNTY0MTQuanBnfDEzNzY0MGE3MzkzYjUwMmE4OWNlZThmMjRmMDg3NWI3OWUzZjk3ODAzYzBhOTgzNTBlNjc1M2E2MDFlNjU0ZWI' alt=''></img>    
                    <div className='item_details'>
                        <h3>Molife Sense 500 Smartwatch (Black strap, Freesize)</h3>
                        <h3>Smart Watch</h3>
                        <h3 className='diffrentprice'>Rs 4049</h3>
                        <p className='unusuall'>Usually dispatched in 8 days</p>
                        <p>Eligible for FREE Shipping</p>
                        
                        <Option/>
                    </div>
                    <h3 className='item_price'> Rs 4049</h3>
                </div>
                <Divider/>
                <Subtotal/>
            </div>
            <Right/>
        </div>

    </div>
  )
}

export default Buynow