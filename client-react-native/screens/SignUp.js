import React from 'react';
import { View } from 'react-native'

function SignUp () {
  return (
    <div>
      <form>
        <View style={{flex: 1}}>
        <label>
          Full name
        </label>
        <input>

        </input>
        <label>
          Username
        </label>
        <input>

        </input>
        <label>
          Email
        </label>
        <input>
        
        </input>
        <label>
          Password
        </label>
        <input>
        
        </input>
        <button type="submit">
        Sign up
        </button>
        </View>
      </form>
    </div>
  )
}

export default SignUp;