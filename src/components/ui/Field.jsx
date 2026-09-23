export default function Field({ label, name, placeholder, type = "text", required, className = "", ...inputProps }) {
  return (
    <label className={`field ${className}`}>
      <span>{label}</span>
      <input type={type} name={name} placeholder={placeholder} required={required} {...inputProps} />
    </label>
  );
}
