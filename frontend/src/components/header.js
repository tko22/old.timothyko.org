import React, { Component } from 'react';

class Header extends Component {
    render() {
        return(
            <nav className="topnavbar">
                <div className="header-container">
                    <div className="header-nav-logo">
                    </div>
                    <div className="header-nav-left">

                        <span className="header-text-span"><Link to="/products">PRODUCTS</Link></span>
                        {/*<span className="header-text-span"><Link to="/others">OTHERS</Link></span>*/}
                        <span className="header-text-span"><Link to="/brands">BRANDS</Link></span>
                        <span className="header-text-span"><Link to="/about-us">ABOUT US</Link></span>

                    </div>
                    <div className="header-nav-right">
                        <span className="header-icon-span"><Link to="/profile"><img src={profile_icon} alt="profile icon" width="20" height="20"/></Link></span>
                        <span className="header-icon-span"><Link to="/search"><img src={search_icon} alt="search icon" width="20" height="20"/></Link></span>
                    </div>
                </div>
            </nav>
        );
    }
}