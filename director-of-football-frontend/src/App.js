import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreatePlayer from './components/CreatePlayer'
import PlayerCard from './components/PlayerCard'
import ShowPlayerDetails from './components/ShowPlayerDetails'
import ShowPlayerList from './components/ShowPlayerList'
import ShowLeagueList from './components/ShowLeagueList'
import CreateLeague from './components/CreateLeague'

function App() {
  return (
    <Router>
      <div>
        <Route exact path='/' component={ShowLeagueList} />
        <Route path='/create-league' component={CreateLeague} />
        <Route path='/create-player' component={CreatePlayer} />
        <Route path='/show-player/:id' component={ShowPlayerDetails} />
      </div>
    </Router>
  );
}

export default App;
