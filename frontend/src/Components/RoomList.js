import React from 'react';
import RoomCard from './RoomCard';
import '../css/roomlist.css';

const rooms = [
  { image: 'https://cf2.bstatic.com/xdata/images/hotel/square600/599820327.webp?k=b1a07683c0149bc70cbf724fcb9cb80b42f93dadf5da057979aa14abbf57a690&o=', name: 'Hotel Casa Laureles Malibú', price: '$194.000', address: 'Calle 32F #66C-47' },
  { image: 'https://cf2.bstatic.com/xdata/images/hotel/square600/509264193.webp?k=4d5120332d981d07ed95a76d8b6d5eb1c296d55018ec075325b7aba330d9f1ed&o=', name: 'La Casona Hotel Boutique', price: '$245.000', address: 'Calle 48 #65-88' },
  { image: 'https://cf2.bstatic.com/xdata/images/hotel/square600/294692393.webp?k=6f5ea2ad31dccb9e2bc366c999d770bcc2ebb4e682af4c25a62537f499b98882&o=', name: 'Poblado Park Guest House', price: '$233,000', address: 'Calle 8#43A-89' },
  { image: 'https://cf2.bstatic.com/xdata/images/hotel/square600/571407276.webp?k=c54cedc5cc0e687de86ac90043e804899f31d237e9a9a7709eee33082a8ba0d2&o=', name: 'Indie Universe Creative Hotel', price: '$317.000', address: 'Avenida 33 #66B - 123' },
  { image: 'https://cf2.bstatic.com/xdata/images/hotel/square600/228011559.webp?k=f40233713c4fe7d26338f8512b24bd799c77551eb6dd9bbe1f1a0dcbdf1cd3ec&o=', name: 'Hotel Boutique Laureles Medellin', price: '$304.000', address: 'Diagonal 74B #32 - 91' },
];

const RoomList = () => (
  <section className="room-list">
    <h2>Navega por nuestros hoteles en Medellín</h2>
    <div className="room-cards">
      {rooms.map((room, index) => (
        <RoomCard 
        key={index}
        image={room.image} // Pasando la URL de la imagen
        name={room.name} 
        price={room.price} 
        address={room.address} 
        />
      ))}
    </div>
  </section>
);

export default RoomList;