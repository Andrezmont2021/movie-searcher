import { useState } from "react";
import MoviesList from "./MoviesList";
import SearchForm from "./SearchForm";
import Title from "./shared/Title";

export default function Home() {
  const [isUsedSearch, setIsUsedSearch] = useState(false);
  const [movies, setMovies] = useState([]);
  const API_URL = "https://moviesdatabase.p.rapidapi.com/titles/search/keyword";
  const API_KEY = "80f668c352mshca7d6e41e7add94p1ea064jsn62c7e414412e";

  const _verifyNoResultsMessage = () => {
    if (isUsedSearch) {
      return (
        <div className="has-text-centered">
          <p>No se encontraron resultados</p>
        </div>
      );
    }
  };
  const _handleSearchEvent = (searchText) => {
    _makeMovieApiRequest(searchText);
    setIsUsedSearch(true);
  };

  const _makeMovieApiRequest = (movieTitle) => {
    fetch(`${API_URL}/${movieTitle}`, {
      headers: {
        "Content-Type": "application/json",
        "X-RapidAPI-Key": API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data = []) => {
        setMovies(data.results);
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error("Error getting the movies:", error);
      });
  };

  return (
    <div>
      <Title>Search Movies</Title>
      <div className="center-item">
        <SearchForm onSearchReady={_handleSearchEvent} />
      </div>
      {movies && movies.length !== 0 ? (
        <div className="movie-list">
          <MoviesList movies={movies} />
        </div>
      ) : (
        _verifyNoResultsMessage()
      )}
    </div>
  );
}
