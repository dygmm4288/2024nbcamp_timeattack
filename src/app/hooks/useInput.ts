import { ChangeEvent, useState } from "react";

type InputState = {
  value: string;
  error: null | string;
};

export default function useInput(initialValue: string) {
  const [value, setValue] = useState<InputState>({
    value: initialValue,
    error: null,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(() => ({ value: e.target.value, error: null }));
  };
  const setError = (errorMessage: string) => {
    setValue(() => ({ value: "", error: errorMessage }));
  };

  return [value, handleChange, setError];
}
