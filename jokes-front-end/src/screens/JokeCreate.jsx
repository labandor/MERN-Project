import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createJoke } from "../services/jokes";

function JokeCreate() {

  const [joke, setJoke] = useState({
    category: "",
    setup: "",
    punchline: "",
  })

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createJoke(joke);
    navigate("/jokes");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setJoke((prevJoke) => ({
      ...prevJoke,
      [name]: value
    }))
  }
  
  return (
    <div className="JokeCreate">
      <h1>Add a cure cat in our Database!</h1>
      <form onSubmit={handleSubmit}>
	  <div>
	  	<label htmlFor="cateogory">Choose a Category:</label>
        	<select name="category" id="category" onChange={handleChange}> 
        		<option value = "general">General</option>
	  		<option value = "programming">Programming</option>
	  		<option value = "dad">Dad</option>
			<option value = "knock-knock">Knock Knock</option>
		</select>
	  </div>
        <input 
        type="text"
        placeholder="Please add the setup"
        name="setup"
        value={joke.setup}
        onChange={handleChange}
        />
        <input 
        type="text"
        placeholder="Please add the punchline"
        name="punchline"
        value={joke.punchline}
        onChange={handleChange}
        />
        <button className="button" type="submit">Create your Joke!</button>
      </form>
    </div>
  );
}

export default JokeCreate;
