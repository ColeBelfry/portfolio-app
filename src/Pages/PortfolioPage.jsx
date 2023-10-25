import './PortfolioPage.css';

import React, { Component, useState, useEffect } from 'react';
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import TextBlock from '../Components/TextBlock.jsx';

function PortfolioPage(){
    const [projects, setProjects] = useState([{image: "Square_Cole_Belfry.png", name: "test", description: "this is filler text"}]);
    const [projectIndex, setProjectIndex] = useState(0);

    const onClickForward = () => {
        if(projects.length-1 > projectIndex) {
            setProjectIndex(projectIndex + 1);
        }
    }

    const onClickBack = () => {
        if(projectIndex !== 0){
            setProjectIndex(projectIndex - 1);
        }
    }

    useEffect(() => {
        // decode json file and populate projects list
    });
    return (
        <>
            <div className="portfolio-banner" style={{backgroundImage: projects[projectIndex].image}}>
                <Header/>
                <div className="slideshow-container">
                    <div className="prev-btn">p</div>
                    <img src={projects[projectIndex].image}/>
                    <div className="next-btn">n</div>
                </div>
            </div>
            <div className="body-container">
                <div className="intro-container">
                    <div className="intro-left">
                        <img src={projects[projectIndex].image} style={{width: "280px", height: "280px", backgroundColor: "blue", marginLeft: "auto", marginRight: "auto"}}/>
                        {/* <div style="width:120px; height: 120px; border-radius:100px; background-color:blue; margin:20 20 20 100"></div> */}
                    </div>
                    <div className="intro-right">
                        <TextBlock title={projects[projectIndex].name} body={projects[projectIndex].description}/>
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
            </div>
            <Footer/>
        </>
    );
}
export default PortfolioPage;