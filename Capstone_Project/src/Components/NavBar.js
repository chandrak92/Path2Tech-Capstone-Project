import React, { useState } from 'react';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
// import SearchBar from './SearchBar'
import Authlog from './login';
import '../Style/navbar.css';


const NavBar = () => {
    const [hovered, setHovered] = useState(false);
    return (
        <header>
            <nav className="navbar">
                {/* <NavLink to="/about/parameter">About</NavLink> Connected to the /:id parameter applied in App.js */}
                {/* A parameter functions as a search query that passes through a URL */}
                <section class="top">
                    <section class="left">
                        <p>{moment().format('MMMM Do h:mm a')}</p> | <NavLink to="/">Home</NavLink> | <NavLink to="/about">Mission</NavLink>
                    </section>
                    <section class="center">
                        <form action=" " role="search">
                            <label for="q">Search Users:</label>
                            <div class="search-wrapper">
                                <input id="q" type="text" name="q" autocomplete="off"/>
                            </div>
                            <button type="submit">Search</button>
                        </form>
                    </section>
                    <section class="right">
                        <Authlog></Authlog>
                    </section>
                </section>
                <section class="bottom">
                    <ul class="nav-list">
                        <li class="nav-item"><NavLink to="/">Home</NavLink></li>
                        <div                             
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                            >
                        <li class="nav-item">
                            <NavLink 
                            to="/about" 
                            className="dropbutton"

                            >About</NavLink>
                            </li>
                        <ul class={`dropdown-options ${hovered ? 'active-navbar' : 'hidden-navbar'}`}>
                        <li><a href="#ourteam">Our Team</a></li>
                        <li><a href="#ourstory">Our Story</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                        </ul>

                        </div>
                        <li class="nav-item"><NavLink to="/quiz">Quiz</NavLink></li>
                        <li class="nav-item"><NavLink to="/resources">Resources</NavLink></li>
                        <li class="nav-item"><NavLink to="/locator">Locator</NavLink></li>
                        <li class="nav-item"><NavLink to="/contact">Contact</NavLink></li>
                        <li class="nav-item"><NavLink to="/profile">Profile</NavLink></li>
                        <li class="nav-item"><a href=" ">Favs</a></li>
                        <li class="nav-item"><a href=" ">Invite</a></li>
                        <li class="nav-item"><a href=" " title="Mobile">App</a></li>

                </ul>
                </section>
            </nav>
        </header>
    )
  }

export default NavBar