import React from 'react';
import { RiInstagramFill, RiLinkedinBoxFill } from "react-icons/ri";
import './index.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className='footer-top'>
        <div className="footer-newsletter">
          <h2>BE THE FIRST TO KNOW</h2>
          <p>Sign up for updates from mettā muse.</p>
          <div className="footer-newsletter-subscription">
            <input className='email-input' type="text" placeholder="Enter your email address" />
            <button className='subscribe-button'>SUBSCRIBE</button>
          </div>
        </div>
        <div className='footer-side'>
          <div className="footer-contact">
            <h2>CONTACT US</h2>
            <p>Phone: +44 221 133 5360</p>
            <p>Email: customercare@mettamuse.com</p>
          </div>
          <hr className='separator'/>
          <div className="footer-currency">
            <h2>CURRENCY</h2>
            <p><span className="footer-currency-flag"></span> USD</p>
            <p style={{ fontSize: "12px" }}>
              Transactions will be completed in Euros and a currency reference is available on hover.
            </p>
          </div>
        </div> 
      </div>
      <hr/>
      <div className='footer-bottom'>
        <div className="footer-links-container">
          <div className="footer-links-column">
            <h2>mettā muse</h2>
            <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>
          <div className="footer-links-column">
            <h2>Quick Links</h2>
            <ul>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
        <div className='footer-side'>
          <div className="footer-social-media">
            <h2>FOLLOW US</h2>
            <div className="footer-social-icons">
              <RiInstagramFill size={16} color="white" style={{ border: '1.5px solid #fff', borderRadius: '50%', padding: '5px' }}/>
              <RiLinkedinBoxFill size={16} color="white" style={{ border: '1.5px solid #fff', borderRadius: '50%', padding: '5px' }} />
            </div>
          </div>
          <div className="footer-payment-methods">
            <h2>mettā muse ACCEPTS</h2>
            <div className="footer-payment-icons">
              <img className="payment-method-icon" src="https://res.cloudinary.com/dfxtnqgcz/image/upload/v1733928880/Group_136188_uos6wh.png" alt="Google Pay" />
              <img className="payment-method-icon"  src="https://res.cloudinary.com/dfxtnqgcz/image/upload/v1733928880/Group_136190_ojnad3.png" alt="MasterCard" />
              <img className="payment-method-icon"  src="https://res.cloudinary.com/dfxtnqgcz/image/upload/v1733928880/Group_136192_zcwye5.png" alt="PayPal" />
              <img className="payment-method-icon"  src="https://res.cloudinary.com/dfxtnqgcz/image/upload/v1733928880/Group_136193_o1s41r.png" alt="American Express" />
              <img className="payment-method-icon"  src="https://res.cloudinary.com/dfxtnqgcz/image/upload/v1733928880/Group_136194_jwltne.png" alt="Apple Pay" />
              <img className="payment-method-icon"  src="https://res.cloudinary.com/dfxtnqgcz/image/upload/v1733928880/Group_136195_tjltmf.png" alt="OPay" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p style={{textAlign: "center"}}>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
