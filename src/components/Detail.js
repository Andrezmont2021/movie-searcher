import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GoBackButton from "./shared/GoBackButton";

export default function Detail() {
  const API_URL = "https://moviesdatabase.p.rapidapi.com/titles";
  const API_KEY = "80f668c352mshca7d6e41e7add94p1ea064jsn62c7e414412e";
  const { movieId } = useParams();
  const [movieSearched, setMovieSearched] = useState(null);

  const _getMovieById = async () => {
    return fetch(`${API_URL}/${movieId}`, {
      headers: {
        "Content-Type": "application/json",
        "X-RapidAPI-Key": API_KEY,
      },
    });
  };

  useEffect(() => {
    _getMovieById()
      .then((response) => response.json())
      .then((data) => {
        setMovieSearched(data.results);
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error("Error getting the movie by id:", error);
      });
  }, []);

  return (
    <div className="card">
      <GoBackButton />
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src={movieSearched?.primaryImage.url}
            alt={movieSearched?.titleText.text}
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img
                src={movieSearched?.primaryImage.url}
                alt={`${movieSearched?.titleText.text}2`}
              />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{movieSearched?.titleText.text}</p>
            <p className="subtitle is-6">{movieSearched?.titleType.text}</p>
            <p className="subtitle is-6">
              {movieSearched?.releaseDate
                ? `${movieSearched?.releaseDate?.year}-${movieSearched?.releaseDate?.month}-${movieSearched?.releaseDate?.day}`
                : ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
