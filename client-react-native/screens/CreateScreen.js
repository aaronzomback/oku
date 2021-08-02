import React from 'react';
import HaikuForm from '../containers/CreateHaikuForm';
import { syllable } from 'syllable'

function CreateScreen () {

  console.log('syllables: ', syllable('hello there my name is dude.'));

  return (
    <section className='create-haiku'>
      <HaikuForm>

      </HaikuForm>
    </section>
  )
}




export default CreateScreen;