import { useState, useEffect } from "react";
import { getJokes } from "../services/jokes";
import Joke from "../components/Joke.jsx"

function Jokes() {

  const [jokes, setJoke] = useState([]);

  useEffect(() => {
    fetchJokes();
  }, []);

  async function fetchJokes(){
    const allJokes = await getJokes();
    setJoke(allJokes);
  }

  return (
    <div className="Jokes">
      <h1>All the Jokes</h1>
      <div className="JokesLink">
        {
          jokes.map((joke) =>(
            <Joke joke={joke} key={joke._id}/>
          ))
        }
      </div>
    </div>
  );
}

export default Jokes;
