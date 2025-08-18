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
        <div className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-700 pb-2 mb-5 gap-2 sm:gap-0">
          <h2 className="text-lg sm:text-xl font-semibold">{title}</h2>
          <a href="#" className="text-sm font-bold text-white">
            See More
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
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
