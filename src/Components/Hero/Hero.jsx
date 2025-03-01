import React, { useState } from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import resume from 'D:/WeIntern Work/KBS-Portfolio/resume_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  const [isResumeVisible, setResumeVisible] = useState(false);

  const toggleResume = () => {
    setResumeVisible(!isResumeVisible);
  }

  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="Profile" />
      <h1>
        <span>I'm Kiratbir Singh,</span> Full Stack Developer based in India.</h1>
      <p>I'm a first-year Computer Science and Engineering student at Chitkara University, Rajpura, Patiala.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With me</AnchorLink></div>
        <div className="hero-resume" onClick={toggleResume}>{isResumeVisible ? 'X' : 'My resume'}
        {isResumeVisible && (
        <img id="resumeImage" src={resume} alt="Resume" />
      )}
      </div></div>
      
    </div>
  )
}

export default Hero
