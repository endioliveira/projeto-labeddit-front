import { useState } from "react";

export const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const onChangeForm = (event) => {
    const newForm = { ...form };
    newForm[event.target.name] = event.target.value;

    setForm(newForm);
  };
  return [form, onChangeForm];
};
