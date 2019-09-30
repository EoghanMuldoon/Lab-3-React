import React from 'react';
import MovieItem from './MovieItem';
import '../App.css';

class  Movies extends React.Component {

  render(){
    return this.props.myMovies.map((movie) => 
    {
        //console.log(movie);
        return <MovieItem movie={movie}></MovieItem>
    })
  }
}

export default Movies;
