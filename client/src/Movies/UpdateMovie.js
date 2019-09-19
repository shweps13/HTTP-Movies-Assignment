import React, { useState, useEffect }from 'react';
import axios from 'axios';

const initialData = {
    title: '',
    director: '',
    metascore: '',
    stars: '',
  };

const UpdateMovie = (props) => {
 
    const [movie, setMovie] = useState(initialData);

    const { movies, match } = props;

    useEffect(() => {
        const id = match.params.id;
        const movieArr = movies.find(
                movie => `${movie.id}` === id
            );
        if (movieArr) 
            setMovie(movieArr);
    }, [movies, match.params.id]);

    const changeHandler = ev => {
        ev.persist();
        let value = ev.target.value;
        
        setMovie({
            ...movie,
            [ev.target.name]: value
          });
        };

    const handleSubmit = e => {
        e.preventDefault();
        axios
            .put(`http://localhost:5000/api/movies/${match.params.id}`, movie)
            .then(res => {
                console.log(res);
                setMovie(initialData);
                props.setMovies(res.data);
                props.history.push('/movies');
            })
            .catch(err => console.log(err.response));
        };

  return (
    <div>
      <h2>Update Movie</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          onChange={changeHandler}
          placeholder="title"
          value={movie.name}
        />
        <div className="baseline" />

        <input
          type="text"
          name="director"
          onChange={changeHandler}
          placeholder="director"
          value={movie.director}
        />
        <div className="baseline" />

        <input
          type="text"
          name="metascore"
          onChange={changeHandler}
          placeholder="metascore"
          value={movie.metascore}
        />
        <div className="baseline" />

        <input
          type="string"
          name="stars"
          onChange={changeHandler}
          placeholder="stars"
          value={movie.stars}
        />
        <div className="baseline" />


        <button>Update</button>
      </form>
    </div>
  );
};

export default UpdateMovie;
