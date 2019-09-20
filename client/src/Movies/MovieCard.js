import React from 'react';
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import axios from 'axios';
import { Button, Card } from 'semantic-ui-react'

const MovieCard = props => {
  const { title, director, metascore, stars, id } = props.movie;

  const deleteMovie = () => {
    axios.delete(`http://localhost:5000/api/movies/${id}`)
    .then(res => 
      console.log(`Movie with ${id} was deleted`, res),
      props.setChange(id)
    )
    .catch(err => console.log(err.response))

  }

  return (
    <Card.Group centered>
    <Card>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>Director: <em>{director}</em></Card.Meta>
        <Card.Description>
        <h3>Actors</h3>
        {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
        
        <Link to={`/update-movies/${id}`} >
          <Button basic color='green'>
            Edit
          </Button>
          </Link>

        <Link to={`/`} >  
          <Button onClick={deleteMovie} basic color='red'>
            Delete
          </Button>
        </Link>  
        </div>
      </Card.Content>
    </Card>
    </Card.Group>
    
  );
};

export default MovieCard;
