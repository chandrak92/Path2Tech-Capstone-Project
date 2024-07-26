import React, { useState } from 'react';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
// import SearchBar from './SearchBar'
import Authlog from './login';
import '../Style/navbar.css'


const NavBar = () => {
    const [abouthovered, setAboutHovered] = useState(false);
    const [resourcehovered, setResourceHovered] = useState(false);
    return (
    <header>
        <nav className="navbar">
            {/* <NavLink to="/about/parameter">About</NavLink> Connected to the /:id parameter applied in App.js */}
            {/* A parameter functions as a search query that passes through a URL */}
            <section className="top">
                <section className="left">
                    <div className="clock">
                        <p><span className="month">{moment().format('MMMM')}</span></p> 
                        <p><span className="date">{moment().format('Do')}</span></p>
                        <p><span className="time">{moment().format('HH:mm')}</span></p>
                    </div> 
                </section>
                <section className="center">
                    <form action=" " role="search">
                        <label htmlFor="q">Search the Web:</label>
                        <div className="search-wrapper">
                            <input id="q" type="text" name="q" autoComplete="off"/>
                        </div>
                        <button type="submit">Search</button>
                    </form>
                </section>
                <section className="right">
                    <Authlog></Authlog>
                </section>
            </section>
            <section className="bottom">
                <ul className="nav-list">
                    <li className="nav-item"><NavLink to="/">Home</NavLink></li>
                    <div
                    onMouseEnter={() => setAboutHovered(true)}
                    onMouseLeave={() => setAboutHovered(false)}
                    >
                        <li className="nav-item" id="about"><NavLink
                        to="/about"
                        >About</NavLink></li>
                            <ul className={`dropdown-options ${abouthovered ? 'active-navbar' : 'hidden-navbar'}`}>
                                <li><NavLink to="/about/our-team">Our Team</NavLink></li>
                                <li><NavLink to="/about/our-story">Our Story</NavLink></li>
                            </ul>
                    </div>
                    <li className="nav-item"><NavLink to="/quiz">Quiz</NavLink></li>
                    <div
                        onMouseEnter={() => setResourceHovered(true)}
                        onMouseLeave={() => setResourceHovered(false)}
                        >
                        <li className="nav-item" id="resource"><NavLink to="/resources">Resources</NavLink></li>
                            <ul className={`dropdown-options ${resourcehovered ? 'active-navbar' : 'hidden-navbar'}`}>
                                <li><NavLink to="/resources/organizations">Organizations</NavLink></li>
                                <li><NavLink to="/resources/actions">Actions</NavLink></li>
                            </ul>
                    </div>
                    <li className="nav-item"><NavLink to="/locator">Locator</NavLink></li>
                    <li className="nav-item"><NavLink to="/contact">Contact Us</NavLink></li>
                    <li className="nav-item"><NavLink to="/profile">Profile</NavLink></li>
                </ul>
            </section>
        </nav>
    </header>
    )
  }

export default NavBar