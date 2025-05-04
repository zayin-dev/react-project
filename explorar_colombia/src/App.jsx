import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BarraNavegacion from './componentes/Navbar';
import Footer from './componentes/Footer';
import Panel from './paginas/Panel';
import Login from './paginas/Login';
import Inicio from './paginas/Inicio';
import PrivateRoute from './componentes/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import './estilos/App.css';
import ChatBot from './componentes/ChatBot';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
    // Aquí podrías redirigir al usuario al panel después del login exitoso
    // navigate('/panel'); // Necesitarías usar useNavigate aquí
  };

  const logout = () => {
    setIsAuthenticated(false);
    // Aquí podrías realizar otras acciones de cierre de sesión
  };

  return (
    <BrowserRouter>
      <div className="page-container">
        <BarraNavegacion isAuthenticated={isAuthenticated} onLogout={logout} />
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Inicio />} />
            {/* Usa PrivateRoute como un componente que envuelve la ruta protegida */}
            <Route path="/panel" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route index element={<Panel />} /> {/* El componente protegido ahora es un hijo */}
            </Route>
            <Route path="/login" element={<Login onLogin={login} />} />
          </Routes>
        </div>
        <Footer />
        {/* Agregamos el componente del chatbot */}
        <ChatBot />
      </div>
    </BrowserRouter>
  );
}

export default App;