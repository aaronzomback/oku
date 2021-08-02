import { useState } from 'react';
import { syllableReq } from './validations';

export const useForm = (callback, {}) => {
  const [values, setValues] = useState({});

  const onChange = (event) => {
    const { name, value } = event.target


    switch (name) {
      case 'line1':
        setValues({ ...values, line1: value });                 
        break;
      case 'line2':               
  setValues({ ...values, line2: value });
        break;
      case 'line3':
        setValues({ ...values, line3: value });       
        break;
      default:
        break;
    }
    console.log('target: ', event.target);
    console.log('name: ', name);
    console.log('value: ', value);
  }

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