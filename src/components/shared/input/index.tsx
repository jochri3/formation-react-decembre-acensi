import React from "react";
interface InputFieldProps {
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
  label,
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        id={name}
      />
    </div>
  );
};

export default Input;
