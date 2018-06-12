import React, { Component } from 'react';
import './App.css';
import Card from './Card/Card.js';
import MissedCard from './MissedCard/MissedCard.js';

import articles from './your-articles.json';
import missedArticles from './missed-articles.json';

class App extends Component {
  render() {

    return (
      <div className="App">
        <div className="App-header">
          <div className="App-title">For you</div>
        </div >
        <div className="App-card-container" >
          {articles.map((card, idx) => {
            return <Card key={idx} card={card} />;
          })}
        </div >

        <div className="App-header">
          <div className="App-title">In case you missed it</div>
        </div >
        <div className="App-missed-card-container" >
          {missedArticles.map((card, idx) => {
            return <MissedCard key={idx} missedcard={card} />;
          })}
        </div >
      </div>
    );
  }
}

export default App;
