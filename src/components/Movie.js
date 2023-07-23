import { Link } from "react-router-dom";

export default function Movie(props) {
  const { movie } = props;
  return (
    <Link to={`/detail/${movie?.id}`}>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={movie?.primaryImage?.url} alt={movie?.originalTitleText.text} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{movie?.originalTitleText.text}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
