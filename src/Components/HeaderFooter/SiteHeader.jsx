import React, { useState, useCallback } from 'react'; // Import useState and useCallback
import { Link, NavLink } from 'react-router-dom';

import './header-footer.css';

const SiteHeader = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Callback to toggle the menu state
    const toggleMobileMenu = useCallback(() => {
        setIsMobileMenuOpen(prev => !prev);
    }, []);

    // Callback to close the menu (useful when a NavLink is clicked)
    const closeMobileMenu = useCallback(() => {
        setIsMobileMenuOpen(false);
    }, []);

    return (
        <header className="header-container">
            <div className="header-content-wrapper">
                <div className="header-name">
                    <Link to="/" onClick={closeMobileMenu}>
                        <span>Paul</span>
                        <span>.Jeffreys</span>
                    </Link>
                </div>

                {/* Hamburger menu button for mobile */}
                <button
                    className="hamburger-menu-button"
                    onClick={toggleMobileMenu}
                    aria-controls="mobile-nav-menu"
                    aria-expanded={isMobileMenuOpen}
                    aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>

                {/* Desktop Navigation */}
                <div className="header-nav desktop-nav">
                    <nav>
                        <ul>
                            <li><NavLink to="/about">About Me</NavLink></li>
                            <li><NavLink to="/resume">Resumé</NavLink></li>
                            <li><NavLink to="/projects">Projects</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>


            {/* Mobile Sliding Menu & Overlay */}
            {isMobileMenuOpen && (
                <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>
            )}
            <div className={`mobile-nav ${isMobileMenuOpen ? 'is-open' : ''}`} id="mobile-nav-menu">
                <nav>
                    <ul>
                        <li><NavLink to="/" end onClick={closeMobileMenu}>Home</NavLink></li>
                        <li><NavLink to="/about" onClick={closeMobileMenu}>About Me</NavLink></li>
                        <li><NavLink to="/resume" onClick={closeMobileMenu}>Resumé</NavLink></li>
                        <li><NavLink to="/projects" onClick={closeMobileMenu}>Projects</NavLink></li>
                        <li><NavLink to="/contact" onClick={closeMobileMenu}>Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default SiteHeader;