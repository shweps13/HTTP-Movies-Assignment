import React, { Component, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import { Card } from 'semantic-ui-react';
export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/movies")
      .then(res => this.setState({ movies: res.data }))
      .catch(err => console.log(err.response));
      
  }

  componentDidUpdate() {
    axios
    .get("http://localhost:5000/api/movies")
    .then(res => this.setState({ movies: res.data }))
    .catch(err => console.log(err.response));
    
  }

  render() {
    return (
      <div className="movie-list">
        {this.state.movies.map(movie => (
          <MovieDetails key={movie.id} movie={movie} {...this.props}/>
        ))}
      </div>
    );
  }
}

function MovieDetails({ movie, ...props}) {
  return (
    <Link to={`/movies/${movie.id}`}>
      <MovieCard movie={movie} setChange={props.setChange} change={props.change}/>
    </Link>
  );
}
