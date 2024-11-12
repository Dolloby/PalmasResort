import React from 'react';
import Banner from './Banner';
import RoomList from './RoomList';
import CityList from './CityList';
import Footer from './Footer';
import '../css/home.css';

function Home() {
  return (
    <div className="home">
      <Banner />
      <RoomList />
      <br />
      <CityList />
      <Footer />
    </div>
  );
}

export default Home;
