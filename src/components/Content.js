import React from 'react';
import '../App.css';

class  Containts extends React.Component {
  render(){
    return (
      <div id="Containts">
      <h1>Hello World</h1>
      <h2>It is  {new Date().toLocaleTimeString()}</h2>

      
      </div>
    );
  }
}

export default Containts;
