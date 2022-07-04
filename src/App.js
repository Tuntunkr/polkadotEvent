import React from 'react';
import Navbar from "./pages/Header/Navbar"
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import ContactUs from './pages/ContactUs/ContactUs';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import AddConference from './pages/AddConference/AddConference';



// import './App.css';


function App() {
  return (
    
    <>
    
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} /> 
        {/* <Route path="/event" element={<Event/>} /> */}
        <Route path="/addconference" element={<AddConference/>} />
        {/* <Route path="/blog" element={<Blog/>} /> */}
        <Route path="/contactus" element={<ContactUs/>} /> 
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/signin" element={<SignIn/>} /> 
      </Routes>

      
    </>
  );
}

export default App;
