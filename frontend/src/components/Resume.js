import React, { Component } from 'react';
import classnames from 'classnames';
import uiuc from '../uiuc.png'
import cyberinc from '../cyberinc.png'
import Reveal from 'react-reveal';
import SkillsList from "./SkillsList";

class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uiucSkills: ['lc3 Assembly','C','Svn','Signals']
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
                    <Reveal effect="animated fadeInLeft">
                        <div className="row" style={{marginTop:30}}>
                            <div className="col-1">
                                <img style={{paddingTop:4}}src={uiuc} height="40" width="31"/>
                            </div>
                            <div className="col-8">
                                <div className="left-align-wrapper">
                                    <p className="title">University of Illinois Urbana Champaign</p>
                                    <p className="sub">Computer Engineering, B.S. &#8212; Deans List, James Scholar</p>
                                    <div className="content" style={{fontSize:13,marginTop:20}}>
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

                            <div className="col-3">
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
                    <Reveal effect="animated fadeInRight">
                        <div className="row" style={{marginTop:30}}>
                            <div className="col-md-1">
                                <img style={{paddingTop:4}}src={cyberinc} height="30" width="70"/>
                            </div>
                            <div className="col-8">
                                <div className="left-align-wrapper">
                                    <p className="title">CyberInc</p>
                                    <p className="sub">Junior Software Test Engineer</p>
                                    <div className="content" style={{fontSize:13,marginTop:20}}>
                                        <p className="sub">Some Relevant Classes</p>
                                    </div>
                                </div>
                            </div>

                            <div className={rightCol}>
                                <p className="right" style={{marginBottom:0}}>June 2015-August 2017</p>
                                <p id="work-location" className={subRightClass}>Los Gatos, CA</p>
                            </div>


                        </div>
                    </Reveal>
                </div>
            </section>
        );
    }
}
export default Resume;