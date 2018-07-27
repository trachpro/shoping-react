import React, { Component } from 'react';
import './App.css';

import io from 'socket.io-client';
import feathers from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';
import auth from '@feathersjs/authentication-client';

import Home from './Home';

const socket = io('http://localhost:3030', {
  transports: ['websocket'],
  forceNew: true
});
const client = feathers();

client.configure(socketio(socket))
  .configure(auth());

const messageService = client.service('adidas')

messageService.on('created', message => console.log('Created a message', message));

// Use the messages service from the server
messageService.create({
  text: 'Message from client'
}).then( (message) => {

  console.log("client send: ", message);
});

class App extends Component {


  render() {
    return (
      <Home />
    );
  }
}

export default App;
