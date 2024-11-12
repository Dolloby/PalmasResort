import React from 'react';
import '../css/aboutus.css'; // Importa el archivo CSS

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">Nosotros</h1>
      <p className="about-intro">
        Bienvenidos a <span className="about-brand">Palmas Resort</span>, donde el lujo se encuentra con el confort. Nuestro hotel se dedica a brindar una experiencia inolvidable, con un servicio de clase mundial, alojamientos exquisitos y comodidades incomparables.
      </p>
      <div className="about-section">
        <h2 className="about-subheading">Nuestra Misión</h2>
        <p className="about-text">
          Nuestra misión es crear una estancia única e inolvidable para cada huésped, ofreciendo un servicio personalizado en un ambiente cómodo y lujoso. Queremos ser tu destino preferido, ya sea que busques relajación, negocios o aventura.
        </p>
      </div>
      <div className="about-section">
        <h2 className="about-subheading">Nuestra Historia</h2>
        <p className="about-text">
          Fundado en [Año de Establecimiento], Palmas Resort ha sido un símbolo de hospitalidad y excelencia. Ubicado en el corazón de [Ubicación], nuestro hotel ofrece una mezcla perfecta de sofisticación moderna y encanto local, asegurando una experiencia cómoda y auténtica.
        </p>
      </div>
      <div className="about-section">
        <h2 className="about-subheading">Conoce al Equipo</h2>
        <p className="about-text">
          Nuestro equipo está apasionado por hacer de tu estancia algo excepcional. Desde nuestro personal de recepción hasta nuestros expertos en cocina, cada miembro está dedicado a brindar el mejor nivel de servicio con una sonrisa.
        </p>
      </div>
      <div className="about-section">
        <h2 className="about-subheading">Contáctanos</h2>
        <p className="about-text">
          ¿Listo para reservar? ¿Tienes preguntas o solicitudes especiales? No dudes en contactarnos al (123) 456-7890 o envíanos un correo a reservas@palmasresort.com.
        </p>
      </div>
    </div>
  );
};

export default About;