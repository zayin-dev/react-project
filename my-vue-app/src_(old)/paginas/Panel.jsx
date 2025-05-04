// src/componentes/Panel.jsx
import React, { useState } from "react";
import Modal from "react-modal";
import MapaColombia from "../componentes/MapaColombia";

Modal.setAppElement("#root");

const Panel = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [regionSeleccionada, setRegionSeleccionada] = useState("");

  // 1) Define aquí toda la información de tus regiones:
  const infoRegiones = {
    "Nariño": {
      descripcion:
        "Nariño, en el suroeste de Colombia, es famoso por su volcanismo y sus paisajes andinos.",
      imagen: "/imagenes/narino.jpg",
      datosClave: [
        "Capital: Pasto",
        "Altitud: 2.527 m",
        "Clima: templado de montaña",
      ],
    },
    "Antioquia": {
      descripcion:
        "Antioquia, con Medellín como capital, es un eje de cultura paisa y verdes montañas.",
      imagen: "/imagenes/antioquia.jpg",
      datosClave: ["Capital: Medellín", "Población: ~6,5 M", "Clima: templado"],
    },
    "Putumayo": {
      descripcion:
        "Putumayo, selvático y fronterizo con Ecuador y Perú, rico en biodiversidad.",
      imagen: "/imagenes/putumayo.jpg",
      datosClave: ["Capital: Mocoa", "Ecosistema: Amazonía", "Ríos: Putumayo"],
    },
    // ... añade tantas regiones como necesites
  };

  const handleRegionClick = (region) => {
    setRegionSeleccionada(region);
    setModalIsOpen(true);
  };
  const closeModal = () => setModalIsOpen(false);

  // Extrae la información de la región activa o deja un fallback
  const info = infoRegiones[regionSeleccionada] || {
    descripcion: "No hay información disponible.",
    imagen: null,
    datosClave: [],
  };

  return (
    <div>
      <MapaColombia onRegionClick={handleRegionClick} />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Información Turística"
        style={{
          content: {
            maxWidth: "500px",
            margin: "auto",
            padding: "2rem",
            borderRadius: "12px",
          },
        }}
      >
        <h2>{regionSeleccionada}</h2>

        {/* 2) Renderiza los datos según la región seleccionada */}
        <p>{info.descripcion}</p>

        {info.imagen && (
          <img
            src={info.imagen}
            alt={`Paisaje de ${regionSeleccionada}`}
            style={{ width: "100%", borderRadius: "8px", marginTop: "1rem" }}
          />
        )}

        {info.datosClave.length > 0 && (
          <ul style={{ textAlign: "left", marginTop: "1rem" }}>
            {info.datosClave.map((dato, i) => (
              <li key={i}>{dato}</li>
            ))}
          </ul>
        )}

        <button onClick={closeModal} style={{ marginTop: "1.5rem" }}>
          Cerrar
        </button>
      </Modal>
    </div>
  );
};

export default Panel;
