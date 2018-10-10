import React, { Component } from 'react';
import './App.css';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import User from './components/User';
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
      currentRoomName: null,
      user: null,
    }
  }

  changeCurrentRoom(room){
    this.setState({currentRoom: room.key})
    this.setState({currentRoomName: room.name})
    console.log(this.state.currentRoom)
  }

  setUser(user){
    this.setState({user: user})
    console.log(user)
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="font">Bloc Chat</h1>
        </header>
        <main>
          <User firebase={firebase} setUser={this.setUser.bind(this)} user={this.state.user}/>
          <RoomList firebase={firebase} changeCurrentRoom={(room) => this.changeCurrentRoom(room)}/>
          <MessageList firebase={firebase} currentRoom={this.state.currentRoom} currentRoomName={this.state.currentRoomName} user={this.state.user}/>
        </main>
      </div>
    );
  }
}

export default App;
