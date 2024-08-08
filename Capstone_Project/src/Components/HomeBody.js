import React from "react";
import { NavLink } from "react-router-dom";

const HomeBody = () => {
    return (
        <section className="body">
            <h2>Codding Guppies Project</h2>
            <p>Our web app is designed with the aim to empower users to easily adobt adobt a zero-waste lifestyle as it pertains to clothes and food.</p>
            <p>We are here to encourage the public to take community-minded actions by proving easy access to how they can conviniently recycle unwanted clothing and food.</p>
            <p>Prevent reusable or recycable textiles from piling up on landfills.</p>
            <ul>
                <li className=""><NavLink to="/about">About</NavLink></li>
            </ul>
        </section>
)
}
export default HomeBody