import React, {Component} from 'react';
import CreateRoom from './CreateRoom'

class RoomList extends Component {
    constructor(props){
        super(props)
        this.roomsRef = this.props.firebase.database().ref('rooms');
        this.state = {
            rooms: [],
            chatRoomName: ""
        }
    };

    componentDidMount() {
        this.roomsRef.on('child_added', snapshot => {
            const room = snapshot.val();
            room.key = snapshot.key;
            this.setState({ rooms: this.state.rooms.concat( room ) });
        });
      }

    createChatRoom(name){
          this.roomsRef.push({
              name: name
          })
          this.setState({chatRoomName: name})
      }
    
    handleClick(){
        let name = this.state.chatRoomName
        this.roomsRef.push({
            name: name
        })
        console.log(name)
    }

    handleNameChange(e){
        this.setState({chatRoomName: e.target.value})
    }

    render() {
        return (
            <section className ="chat-room-list">
            <CreateRoom 
            chatRoomName={this.state.chatRoomName} 
            handleClick={(e) => this.handleClick(e)}
            handleNameChange={(e)=>this.handleNameChange(e)}
            />
			{this.state.rooms.map( (rooms, index) =>
				<div className="rooms" key={index}>
					<li className="room-list">{rooms.name}</li>
				</div>
				)}
			</section>
        )
    }
}

export default RoomList;