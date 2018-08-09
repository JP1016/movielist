import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {ToolBar} from './components/ToolbarComponent'
import {Movie} from './components/MovieComponent'
import LazyLoad from 'react-lazyload';

class App extends Component {
  render() {
    return (
      <div>
      <ToolBar></ToolBar>
      <div class="movie-wrap">
      <LazyLoad height={200} offset={100}>
                            
                            
      <Movie></Movie>
      <Movie></Movie>
      <Movie></Movie>
      <Movie></Movie>
      <Movie></Movie>
      <Movie></Movie>
      <Movie></Movie>

       <Movie></Movie>
      <Movie></Movie>
      <Movie></Movie>
      <Movie></Movie>
      <Movie></Movie>
      <Movie></Movie>
      <Movie></Movie>

       <Movie></Movie>
      <Movie></Movie>
      <Movie></Movie>
      <Movie></Movie>
      <Movie></Movie>
      <Movie></Movie>
      <Movie></Movie>

       <Movie></Movie>
      <Movie></Movie>
      <Movie></Movie>
      <Movie></Movie>
      <Movie></Movie>
      <Movie></Movie>
      <Movie></Movie>
       
      </LazyLoad>
      </div>
      </div>
    );
  }
}

export default App;
