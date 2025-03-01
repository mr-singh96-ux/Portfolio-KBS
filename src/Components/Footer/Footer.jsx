import React from 'react'
import '../../Components/Footer/Footer.css'
import footer_logo from 'D:/WeIntern Work/KBS-Portfolio/Logo (1).png'

const Footer = () => {
  
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="" />
          <p>I thrive on learning and growing in the ever-evolving field of technology.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-subscribe"><a href='https://github.com/mr-singh96-ux'>Github</a></div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className='footer-bottom-left'>© 2025 Kiratechno. All rights reserved.</p>
        <div className="footer-bottom-right"><p>Term of Services</p>
        <p>Privacy Policy</p>
        <p><a href='https://www.linkedin.com/in/kiratbir-singh-0a586425a/'>LinkedIn</a></p>
        </div>
      </div>
    </div>
  )
}

export default Footer