import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';

export class Movie extends Component{
    render(){
        return(
        <div>
            <div className="movie-wrap">
            <div className="poster-block">
    
            <img src={require('../assets/poster1.jpg')} alt="movie" className="movie-poster"/>
            <div className="movie-title">Avengers</div>
            
            </div>
            
            </div>
        </div>
        )
    }
}