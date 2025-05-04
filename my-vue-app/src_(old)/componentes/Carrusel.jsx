import { Carousel } from 'react-bootstrap';
import Cartagena from '../imagenes/Foto_cartagena.jpg';
import Medellin from '../imagenes/Foto_medellin.jpg'; 
import Tayrona from '../imagenes/Foto_tayrona.jpeg';
import Eje_cafetero from '../imagenes/Foto_eje_cafetero.jpg';
import Guatape from '../imagenes/Foto_guatape.jpg';
import '../estilos/Carrusel.css';

function Carrusel() {
  return (
    <Carousel fade interval={2000} className="carousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Cartagena}
          alt="Cartagena"
        
        />
        <Carousel.Caption>
          <h5 className="text-dark bg-light p-2 rounded">Cartagena</h5>
          <p className="text-dark bg-light p-2 rounded">Una deliciosa manzana roja.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Medellin}
          alt="Medellin"
         
        />
        <Carousel.Caption>
          <h5 className="text-dark bg-light p-2 rounded">Medellín</h5>
          <p className="text-dark bg-light p-2 rounded">Una jugosa pera verde.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Tayrona}
          alt="Tayrona"
        />
        <Carousel.Caption>
          <h5 className="text-dark bg-light p-2 rounded">Tayrona</h5>
          <p className="text-dark bg-light p-2 rounded">Una dulce papaya tropical.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Eje_cafetero}
          alt="Eje Cafetero"
        />
        <Carousel.Caption>
          <h5 className="text-dark bg-light p-2 rounded">Eje Cafetero</h5>
          <p className="text-dark bg-light p-2 rounded">Una fresca fresa roja.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Guatape}
          alt="Guatape"
        />
        <Carousel.Caption>
          <h5 className="text-dark bg-light p-2 rounded">Guatapé</h5>
          <p className="text-dark bg-light p-2 rounded">Una dulce papaya tropical.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;
