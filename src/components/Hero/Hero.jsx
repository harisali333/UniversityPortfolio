import React from 'react'
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>
            To Ensure Better Education for Better World 
        </h1>
        <p>

        Included are open-source reading materials, learning objectives, suggested readings and resources, and activities organized into content modules for undergraduate Foundations of Education courses.
        </p>
        <button className="btn2">
            Explore More <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  )
}

export default Hero
