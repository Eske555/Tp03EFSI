import "./Formulario.css";
import Boton from "./Boton";
import Input from "./Input";
import Titulo from "./Titulo.jsx";

function Formulario() {
  return (
    <div className="one-half column">
      <Titulo texto="Crear mi Cita" tipo="h2" />

      <form>
        <Input label="Nombre Mascota" name="mascota" />
        <Input label="Nombre Dueño" name="dueno" placeholder="Nombre dueño de la mascota" />
        <Input label="Fecha" name="fecha" tipo="date" />
        <Input label="hora" name="hora" tipo="time" />
        <Input label="Sintomas" name="sintomas" tipo="textarea" placeholder="" />

        <Boton texto="Agregar Cita" tipo="submit" clase="u-full-width button-primary" />
      </form>
    </div>
  );
}

export default Formulario;

