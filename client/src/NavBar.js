import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div className="container">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
            </button>
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item active">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/posts-list">Articles</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default NavBar;