import React from "react";
interface InputFieldProps {
  id?: string;
  label: string;
  type: string;
  placeholder?: string;
  name: string;
  value: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputFieldProps> = ({
  type,
  placeholder,
  name,
  value = "",
  onChange,
  id,
  label,
}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        id={id}
      />
    </div>
  );
};

export default Input;
