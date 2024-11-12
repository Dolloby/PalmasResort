import React from 'react';
import '../css/roomcard.css';

const RoomCard = ({ image, name, price, address }) => (
  <div className="room-card">
    <img src={image} alt={name} />
    <br />
    <h3>{name}</h3>
    <p>{address}</p>
    <p className="price">{price}</p>
    <button className='roomcard-btn'>Ver Mas</button>
  </div>
);

export default RoomCard;