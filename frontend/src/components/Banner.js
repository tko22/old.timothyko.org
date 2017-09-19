import React, { Component } from 'react';
import classnames from 'classnames';
import yosemiteMain from '../yosemite_main.jpg'

class Banner extends Component {
    render() {
        const overlayTitleClass = classnames({'overlay-title':'true','vert-align':'true'});
        return(
            <section className="main-banner-section">
                <div className="full-background-image">
                    <p className={overlayTitleClass}>Hey there!</p>
                </div>
            </section>
        );
    }
}

export default Banner;