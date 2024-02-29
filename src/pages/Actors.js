import { useEffect, useState } from "react";


function Actors() {
  const [actors, setActors] = useState([]);
  const [error, setError] = useState(0);

  useEffect(() => {
    fetch("http://localhost:4000/actors")
      .then((r) => r.json())
      .then((data) => setActors(data))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <>
      {error ? <p>{error}</p> : null}
      <header>
        <h1>Actors Page</h1>
      </header>
      <main>
        {actors.map((actor) => (
          <article key={actor.id}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Actors;
