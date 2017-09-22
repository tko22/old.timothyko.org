import React, { Component } from 'react';
import classnames from 'classnames';
import Reveal from 'react-reveal';


class AboutMe extends Component {
    render() {
        const sectionClass = classnames({'about-me-section':'true','main-section':'true'});
        return(
            <section className={sectionClass}>
                <Reveal effect="animated fadeInUp" fraction="0.99">
                    <div className="container">
                        <h1>I'm Tim.</h1>
                        <h5>An Ambitious Developer passionate about the web and learning just about everything.
                             </h5>
                        <hr className="about-me-top-hr"/>
                        <div className="row">
                            <div className="col-md-8">
                                <p>I enjoy designing the architectures of software while developing applications and tools that are able
                                    to benefit and make people's lives better. I love learning cutting-edge technologies and
                                    I am always looking to work with brillant people to gain more knowledge so that in the end,
                                    I'll be able to give back and be a part of new innovations.
                                    <hr width="40" style={{marginLeft:0}}/>
                                    And oh yeah. I'm a sophomore studying Computer Engineering at the University of Illinois Urbana-Champaign.
                                    When not coding, I love going outdoors and enjoying nature and playing the piano. </p>
                            </div>
                            <div className="col-md-4">

                            </div>

                        </div>
                    </div>
                </Reveal>
            </section>
        );
    }
}
export default AboutMe;