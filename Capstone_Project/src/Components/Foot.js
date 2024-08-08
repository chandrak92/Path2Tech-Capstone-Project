import React from 'react';
import { NavLink } from 'react-router-dom';
import "../Style/foot.css"

const Foot = () => {
    return (
        <footer>
            <div className="foot-container">
                <div className="links-container">
                    <NavLink to="/" className="links">Home</NavLink>
                    <NavLink to="/about" className="links">About</NavLink>
                    <NavLink to="/quiz" className="links">Quiz</NavLink>
                    <NavLink to="/resources" className="links">Resources</NavLink>
                    <NavLink to="/locator" className="links">Locator</NavLink>
                    <NavLink to="/contact" className="links">Contact</NavLink>
                    <NavLink to="/profile" className="links">Profile</NavLink>
                    <a className="links" href="https://github.com/chandrak92/Path2Tech-Capstone-Project" target="_blank" rel="noopener"> GitHub</a>
                </div>
                <div className="copyright">

                    <p><i>Disclaimer: This webapp was created as a FullStack development project. This project is not affiliated with any third party organizations.</i></p>
                    <p>Coding Guppies. 2024 All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Foot;