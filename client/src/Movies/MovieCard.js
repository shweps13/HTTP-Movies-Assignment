import React from 'react';
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import axios from 'axios';

const MovieCard = props => {
  const { title, director, metascore, stars, id } = props.movie;

  const deleteMovie = () => {
    axios.delete(`http://localhost:5000/api/movies/${id}`)
    .then(res => 
      console.log(`Movie with ${id} was deleted`, res),
      props.setChange(!props.change)
    )
    .catch(err => console.log(err.response))

  }

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

        <Link to={`/`} >
        <button onClick={deleteMovie}>Delete</button>
        </Link>
          
    </div>
    
  );
};

export default MovieCard;
