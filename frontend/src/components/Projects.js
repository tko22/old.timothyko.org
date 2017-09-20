import React, { Component } from 'react';
import classnames from 'classnames';


class Projects extends Component {
    render(){
        const sectionClass = classnames({'main-section':'true','projects-section':'true'});
        return(
            <section className={sectionClass}>
                <h5 style={{fontSize:24, paddingBottom:10}}>Activities and Projects</h5>
                <p>I am a big fan of personal projects&#8212;They give me the freedom to explore
                and be proficient in different technologies and tools while allowing me to decide on the design and
                architecture. </p>
            </section>
        );
    }
}

export default Projects;