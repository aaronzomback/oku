import React from 'react';
import { useForm } from '../utils/hooks';
import { useMutation } from '@apollo/client';
import { CREATE_HAIKU_MUTATION } from '../graphql/Mutations';

function HaikuForm () {

//   const { values, onChange, onSubmit } = useForm(createHaikuCallback, {
//     // content: ''
//   });

  // const [createHaiku, { error }] = useMutation(CREATE_HAIKU_MUTATION, {
  //   variables: values,
  //   update(_, result) {
  //     console.log(result);
  //     values.content = '';
  //   }
  // });

  // function createHaikuCallback() {
  //   createHaiku();
  // }
  
  return (
    <form className="create-haiku-form">
      <h2 className="create-haiku-title">
        Create haiku:
      </h2>
      <input placeholder="Enter your first line..." name='content' >

      </input>
      <input placeholder="Enter your second line..." >
      
      </input>
      <input placeholder="Enter your third line..." name='content' >
      
      </input>
      <button type="submit">
        Publish haiku
      </button>
    </form>
  )
}


export default HaikuForm;