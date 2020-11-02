import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreateLeague extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description:''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      name: this.state.name,
      description: this.state.description
    };

    axios
      .post('http://localhost:8082/api/leagues', data)
      .then(res => {
        this.setState({
          name: '',
          description:''
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateLeague!");
      })
  };

  render() {
    return (
      <div className="CreatePlayer">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Leagues
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Player</h1>
              <p className="lead text-center">
                  Create league: {this.state.name}
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='League Name'
                    name='name'
                    className='form-control'
                    value={this.state.firstName}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Description (optional)'
                    name='description'
                    className='form-control'
                    value={this.state.description}
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

export default CreateLeague;
