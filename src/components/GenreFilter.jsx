import { useSearchParams } from "react-router-dom";
import { genres } from "../data/movies";

export default function GenreFilter() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeGenre = searchParams.get("genre") || ""


  return (
    <div className="genres">
      {genres.map((genre) => (
        <a
          key={genre.id || 'all'}
          href={genre.id ? `/movies?genre=${genre.id}` : '/movies'}
          className="genre-btn"
        >
          {genre.label}
        </a>
      ))}
    </div>
  );
}
