import { useState, useEffect } from "react";
import { getJoke, deleteJoke } from "../services/jokes";
import { Link, useParams, useNavigate } from "react-router-dom";

function JokePunchLine() {

  const [joke, setJoke] = useState({})
  
  let { id } = useParams();
  console.log(id)
  let navigate = useNavigate();

  const fetchJoke = async () => {
    const oneJoke = await getJoke(id);
    setJoke(oneJoke);
  }

  useEffect(() => {
    fetchJoke();
  }, [])

  const handleDelete = async () => {
    await deleteJoke(id);
    navigate("/jokes")
  }

  return (
    <div>
      <h1>{joke.setup}</h1>
      <h2>{joke.punchline}</h2>
      <p>{joke.category}</p>
      <div>
        <Link to={`/jokes/${id}/edit`}>
          <button>EDIT</button>
        </Link>
        <button onClick={handleDelete}>DELETE</button>
      </div>
    </div>
  );
}

export default JokePunchLine;
