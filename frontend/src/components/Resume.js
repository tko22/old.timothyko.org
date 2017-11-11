import React, { Component } from 'react';
import classnames from 'classnames';
import uiuc from '../uiuc.png'
import cyberinc from '../cyberinc.png'
import Reveal from 'react-reveal';
import SkillsList from "./SkillsList";
import abbvie from "../abbvie-logo.jpg"

class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uiucSkills: ['lc3 Assembly','C','SVN','Signals'],
            cyberincSkills: ['Python','Javascript/JQuery','HTML/CSS','Linux','Agile/SCRUM','Git','Trac/Jira','QA'],
            abbvieSkills: ['Javascript','Salesforce Health Cloud']
        }
    }
    render() {
        const sectionClass = classnames({'main-section':'true','work-experience-section':'true'});
        const subRightClass = classnames({'sub':'true','right':'true'});
        const rightCol = classnames({'col-sm-3':'true','col-4':'true'});
        return(
            <section className={sectionClass}>
                <h5 style={{fontSize:24, paddingBottom:10}}>Resume</h5>
                <div className="container">
                    <p className="small-header">EDUCATION</p>
                    <hr/>
                    <Reveal effect="animated fadeInUp" number="0.7">
                        <div className="row" style={{marginTop:30}}>
                            <div className="col-md-1">
                                <img style={{paddingTop:4}}src={uiuc} height="40" width="31"/>
                            </div>
                            <div className="col-md-8">
                                <div className="left-align-wrapper">
                                    <p className="title">University of Illinois Urbana Champaign</p>
                                    <p className="sub">Computer Engineering, B.S. &#8212; Deans List, James Scholar &#8212; 3.75 GPA</p>
                                    <div className="content" style={{fontSize:15,marginTop:20}}>
                                        <p className="sub">Some Relevant Classes</p>
                                        <ul style={{textDecoration:'none'}}>
                                            <li>ECE 220: Computer Systems and Programming(C and LC3 Assembly)</li>
                                            <li>ECE 210: Analog Signal Processing</li>
                                            <li>MATH 241: MultiVariable Calculus</li>
                                            <li>MATH 286: Differential Equations Plus Linear Systems </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <p className="right" style={{marginBottom:0}}>2016-2020</p>
                                <p className={subRightClass}>3.75 GPA</p>
                            </div>
                        </div>
                        <div className="row">
                            <SkillsList skills={this.state.uiucSkills}/>
                        </div>
                    </Reveal>
                </div>
                <div className="container" style={{paddingTop:30}}>
                    <p className="small-header">WORK EXPERIENCE</p>
                    <hr/>
                    <Reveal effect="animated fadeInRight" number="0.7">
                        <div className="row" style={{marginTop:30}}>
                            <div className="col-md-1">
                                <img style={{paddingTop:4}}src={abbvie} height="52" width="60" style={{paddingRight:5}}/>
                            </div>
                            <div className="col-md-8">
                                <div className="left-align-wrapper">
                                    <p className="title">Abbvie</p>
                                    <p className="sub">Software Engineer Intern</p>
                                    <div className="content" style={{fontSize:15,marginTop:20}}>
                                        <ul style={{textDecoration:'none'}}>
                                            <li>Salesforce Integration</li>
                                        </ul>
                                        <p className="sub"> </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <p className="right" style={{marginBottom:0}}>November 2017-(end May 2018)</p>
                                <p id="work-location" className={subRightClass}>Champaign, IL</p>
                            </div>


                        </div>
                        <div className="row">
                            <SkillsList skills={this.state.abbvieSkills}/>
                        </div>
                    </Reveal>
                    <Reveal effect="animated fadeInRight" number="0.7">
                        <div className="row" style={{marginTop:30}}>
                            <div className="col-md-1">
                                <img style={{paddingTop:4}}src={cyberinc} height="30" width="70"style={{paddingRight:5}}/>
                            </div>
                            <div style={{marginLeft:5}} className="col-md-8">
                                <div className="left-align-wrapper">
                                    <p className="title">CyberInc</p>
                                    <p className="sub">Junior Software Test Engineer</p>
                                    <div className="content" style={{fontSize:15,marginTop:20}}>
                                        <ul style={{textDecoration:'none'}}>
                                            <li>Added new layer of testing by developing a Python stress testing tool for client interactions on the main product. Included a web dashboard with customizable user group behaviors.</li>
                                            <li>Fixed Critical GUI, JavaScript, and sound related bugs in Python customers complained about. </li>
                                            <li>Provided executives with reports for multiple product releases and performed comprehensive testing on Linux systems. Evaluated hundreds of test cases with TestRail and Trac/Jira bug tracking system in a SCRUM agile development team.</li>
                                        </ul>
                                        <p className="sub"> </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <p className="right" style={{marginBottom:0}}>June 2015-August 2017</p>
                                <p id="work-location" className={subRightClass}>Los Gatos, CA</p>
                            </div>


                        </div>
                        <div className="row">
                            <SkillsList skills={this.state.cyberincSkills}/>
                        </div>
                    </Reveal>
                </div>
            </section>
        );
    }
}
export default Resume;