// Navbar.js
import React from 'react';
import './Navbar.css'; // Ensure you have a CSS file for your navbar styles

const Navbar = () => {
    const handleScroll = (e) => {
        e.preventDefault(); // Prevent the default anchor click behavior
        const targetId = e.currentTarget.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', // Smooth scroll effect
                block: 'start', // Align to the top of the target element
            });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scroll effect
        });
    };

    return (
        <nav className="navbar">
            <div className="brand" onClick={scrollToTop} style={{ cursor: 'pointer' }}>
                DANIEL CIRINO
            </div>
            <div className="links">
                <a href="#about" onClick={handleScroll}>About Me</a>
                <a href="#skills" onClick={handleScroll}>Skills</a>
                <a href="#projects" onClick={handleScroll}>Projects</a>
                <a href="https://www.linkedin.com/in/daniel-cirino-/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/dan-cirino" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
