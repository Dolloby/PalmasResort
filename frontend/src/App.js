import React from 'react';
import AboutUs from './Components/AboutUs'
import Banner from './Components/Banner';
import CityCard from './Components/CityCard';
import CityList from './Components/CityList';
import Dashboard from './Components/Dashboard';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Hotel from './Components/Hotel';
import Loggin from './Components/Loggin';
import PrivateRoute from './Components/PrivateRoute';
import RoomCard from './Components/RoomCard';
import RoomList from './Components/RoomList';
import Search from './Components/Search';
import SignIn from './Components/SignIn';
import { BrowserRouter as Router, Routes, Route } from'react-router-dom';
// import logo from './logo.svg';
import './css/app.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservaciones" element={<RoomList />} />
        <Route path="/hoteles" element={<Hotel />} />
        <Route path="/login" element={<Loggin />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
