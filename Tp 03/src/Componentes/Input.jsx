function Input({ label, tipo = "text", name, placeholder, value, onChange }) {
  const placeholderText = placeholder ?? label;

  return (
    <div>
      <label>{label}</label>
      {tipo === "textarea" ? (
        <textarea
          name={name}
          className="u-full-width"
          placeholder={placeholderText}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          type={tipo}
          name={name}
          className="u-full-width"
          placeholder={placeholderText}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}

export default Input;