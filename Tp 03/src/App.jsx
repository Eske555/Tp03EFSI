import Header from "./Componentes/Header";
import Formulario from "./Componentes/Formulario";
import ListaCita from "./Componentes/ListaCita";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <Formulario />
          <ListaCita />
        </div>
      </div>
    </>
  );
}

export default App;