import React from "react";
import HomeBody from "../Components/HomeBody";
import "../Style/homebody.css";
import image from "../Assets/noPlanetB.png"

const Home = () => {
    return(
        <section>
            <div className="main-view">
                <img src={image} alt="Cardboard sign reading 'There is no Planet B'"/>
                <section className="text-overlay">
                    <h1>We are committed to eliminating textile and food waste</h1>
                    <p>By making the recycling of clothes and food less daunting!</p>
                    <button value="learn-more">Learn More</button>
                    <button value="donate">Donate</button>
                </section>
            </div>
            <HomeBody></HomeBody>
         </section>

    )
}
export default Home