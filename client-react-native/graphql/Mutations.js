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

