import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import LeagueRow from './LeagueRow';

class ShowLeagueList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leagues: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/leagues')
      .then(res => {
        this.setState({
          leagues: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowLeagueList');
      })
  };


  render() {
    const leagues = this.state.leagues;
    console.log("PrintLeague: " + leagues);
    let leagueList;

    if(!leagues) {
      leagueList = "there is no player record!";
    } else {
      leagueList = leagues.map((league, k) =>
        <LeagueRow player={league} key={k} />
      );
    }

    return (
      <div className="ShowPlayerList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Leagues</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-league" className="btn btn-outline-warning float-right">
                + Create League
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {leagueList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowLeagueList;
