import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonial from './components/Testimonials/Testimonial'
import Contact from './components/Contact/Contact'
function App() {
  return (
    <div>
        <Navbar/>
        <Hero/>

        <div className="container">
        <Title subtitle='OUR PROGRAMS' title='WHAT WE OFFER'/>
        <Programs/>
        <About/>
        <Title subtitle='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subtitle='Testimonials' title='What Student says'/>
        <Testimonial/>
        <Title subtitle='Contact US' title='Get in Touch'/>
        <Contact/>
        </div>
    </div>
  )
}

export default App
