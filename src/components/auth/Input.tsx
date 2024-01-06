import { ChangeEvent } from "react";

interface Props {
  label: string;
  placeholder: string;
  id: string;
  value: string;
  errorMessage?: string;
  type?: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export default function Input({
  type,
  label,
  placeholder,
  id,
  errorMessage,
  value,
  handleChange,
}: Props) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type || "text"}
        id={id}
        name={id}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
      <p>{errorMessage}</p>
    </div>
  );
}
