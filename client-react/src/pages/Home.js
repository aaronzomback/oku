import React from 'react';
import { FETCH_HAIKUS_QUERY } from '../graphql/Queries';
import { useQuery } from '@apollo/client';


function Home() {

  const { data, loading, error } = useQuery(FETCH_HAIKUS_QUERY);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  if (data) console.log(data);

  return (
    <section>
      <ul>
        {data.haikus.map( haiku => {
          return <li key={haiku.id}>{haiku.line1}</li>
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

export default Home;