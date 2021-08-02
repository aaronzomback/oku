import { useState } from 'react';

export const useForm = (callback, {}) => {
  const [values, setValues] = useState({});

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    callback();
  };

  return {
    onChange,
    onSubmit,
    values
  };
};