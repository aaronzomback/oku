import { gql } from '@apollo/client';

// place our app Query functions logic here

export const FETCH_HAIKUS_QUERY = gql`
query getHaikus {
  haikus {
    id 
    content
    createdAt
    author {
      username
    }
  }
}
`
