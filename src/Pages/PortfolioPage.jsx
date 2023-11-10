import './PortfolioPage.css';

import React, { Component, useState, useEffect } from 'react';
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import TextBlock from '../Components/TextBlock.jsx';
import SlideShow from '../Components/SlideShow.jsx';
import ProjectCard from '../Components/ProjectCard.jsx';

function PortfolioPage(){
    const [projects, setProjects] = useState([{image: "Square_Cole_Belfry.png", name: "test", description: "this is filler text"}]);
    const [projectIndex, setProjectIndex] = useState(0);

    async function loadJSON(){
        const response = await fetch("projects.json");
        let json = await response.json();
        return json;
    }

    async function setJSON(){
        let jsonData = await loadJSON();
        console.log(jsonData);
        //var projectsList = JSON.parse(jsonData);
        setProjects(jsonData.projects);
    }

    const onClickForward = () => {
        if(projects.length-1 > projectIndex) {
            setProjectIndex(projectIndex + 1);
        }else {
            setProjectIndex(0);
        }
    }

    const onClickBack = () => {
        if(projectIndex !== 0){
            setProjectIndex(projectIndex - 1);
        } else {
            setProjectIndex(projects.length - 1);
        }
    }

    const displayProjects = () => {
        if(projects.length < 2){
            return <div><img src={projects[projectIndex].image}/></div>
        }
        if(projectIndex === 0) {
            return <div style={{display: "flex"}}><ProjectCard src={projects[projects.length - 1].image} name={projects[projects.length - 1].name} description={projects[projects.length - 1].description}/><ProjectCard type="selected" src={projects[projectIndex].image} name={projects[projectIndex].name} description={projects[projectIndex].description}/><ProjectCard src={projects[projectIndex + 1].image} name={projects[projectIndex + 1].name} description={projects[projectIndex + 1].description}/></div>
        }
        if(projectIndex === projects.length - 1) {
            return <div style={{display: "flex"}}><ProjectCard src={projects[projectIndex - 1].image} name={projects[projectIndex - 1].name} description={projects[projectIndex - 1].description}/><ProjectCard type="selected" src={projects[projectIndex].image} name={projects[projectIndex].name} description={projects[projectIndex].description}/><ProjectCard src={projects[0].image} name={projects[0].name} description={projects[0].description}/></div>
        }
        return <div style={{display: "flex"}}><ProjectCard src={projects[projectIndex - 1].image} name={projects[projectIndex - 1].name} description={projects[projectIndex - 1].description}/><ProjectCard type="selected" src={projects[projectIndex].image} name={projects[projectIndex].name} description={projects[projectIndex].description}/><ProjectCard src={projects[projectIndex + 1].image} name={projects[projectIndex + 1].name} description={projects[projectIndex + 1].description}/></div>
    }

    useEffect(() => {
        // decode json file and populate projects list
        setJSON();
    }, []);
    console.log(projects);
    return (
        <>
            <div className="portfolio-banner">
                <Header/>
                <SlideShow/>
                <div className="slideshow-container">
                    <div className="prev-btn" onClick={() => onClickBack()}>
                        <img src='back_icon.png'/>
                    </div>
                    {displayProjects()}
                    {/* <img src={projects[projectIndex].image}/> */}
                    <div className="next-btn" onClick={() => onClickForward()}>
                        <img src='continue_icon.png'/>
                    </div>
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