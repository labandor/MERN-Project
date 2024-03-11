import { useState, useEffect } from "react";
import { getJokes } from "../services/jokes";
import Joke from "../components/Joke.jsx"

function Jokes() {

  const [jokes, setjokes] = useState([]);

  useEffect(() => {
    fetchJokes();
  }, []);

  async function fetchJokes(){
    const allJokes = await getJokes();
    setJokes(allJokes);
  }

  return (
    <div className="Jokes">
      <h1>All the Jokes</h1>
      <div>
        {
          jokes.map((joke) =>(
            <Joke joke={joke} key={joke.id}/>
          ))
        }
      </div>
    </div>
  );
}

export default Jokes;
