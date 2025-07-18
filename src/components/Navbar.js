import React, { useState } from 'react';

import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { HashLink as Link } from 'react-router-hash-link';


function Navbar() {
    const [click, setClick] = useState(false);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                
                {/* Left ASME Logo */}
                <Link to="/" className="navbar-logo left-logo">
                    <img src="https://res.cloudinary.com/detarpq3q/image/upload/v1752238667/Asme_bg_oj6swt.png" alt="ASME Logo" className="logo-img" />
                </Link>

                {/* Center Mechnovate Logo */}
                <div className="center-logo">
                    <img src="https://res.cloudinary.com/detarpq3q/image/upload/v1752238682/m1_w7zkji.png" alt="Mechnovate Logo" className="logo-img-large" />
                </div>

                {/* Right-side Menu */}
                <div className="right-nav">
                    <div className="menu-icon" onClick={handleClick}>
                        <FontAwesomeIcon icon={click ? faXmark : faBars} />
                    </div>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item ">
                            <Link to="/#about" className="nav-links" onClick={closeMobileMenu}>Home</Link>
                        </li>
                        
                        
                        <li className="nav-item">
                            <Link to='/#events' className='nav-links' onClick={closeMobileMenu}>Events</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to='/Location' className='nav-links' onClick={closeMobileMenu}>Accomodation</Link>
                        </li>

                        <li className="nav-item ">
                            <Link to='/Contact' className='nav-links' onClick={closeMobileMenu}>Contact Us</Link>
                        </li>

                        {/*<li className="nav-item ">
                            <Link to='/#about' className='nav-links' onClick={closeMobileMenu}>About</Link>
                        </li>*/}

                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;
