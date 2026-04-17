function Titulo({ texto, tipo = "h2" }) {
  const Tag = tipo; 
  return <Tag>{texto}</Tag>;
}

export default Titulo;