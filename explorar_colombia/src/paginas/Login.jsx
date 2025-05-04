import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [show, setShow] = useState(true);
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleClose = () => {
    setShow(false);
    navigate('/');
  };

  const handleLogin = () => {
    if (usuario === 'edwin' && clave === '1234') {
      localStorage.setItem('loggedIn', 'true');
      onLogin(true); // Llama a la función onLogin y pasa true
      navigate('/panel');
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Iniciar sesión</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              value={clave}
              onChange={(e) => setClave(e.target.value)}
            />
          </Form.Group>
          {error && <p className="text-danger">{error}</p>} {/* Muestra el error */}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleLogin}>
          Entrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Login;