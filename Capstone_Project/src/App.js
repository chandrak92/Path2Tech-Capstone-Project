import React, {useState, useEffect} from 'react';
import DocumentMeta from 'react-document-meta';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import Registration from './Pages/Register';
import Profile from './Pages/Profile';
import SelectQuiz from './Pages/Quiz';
import Contact from './Pages/Contact';
import Resources from'./Pages/Resources';
import NotFound from './Pages/NotFound';
import Foot from './Components/Foot';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import './App.css';

axios.defaults.withCredentials = true

function App() {
  const meta = {
    title: 'Coding Guppies Capstone',
    description: 'I am a webpage dedicated to changing the world, climate change, food waste, textile waste, action items, natural disasters, heatwave, flooding',
    canonical: 'http://localhost:3000',
    meta: {
      charset: 'utf-8',
      name: {
        viewport: `width=device-width, initial-scale=1.0`,
        keywords: `react,meta,document,html,tags`
      }
    }
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  // const [userName, setUserName] = useState('');
  // const [firstName, setFirstName] = useState();
  // const [lastName, setLastName]= useState();
  // const [email, setEmail]= useState();
  // const [password, setPassword]= useState();
  // const [birthDate, setBirthDate]= useState();
  // const [profileImage, setProfileImage]= useState();
  // const [error, setError]= useState(false);
  // const [loading, setLoading]= useState(false);
  const navigate = useNavigate();
  // Login
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  // Register
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    birthDate: "",
    profileImage: "",
    userName: "" 
  });
  // Database i.e once logged in
  const [user, setUser]= useState({});

  //Registration Logic
  const registerUser = async (e) => {
    e.preventDefault();
    const {firstName, lastName, birthDate, profileImage, userName, email, password} = userData;
    console.log(firstName, lastName, birthDate, profileImage, userName, email, password);
    console.log(`${process.env.REACT_APP_URL}/register`);
    try {
      const response = await axios.post(`${process.env.REACT_APP_URL}/register`, {
        firstName, lastName, birthDate, profileImage, userName, email, password
      });
      console.log(response);
      setUser(response.data);
      if(data.error) {
        toast.error(data.error);
      } else {
        setUserData({
          email: "",
          password: "",
          firstName: "",
          lastName: "",
          birthDate: "",
          profileImage: "",
          userName: ""
        });
        toast.success("Registration Successful. Welcome!");
        setIsRegistered(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

 useEffect(() => {
  if (isRegistered) {
    console.log(user);
    navigate("/profile");
  }
 }, [isRegistered, navigate, user]);

  //Login Logic
  function handleLogin() {
    setIsLoggedIn(true);
  };

  function handleLogout() {
    setIsLoggedIn(false);
    setUser({});
  };

  const loginUser = async (e) => {
    e.preventDefault()
    const {email, password} = data;
    console.log(email, password);
    console.log(`${process.env.REACT_APP_URL}/login`);
    try {
      const response= await axios.post(`${process.env.REACT_APP_URL}/login`,{
        email,
        password
      });
      setUser(response.data[0]);
      console.log(response.data);
      // view inspect to review the data received on Front End
      // console.log(response);
      // console.log(response.data);
      if(response.error){
        toast.error(response.error)
      } else {
        setData({});
        toast.success("Login Successful. Welcome!");
        navigate("/");
      }
    } catch(error) {
      console.log(error);
    }
  };

  useEffect(() => { 
    const fetchData = async () => { 
      // try {
          if (Object.keys(user).length > 0) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      // } catch (error) {
      //     setError(error);
      // } finally {
      //     setLoading(false);
      // }
    };
    fetchData();
},[user]);

return (
  <DocumentMeta {...meta}>
    <section>
      <header>
        <NavBar
        username={user?.userName}
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
        onLogin={handleLogin}
        loginData={data}
        loginUser={loginUser}
        setLoginData={setData}
        >
        </NavBar>
        <Toaster position='bottom-left' toastOptions={{duration:4000}} />
      </header>
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/profile" element={isLoggedIn ?
          <Profile
          user={user}>
          </Profile> : <Navigate to="/register" />}></Route>
          <Route path="/register" element={
            <Registration
            registerUser={registerUser}
            userData={userData}
            setUserData={setUserData}>
            </Registration>}></Route>
          <Route path="/quiz" element={<SelectQuiz></SelectQuiz>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/resources" element={<Resources></Resources>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
          {/*  <Route path="/about/:id" element={<About></About>}></Route> is a way to include parameters in your */}
        </Routes>
      </main>
      <footer className="footer">
      <Foot></Foot>
      </footer>
    </section>
  </DocumentMeta>
);
}


export default App;
