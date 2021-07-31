import gql from '@apollo/client';

// place our app Query functions logic here

const FETCH_HAIKUS_QUERY = gql`
query haikus {
  id 
  content
}
`

export default FETCH_HAIKUS_QUERY;