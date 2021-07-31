import { gql } from '@apollo/client';

export const CREATE_HAIKU_MUTATION = gql`
  mutation createHaiku($content: String!) {
    createHaiku(content: $content) {
        id
        content
        author {
          id
          name
          username
        }
        collected
        submitted
        featured
        createdAt
    }
  }
`