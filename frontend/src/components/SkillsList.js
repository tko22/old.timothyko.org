import React, { Component } from 'react';

class SkillsList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            skills: props.skills
        }
    }
    render() {
        return(
            <div style={{paddingTop:20}}className="skills-wrapper">
            {this.state.skills.map((val) =>
                (<div className="skill">{val}</div>)
            )}
            </div>
        )
    }
}
export default SkillsList;