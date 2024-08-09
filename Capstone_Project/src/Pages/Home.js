import React from "react";
import { NavLink } from "react-router-dom";
import HomeBody from "../Components/HomeBody";
import "../Style/homebody.css";
import image from "../Assets/noPlanetB.png"

const Home = () => {
    return(
        <section className="home-container">
            <div className="main-view">
                <img src={image} alt="Cardboard sign reading 'There is no Planet B'"/>
                <section className="text-overlay">
                    <h1>We are committed to eliminating textile and food waste</h1>
                    <p>By making the recycling of clothes and food less daunting!</p>
                    <div className="home-buttons">
                        <NavLink to="/about"><button value="learn-more">Learn More</button></NavLink>
                        <a href="http://localhost:3000/map/locations.html"><button value="donate" >Donate</button></a>
                    </div>
                </section>
            </div>
            <HomeBody></HomeBody>
         </section>

    )
}
export default Home