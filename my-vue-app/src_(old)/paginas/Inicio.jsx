// src/paginas/Inicio.jsx
import { Container, Row, Col, Card } from 'react-bootstrap';
import Carrusel from '../componentes/Carrusel';
import FormularioConCollapse from '../componentes/FormularioConCollapse';
import Feria from '../imagenes/Foto_Feria.jpg'; // Asegúrate de tener esta imagen en la carpeta correcta
import Festival from'../imagenes/Foto_Festival.webp';
import Libro from '../imagenes/Foto_libro.png'
function Inicio() {
  return (
    <>
      {/* Carrusel fuera del Container para que ocupe todo el ancho */}
      <div className="carrusel-wrapper">
        <Carrusel />
      </div>

      <Container className="mt-4 text-center">
        <h1 className="mb-4">Bienvenido a Explora Colombia</h1>
        <h2>Eventos proximos</h2>
        <Row className="mt-5">
          <Col xs={12} md={4}>
            <h3>Feria de las flores</h3>
            <a href="https://visitarmedellin.com/programacion-feria-de-las-flores/" target="_blank" rel="noopener noreferrer">
               <img
               src={Feria}
               alt="Feria de las flores Medellín"
               style={{ width: '80%', height: 'auto', borderRadius: '15px', marginBottom: '1rem' }}
              />
            </a>
            <p>
              <span style={{ fontSize: '20px', color: 'black' }}>
              Una de las festividades más emblemáticas de Colombia, donde se destacan los desfiles de silleteros, conciertos, exposiciones florales y eventos culturales que celebran la identidad paisa.
              </span>
            </p>
          </Col>
          <Col xs={12} md={4}>
            <h3>Festival Vallenato</h3>
            <a href="https://festivalvallenato.com/" target="_blank" rel="noopener noreferrer">
               <img
               src={Festival}
               alt="Festival Vallenato"
               style={{ width: '80%', height: 'auto', borderRadius: '15px', marginBottom: '1rem' }}
              />
            </a>

            <p>
              <span style={{ fontSize: '20px', color: 'black' }}>
              Este festival es el epicentro de la música vallenata, donde se rinde homenaje a los juglares y se celebran concursos de acordeoneros, piquerías y compositores.
              </span>
            </p>
          </Col>

          <Col xs={12} md={4}>
            <h3>Feria internacional del libro</h3>
            <a href="https://feriadellibro.com/" target="_blank" rel="noopener noreferrer">
               <img
               src={Libro}
               alt="Festival Internacional del libro"
               style={{ width: '80%', height: 'auto', borderRadius: '15px', marginBottom: '1rem' }}
              />
            </a>
            <p>
              <span style={{ fontSize: '20px', color: 'black' }}>
              Uno de los eventos literarios más importantes de América Latina, que reúne a escritores, editoriales y lectores en una celebración de la literatura y la cultura.
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
