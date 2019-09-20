import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import UpdateMovie from "./Movies/UpdateMovie";

import axios from 'axios';
import 'semantic-ui-css/semantic.min.css'

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movies, setMovies] = useState([]);
  const [change, setChange] = useState(null)

  console.log(change)

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/movies')
      .then(res => setMovies(res.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <SavedList list={savedList} />
      <Route exact path="/" render={props => {
        return <MovieList {...props} setChange={setChange} change={change} />
      }}
       />
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} />;
        }}  
      />
      <Route
        path="/update-movies/:id"
        render={props => {
          return <UpdateMovie {...props} movies={movies} updateMovies={setMovies} />;
        }}  
      />
    </>
  );
};

export default App;
