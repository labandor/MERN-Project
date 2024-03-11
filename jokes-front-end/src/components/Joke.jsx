import { Link } from "react-router-dom";

function Joke({joke}) {
  console.log(joke)
  return (
    <div>
      <Link to={`/jokes/${joke._id}`}>
        <h3>{joke.setup}</h3>
      </Link>
    </div>
  );
}

export default Joke;
