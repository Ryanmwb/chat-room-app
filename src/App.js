import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
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
  constructor(props){
    super(props)
    this.state = {
      currentRoom: null,

    }
  }

  changeCurrentRoom(room){
    this.setState({currentRoom: room.key})
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Bloc Chat</h1>
        </header>
        <main>
          <RoomList firebase={firebase} changeCurrentRoom={(room) => this.changeCurrentRoom(room)}/>
          <MessageList firebase={firebase} currentRoom={this.state.currentRoom}/>
        </main>
      </div>
    );
  }
}

export default App;
