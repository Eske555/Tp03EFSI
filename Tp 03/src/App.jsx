import { useState } from "react";
import Header from "./Componentes/Header";
import Formulario from "./Componentes/Formulario";
import ListaCita from "./Componentes/ListaCita";

function App() {

  const citasIniciales = [
    { mascota: "Nina",  dueno: "Martin", fecha: "2021-08-05", hora: "08:20", sintomas: "Le duele la pierna" },
    { mascota: "Sifon", dueno: "Flecha", fecha: "2023-08-05", hora: "09:24", sintomas: "Duerme mucho" },
    { mascota: "Floki", dueno: "Ari",    fecha: "2023-08-05", hora: "16:15", sintomas: "No está comiendo" },
  ];

  const [citas, setCitas] = useState(citasIniciales);

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <Formulario setCitas={setCitas} />
          <ListaCita citas={citas} setCitas={setCitas} />
        </div>
      </div>
    </>
  );
}

export default App;