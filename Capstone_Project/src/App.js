import React from 'react';
// import logo from './logo.svg';
import './App.css';
import DocumentMeta from 'react-document-meta';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';
import Quiz from './Pages/Quiz';
import Contact from './Pages/Contact';
import Resources from'./Pages/Resources';
import NotFound from './Pages/NotFound';
import Foot from './Components/Foot';


function App() {
  const meta = {
    title: 'Coding Guppies Capstone',
    description: 'I am a webpage dedicated to changing the world, climate change, food waste, clothing waste, action items, natural disasters, heatwave, flooding',
    canonical: 'http://localhost:3000',
    meta: {
      charset: 'utf-8',
      name: {
        viewport: `width=device-width, initial-scale=1.0`,
        keywords: `react,meta,document,html,tags`
      }
    }
  };
return (
  <DocumentMeta {...meta}>
    <section>
      <NavBar></NavBar>
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
      <Foot></Foot>
    </section>
  </DocumentMeta>
);
}


export default App;
