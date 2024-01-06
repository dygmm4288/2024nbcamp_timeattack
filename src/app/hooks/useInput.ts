import { ChangeEvent, useState } from "react";

type InputState = {
  value: string;
  error: null | string;
};
type UseInputReturnType = [
  InputState,
  (e: ChangeEvent<HTMLInputElement> | string) => void,
  (errorMessage: string) => void,
];

export default function useInput(initialValue: string): UseInputReturnType {
  const [value, setValue] = useState<InputState>({
    value: initialValue,
    error: null,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>|string) => {
    if(typeof e === 'string'){
      setValue(() => ({value: e,error:null}));
      return;
    }
    setValue(() => ({ value: e.target.value, error: null }));
  };
  const setError = (errorMessage: string) => {
    setValue(() => ({ value: "", error: errorMessage }));
  };

  return [value, handleChange, setError];
}
