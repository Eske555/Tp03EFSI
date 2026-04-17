import "./ListaCita.css";
import { useState } from "react";
import Cita from "./Cita";
import Titulo from "./Titulo.jsx";

const citasIniciales = [
  { mascota: "Nina",  dueno: "Martin", fecha: "2021-08-05", hora: "08:20", sintomas: "Le duele la pierna" },
  { mascota: "Sifon", dueno: "Flecha", fecha: "2023-08-05", hora: "09:24", sintomas: "Duerme mucho" },
  { mascota: "Floki", dueno: "Ari",    fecha: "2023-08-05", hora: "16:15", sintomas: "No está comiendo" },
];

function ListaCita() {
  const [citas] = useState(citasIniciales);

  return (
    <div className="one-half column lista-citas">
      <Titulo texto="Administra tus citas" tipo="h2" />

      {citas.map((cita, i) => (
        <Cita
          key={i}
          mascota={cita.mascota}
          dueno={cita.dueno}
          fecha={cita.fecha}
          hora={cita.hora}
          sintomas={cita.sintomas}
        />
      ))}
    </div>
  );
}

export default ListaCita;