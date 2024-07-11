// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';
import Quiz from './Pages/Quiz';
import Contact from './Pages/Contact';
import Resources from'./Pages/Resources';
import NotFound from './Pages/NotFount';
import Foot from './Components/Foot';

function App() {
return (
  <section>
    <header>
      <NavBar></NavBar>
    </header>
<main>
  <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/profile" element={<Profile></Profile>}></Route>
      <Route path="/quiz" element={<Quiz></Quiz>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path="/resources" element={<Resources></Resources>}></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
      {/*  <Route path="/about/:id" element={<About></About>}></Route> is a way to include parameters in your */}
    </Routes>
</main>
    <footer>
      <Foot></Foot>
    </footer>
  </section> 
);
}

export default App;
