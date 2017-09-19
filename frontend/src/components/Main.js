import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import classnames from 'classnames';

import AboutMe from "./AboutMe";
import Banner from "./Banner"

class Main extends Component {
    render() {
        return(
            <div className="main">
                <Banner/>
                <AboutMe/>
            </div>
        );
    }
}

export default Main;