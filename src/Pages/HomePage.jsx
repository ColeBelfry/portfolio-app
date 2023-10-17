import './HomePage.css';

function HomePage(){
    return (
        <>
            {/* <link rel="stylesheet" href="./HomePage.css" type="text/css"/> */}
            <div className="header">
                <div className="banner">
                    <div className='navbar'>
                        <div className="navLinks">
                            <a>test 1</a>
                            <a>test 2</a>
                            <a>test 3</a>
                        </div>
                    </div>
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
                <div className="header-image">
                    <img/>
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
                        <h2>Introduction</h2>
                        <hr className="style-line"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.</p>
                        <div className="contact-links">
                            <a>
                                <img src='Linkedin-logo.png' style={{width: "50px", height: "50px", marginLeft:"20px", marginRight:"20px"}}/>
                            </a>
                            <a>
                                <img src='github.png' style={{width: "50px", height: "50px", marginLeft:"20px", marginRight:"20px"}}/>
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Introduction</h2>
                    <hr className="style-line"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className="nav-container">
                        <a className="nav-card">
                            <div>
                                <p>dd</p>
                                <img/>
                            </div>
                            <div className="nav-body">
                                <div className="quiz-title">Option</div>
                                <p>Description</p>
                                <button>More</button>
                            </div>
                        </a>
                        <a className="nav-card">
                            <div className="nav-body">
                                <div className="quiz-title">Quiz Name</div>
                                <p>Description</p>
                                <button>More</button>
                            </div>
                        </a>
                        <a className="nav-card">
                            <div className="nav-body">
                                <div className="quiz-title">Quiz Name</div>
                                <p>Description</p>
                                <button>More</button>
                            </div>
                        </a>
                        <a className="nav-card">
                            <div className="nav-body">
                                <div className="quiz-title">Quiz Name</div>
                                <p>Description</p>
                                <button>More</button>
                            </div>
                        </a>
                    </div>
                </div>
                
            </div>
        </>
    );
}
export default HomePage;