import React, { Component } from 'react';
export class ToolBar extends Component{
    render(){
        return(
        <div>
            <div className="toolbar">
            <img src={require('../assets/back.png')} alt="back" className="back"/>
            <div className="main-title">Romantic Movies</div>
            <img src={require('../assets/search.png')} alt="search" className="search-icon"/>
            </div>
        </div>
        )
    }
}