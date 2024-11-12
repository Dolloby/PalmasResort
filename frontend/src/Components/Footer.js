import React from "react";
import '../css/footer.css'

function Footer(){
    return (
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section about">
              <h3>PalmasResort</h3>
              <p>
                Encuentra el lugar perfecto para tus vacaciones. Descubre hoteles, casas y cabañas en los destinos más increíbles.
              </p>
            </div>
            <div className="footer-section links">
              <h4>Enlaces rápidos</h4>
              <ul>
                <li><a href="./">Inicio</a></li>
                <li><a href="./">Explorar</a></li>
                <li><a href="./">Servicios</a></li>
                <li><a href="./">Contacto</a></li>
              </ul>
            </div>
            <div className="footer-section contact">
              <h4>Contacto</h4>
              <p>Email: contacto@palmasresort.com</p>
              <p>Teléfono: +57 321 54 89</p>
              <p>Dirección: Calle 33 #66B - 45, Medellín, Colombia</p>
            </div>
          </div>
          <div className="footer-bottom">
          © 2024 Palmas Resort | Todos los derechos reservados
          </div>
        </footer>
      );
    };
    
    export default Footer;