import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);

  const API_KEY = "97ef910c8dbfc58de8ccd2f3fc7adc14";
  const API_IMAGE = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
        );
        const data = await res.json();
        setMovie(data);
      } catch (err) {
        console.error("Failed to fetch movie detail:", err);
      }
    };

    const fetchTrailer = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
        );
        const data = await res.json();
        const trailerVideo = data.results.find(
          (vid) => vid.type === "Trailer" && vid.site === "YouTube"
        );
        setTrailer(trailerVideo);
      } catch (err) {
        console.error("Failed to fetch trailer:", err);
      }
    };

    fetchMovie();
    fetchTrailer();
  }, [id]);

  if (!movie) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto p-6 text-white">
      <div className="flex flex-col md:flex-row gap-8">
        {/* LEFT COLUMN: Poster or Trailer */}
        <div className="w-full md:w-1/2 rounded-lg shadow-lg overflow-hidden">
          {showTrailer && trailer ? (
            <iframe
              className="w-full h-[400px]"
              src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1`}
              title="Movie Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <img
              src={`${API_IMAGE}${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-[400px] object-cover"
            />
          )}
        </div>

        {/* RIGHT COLUMN: Movie Details */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
          {movie.tagline && (
            <p className="italic text-gray-400 mb-2">“{movie.tagline}”</p>
          )}
          <p className="text-sm mb-1">📅 Release Date: {movie.release_date}</p>
          <p className="text-sm mb-1">🎬 Status: {movie.status}</p>
          <p className="text-sm mb-1">⏱ Runtime: {movie.runtime} min</p>
          <p className="text-sm mb-1">
            ⭐ Rating: {movie.vote_average?.toFixed(1)} / 10
          </p>
          <p className="text-sm mb-1">
            🎭 Genres:{" "}
            {movie.genres && movie.genres.map((g) => g.name).join(", ")}
          </p>
          <p className="text-sm mb-4">
            🌍 Languages:{" "}
            {movie.spoken_languages &&
              movie.spoken_languages.map((l) => l.english_name).join(", ")}
          </p>

          <p className="mb-6">{movie.overview}</p>

          <div className="flex gap-4">
            {/* Back Button */}
            <Link
              to="/"
              className="bg-teal-600 px-4 py-2 rounded-lg text-white hover:bg-teal-700"
            >
              Back
            </Link>

            {/* Trailer Button */}
            {trailer && (
              <button
                onClick={() => setShowTrailer(!showTrailer)}
                className="bg-red-600 px-4 py-2 rounded-lg text-white hover:bg-red-700"
              >
                {showTrailer ? "Close Trailer" : "▶ Play Trailer"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
