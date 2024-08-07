import React from "react";
import { NavLink } from "react-router-dom";

const HomeBody = () => {
    return (
        <section className="body">
            <h2>Main Content</h2>
            <p>This is the main content of the homepage.</p>
            <ul>
                <li className=""><NavLink to="/about">About</NavLink></li>
            </ul>
        </section>
)
}
export default HomeBody