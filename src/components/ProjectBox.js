import React, { Component } from 'react';
import classnames from 'classnames';

class ProjectBox extends Component {
    render() {
        const projectImgClass = classnames({'col-md-6':'true','col-lg-6':'true'});
        return(
            <div className="project">
                <div className="row">
                    <div className={projectImgClass}>
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
        );
    }
}
export default ProjectBox;