import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RoomList from './components/RoomList';
import * as firebase from 'firebase';
var config = {
  apiKey: "AIzaSyC2fGXYHvvznWb4niLys69YRih5EuRX7tw",
  authDomain: "bloc-chat-3817f.firebaseapp.com",
  databaseURL: "https://bloc-chat-3817f.firebaseio.com",
  projectId: "bloc-chat-3817f",
  storageBucket: "bloc-chat-3817f.appspot.com",
  messagingSenderId: "766487525530"
};
firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <main>
          <RoomList firebase/>
        </main>
      </div>
    );
  }
}

export default App;
