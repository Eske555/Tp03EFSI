function Boton({ texto, tipo = "button", clase = "", onClick }) {
  return (
    <button type={tipo} className={clase} onClick={onClick}>
      {texto}
    </button>
  );
}

export default Boton;