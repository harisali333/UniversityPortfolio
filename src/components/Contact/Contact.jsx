import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from "../../assets/white-arrow.png"



const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send message <img src={msg_icon} alt="" />
            </h3>
            <p>Note that the filename passed is a decoded URL, and if the function returns a URL string, it should also be decoded. Vite will handle the encoding automatically when rendering the URLs. If an object with runtime is returned, encoding should be handled yourself where needed as the runtime code will be rendered as is.</p>
            <ul>
                <li><img src={mail_icon} alt="" />harisc336@gmail.com </li>
                <li><img src={phone_icon} alt="" />0314-4012-333</li>
                <li><img src={location_icon} alt="" />Senior Member Northwest England <br /> near Blackburn, Lancashire
British English</li>
            </ul>
        </div>
        <div className="contact-col">
          <form>
            <label>Your Name </label>
            <input type="text" name ='name' placeholder='Enter Your name ' required />
            <label>Phone Number </label>
            <input type="tel" name='phone' placeholder='Enter your mobile number ' required/>
            <label>Write your Meassage </label>
            <textarea name="meassage" rows="6" placeholder='enter Your Meassage' required></textarea>
            <button type='submint'className='btn2 dark-btn'>Submint Now <img src={white_arrow} alt="" /></button>

          </form>
          <span></span>
        </div>
      
    </div>
  )
}

export default Contact
