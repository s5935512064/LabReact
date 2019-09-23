import React, { Component } from 'react';
import WordCard from './WordCard';
import './App.css';

class App extends Component {
 render() {
 return (
    <div>
        <h1 className="center">Welcome to Word Card Game</h1>
        <h3 className="center">create by Toeiiz (5935512064)</h3>
    <WordCard value="Toeiiz"/>
    </div>
 );
 }
}

export default App;
