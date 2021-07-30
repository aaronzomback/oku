import React from 'react';

function Home() {
  return (
    <section>

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