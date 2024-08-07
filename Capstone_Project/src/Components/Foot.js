import React from 'react';
import { NavLink } from 'react-router-dom';
import "../Style/foot.css"

const Foot = () => {
    return (
        <footer>
            <p>brought to you by <a href=" " target="_blank" rel="noopener">Insert</a></p>
            <p><i>Disclaimer: This is a project and is not affiliated with .</i></p>
            <div className="links-container">
                <NavLink to="/" className="links">Home</NavLink>
                <NavLink to="/about" className="links">About</NavLink>
                <NavLink to="/quiz" className="links">Quiz</NavLink>
                <NavLink to="/resources" className="links">Resources</NavLink>
                <NavLink to="/locator" className="links">Locator</NavLink>
                <NavLink to="/contact" className="links">Contact</NavLink>
                <NavLink to="/profile" className="links">Profile</NavLink>
            </div>
            <p className="copyright">
                <a href=" ">Coding Guppies 2024 All Rights Reserved.</a>
            </p>
        </footer>
    );
}

export default Foot;