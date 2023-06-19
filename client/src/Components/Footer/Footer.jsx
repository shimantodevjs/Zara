import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
           <h3>catagories</h3>
           <span>Women</span>
           <span>Men</span>
           <span>Children</span>
           <span>Shoes</span>
           <span>Accessories</span>
           <span>New Arrivals</span>
        </div>
        <div className="item">
            <h3>Links</h3>
            <span>FAQ</span>
            <span>Pages</span>
            <span>Stores</span>
            <span>Compare</span>
            <span>Cookies</span>
        </div>
        <div className="item">
            <h3>About</h3>
            <span>Zara is one of the biggest international companies for fashion, and it belongs to Inditex, one of the world's largest distribution groups. The customer is at the heart of our unique business model, which includes design, art, production, distribution, and sales, through our extensive retail network.</span>
        </div>
        <div className="item">
             <h3>Contacts</h3>
             <span>
             Address: 61 Oxford St, London W1D 2EH, United Kingdom
             <br /> Phone: +44 800 368 4990</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">ZARA</span>
          <span className="copyright">© Copyright 2023.  all right reserved.</span>
        </div>
        <div className="right">
            <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
