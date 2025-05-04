import React, { useState } from 'react';
import { Form, Button, Collapse, Card } from 'react-bootstrap';

function FormularioConCollapse() {
  const [mostrarAdicionales, setMostrarAdicionales] = useState(false);

  return (
    <Form>
      <Form.Group className="mb-3" controlId="nombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ingresa tu nombre" />
      </Form.Group>

      <Button
        variant="outline-primary"
        onClick={() => setMostrarAdicionales(!mostrarAdicionales)}
        aria-controls="datos-adicionales"
        aria-expanded={mostrarAdicionales}
        className="mb-3"
      >
        ¿Tienes datos adicionales?
      </Button>

      <Collapse in={mostrarAdicionales}>
        <div id="datos-adicionales">
          <Card body>
            <Form.Group className="mb-3" controlId="telefono">
              <Form.Label>Teléfono adicional</Form.Label>
              <Form.Control type="text" placeholder="Ingresa otro número" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="direccion">
              <Form.Label>Dirección alternativa</Form.Label>
              <Form.Control type="text" placeholder="Ingresa otra dirección" />
            </Form.Group>
          </Card>
        </div>
      </Collapse>

      <Button variant="success" type="submit">Enviar</Button>
    </Form>
  );
}

export default FormularioConCollapse;
