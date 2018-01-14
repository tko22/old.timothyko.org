import React, { Component } from 'react';
import classnames from 'classnames';
import Reveal from 'react-reveal';


class AboutMe extends Component {
    render() {
        const sectionClass = classnames({'about-me-section':'true','main-section':'true'});
        return(
            <section className={sectionClass}>
                <Reveal effect="animated fadeInLeft" fraction="0.99">
                    <div className="container">
                        <h1>I'm Tim.</h1>
                        <h5>An Ambitious Developer passionate about the web and learning just about everything.
                             </h5>
                        <hr className="about-me-top-hr"/>
                        <div className="row">
                            <div className="col-md-8">
                                <p>I enjoy the process of envisioning solutions and designing architectures of software products
                                    and diving deep into the code and functionalities. I love learning cutting-edge technologies(Blockchain!!) and
                                    I am always looking to work with brilliant people to develop innovate and simple solutions
                                    while pushing me to the next level. Check out my <a href="https://medium.com/@timmykko">blog</a>, where I write articles and guides
                                    on topics ranging from Django to deployment processes to Docker to Daaps on Ethereum!
                                    <hr width="40" style={{marginLeft:0}}/>
                                    And oh yeah. I'm a sophomore studying Computer Engineering at the University of Illinois Urbana-Champaign.
                                    When not coding, I love going outdoors to enjoy nature, whether it's
                                    camping or going to the beach or as simple as walking around the block.
                                    I also love playing the piano and guitar in my spare time and have made some music for fun!.
                                    </p>
                            </div>
                            <div className="col-md-4">

                            </div>

                        </div>
                        <div className="row">
                            <a href="/files/resume.pdf" className="personal-links">Resume</a> 
                            <a href="https://github.com/tko22" className="personal-links">Github</a> 
                            <a href="https://medium.com/@timmykko" className="personal-links">Blog</a> 
                            <a href="https://www.linkedin.com/in/timothy-ko/" className="personal-links">LinkedIn</a> 
                            <a href="mailto:tk2@illinois.edu" className="personal-links">Email</a>
                            <a href="/projects" className="personal-links">My Projects</a>
                            <a href="https://twitter.com/timmykko6" className="personal-links">Twitter</a>
                        </div>
                    </div>
                </Reveal>
            </section>
        );
    }
}
export default AboutMe;