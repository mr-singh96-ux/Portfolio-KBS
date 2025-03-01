import React from 'react'
import 'D:/WeIntern Work/KBS-Portfolio/src/Components/About/About.css'
import theme_pattern from 'D:/WeIntern Work/KBS-Portfolio/src/assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.jpg'


const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>
                    About Me
                </h1>
                <img src={theme_pattern} alt='' />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para"><p>Hello! I'm a first-year Computer Science and Engineering student at Chitkara University, Rajpura, Patiala. I'm also a budding Full Stack Developer skilled in HTML, CSS, Bootstrap, JavaScript, Node.js, Express, React, Git, and C/C++.
                    </p>My journey in development is fueled by curiosity and a passion for creating efficient, user-friendly applications. I'm dedicated to delivering high-quality projects and constantly exploring new technologies to enhance my skills.
                    <p></p></div>
                    <div className="about-skills"><div className="about-skill"><p>HTML & CSS</p><hr style={{width: "70%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width: "56%"}}/></div>
                    <div className="about-skill"><p>Node.js</p><hr style={{width: "70%"}}/></div>
                    <div className="about-skill"><p>ExpressJs</p><hr style={{width: "65%"}}/></div>
                    <div className="about-skill"><p>React Js</p><hr style={{width: "50%"}}/></div></div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>Experience</h1>
                    <p>Freasher</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>Project Completed</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>2+</h1>
                    <p>Internships Done</p>
                </div>
            </div>
        </div>
    )
}

export default About