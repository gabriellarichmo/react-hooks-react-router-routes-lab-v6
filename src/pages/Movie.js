import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  
  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then(resp => resp.json())
      .then(data => setMovie(data))
      .catch(error => console.error("Error fetching movie:", error));
  }, [id]);

  if(!movie) {
    return <div>Loading...</div>
  }

  return (
    <>
      <header>
        <h1>{movie.title}</h1>
      </header>
      <main>
        <p>Time: {movie.time}</p>
        <p>Genres: {movie.genres.map(genre => <span key={genre}></span>)}</p>
      </main>
    </>
  );
};

export default Movie;
