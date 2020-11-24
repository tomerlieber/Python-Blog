import React from 'react';
// import Background from './img/home-bg.jpg'

const Header = ({heading, subheading, image}) => (
    <header className="masthead" style={{backgroundImage: "url(" + image + ")"}}>
        <div className="overlay"></div>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                    <h1>{heading}</h1>
                    <span className="subheading">{subheading}</span>
                </div>
            </div>
        </div>
        </div>
    </header>
);

export default Header;