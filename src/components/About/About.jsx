import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon  from '../../assets/play-icon.png'
const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} className='about-img' />
        <img src={play_icon} className='paly-icon' />
      </div>
      <div className="about-right">
      <h3>
        ABOUT UNIVERSITY
      </h3>
      <h2>
        Nuturing Tomarrow Leaders Today
      </h2>
      <p>When a new deployment occurs, the hosting service may delete the assets from previous deployments. As a result, a user who visited your site before the new deployment might encounter an import error. This error happens because the assets running on that user's device are outdated and it tries to import the corresponding old chunk, which is deleted. This event is useful for addressing this situation.</p>
      <p>Note that the filename passed is a decoded URL, and if the function returns a URL string, it should also be decoded. Vite will handle the encoding automatically when rendering the URLs. If an object with runtime is returned, encoding should be handled yourself where needed as the runtime code will be rendered as is.</p>
      </div>
    </div>
  )
}

export default About
