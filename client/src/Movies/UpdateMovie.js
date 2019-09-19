import React from 'react';



const UpdateMovie = () => {
 
  return (
    <div>
      <h2>Update Movie</h2>
      <form>
      {/* <form onSubmit={handleSubmit}> */}
        <input
          type="text"
          name="title"
        //   onChange={changeHandler}
          placeholder="title"
        />
        <div className="baseline" />

        <input
          type="number"
          name="director"
        //   onChange={changeHandler}
          placeholder="director"
        />
        <div className="baseline" />

        <input
          type="string"
          name="metascore"
        //   onChange={changeHandler}
          placeholder="metascore"
        />
        <div className="baseline" />

        <input
          type="string"
          name="stars"
        //   onChange={changeHandler}
          placeholder="stars"
        />
        <div className="baseline" />


        <button>Update</button>
      </form>
    </div>
  );
};

export default UpdateMovie;
