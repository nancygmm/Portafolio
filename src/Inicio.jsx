import React from "react";
import Cursor from './Componentes/Cursor';
import Portada from './Imagenes/Portada.jpg';
import Grad from './Imagenes/Grad.jpg';
import Icon from './Imagenes/GitHub.png';

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
              <p>----------------------------------------------------------------------------------------------------------</p>
              <p>----------------------------------------------------------------------------------------------</p>
              <h2 className="seccion">Estudiante de ingeniería en ciencia de la computación y tecnologías de la información</h2>
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
              <h2 className="seccion">
              Actualmente, soy estudiante de tercer año en la Universidad del Valle de Guatemala, donde he enfrentado y superado numerosos 
              desafíos en mi trayectoria académica. Estos retos han sido oportunidades para ampliar mi conocimiento en diversas tecnologías 
              relevantes para mi carrera.
              </h2>
              <h2>
              Como profesional, me destaco por ser una persona responsable, organizada y creativa. Me encanta el diseño, lo cual me 
              permite aportar complementos en  proyectos que requieren la elaboración de diseños de distintas maneras. Además, 
              poseo habilidades en programación que complementan mi capacidad para desarrollar proyectos aún más complejos. 
              </h2>
              <h2>
              Estoy comprometida con el constante aprendizaje de nuevos conocimientos para aplicar y expandir mis competencias 
              en diseño y programación.
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
              <p>----------------------------------------------------------------------------------------------</p>
              <p>-------------------------------------------------------------------------------------</p>
              <h4>2022 - Hasta la fecha</h4>
              <h2>- Universidad del Valle de Guatemala</h2>
              <h4>2009 - 2021</h4>
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
              <h2 className="seccion">
                Programación:
              </h2>
              <h3>- Python</h3>
              <h3>- Java</h3>
              <h3>- SQL</h3>
              <h3>- Javascript</h3>
              <h3>- Kotlin</h3>
              <h3>- C/C++</h3>
              <h3>- Git</h3>
              <h2 className="seccion">
                Diseño:
              </h2>
              <h3>- Figma</h3>
              <h3>- Procreate</h3>
              <h3>- Adobe Photoshop</h3>
              <h3>- Adobe Fresco</h3>
              <h3>- Adobe Illustrator</h3>
            </div>
          </div>
        </div>
        <div className="contenedor soft-skills">
          <div className="soft-skills-content">
            <div className="text">
              <h1>Soft skills</h1>
              <p>---------------------------------------------------------------------------------------</p>
              <p>-----------------------------------------------------------------------------</p>
              <h2 className="seccion">no se que poner</h2>
            </div>
          </div>
        </div>
        <div className="contenedor proyectos">
          <div className="proyectos-content">
          <div className="image">
              <img src={Icon} alt="Icon" />
            </div>
            <div className="text">
              <h1>Proyectos</h1>
              <p>---------------------------------------------------------------------------------------</p>
              <p>-----------------------------------------------------------------------------</p>
              <h2 className="seccion">no se que poner</h2>
            </div>
          </div>
        </div>
      </div>
      <Cursor />
    </div>
  );
}

export default Inicio;
