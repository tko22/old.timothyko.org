import React, { Component } from 'react';
import classnames from 'classnames';
import r4o from '../r4o.jpg'
import cb from '../iphone-celerybox.jpg'
import mafia from '../mafia.jpg'
class Projects extends Component {
    render(){
        const sectionClass = classnames({'main-section':'true','projects-section':'true'});
        const projectImgClass = classnames({'col-md-6':'true','col-lg-6':'true'});
        return(
            <section className={sectionClass}>
                <h5 style={{fontSize:24, paddingBottom:10}}>Activities and Projects</h5>
                <div className="container">
                    <p style={{fontSize:13, paddingBottom:30, maxWidth:500, margin:'0 auto'}}>I love building stuff from sratch. Personal Projects give me the freedom to explore
                    and be proficient in different technologies and tools while allowing me to make architectural and design decisions. </p>
                    <hr style={{width:'50%'}}/>
                    <div className="project">
                        <div className="row">
                            <div className={projectImgClass}>
                                <div className="project-img-wrapper">
                                    <img className="max-width" src={r4o} />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="project-detail">
                                    <p>lasdjflkjasdlf;jaskdhfalsdjkflkadf</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        <div className="row">
                            <div className={projectImgClass}>
                                <div className="project-img-wrapper">
                                    <img className="max-width" src={cb} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="project-detail">
                                    <p>lasdjflkjasdlf;jaskdhfalsdjkflkadf</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="project">
                        <div className="row">
                            <div className={projectImgClass}>
                                <img className="max-width" src={mafia}/>
                            </div>
                            <div className="col-md-6">
                                <p>Mafia</p>
                            </div>

                        </div>
                    </div>
                    <hr width={300}/>
                    <div style={{paddingTop:40}} id="other-projects">
                        <div className="row">
                            <div className="col-sm-1"> </div>
                            <div className="col-10">
                                <ul style={{textAlign:'left'}}>
                                    <li className="other-projects-list" style={{fontSize: 14}}><span className="other-span">EDIDreader Android Application: </span> Contracted to </li>
                                    <li className="other-projects-list"><span className="other-span">Teaching Web Development Workshops</span></li>
                                    <li className="other-projects-list"><span className="other-span">Check out my Tech Blog <a href="https://medium.com/@timmykko">here!</a></span></li>
                                </ul>
                            </div>

                        </div>
                    </div>



                </div>
            </section>
        );
    }
}

export default Projects;