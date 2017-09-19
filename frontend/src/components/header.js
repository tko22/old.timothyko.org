import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import classnames from 'classnames';


class Header extends Component {
    render() {
        const logoClass = classnames({'header-text-span':'true','header-text':'true'});
        return(
            <nav className="topnavbar">
                <div className="header-container">
                    <div className="header-nav-center">
                        <span className={logoClass}><Link to="/" >TIMOTHY KO</Link></span>
                    </div>
                    <div className="header-nav-right">
                        <span className="header-text-span"><a href="https://medium.com/@timmykko">Blog</a></span>
                        <span className="header-icon-span"><a href="https://github.com/tko22">Github</a></span>
                    </div>
                </div>
            </nav>
        );
    }
}
export default Header;