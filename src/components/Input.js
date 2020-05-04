import React from "react";
const Input = (props) => {
  const { inputName, type, value, handleInputField, label, error } = props;
  return (
    <div>
      <label htmlFor="{inputName}">{label}</label>

      <input
        value={value}
        type={type}
        className="form-control"
        id={inputName}
        name={inputName}
        onChange={handleInputField}
      />
      {error && <p className="text-danger small">{error}*</p>}
    </div>
  );
};

export default Input;
