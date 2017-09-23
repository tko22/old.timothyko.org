import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return(
            <footer>
                <div className="footer-wrapper">
                    <div className="footer-wrapper-right">
                        <span className="footer-text-span"><a href="mailto:timothy.l.ko@gmail.com" style={{color:'black'}}>Email</a></span>
                        <span className="grey-bar"> | </span>
                        <span className="footer-text-span"><a href="https://medium.com/@timmykko">Blog</a></span>
                        <span className="grey-bar"> | </span>
                        <span className="footer-text-span"><a href="https://medium.com/@timmykko">Github</a></span>
                        <span className="grey-bar"> | </span>
                        <span className="footer-text-span"><a href="https://www.linkedin.com/in/timothy-ko-795339135/">LinkedIn</a></span>

                    </div>
                </div>
            </footer>
        );
    }
}
export default Footer;