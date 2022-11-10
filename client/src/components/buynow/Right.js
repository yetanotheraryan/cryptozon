import React from 'react'
// import "./buynow.css"


const Right = () => {
  return (
    <div className='right_buy'> 
        
        {/* <img src='' alt=''></img>                   Need SRC */}

        <div className='cost_right'>
            <p>Your Order is eligible for FREE Delivery</p><br/>
            <span style={{color: "#565959"}}>Select this option at checkout. Details</span>

            <h3>Subtotal (1 items): <span style={{fontWeight:700}}> Rs 4049.00 </span></h3>
            <button className='rightbuy_btn'>Process to Buy</button>
            <div className='emi'>
                EMI  available
            </div>
        </div>

    </div>
  )
}

export default Right