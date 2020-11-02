import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreatePlayer extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName:'',
      pos: '',
      pace:0,
      shot:0,
      pass:0,
      dribble:0,
      phys:0,
      def:0
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    console.log("onSubmitCalled!");
    e.preventDefault();

    const data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      pos: this.state.pos,
      pace: this.state.pace,
      shot: this.state.shot,
      pass: this.state.pass,
      dribble: this.state.dribble,
      phys: this.state.phys,
      def: this.state.def
    };

    axios
      .post('http://localhost:8082/api/players', data)
      .then(res => {
        this.setState({
          firstName: '',
          lastName:'',
          pos: '',
          pace:0,
          shot:0,
          pass:0,
          dribble:0,
          phys:0,
          def:0
        })
        this.props.history.push('/');
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
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Player List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Player</h1>
              <p className="lead text-center">
                  Create new player
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='First Name'
                    name='firstName'
                    className='form-control'
                    value={this.state.firstName}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Last Name'
                    name='lastName'
                    className='form-control'
                    value={this.state.lastName}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Position'
                    name='pos'
                    className='form-control'
                    value={this.state.pos}
                    onChange={this.onChange}
                  />
                </div>

                <br /><div className='form-group'>
                  <input
                    type='number'
                    placeholder='Pace'
                    name='pace'
                    className='form-control'
                    value={this.state.pace}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <br /><div className='form-group'>
                  <input
                    type='number'
                    placeholder='Shot'
                    name='shot'
                    className='form-control'
                    value={this.state.shot}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <br /><div className='form-group'>
                  <input
                    type='number'
                    placeholder='Pass'
                    name='pass'
                    className='form-control'
                    value={this.state.pass}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <br /><div className='form-group'>
                  <input
                    type='number'
                    placeholder='Dribble'
                    name='dribble'
                    className='form-control'
                    value={this.state.dribble}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <br /><div className='form-group'>
                  <input
                    type='number'
                    placeholder='Physical'
                    name='phys'
                    className='form-control'
                    value={this.state.phys}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <br /><div className='form-group'>
                  <input
                    type='number'
                    placeholder='Defence'
                    name='def'
                    className='form-control'
                    value={this.state.def}
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

export default CreatePlayer;
