import React from 'react';
import "./Navbar.css";

const navbar = ({isScrolling}) => {

    const toTheHome = () => {
        window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    }

    const toTheAbout = () => {
        window.scrollTo({top: 600 , left: 0, behavior: "smooth"});
    }

    const toTheProjects = () => {
        window.scrollTo({top: 1200 , left: 0, behavior: "smooth"});
    }

    const toTheContact = () => {
        window.scrollTo({top: 2200 , left: 0, behavior: "smooth"});
    }

    return (
        <nav className = {`navbar ${isScrolling > 20 ? "scrolling" : null }`}>
            <div className = "navbar-item" onClick={toTheHome}> HOME</div>
            <div className = "navbar-item" onClick={toTheAbout}>ABOUT</div>
            <div className = "navbar-item" onClick={toTheProjects}>PROJECTS</div>
            <div className = "navbar-item" onClick={toTheContact}>CONTACT</div>
        </nav>

    )
}

export default navbar
