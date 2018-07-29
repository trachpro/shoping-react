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

const options = {
  header: 'Authorization', // the default authorization header for REST
  prefix: '', // if set will add a prefix to the header value. for example if prefix was 'JWT' then the header would be 'Authorization: JWT eyJ0eXAiOiJKV1QiLCJhbGciOi...'
  path: '/authentication', // the server-side authentication service path
  jwtStrategy: 'jwt', // the name of the JWT authentication strategy 
  entity: 'user', // the entity you are authenticating (ie. a users)
  service: 'users', // the service to look up the entity
  cookie: 'feathers-jwt', // the name of the cookie to parse the JWT from when cookies are enabled server side
  storageKey: 'feathers-jwt', // the key to store the accessToken in localstorage or AsyncStorage on React Native
  storage: undefined // Passing a WebStorage-compatible object to enable automatic storage on the client.
}

client.configure(socketio(socket))
  .configure(auth(options));

client.authenticate({
  "strategy": "local",
	"email": "feathers@example.com",
	"password": "secret"
}).then( data => {
  console.log("authen ok: ", data);

  messageService.find({
    query: {$skip: 1}
  }).then(data => {
    console.log("data: ", data);
  })

  // messageService.create({
  //   text: 'Message from client'
  // })
})


const messageService = client.service('adidas')

messageService.on('created', message => console.log('Created a message', message));

// Use the messages service from the server


class App extends Component {


  render() {
    return (
      <Home />
    );
  }
}

export default App;
