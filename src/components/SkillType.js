import React, { Component } from 'react';
import classnames from 'classnames';
import Reveal from 'react-reveal';
import SkillsList from "./SkillsList";

class SkillType extends Component {
    render(){
        const skillTypeWrapper = classnames({'col-lg-4':'true',"skill-wrapper":'true'});
        return(

            <div className="skill-type-section">
                <div className="row">
                    <div className="col-sm-2"> </div>
                    <div className="col-sm-8">
                        <div className="skill-type-wrapper">
                            <div className="row">
                                <div className={skillTypeWrapper} >
                                    <h2 className="skill-type">{this.props.type}</h2>
                                </div>

                                <div className='col-lg-8' style={{padding:'15px 5px'}}><SkillsList skills={this.props.skills}/></div>
                            </div>
                            <div className="skill-detail">
                                <p style={{fontSize: 14}}> {this.props.detail}</p>
                            </div>

                        </div>
                    </div>
                    <div className="col-sm-2"> </div>

                </div>
            </div>
        );

    }
}
export default SkillType;