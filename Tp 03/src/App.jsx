import { useState } from "react";
import Header from "./Componentes/Header";
import Formulario from "./Componentes/Formulario";
import ListaCita from "./Componentes/ListaCita";

function App() {
  const [citas, setCitas] = useState([]);

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