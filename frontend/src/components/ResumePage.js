import React, { Component } from 'react';
import Resume from './Resume'
class ResumePage extends Component {
    render() {
        return(
            <section className='resume-page'>
                <Resume/>
                <Projects/>
                <DevSkills/>
            </section>
        );
    }

}
export default ResumePage;