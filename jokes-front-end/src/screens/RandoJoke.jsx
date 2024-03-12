import Joke from "../components/Joke.jsx"
import { getJokes } from "../services/jokes";
import { useState, useEffect } from "react";

function RandoJoke() {

	const [joke, setJoke] = useState([]);

  	useEffect(() => {
  		randoJoke();
  	}, []);
	
	async function randoJoke(){	
		const allJokes = await getJokes();
		const randoJoke = allJokes[Math.floor(Math.random()*allJokes.length)]
		console.log(randoJoke);
	  	setJoke(randoJoke);
	}

	return (
    		<div>
    	 		 <h1>{joke.setup}</h1>
    	 		 <h2>{joke.punchline}</h2>
      			 <p>Category: {joke.category} joke</p>
        	         <button className="button" onClick={randoJoke}>Random</button>
    		</div>
  	);

}

export default RandoJoke;
