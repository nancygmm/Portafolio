import React from "react";
import Cursor from './Cursor';
import Portada from './Imagenes/Portada.jpg';

function Inicio() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <div className="contenedor portada">
          <div className="portada-content">
            <div className="image">
            <img src={Portada}/>
            </div>
            <div className="text">
              <h1>Nancy Mazariegos</h1>
              <p>---------------------------------------------------------------------------------------</p>
              <p>-----------------------------------------------------------------------------</p>
              <h2>Estudiante de ingeniería en</h2>
              <h2>ciencia de la computación y</h2>
              <h2>tecnologías de la información</h2>
            </div>
            <div className="contenedor contacto">
              <div className="contacto-content">
              <div className="text">
              <h1>Contacto</h1>
              <h2>Tel: +502 5318-4439</h2>
              <h2>LinkedIn: Nancy Mazariegos</h2>
              <h2>IG: gabymm._</h2>
            </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contenedor sobre-mi">
          <div className="sobre-mi-content">
            <div className="text">
              <h1>Sobre mí</h1>
              <h2>Soy estudiante de tercer año en la Universidad del Valle de Guatemala</h2>
            </div>
          </div>
        </div>
        <div className="contenedor educacion">
          <h1>Educación</h1>
          <p>Contenido de educación</p>
        </div>
        <div className="contenedor experiencia-laboral">
          <h1>Experiencia Laboral</h1>
          <p>Contenido de experiencia laboral</p>
        </div>
      </div>
      <Cursor />
    </div>
  );
}

export default Inicio;
