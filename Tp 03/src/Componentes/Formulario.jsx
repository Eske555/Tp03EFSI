import { useState } from "react";
import "./Formulario.css";
import Boton from "./Boton";
import Input from "./Input";
import Titulo from "./Titulo.jsx";

function Formulario({ setCitas }) {
  const [form, setForm] = useState({
    mascota: "",
    dueno: "",
    fecha: "",
    hora: "",
    sintomas: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setCitas((prev) => [...prev, form]);

    setForm({
      mascota: "",
      dueno: "",
      fecha: "",
      hora: "",
      sintomas: ""
    });
  };

  return (
    <div className="one-half column">
      <Titulo texto="Crear mi Cita" tipo="h2" />

      <form onSubmit={handleSubmit}>
        <Input label="Nombre Mascota" name="mascota" value={form.mascota} onChange={handleChange} />
        <Input label="Nombre Dueño" name="dueno" value={form.dueno} onChange={handleChange} />
        <Input label="Fecha" name="fecha" tipo="date" value={form.fecha} onChange={handleChange} />
        <Input label="Hora" name="hora" tipo="time" value={form.hora} onChange={handleChange} />
        <Input label="Sintomas" name="sintomas" tipo="textarea" value={form.sintomas} onChange={handleChange} />

        <Boton texto="Agregar Cita" tipo="submit" clase="u-full-width button-primary" />
      </form>
    </div>
  );
}

export default Formulario;