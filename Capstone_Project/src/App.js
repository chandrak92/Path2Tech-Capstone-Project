import React from 'react';
import './App.css';
import DocumentMeta from 'react-document-meta';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import Registration from './Pages/Register';
import Profile from './Pages/Profile';
import Quiz from './Pages/Quiz';
import Contact from './Pages/Contact';
import Resources from'./Pages/Resources';
import NotFound from './Pages/NotFound';
import Foot from './Components/Foot';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';


// axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true

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
<<<<<<< HEAD
  <section>
    <NavBar></NavBar>
    <main>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/about/our-team" element={<About></About>}></Route>
        <Route path="/about/our-story" element={<About></About>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/quiz" element={<Quiz></Quiz>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/resources" element={<Resources></Resources>}></Route>
        <Route path="/resources/organizations" element={<Resources></Resources>}></Route>
        <Route path="/resources/actions" element={<Resources></Resources>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        {/*  <Route path="/about/:id" element={<About></About>}></Route> is a way to include parameters in your */}
      </Routes>
    </main>
    <Foot></Foot>
  </section> 
=======
  <DocumentMeta {...meta}>
    <section>
      <NavBar></NavBar>
      <Toaster position='bottom-left' toastOptions={{duration:2000}} />
      <main>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route path="/register" element={<Registration></Registration>}></Route>
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
>>>>>>> origin/main
);
}


export default App;
