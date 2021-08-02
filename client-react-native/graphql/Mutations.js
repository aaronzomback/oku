import { gql } from '@apollo/client';

export const CREATE_HAIKU_MUTATION = gql`
mutation createHaiku($line1: String!, $line2: String!, $line3: String!, $featured: Boolean! = false, $collected: Boolean! = false, $submitted: Boolean! = false) {
  createHaikus(input: [
      {
        line1: $line1
        line2: $line2
        line3: $line3
        featured: $featured
        collected: $collected
        submitted: $submitted
      }
  ])
    {
    haikus {
      line1
      line2
      line3
      featured
      collected
      submitted
    }
  }
}
`;


export const CREATE_USER_MUTATION = gql`
  mutation createUser($name: String!, $username: String!, $email: String!, $password: String!, $avatar: String, $location: String, $bio: String){
    createUsers(input: [
      {
        name: $name
        username: $username
        email: $email
        password: $password
        avatar: $avatar
        location: $location
        bio: $bio
      }
    ])
    {
      users {
        name
        username
        email
        password
        avatar
        location
        bio
      }
    }
  }
`

