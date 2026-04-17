import "./ListaCita.css";
import Cita from "./Cita";
import Titulo from "./Titulo.jsx";

function ListaCita({ citas, setCitas }) {

  const eliminarCita = (index) => {
    const confirmar = window.confirm("¿Eliminar esta cita?");
    if (!confirmar) return;

    const nuevasCitas = citas.filter((_, i) => i !== index);
    setCitas(nuevasCitas);
  };

  return (
    <div className="one-half column lista-citas">
      <Titulo texto="Administra tus citas" tipo="h2" />

      {citas.length === 0 && <p>No hay citas</p>}

      {citas.map((cita, i) => (
        <Cita
          key={i}
          {...cita}
          onEliminar={() => eliminarCita(i)}
        />
      ))}
    </div>
  );
}

export default ListaCita;