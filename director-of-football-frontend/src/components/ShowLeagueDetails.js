import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import ClubRow from './ClubRow'

class ShowLeagueDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      league: {}
    };
  }

  componentDidMount() {
    console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/leagues/'+this.props.match.params.id)
      .then(res => {
        console.log("Print-showBookDetails-API-response: " + res.data);
        this.setState({
          league: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowLeagueDetails");
      })
  };

  render() {
    const league = this.state.league;

    let clubList;
    if(!league.clubs) {
      clubList = "No clubs in this league yet.";
    } else {
      clubList = league.clubs.map((club, k) =>
        <ClubRow club={club} key={k} />
      );
    }
    let LeagueItem = <div>
      <h1> { league.name } </h1>
      </div>
      return (
        <div className="ShowLeagueDetails">
          <div className="container">
            <div className="row">
              <div className="col-md-10 m-auto">
                <br /> <br />
                <Link to="/" className="btn btn-outline-warning float-left">
                    Leagues
                </Link>
                <br /> <br />
                <Link to={"/create-club/" + league._id} className="btn btn-outline-warning float-left">
                    Create Club
                </Link>
              </div>
              <br />
              <div className="col-md-8 m-auto">
                <p className="lead text-center">
                    View League Info
                </p>
                <hr /> <br />
              </div>
            </div>
            <div>
              { LeagueItem }
            </div>
            <div className="list">
                  { clubList }
            </div>
          </div>
        </div>
      );
    }
  }

  export default ShowLeagueDetails;
