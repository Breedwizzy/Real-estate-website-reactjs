import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import wakaagentlogo from '../../assets/wakaagentlogo.jpeg';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClick = () => setClick(!click);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='navbar'>
            <div className='container'>
                <div className="logo-container">
                    <img className="logo-img" src={wakaagentlogo} alt="wakaagent logo" />
                    <h1 className="logo-text"><span>Waka</span>agent</h1>
                </div>

                <ul id='nav-elements' className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Search</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>

                <div className={`hamburger ${isMenuOpen ? 'close-menu' : ''}`} onClick={toggleMenu}>
                    <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="2x" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
