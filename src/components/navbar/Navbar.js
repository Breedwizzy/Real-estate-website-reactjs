import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import wakaagentlogo from '../../assets/wakaagentlogo.jpeg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        // Close the menu when any menu item is clicked
        setIsActive(false);
    };

    const toggleMenu = () => {
        // Toggle the isActive state
        setIsActive(!isActive);
    };

    return (
        <nav className='navbar'>
            <div className='container'>
                <div className="logo-container">
                    <img className="logo-img" src={wakaagentlogo} alt="wakaagent logo" />
                    <h1 className="logo-text"><span>Waka</span>agent</h1>
                </div>

                <ul className={`nav-menu ${isActive ? 'active' : ''}`}>
                    <li><a href='#' onClick={handleClick}>Home</a></li>
                    <li><a href='#' onClick={handleClick}>Our Agents</a></li>
                    <li><a href='#' onClick={handleClick}>Become Our Agent</a></li>
                    <li><a href='#' onClick={handleClick}>About</a></li>
                    <li><a href='#' onClick={handleClick}>Contact</a></li>
                </ul>

                <div className={`hamburger ${isActive ? 'close-menu' : ''}`} onClick={toggleMenu}>
                    <FontAwesomeIcon icon={isActive ? faTimes : faBars} size="2x" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
