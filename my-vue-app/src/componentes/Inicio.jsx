import { Container, Row, Col, Card } from 'react-bootstrap';
import Carrusel from '../componentes/Carrusel';
import FormularioConCollapse from '../componentes/FormularioConCollapse';

function Inicio() {
  return (
    <>
      {/* Carrusel fuera del Container para que ocupe todo el ancho */}
      <div className="carrusel-wrapper">
        <Carrusel />
      </div>

      <Container className="mt-4 text-center">
        <h1 className="mb-4">Bienvenido a Expora Colombia</h1>

        <Row className="mt-5">
          <Col xs={12} md={6}>
            <h3>Columna 1</h3>
          
            <p>
              <span style={{ fontSize: '24px', color: 'blue' }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus quia exercitationem, necessitatibus, aperiam natus maiores, cupiditate repudiandae non odit officiis libero harum suscipit voluptatibus voluptate at laudantium optio atque voluptates.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolorem mollitia perferendis quidem facere esse veritatis doloribus exercitationem accusantium neque provident tempore, quia reprehenderit iusto non, dolores quasi debitis nulla.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor odio eveniet perspiciatis, aliquid eligendi veniam sunt quisquam sed deserunt voluptates commodi, excepturi placeat impedit eum error optio totam. Cupiditate, natus!
              </span>
            </p>
          </Col>
          <Col xs={12} md={6}>
            <h3>Columna 2</h3>
            <p>
              <span style={{ fontSize: '20px', color: 'green' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sunt quis exercitationem dolorem quo illum architecto expedita culpa nemo error incidunt reiciendis aliquam quisquam ad a voluptate, inventore eligendi tenetur?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam modi unde magni dolorum quis autem quae praesentium eius perspiciatis voluptatum minima illo rerum magnam, at dolores asperiores eaque odit incidunt!
              </span>
            </p>
          </Col>
        </Row>

        {/* Aquí agregamos el formulario dentro de un nuevo Row */}
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={10} lg={8}>
            <Card className="p-4 shadow-lg rounded-4">
              <h2 className="text-center mb-4">Formulario de Registro</h2>
              <FormularioConCollapse />
            </Card>
          </Col>
        </Row>
        
      </Container>
    </>
  );
}

export default Inicio;