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
              <h2>Estudiante de ingeniería en ciencia de la  </h2>
              <h2>computación y tecnologías de la información</h2>
            </div>
            <div className="contenedor contacto">
              <div className="contacto-content">
              <div className="text">
              <h2>Contacto</h2>
              <p>Tel: +502 5318-4439</p>
              <p>LinkedIn: Nancy Mazariegos</p>
              <p>IG: gabymm._</p>
            </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contenedor sobre-mi">
          <div className="sobre-mi-content">
            <div className="text">
              <h1>¿Quién soy?</h1>
              <p>---------------------------------------------------------------------------------------</p>
              <p>-----------------------------------------------------------------------------</p>
              <h2>Actualmente soy estudiante de tercer año en la Universidad del Valle de Guatemala, como estudiante 
                me he encontrado con retos bastantes difíciles en mi ruta de aprendizaje. Mientras iba superadno reto por reto 
                fui aprendiendo cada vez más tecnolgías para aplicar a mi carrera. Ahora bien, como persona me considero una 
                persona responsable, organizada y creativa. Soy una persona amante del diseño, lo cual me ayuda a la hora de 
                comenzar un nuevo proyecto que se necesite elaborar algún diseño de cualquier tipo.
              </h2>
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
