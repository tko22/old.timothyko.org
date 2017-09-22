import React, { Component } from 'react';
import classnames from 'classnames';
import Reveal from 'react-reveal';
import SkillsList from "./SkillsList";
import SkillType from "./SkillType";

class DevSkills extends Component {
    constructor(props) {
        super(props);
        this.skills = {
            backend: ['Django','Node.js','Express','RESTful APIs','MySQL','PostgreSQL','MongoDB', 'Cloud Platforms',
                'Heroku','Firebase'],
            frontend: ['React.js','Redux', 'JQuery','HTML5','CSS','Bootstrap','ES6','Wordpress'],
            languages: ['Python', 'Javascript', 'Java', 'Swift3','C'],
            tools: ['Linux/Unix','Docker','Cloud Services','Heroku','NGINX','Apache','Git','Svn']
        }
    }
    render() {
        const sectionClass = classnames({'main-section':'true','dev-skills-section':'true'});
        const skillTypeWrapper = classnames({'col-lg-4':'true',"skill-wrapper":'true'})
        return(
            <section style={{backgroundColor:'#24315c',color:'#FFFFFF'}}className={sectionClass}>
             <div className="container">
                 <SkillType type="Backend Dev" skills={this.skills.backend} detail="hi"/>
                 <SkillType type="Frontend Dev" skills={this.skills.frontend} detail="hi"/>
                 <SkillType type="Programming Languages" skills={this.skills.languages} detail="hi3"/>
                 <SkillType type="Tools" skills={this.skills.tools} detail="hasdf"/>

             </div>
            </section>
        );
    }
}
export default DevSkills