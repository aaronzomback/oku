import { useState } from 'react';

export const useForm = (callback, {}) => {
  const [values, setValues] = useState({});

  const onChange = (event) => {
    console.log('target', event.target);
    console.log('name', event.target.name);
    console.log('value', event.target.value);
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