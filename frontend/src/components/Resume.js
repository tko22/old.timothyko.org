import React, { Component } from 'react';
import classnames from 'classnames';

class Resume extends Component {
    render() {
        const sectionClass = classnames({'main-section':'true','work-experience-section':'true'});
        return(
            <section className={sectionClass}>
                <h5 style={{fontSize:20}}>Work Experience</h5>
            </section>
        );
    }
}
export default Resume;