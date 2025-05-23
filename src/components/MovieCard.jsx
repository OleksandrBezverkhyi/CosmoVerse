import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FilmDataContext } from "../FilmDataProvider";

const MovieCard = ({ id }) => {
  const { films } = useContext(FilmDataContext);
  const movie = films.find((f) => f.id === id);

  const [hover, setHover] = useState(false);

  if (!movie) return null;

  const year = movie.release_date.split("-")[0];

  return (
    <div
      className="relative w-72 bg-[var(--bg-movie-card)] rounded-lg shadow-md
    border-2 border-transparent hover:shadow-lg hover:border-[var(--color-accent)] overflow-hidden"
    >
      <Link to={`/movies/${movie.id}`}>
        <div
          className="relative"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-80 object-cover rounded-t-lg"
          />
          {hover && (
            <div
              className="absolute top-0 left-0 w-full h-80
            bg-[var(--bg-movie-card)] bg-opacity-100 text-sm text-[var(--text-color)] p-4 overflow-y-auto rounded-t-lg"
            >
              {movie.description}
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg text-[var(--text-color)] font-semibold truncate text-[var(--text-color)]">
            {movie.title}
          </h3>
          <p className="text-sm text-[var(--text-color)] mt-1 flex justify-between">
            <span>{year}</span>
            <span>⭐ {movie.generalRating || movie.rating}/10</span>
          </p>
          <p className="text-sm text-[var(--text-color)] mt-1">
            {movie.genre.slice(0, 3).join(", ")}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
