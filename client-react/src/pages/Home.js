import React from 'react';
// import { FETCH_HAIKUS_QUERY } from './graphql/Queries';
import { useQuery, gql } from '@apollo/client';


function Home() {

  const { data, loading, error } = useQuery(FETCH_HAIKUS_QUERY);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  if (data) console.log(data);

  console.log(data);

  return (
    <section>
      <ul>
        {data.haikus.map( haiku => {
          return <li key={haiku.id}>{haiku.content}</li>
        })}
      </ul>
      <div className="home-flex">
        <h1>
          O 
          <br />
          K 
          <br />
          U
        </h1>
      </div>
      <div className="form-flex">
        <div>

          <form>
            <label>Email</label>
            <input placeholder="Enter email...">

            </input>
            <label>Password</label>
            <input placeholder="Enter password...">

            </input>
            <button>
              Sign in
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

  const FETCH_HAIKUS_QUERY = gql`
    query GetHaikus {
    haikus {
      id 
      content
    }
  }
  `
export default Home;