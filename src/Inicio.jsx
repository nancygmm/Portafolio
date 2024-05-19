import React from "react";
import Footer from "./Componentes/Footer";
import Cursor from './Cursor';

function Inicio() {
  return (
    <>
      <div className="wrapper">
        <main className="contenedor-info">
          <h1>Title</h1>
          <p>Hola</p>
        </main>
        <Footer />
      </div>
      <Cursor />
    </>
  );
}

export default Inicio;
