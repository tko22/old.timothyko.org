import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import yosemiteMain from '../yosemite_main.jpg'
import classnames from 'classnames';


class Main extends Component {
    render() {
        const overlayTitleClass = classnames({'overlay-title':'true','vert-align':'true'});
        return(
            <div className="main">
                <section className="main-banner-section">
                    <div className="full-background-image">
                        <p className={overlayTitleClass}>Hey there!</p>
                    </div>
                </section>
            </div>
        );
    }
}

export default Main;