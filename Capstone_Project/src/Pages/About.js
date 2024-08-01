import React from "react";
import ChandraImage from '../Assets/Chandra.jpg';
import SimoneImage from '../Assets/Simone.png';
import YarminImage from '../Assets/Yarmin.jpg';
import "../Style/about.css";

const About = () => {
    return(
        <section className="about-us-container">            
        <h2>About Us</h2><br />
        <h3>Mission</h3>
        <p>Our mission is save clothing from the landfill. To create less waste on our planet. Keeping clothes out of the landfill is 
            crucial for both environmental and economic reasons. Landfills are rapidly filling up, and textiles contribute significantly 
            to this problem, with millions of tons of clothing discarded each year. When clothes decompose in landfills, they release 
            harmful greenhouse gases, such as methane, exacerbating climate change. Additionally, the production of new clothing involves 
            substantial resource consumption, including water, energy, and raw materials, which can be reduced by extending the life of 
            existing garments. By reusing, recycling, and donating clothes, we can decrease the demand for new textiles, conserve natural 
            resources, and reduce the overall environmental footprint. Moreover, keeping clothes out of landfills supports the circular 
            economy, creates job opportunities in the recycling and resale industries, and promotes sustainable consumer habits.</p>
        <br />       
        <section className="Our-Team">
            <h3>Meet Our Team</h3> 
            <p>The Coding Guppies was founded by 3 students from the NPower Path2Tech Spring 2024 Cohort</p><br />
            
            <img alt="simone-moore" src={SimoneImage} width="50" height="50" padding="10px"/>Simone Moore<br />
            <img alt="yarmin-reyes" src={YarminImage} width="50" height="50"/>Yarmin Reyes<br />
            <img alt="chandra-white" src={ChandraImage} width="50" height="50"/>Chandra White<br />
            
        </section>
        <section className="Our-Story"> 
            <h3>Read Our Story</h3>
            <p>We started this website to help reduce clothing waste out of a shared passion for sustainability and a 
                desire to make a positive environmental impact. Recognizing the significant issue of textile waste and its detrimental 
                effects on the planet, we were motivated by a vision to promote eco-friendly fashion practices. This website will 
                serve as a platform to educate others about the importance of recycling and reusing clothing, offering practical tips on 
                how to extend the life of garments and creatively upcycle old items. Additionally, this website features resources 
                for swapping, selling, or donating pre-loved clothes, thereby fostering a community committed to reducing waste. By 
                leveraging our collective enthusiasm and digital skills, we aim to inspire others to embrace sustainable fashion, 
                ultimately contributing to a greener and more conscientious world.</p><br />
        </section>
    </section>
    )
}
export default About 