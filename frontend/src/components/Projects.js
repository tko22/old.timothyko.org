import React, { Component } from 'react';
import classnames from 'classnames';
import r4o from '../r4o.jpg'
import cb from '../iphone-celerybox.jpg'
import mafia from '../mafia.jpg'
import Reveal from 'react-reveal';
import SkillsList from './SkillsList'

class Projects extends Component {
    constructor(props) {
        super(props);
        this.skills = {
            r4o: ['Python','Django','DigitalOcean','JQuery','Apache','MySQL','Wordpress','PHP','AJAX','Bootstrap'],
            celeryBox: ['IOS','Python','Django','Swift 3','RESTful API','DOM manipulation/Web-scraping','Cron','MySQL'],
            mafia: ['Heroku','Django','Python','MySQL','Application States','Bootstrap','JQuery'],
            edid: ['Java','Python','Bit parsing','Android SDK','JSON','Bluetooth']
        }
    }
    render(){
        const sectionClass = classnames({'main-section':'true','projects-section':'true'});
        const projectImgClass = classnames({'col-md-6':'true','col-lg-6':'true'});
        return(
            <section className={sectionClass}>
                <h5 style={{fontSize:24, paddingBottom:10}}>Activities and Projects</h5>
                <div className="container">
                    <p style={{fontSize:15, paddingBottom:30, maxWidth:500, margin:'0 auto'}}>I love building stuff from sratch. Personal Projects give me the freedom to explore
                    and be proficient in different technologies and tools while allowing me to make architectural and design decisions. </p>
                    <hr style={{width:'50%'}}/>
                    
                    <div className="project">
                        <div className="row">
                            <div className={projectImgClass}>
                                <div className="project-img-wrapper">
                                    <img className="max-width" src={r4o} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="project-detail">
                                    <p style={{fontWeight:600, letterSpacing:1,fontSize:17}}>
                                        <a href="http://www.run4orphans.org">Run4Orphans</a></p>
                                    <p style={{fontSize:15}}>Run4Orphans is an organization that holds Races and allows
                                        Runners to fundraise money for orphans in third world countries fo their marathon run.
                                        Includes race signups with a payment system, personalized runner profiles with Wordpress,
                                        and an admin-only dashboard for runner information, and much more.
                                    </p>
                                    <p style={{fontSize:15}}>
                                        I designed, implemented, and maintained the website and assisted the coordination
                                        of fundraising events that have raised over $10,000 each year for 3 years.
                                        <a href="https://github.com/tko22/run4orphans_race" style={{fontSize:12, color:'grey'}}>  Github</a>
                                    </p>
                                    <div className="row">
                                        <SkillsList skills={this.skills.r4o}/>
                                    </div>
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
                                    <p style={{fontWeight:600, letterSpacing:1,fontSize:17}}>CeleryBox</p>
                                    <p style={{fontSize:15}}>
                                        CeleryBox is an IOS app that finds the best grocery store
                                        based on user's location, their preferences on price and distance, and their grocery list.

                                    </p>
                                    <p style={{fontSize:15}}>
                                        I spearheaded and architected the development of the REST API with two other students and
                                        solely developed the IOS app, which also included a barcode scanner that called
                                        open APIs to grab data for a specific item. I also wrote automated web-scrapping scripts
                                        that searched and sorted thousands of grocery deals. The backend also includes
                                        an algorithm that decides the best store based on user preferences.
                                        <a href='https://github.com/tko22/celerybox_api' style={{fontSize:12, color:'grey'}}>  Github</a>
                                    </p>
                                    <div className="row">
                                        <SkillsList skills={this.skills.celeryBox}/>
                                    </div>
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
                                <div className="project-detail">

                                    <p style={{fontWeight:600, letterSpacing:1,fontSize:17}}>
                                        <a href="http://mafia-game-app.herokuapp.com/">Mafia Game App</a></p>
                                    <p style={{fontSize:15}}>
                                        Mafia is a popular party game, generally for over 10 people, where you use deception to
                                        survive. Usually, we would cut up paper and assign roles though that, making it complicated
                                        and time-consuming since roles would depend on how many people were playing.
                                    </p>
                                    <p style={{fontSize:15}}>
                                        I used Django and its templating system along with JQuery and Ajax calls for JSON data to develop this application.
                                        It also allows for customization in the game and deployed using Heroku.
                                        <a href='https://github.com/tko22/mafia'style={{fontSize:12, color:'grey'}}>  Github</a>
                                    </p>
                                    <div className="row">
                                        <SkillsList skills={this.skills.mafia}/>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <hr width={300}/>
                    <div style={{paddingTop:40}} id="other-projects">
                        <div className="row">
                            <div className="col-sm-1"> </div>
                            <div className="col-10">
                                <ul style={{textAlign:'left'}}>
                                    <li className="other-projects-list" >
                                        <span className="other-span">EDIDreader Android Application: </span>
                                        <p style={{fontSize: 14, marginBottom:0}}>Contracted to develop android application that connects via Bluetooth with
                                        a Raspberry Pi to send parsed Extended Display Identification Data(EDID) in
                                            JSON and displays and stores it.
                                            <a href="https://github.com/tko22/EDIDreader"style={{fontSize:12, color:'grey'}}>  Github</a>
                                        </p>
                                        <div className="row"><SkillsList skills={this.skills.edid} /></div>
                                    </li>
                                    <li className="other-projects-list"><span className="other-span">Teaching Web Development Workshops at @ACM</span></li>
                                    <li className="other-projects-list"><span className="other-span">Check out my Tech Blog <a href="https://medium.com/@timmykko" style={{color:'gray'}}>here!</a></span></li>
                                    <li className="other-projects-list"><span className="other-span">This website was built from scratch using React and Docker and deployed using DigitalOcean and Nginx!</span></li>
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