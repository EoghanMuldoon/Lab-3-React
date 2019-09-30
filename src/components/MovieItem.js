import React from 'react';
import Card from 'react-bootstrap/Card';
import '../App.css';

class  MovieItem extends React.Component {
  render(){
    return (
      <div id="MovieItem">
      <Card>
        <Card.Header>{this.props.movie.Title}</Card.Header>
    </Card>
      <img src={this.props.movie.Poster}></img>
      <h4  >{this.props.movie.Year}</h4>
      </div>
    );
  }
}

export default MovieItem;
