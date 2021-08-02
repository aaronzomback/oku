import { useState } from 'react';
import { syllableReq } from './validations';
import { syllable } from 'syllable';

export const useForm = (callback, {}) => {
  const [values, setValues] = useState({});
  const [error, setError] = useState(false);
  
  const onChange = (event) => {
    const { name, value } = event.target
    
    switch (name) {
      case 'line1':
        // write validation logic here
        setValues({ ...values, line1: value });                 
        break;
      case 'line2':
        // write validation logic here               
  setValues({ ...values, line2: value });
        break;
      case 'line3':
        // write validation logic here
        setValues({ ...values, line3: value });       
        break;
      default:
        break;
    }
    console.log('target: ', event.target);
    console.log('name: ', name);
    console.log('value: ', value);
    console.log('syllable count: ', syllable(value));
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const { name, value } = event.target

    // write syllable logic here, will eventually be 5/7/5 syllables
    if (syllable(value) === 5) {
      callback();
    } else {
      setError(true);
      alert('You must fit syllable reqs! 👀')
    }
  };

  return {
    onChange,
    onSubmit,
    values
  };
};