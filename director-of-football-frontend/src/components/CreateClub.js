import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreateClub extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.match.params.id);
    this.parentLeagueId = this.props.match.params.id
    this.state = {
      name: '',
      nickname: '',
      city: '',
      country: ''
    };
  }

  componentDidMount() {
    console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/leagues/'+this.parentLeagueId)
      .then(res => {
        console.log("Successfully retrieved parent league:");
        console.log(res.data);
        this.parentLeague = res.data;
      })
      .catch(err => {
        console.log("Error from CreateClub and fetching parent league");
      })
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    console.log("onSubmitCalled!");
    e.preventDefault();

    let data = {
      name: this.state.name,
      nickname: this.state.nickname,
      city: this.state.city,
      country: this.state.country
    };
    console.log(this.parentLeague)
    this.parentLeague.clubs.push(data)
    console.log(this.parentLeague)
    axios
      .put('http://localhost:8082/api/leagues/' + this.parentLeagueId, this.parentLeague)
      .then(res => {
        this.setState({
          name: '',
          nickname: '',
          city: '',
          country: ''
        })
        this.props.history.push('/show-league/' + this.parentLeagueId);
      })
      .catch(err => {
        console.log("Error in CreatePlayer!");
      })
  };

  render() {
    return (
      <div className="CreatePlayer">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left"> //TODO fix link
                  _LeagueName_
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Club</h1>
              <p className="lead text-center">
                  Welcome, Director of Football. Setup your new club!
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Club Name'
                    name='name'
                    className='form-control'
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Nickname'
                    name='nickname'
                    className='form-control'
                    value={this.state.nickname}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='City'
                    name='city'
                    className='form-control'
                    value={this.state.city}
                    onChange={this.onChange}
                  />
                </div>

                <br /><div className='form-group'>
                  <input
                    type='text'
                    placeholder='Country'
                    name='country'
                    className='form-control'
                    value={this.state.country}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateClub;
