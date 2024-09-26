import React from 'react'
import './Features.css'
import { RiRocketLine } from "react-icons/ri";
import { TbTruckReturn } from "react-icons/tb";
import { RiCustomerServiceFill } from "react-icons/ri";



const Features = () => {
  return (
    <div className="features-container">
    <div className="feature-card cardone">
      <div className="icon-box green-bg">
      <RiRocketLine  className='rocket-icon'/>
      </div>
      <h3>Free Shipping</h3>
      <p>Lorem ipsum dolor sit amet consectetur. Nisi imperdiet at</p>
    </div>

    <div className="feature-card cardtwo">
      <div className="icon-box yellow-bg">
        <TbTruckReturn className='truck-icon'/>
      </div>
      <h3>14 Days Easy Return</h3>
      <p>Lorem ipsum dolor sit amet consectetur. Nisi imperdiet at</p>
    </div>

    <div className="feature-card cardthree">
      <div className="icon-box blue-bg">
        <RiCustomerServiceFill className='customer-icon'/>
      </div>
      <h3>24/7 Customer Support</h3>
      <p>Lorem ipsum dolor sit amet consectetur. Nisi imperdiet at</p>
    </div>
  </div>
  )
}

export default Features