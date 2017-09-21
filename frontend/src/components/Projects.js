import React, { Component } from 'react';
import classnames from 'classnames';
import r4o from '../r4o.jpg'

class Projects extends Component {
    render(){
        const sectionClass = classnames({'main-section':'true','projects-section':'true'});
        return(
            <section className={sectionClass}>
                <h5 style={{fontSize:24, paddingBottom:10}}>Activities and Projects</h5>
                <div className="container">
                    <p style={{fontSize:13, paddingBottom:30}}>I love building stuff from sratch. Personal Projects give me the freedom to explore
                    and be proficient in different technologies and tools while allowing me to decide on the design and
                    architecture. </p>
                    <div className="project">
                        <div className="row">
                            <div className="col-sm-6">
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
                            <div className="col-sm-6">
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
                </div>
            </section>
        );
    }
}

export default Projects;