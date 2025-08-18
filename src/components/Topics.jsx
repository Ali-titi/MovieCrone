import { useEffect, useState } from "react";
import Films from "./Films";

function MovieTopic(props) {
  const API_IMAGE = "https://image.tmdb.org/t/p/w500";
  const { title, url } = props;

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setMovies(data.results.slice(0, 12));
      } catch (err) {
        console.error("Failed to fetch movies:", err);
      }
    };

    fetchMovies();
  }, [url]);

  return (
    <div id="sections">
      <section className="mb-10">
        <div className="flex items-center justify-between border-b border-gray-700 pb-2 mb-5">
          <h2 className="text-xl font-semibold">{title}</h2>
          <a href="#" className="text-sm font-bold text-white">
            See More
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {movies.map((movie, index) => (
            <Films
              key={index}
              id={movie.id} 
              image={`${API_IMAGE}${movie.poster_path}`}
              title={movie.title}
              release_date={movie.release_date}
              vote_average={movie.vote_average}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default MovieTopic;