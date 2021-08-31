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
        {/* write validation logic here */}
        setValues({ ...values, line1: value });                 
        break;
      case 'line2':
        {/* write validation logic here */}              
  setValues({ ...values, line2: value });
        break;
      case 'line3':
        {/* write validation logic here */}
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

  const onSubmitLine1 = (e) => {
    e.preventDefault();
    if (syllable(e.target.value === 5)) {
      callback()
    } else {
      alert('👀 You must fill 5 syllable requirements for this line')
    }
  };

  const onSubmitLine2 = (e) => {
    e.preventDefault();
    if (syllable(e.target.value === 7)) {
      callback();
    } else {
      alert('👀 You must fill 7 syllable requirements for this line')
    }
  };

  const onSubmitLine3 = (e) => {
    e.preventDefault();
    if (syllable(e.target.value === 5)) {
      callback()
    } else {
      alert('👀 You must fill 5 syllable requirements for this line')
    }
  };

  return {
    onChange,
    onSubmitLine1,
    onSubmitLine2,
    onSubmitLine3,
    values
  };
};