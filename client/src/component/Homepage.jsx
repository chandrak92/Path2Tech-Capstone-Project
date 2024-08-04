import React from 'react'

function Homepage() {
  return (
    <div>
    <header>
        <nav class="navbar">
            <ul class="nav-list">
                <li class="nav-item"><a href="#home">Home</a></li>
                <li class="nav-item dropdown">
                    <a href="#about" class="dropbutton">About</a>
                    <ul class="dropdown-options">
                        <li><a href="#ourteam">Our Team</a></li>
                        <li><a href="#ourstory">Our Story</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </li>
                <li class="nav-item"><a href="#learn">Learn</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section class="main-view">
            <img src="assets/noPlanetB.png" alt="Cardboard sign reading 'There is no Planet B'"/>
            <section class="text-overlay">
                <h1>We are commited to eliminating textile and food waste</h1>
                <p>By making cycling of clothes and food less daunting</p>
                <button value="learn-more">{`Learn More -->`}</button>
                <button value="donate">Donate </button>
            </section>

        </section>
    </main>

    <body>
        <section>
            <h2>Main Content</h2>
            <p>This is the main content of the homepage.</p>
        </section>
    </body>
    <footer>
        <p>&copy; 2024 Our Website</p>
    </footer>
    </div>
  )
}

export default Homepage