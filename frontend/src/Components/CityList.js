import React from 'react';
import CityCard from './CityCard';
import '../css/citylist.css';

const cities = [
  { image: 'https://cf2.bstatic.com/xdata/images/xphoto/300x240/140035342.jpg?k=03ab34f4140def5a7bc14604c7c6a486d6930196f0afb8e5040ebcc0117d1f9c&o=', name: 'Nuquí'},
  { image: 'https://cf2.bstatic.com/xdata/images/xphoto/300x240/140035429.jpg?k=9f988f96afc07dcc73309a2df1be461ee955a30eee9b993a132425b7d8d0fe6f&o=', name: 'Bahia Solano'},
  { image: 'https://cf2.bstatic.com/xdata/images/xphoto/300x240/140035344.jpg?k=cb266f1577e61c4ff5b334f0b45d8d6ae8af3658b89f9691f41f13a67ee30857&o=', name: 'Necoclí'},
  { image: 'https://cf2.bstatic.com/xdata/images/xphoto/300x240/140035431.jpg?k=82df96a07635c32762a64bd154416a5ab1a3ac799687059ddf9ca8748d407168&o=', name: 'Arboletes'},
  { image: 'https://cf2.bstatic.com/xdata/images/xphoto/300x240/140035413.jpg?k=3060ad15708145ce22bf9458ecfcad5032f61102d0450c91e0aa29819551ae6c&o=', name: 'Capurgana'},
];

const CityList = () => (
  <section className="city-list">
    <h2>Explora Colombia</h2>
    <div className="city-cards">
      {cities.map((city, index) => (
        <CityCard 
        key={index}
        image={city.image} // Pasando la URL de la imagen
        name={city.name} 
        />
      ))}
    </div>
  </section>
);

export default CityList;