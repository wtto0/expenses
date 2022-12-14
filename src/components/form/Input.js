import styles from "./Input.module.css";
import Warning from "../elements/Warning";

function Input({
  label,
  type,
  rows,
  name,
  placeholder,
  handleOnChange,
  value,
  warning,
}) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
        rows={rows}
      ></input>
      {warning && <Warning text={warning} />}
    </div>
  );
}

export default Input;
