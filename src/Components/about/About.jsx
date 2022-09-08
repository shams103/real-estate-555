import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img1 from "../images_sp/about.jpg"
import img2 from "../images_sp/immio.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img1} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />
           <div className="text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod reen quetto da veryyrne moltona fa vui tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur mehatna de chelorrevie adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            </div> 
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src={img2} alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
