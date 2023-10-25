import './HomePage.css';

import React, { Component } from 'react';
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import TextBlock from '../Components/TextBlock.jsx';
import SkillBar from '../Components/SkillBar.jsx';

function HomePage(){
    return (
        <>
            <div className="banner">
                <Header/>
                <div className="header-content">
                    <div className="header-text">
                        <div style={{fontSize: "24px", color: "white"}}>Hello,</div>
                        <div style={{fontSize: "65px", color: "white"}}>I'm Cole Belfry</div>
                        <div style={{fontSize: "24px", color: "white"}}>Junior Full Stack Engineer</div>
                        <div id='header-buttons'>
                            <a>Resume</a>
                            <a>Contact</a>
                        </div>
                    </div>
                    <div className='image-container'>
                        {/* <img src='profilephotoeditshadow.png' style={{opacity:"0.5", right: "180px", top:"60px"}} className='header-image'/> */}
                        <img src='Square_Cole_Belfry.png' className='header-image'/>
                    </div>
                </div>
            </div>
            <div className="body-container">
                <div className="intro-container">
                    <div className="intro-left">
                        <img src='profilephotoedit.png' style={{width: "180px", height: "180px", borderRadius: "50%", backgroundColor: "blue", marginLeft: "auto", marginRight: "auto"}}/>
                        {/* <div style="width:120px; height: 120px; border-radius:100px; background-color:blue; margin:20 20 20 100"></div> */}
                        <div className="info-blocks">
                            <div className="info-block">
                                <h4>2023</h4>
                                <p>College Graduate</p>
                            </div>
                            <div className="info-block">
                                <h4>+1</h4>
                                <p>Over a year of real world experience</p>
                            </div>
                            <div className="info-block">
                                <h4>+5</h4>
                                <p>Competent in over 5 languages</p>
                            </div>
                        </div>
                    </div>
                    <div className="intro-right">
                        <TextBlock title="Introduction" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum."/>
                        <div className='contact-line'>
                            <h4>Phone: </h4>
                            <p>+1 (801)-940-4718</p>
                        </div>
                        <div className='contact-line'>
                            <h4>Email: </h4>
                            <p>belfrycole@gmail.com</p>
                        </div>
                        <div className="contact-links">
                            <a href='https://www.linkedin.com/in/cole-belfry-2812221b9/'>
                                <img src='Linkedin-logo.png' style={{width: "50px", height: "50px", marginLeft:"20px", marginRight:"20px"}}/>
                            </a>
                            <a href='https://github.com/ColeBelfry'>
                                <img src='github.png' style={{width: "50px", height: "50px", marginLeft:"20px", marginRight:"20px"}}/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='skills-container'>
                    <TextBlock title="Skills" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum."/>
                    <div className="stats-container">
                        <SkillBar title="HTML" percent="10%" level="advanced"/>
                        <SkillBar title="HTML" percent="10%" level="advanced"/>
                        <SkillBar title="HTML" percent="10%" level="advanced"/>
                        <SkillBar title="HTML" percent="10%" level="advanced"/>
                        <SkillBar title="HTML" percent="10%" level="advanced"/>
                        <SkillBar title="HTML" percent="10%" level="advanced"/>
                    </div>
                </div>
                <div className='services-container'>
                    <TextBlock title="Services" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum."/>
                    <div className="nav-container">
                        <a className="nav-card">
                            <div className="quiz-title">Aplication and Web Development</div>
                            <p>Description</p>
                        </a>
                        <a className="nav-card">
                            <div className="quiz-title">Databases</div>
                            <p>Description</p>
                        </a>
                        <a className="nav-card">
                            <div className="quiz-title">Microservices</div>
                            <p>Description</p>
                        </a>
                        <a className="nav-card">
                            <div className="quiz-title">Virtualization</div>
                            <p>Description</p>
                        </a>
                    </div>
                </div>
                
                
            </div>
            <Footer/>
        </>
    );
}
export default HomePage;