import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class ShowPlayerDetails extends Component {

  render() {
    const player = this.state.player;
    let PlayerItem = <div>
      <table className="table table-hover table-dark">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{ player.firstName }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Author</td>
            <td>{ player.lastName }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Pace</td>
            <td>{ player.pace }</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Shot</td>
              <td>{ player.shot }</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Pass</td>
              <td>{ player.pass }</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Dribble</td>
              <td>{ player.dribble }</td>
            </tr>
          </tbody>
        </table>
      </div>

      return (
        <div className="ShowPlayerDetails">
          <div className="container">
            <div className="row">
              <div className="col-md-10 m-auto">
                <br /> <br />
                <Link to="/" className="btn btn-outline-warning float-left">
                    Show Player List
                </Link>
              </div>
              <br />
              <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Player's Record</h1>
                <p className="lead text-center">
                    View Player's Info
                </p>
                <hr /> <br />
              </div>
            </div>
            <div>
              { PlayerItem }
            </div>
          </div>
        </div>
      );
    }
  }

  export default ShowPlayerDetails;
