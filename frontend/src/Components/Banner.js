import React from 'react';
import '../css/banner.css';
import Search from './Search';

const Banner = () => (
  <div className="banner">
    <div className="banner-content">
      <h1>Grupo Hotelero PalmasResort</h1>
      <p>Para ti, siempre tendremos el lugar perfecto.</p>
    </div>
    <Search />
  </div>
);

export default Banner;