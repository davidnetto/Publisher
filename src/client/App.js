import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;
    return (
      <div style={{alignItems:'center', justifyContent:'center', minHeight:'100%', backgroundColor:'gray'}}>
        {username ? <h1>{`Bem Vindo ${username}`}</h1> : <h1>Carregando...Espere!</h1>}
      </div>
    );
  }
}
