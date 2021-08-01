import { gql } from '@apollo/client';

export const CREATE_HAIKU_MUTATION = gql`
mutation createHaiku($content: String!, $featured: Boolean, $collected: Boolean, $submitted: Boolean) {
  createHaikus(input: [
      {
        content: $content
        featured: $featured
        collected: $collected
        submitted: $submitted
      }
  ])
    {
    haikus {
      content
      featured
      collected
      submitted
    }
  }
}
`;

