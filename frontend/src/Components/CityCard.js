import React from 'react';
import '../css/citycard.css';

const CityCard = ({ image, name }) => (
  <div className="city-card">
    <img src={image} alt={name} />
    <br />
    <h3>{name}</h3>
    <button className='roomcard-btn'>Ver Mas</button>
  </div>
);

export default CityCard;