import React, { useEffect, useState } from 'react';
import axios from "axios";
import moment from 'moment';
import { NavLink } from 'react-router-dom';
// import SearchBar from './SearchBar'
import Authlog from './login';
import '../Style/navbar.css'


const NavBar = () => {
    const [userName, setUserName] = useState();
    const [error, setError]= useState(false);
    const [loading, setLoading]= useState(false);
    const [abouthovered, setAboutHovered] = useState(false);
    const [resourcehovered, setResourceHovered] = useState(false);
    useEffect(() => { 
        const fetchData = async () => { 
            try {
                const response = await axios.get('http://localhost:4000/users/66a97d2fcfbd7dacd3512480');
                setUserName(response.data.userName);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    },[]);
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
                <section className="nav-list">
                    <div className="nav-item"><NavLink to="/">Home</NavLink></div>
                    <div
                    className="nav-item"
                    id="about"
                    onMouseEnter={() => setAboutHovered(true)}
                    onMouseLeave={() => setAboutHovered(false)}
                    >
                    <div  ><NavLink to="/about">About</NavLink></div>
                        <div className={`dropdown-options ${abouthovered ? 'active-navbar' : 'hidden-navbar'}`}>
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
                    <div className="nav-item"><NavLink to="/locator">Locator</NavLink></div>
                    <div className="nav-item"><NavLink to="/profile">{userName}</NavLink></div>
                    <div className="nav-item"><NavLink to="/contact">Contact Us</NavLink></div>
                </section>
            </section>
        </nav>
    </header>
    )
  }

export default NavBar