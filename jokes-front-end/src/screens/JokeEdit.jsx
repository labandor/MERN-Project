import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getJoke, editJoke } from "../services/jokes";

function JokeEdit() {

  const [joke, setJoke] = useState({
    category: "",
    setup: "",
    punchline: "",
  })

  let { id } = useParams();
  let navigate = useNavigate();

  async function fetchJoke() {
    const oneJoke = await getJoke(id);
    setJoke(oneJoke);
  }

  useEffect(() => {
    fetchJoke();
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    await editJoke(id, joke);
    navigate(`/jokes/${id}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setJoke((prevJoke) => ({
      ...prevJoke,
      [name]: value
    }))
  }
  
  return (
    <div className="CatCreate">
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
