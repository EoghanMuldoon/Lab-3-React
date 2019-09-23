import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';
import Containts from './components/Content';


class  App extends React.Component {
  render(){
    return (
      <Router>
        <div className="App">
          <Navbar bg="primary" variant="dark">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Read">Read</Nav.Link>
            <Nav.Link href="/Create">Create</Nav.Link>
          </Nav>
          </Navbar>
          
    <Switch>
      <Route exact path="/" component={Content}/>
      <Route path="/read" component={Header}/>
      <Route path="/create" component={Footer}/>
    </Switch>

    {/*
        <Header/>
        <Containt />
        <Footer/>

      <h1>Hello World</h1>
      <h2>It is  {new Date().toLocaleTimeString()}</h2>*/}

      </div>
      </Router>
    );
  }
}

export default App;
