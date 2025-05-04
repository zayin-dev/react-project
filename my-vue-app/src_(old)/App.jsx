// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BarraNavegacion from './componentes/Navbar';
import Footer from './componentes/Footer';
import Panel from './paginas/Panel';
import Login from './paginas/Login';
import Inicio from './paginas/Inicio'; // Asegúrate de importar el componente Inicio
import 'bootstrap/dist/css/bootstrap.min.css';
import './estilos/App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="page-container">
        <BarraNavegacion />
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/panel" element={<Panel />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
