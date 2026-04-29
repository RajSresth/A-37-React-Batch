import React, { useState } from "react";

const Home = () => {
  const [login, setLogin] = useState(false);

  if (!login) {
    return (
      <div>
        <h1>Please Login....!</h1>
        <button onClick={() => setLogin(!login)}>Login</button>
      </div>
    );
  }

  return (
    <div id="home">
      <h1>Welcome to Home Page</h1>
      <button onClick={() => setLogin(!login)}>Logout</button>
    </div>
  );
};

export default Home;
