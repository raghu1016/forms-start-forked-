import { useState } from "react";

export default function useInput(defaultValue, validationFun) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const valueIsValid = validationFun(enteredValue);

  console.log(enteredValue, valueIsValid);

  function handleInputBlur(event) {
    setDidEdit(true);
  }

  function handleInputChange(event) {
    setEnteredValue(event.target.value);
    setDidEdit(false);
  }

  return {
    value: enteredValue,
    handleInputChange,
    handleInputBlur,
    hasError: didEdit && valueIsValid,
  };
}
