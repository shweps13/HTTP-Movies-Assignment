import React, { useState, useEffect }from 'react';
import axios from 'axios';

const initialData = {
    title: '',
    director: '',
    metascore: 0,
    stars: ""
  };

const UpdateMovie = (props) => {
 

    const [movie, setMovie] = useState(initialData);


    const { movies, match } = props;


    useEffect(() => {
        axios.get(`http://localhost:5000/api/movies/${match.params.id}`)
            .then(res => setMovie(res.data))
            .catch(err => console.log(err.response))
    }, [match.params.id])



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
                console.log("Responce of PUT", res);
                setMovie(initialData);
                props.updateMovies(res.data);
                props.history.push('/');
            })
            .catch(err => console.log(err));
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
          value={movie.title}
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
          type="number"
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
          value={movie.stars.toString()}
        />
        <div className="baseline" />


        <button>Update</button>
      </form>
    </div>
  );
};

export default UpdateMovie;
