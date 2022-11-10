import { Divider } from "@mui/material";
import React from "react";
import "./cart.css";
const Cart = () => {
  return (

    // <div>
    //   heyy
    //   <Divider />
    // </div>
    <div className="cart_section">
      <div className="cart_container">
        <div className="left_cart">
          <img src="https://techcrunch.com/wp-content/uploads/2022/10/wi-fi-kettle-Large.jpeg" alt="cart_img" />             
          <div className="cart_btn">
            <button className="cart_btn1">Add to Cart </button>
            <button className="cart_btn2">Buy Now </button>
          </div>
        </div>
        <div className="right_cart">
          <h3>Home Appliances</h3>
          <h4>Pigeon Favourite Electric Kettle (1.5L, Silver, Black)</h4>

          <Divider />
          <p className="mrp">M.R.P. : Rs 1195</p>
          <p> Deal of the Day: <span style={{color:"#b12704"}}> Rs625.00</span></p>
          <p>You save: <span style={{color:"#b12704"}}> Rs 570 (47%)</span></p>

          <div className="discount_box">
            <h5>Discount  : <span style={{color:"#111"}}> Extra 10% off</span> </h5>
            <h4>Free Delivery : <span style={{color:"#111", fontWeight: 600}}> Oct 8 - 21</span> Details</h4>
            <p>Fastest Delivery : <span style={{color:"#111", fontWeight: 600}}>Tomorrow 11AM</span> Details</p>
          </div>
          <p className="description">About the Iteam : <span style={{ color: "#565959", fontSize: "14px", fontWeight: "500", letterSpacing: "0.4px" }}>This electric kettle from Pegion will soon become a travelers best friend, a hostile saviour and an answer to all the mif=dnight cravings. With this handy appliance you can boil water and use it to make instant noodles. packet soup, coffee and green tea.</span></p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
