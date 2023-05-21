import "./Input.scss";
function Input(props) {
  return (
    <div className="Input">
      <label htmlFor={props.name} className="Input__label">
        {props.labelText}
      </label>
      <input
        type={props.type}
        name={props.name}
        className={`Input__input ${props.className}`}
        onChange={props.onChange}
        value={props.value}
      />
      {props.error?.message && (
        <div className="Input__errorMsg">{props.error?.message} </div>
      )}
    </div>
  );
}

export default Input;
