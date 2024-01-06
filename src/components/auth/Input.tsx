import { ChangeEvent } from "react";

interface Props {
  label: string;
  placeholder: string;
  id: string;
  value: string;
  errorMessage: string | null;
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
    <div className='relative'>
      <label htmlFor={id} className='absolute top-3 left-3 text-xs'>
        {label}
      </label>
      <input
        className={`w-full h-16 border-2 border-gray-300 rounded-md px-4 pt-5 pb-1 mt-2 mb-6 focus:outline-none focus:border-blue-500 text-sm ${
          errorMessage && "border-red-400"
        }`}
        type={type || "text"}
        id={id}
        name={id}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        required
      />
      <p className='absolute bottom-1 text-sm text-red-400'>{errorMessage}</p>
    </div>
  );
}
