import React from 'react';
import { Link } from "react-router-dom";
import { withRouter } from "react-router";


const MovieCard = props => {
  const { title, director, metascore, stars, id, history } = props.movie;

  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}

        <Link to={`/update-movies/${id}`} >
          <button>Update</button>
        </Link>

    </div>
    
  );
};

export default MovieCard;
