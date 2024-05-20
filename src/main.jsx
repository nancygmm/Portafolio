import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./Inicio";
import Proyectos from "./Proyectos";


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path="/projects" element={<Proyectos/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);