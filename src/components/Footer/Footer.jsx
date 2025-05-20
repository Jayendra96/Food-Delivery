import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatem excepturi alias reiciendis velit magni cumque repellendus sunt dicta autem ipsum eos libero dolorem, distinctio id provident ea tempora dolorum assumenda iusto sed debitis blanditiis fugiat. Inventore accusantium recusandae laboriosam rerum quod corrupti doloribus modi. Quaerat ipsam dolore ea at!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+91-8840320539</li>
                    <li>jayendraprakash733@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
      <p className="footer-copyright">Copyright 2025 © Tomato.com - AllRight Reserved</p>
    </div>
  )
}

export default Footer
