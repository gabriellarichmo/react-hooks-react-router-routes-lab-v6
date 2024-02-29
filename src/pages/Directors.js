import { useEffect, useState } from "react";

function Directors() {
  const [directors, setDirectors] = useState([]);
  const [error, setError] = useState(0);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then((r) => r.json())
      .then((data) => setDirectors(data))
      .catch((error) => setError(error.message));
  }, []);
  
  return (
    <>
      {error ? <p>{error}</p> : null}
      <header>
        <h1>Directors Page</h1>
      </header>
      <main>
        {directors.map((director) => (
          <article key={director.id}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
};

export default Directors;
