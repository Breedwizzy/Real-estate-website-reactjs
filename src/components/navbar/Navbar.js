import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import wakaagentlogo from '../../assets/wakaagentlogo.jpeg';
import { Link } from 'react-router-dom'; // Import Link
import { NavLink } from 'react-router-dom';

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
                    <li><Link to="/" onClick={handleClick}>Home</Link></li>
                    <li><Link to="/ouragents" onClick={handleClick}>Our Agents</Link></li>
                    <li><Link to="/becomeouragent" onClick={handleClick}>Become Our Agent</Link></li>
                    <li><Link to="/about" onClick={handleClick}>About</Link></li>
                    <li><Link to="/contact" onClick={handleClick}>Contact</Link></li>
                    <li><Link to="/about" onClick={handleClick}>Sign up</Link></li>
                    <li><Link to="/contact" onClick={handleClick}>Sign in</Link></li>
                </ul>

                <div className={`hamburger ${isActive ? 'close-menu' : ''}`} onClick={toggleMenu}>
                    <FontAwesomeIcon icon={isActive ? faTimes : faBars} size="2x" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
