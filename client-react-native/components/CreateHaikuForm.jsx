import React from 'react';
import { useForm } from '../util/hooks';
import { useMutation } from '@apollo/client';
import { CREATE_HAIKU_MUTATION } from '../graphql/Mutations';
import { FETCH_HAIKUS_QUERY } from '../graphql/Queries';
import { Input, Button } from 'react-native-elements';

function HaikuForm () {

  const { values, onChange, onSubmit } = useForm(createHaikuCallback, {
    content: ''
  });

  const [createHaiku, { error }] = useMutation(CREATE_HAIKU_MUTATION, {
    variables: values,
    // here we access our apollo cache to display all haikus & our recent posted one
    update(_, result) {
      // const data = proxy.readQuery({
      //   query: FETCH_HAIKUS_QUERY
      // })
      // data.getHaikus = [...data.createHaikus, result.data.getHaikus]
      // proxy.writeQuery({ query: FETCH_HAIKUS_QUERY, data })
      console.log(result);
      values.content = '';
    }
  });

  function createHaikuCallback() {
    createHaiku();
  }
  
  return (
    <form className="create-haiku-form" onSubmit={onSubmit}>
      <h2 className="create-haiku-title">
        Create haiku:
      </h2>
      <input placeholder="Enter your first line..." name='content' value={values.content} onChange={onChange}></input>
<button type="submit">Publish haiku</button>
    </form>
  )
}


export default HaikuForm;