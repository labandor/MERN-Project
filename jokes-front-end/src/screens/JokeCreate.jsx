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
        <input 
        type="text"
        placeholder="Please add the jokes category"
        name="category"
        value={joke.category}
        onChange={handleChange}
        />
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
        <button type="submit">Create your Cat!</button>
      </form>
    </div>
  );
}

export default JokeEdit;
