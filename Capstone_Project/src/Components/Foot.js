import React from 'react';
import { NavLink } from 'react-router-dom';
import "../Style/foot.css"

const Foot = () => {
    return (
        <footer>
            <p>brought to you by <a href=" " target="_blank" rel="noopener">Insert</a></p>
            <p><i>Disclaimer: This is a project and is not affiliated with .</i></p>
            <ul class="links-container">
                <li class="links"><NavLink to="/">Home</NavLink></li>
                <li class="links"><NavLink to="/about">About</NavLink></li>
                <li class="links"><NavLink to="/quiz">Quiz</NavLink></li>
                <li class="links"><NavLink to="/resources">Resources</NavLink></li>
                <li class="links"><NavLink to="/locator">Locator</NavLink></li>
                <li class="links"><NavLink to="/contact">Contact</NavLink></li>
                <li class="links"><NavLink to="/profile">Profile</NavLink></li>
            </ul>
            <p class="copyright">
                <a href=" ">Coding Guppies 2024 All Rights Reserved.</a>
            </p>
        </footer>
    );
}

export default Foot;