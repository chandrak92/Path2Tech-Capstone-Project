import React from 'react';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
// import SearchBar from './SearchBar'
import Authlog from './login';
import '../Style/login.css';


const NavBar = () => {
    return (
      <nav>
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
            <ul class="links">
                <li class=""><NavLink to="/">Home</NavLink></li>
                <li class=""><NavLink to="/about">About</NavLink></li>
                <li class=""><NavLink to="/quiz">Quiz</NavLink></li>
                <li class=""><NavLink to="/resources">Resources</NavLink></li>
                <li class=""><NavLink to="/locator">Locator</NavLink></li>
                <li class=""><NavLink to="/contact">Contact</NavLink></li>
                <li class=""><NavLink to="/profile">Profile</NavLink></li>
                <li class=""><a href=" ">Favs</a></li>
                <li class=""><a href=" ">Invite</a></li>
                <li class=""><a href=" " title="Mobile">App</a></li>

          </ul>
        </section>
      </nav>
    )
  }

export default NavBar