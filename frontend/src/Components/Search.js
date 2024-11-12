import React from "react";
import '../css/searchcontainer.css'

const Search = () => {
    return (
    <div className="search-container">
        <h2 className="search-title">Hoteles</h2>
        <input type="text" className="search-input" placeholder="Buscar destino..." />
        <div className='date'>
          <input type="text" className="date-input" placeholder="dd/mm/aaaa" />
          <input type="text" className="date-input" placeholder="dd/mm/aaaa" />
        </div>
        <button className="search-button">Buscar</button>
    </div>
    );
  };
  
  export default Search;