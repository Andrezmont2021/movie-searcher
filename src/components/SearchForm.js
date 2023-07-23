import { useState } from "react";

export default function SearchForm(props) {
  const [movieSearched, setMovieSearched] = useState("");

  const _handleInputChange = (event) => {
    setMovieSearched(event.target.value);
  };

  const _handleSubmit = (event) => {
    event.preventDefault();
    if (!!movieSearched && movieSearched.trim().length > 1)
      props.onSearchReady(movieSearched.toLowerCase());
  };

  return (
    <form onSubmit={_handleSubmit}>
      <div className="field has-addons">
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Type a movie to search"
            onChange={_handleInputChange}
          />
        </div>
        <div className="control">
          <button className="button is-info">Search</button>
        </div>
      </div>
    </form>
  );
}
