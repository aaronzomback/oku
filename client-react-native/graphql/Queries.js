import { gql } from '@apollo/client';

/* place our app Query functions logic here */

export const FETCH_HAIKUS_QUERY = gql`
query getHaikus {
  haikus {
    id 
    line1
    line2
    line3
    createdAt
    author {
      username
    }
  }
}
`

export const FETCH_USER_QUERY = gql`
query getUser($email: String!, $password: String!) {
    users(where: { email: $email, password: $password }) {
        username
        name
        email
        password
        haikus {
          line1
          line2
          line3
        }
    }
}
`
