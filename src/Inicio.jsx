import React from "react";
import Cursor from './Cursor';
import Portada from './Imagenes/Portada.jpg';
import Grad from './Imagenes/Grad.jpg';

function Inicio() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <div className="contenedor portada">
          <div className="portada-content">
            <div className="image">
              <img src={Portada} alt="Portada" />
            </div>
            <div className="text">
              <h1>Nancy Mazariegos</h1>
              <p>---------------------------------------------------------------------------------------</p>
              <p>-----------------------------------------------------------------------------</p>
              <h2>Estudiante de ingeniería en ciencia de la</h2>
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
              <h2>
                Actualmente soy estudiante de tercer año en la Universidad del
                Valle de Guatemala, como estudiante me he encontrado con retos
                bastantes difíciles en mi ruta de aprendizaje. Mientras iba
                superando reto por reto fui aprendiendo cada vez más tecnologías
                para aplicar a mi carrera. Ahora bien, como persona me considero
                una persona responsable, organizada y creativa. Soy una persona
                amante del diseño, lo cual me ayuda a la hora de comenzar un
                nuevo proyecto que se necesite elaborar algún diseño de
                cualquier tipo.
              </h2>
            </div>
          </div>
        </div>
        <div className="contenedor educacion">
          <div className="educacion-content">
            <div className="image">
              <img src={Grad} alt="Graduación" />
            </div>
            <div className="text">
              <h1>Educación</h1>
              <p>---------------------------------------------------------------------------------------</p>
              <p>-----------------------------------------------------------------------------</p>
              <h3>2022 - Hasta la fecha</h3>
              <h2>- Universidad del Valle de Guatemala</h2>
              <h3>2009 - 2021</h3>
              <h2>- Colegio Guatemalteco Bilingüe</h2>
            </div>
          </div>
        </div>
        <div className="contenedor habilidades">
          <div className="habilidades-content">
            <div className="text">
              <h1>Habilidades</h1>
              <p>---------------------------------------------------------------------------------------</p>
              <p>-----------------------------------------------------------------------------</p>
              <h2>no se que poner</h2>
            </div>
          </div>
        </div>
      </div>
      <Cursor />
    </div>
  );
}

export default Inicio;
