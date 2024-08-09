import React, { useState } from 'react';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
// import SearchBar from './SearchBar'
import Authlog from './login';
import '../Style/navbar.css'


const NavBar = ({ 
    isLoggedIn,
    username,
    onLogin,
    onLogout,
    loginData,
    loginUser,
    setLoginData
}) => {
    const [abouthovered, setAboutHovered] = useState(false);
    const [resourcehovered, setResourceHovered] = useState(false);
    const [profilehovered, setProfileHovered] = useState(false);

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
                {!isLoggedIn && <Authlog onLogin={onLogin} loginData={loginData} loginUser={loginUser} setLoginData={setLoginData}> </Authlog>}
                </section>
            </section>
            <section className="bottom">
                <section className="nav-list">
                    <div className="nav-item"><NavLink to="/">Home</NavLink></div>
                    <div
                    className="nav-item"
                    id="about"
                    onMouseEnter={() => setAboutHovered(true)}
                    onMouseLeave={() => setAboutHovered(false)}
                    >
                    <div className="nav-item"><NavLink to="/about">About</NavLink></div>
                        <div className={`dropdown-options ${abouthovered ? 'active-navbar' : 'hidden-navbar'}`}>
                            {/* ensure to link to specific location on page */}
                            <NavLink to="/about/our-team">Our Team</NavLink>
                            <NavLink to="/about/our-story">Our Story</NavLink>
                        </div>
                    </div>
                    <div
                        className="nav-item"
                        id="resource"
                        onMouseEnter={() => setResourceHovered(true)}
                        onMouseLeave={() => setResourceHovered(false)}
                        >
                            <NavLink to="/resources">Resources</NavLink>
                            <div className={`dropdown-options ${resourcehovered ? 'active-navbar' : 'hidden-navbar'}`}>
                                <NavLink to="/resources/organizations">Organizations</NavLink>
                                <NavLink to="/resources/actions">Actions</NavLink>
                            </div>
                    </div>
                    <div className="nav-item"><NavLink to="/quiz">Quiz</NavLink></div>
                    <div className="nav-item"><a href="/map/locations.html">Locator</a></div>
                    {isLoggedIn ? (
                        <div
                        className="nav-item"
                        id="profile"
                        onMouseEnter={() => setProfileHovered(true)}
                        onMouseLeave={() => setProfileHovered(false)}
                        >
                            <NavLink to="/profile">{username}</NavLink>
                            <div className={`dropdown-options ${profilehovered ? 'active-navbar' : 'hidden-navbar'}`}>
                             <button onClick={onLogout}>Logout</button>
                            </div>
                        </div>
                    ) : (
                        <div className="nav-item"><NavLink to="/register">Register</NavLink></div>
                    )}
                    <div className="nav-item"><NavLink to="/contact">Contact Us</NavLink></div>
                </section>
            </section>
        </nav>
    </header>
    )
  }

export default NavBar