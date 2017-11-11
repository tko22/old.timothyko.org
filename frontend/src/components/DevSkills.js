import React, { Component } from 'react';
import classnames from 'classnames';
import Reveal from 'react-reveal';
import SkillsList from "./SkillsList";
import SkillType from "./SkillType";

class DevSkills extends Component {
    constructor(props) {
        super(props);
        this.skills = {
            backend: ['Django','Node.js','Express','RESTful APIs','JSON','MySQL','PostgreSQL','MongoDB','Firebase','Socket.io'],
            frontend: ['React.js','Redux', 'JQuery','HTML5','CSS','Bootstrap','ES6','Wordpress'],
            languages: ['Python', 'Javascript', 'C/C++', 'Java','Swift 3'],
            tools: ['Linux/Unix','Docker','Cloud Services','Heroku','NGINX','Apache','Git','Svn','npm','pip']
        }
        this.detail = {
            backend: "I can build Full Stack Web apps with RESTful APIs using either Django or Node.js and " +
            "Express. I mainly use JSON for server-client transfer and have used SQL databases and NoSQL ones too.",
            frontend: "I've developed responsive web interfaces and apps using either from scratch or using " +
            "Javascript/CSS frameworks. But I've been mainly using React and ES6 with Redux frequently.(like this one!)",
            languages: "I've worked with Python and Javascript extensively while building web apps, but I've also" +
            " used Java for building Android and Swift 3 for building IOS Apps. I've also implemented algorithms using " +
            "Python and Java.",
            tools: "I enjoy having a Unix development environment with Docker and having git as my version control." +
            "I've also deployed multiple apps using Nginx as a reverse proxy or Apache with Cloud Platforms including " +
            "Heroku and Digital Ocean. "
        }
    }
    render() {
        const sectionClass = classnames({'main-section':'true','dev-skills-section':'true'});
        const skillTypeWrapper = classnames({'col-lg-4':'true',"skill-wrapper":'true'});
        return(
            <section style={{backgroundColor:'#24315c',color:'#FFFFFF'}}className={sectionClass}>
             <div className="container">
                 <h1>Skills</h1>
                 <SkillType type="Backend Dev" skills={this.skills.backend} detail={this.detail.backend}/>
                 <SkillType type="Frontend Dev" skills={this.skills.frontend} detail={this.detail.frontend}/>
                 <SkillType type="Programming Languages" skills={this.skills.languages} detail={this.detail.languages}/>
                 <SkillType type="Tools" skills={this.skills.tools} detail={this.detail.tools}/>

             </div>
            </section>
        );
    }
}
export default DevSkills