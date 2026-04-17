function Boton({ texto, tipo = "button", clase = "" }) {
  return <button type={tipo} className={clase}>{texto}</button>;
}

export default Boton;