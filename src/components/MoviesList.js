import Movie from "./Movie";

export default function MoviesList(props) {
  const { movies } = props;
  return movies.map((movie) => {
    return (
      <div className="movie" key={movie.id}>
        <Movie
          movie={movie}
        />
      </div>
    );
  });
}
