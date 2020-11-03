import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreatePlayer from './components/CreatePlayer'
import PlayerCard from './components/PlayerCard'
import ShowPlayerList from './components/ShowPlayerList'
import ShowPlayerDetails from './components/ShowPlayerDetails'
import ShowLeagueList from './components/ShowLeagueList'
import ShowLeagueDetails from './components/ShowLeagueDetails'
import CreateLeague from './components/CreateLeague'
import CreateClub from './components/CreateClub'

function App() {
  return (
    <Router>
      <div>
        <Route exact path='/' component={ShowLeagueList} />
        <Route path='/create-league' component={CreateLeague} />
        <Route path='/show-league/:id' component={ShowLeagueDetails} />
        <Route path='/create-player' component={CreatePlayer} />
        <Route path='/create-club/:id' component={CreateClub} />
        <Route path='/players' component={ShowPlayerList} />
        <Route path='/show-player/:id' component={ShowPlayerDetails} />
      </div>
    </Router>
  );
}

export default App;
