import React from 'react';
import HaikuForm from '../components/CreateHaikuForm';
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