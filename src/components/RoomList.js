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

    createChatRoom(e){
        e.preventDefault();
        let name = this.state.chatRoomName
        this.roomsRef.push({
            name: name
        })
        this.setState({chatRoomName: ''})
    }

    handleNameChange(e){
        this.setState({chatRoomName: e.target.value})
    }

    render() {
        return (
            <section className ="chat-room-list">
            <CreateRoom 
                chatRoomName={this.state.chatRoomName} 
                createChatRoom={(e) => this.createChatRoom(e)}
                handleNameChange={(e)=>this.handleNameChange(e)}
            />
			{this.state.rooms.map( (room, index) =>
				<div className="rooms" key={index}>
					<li> 
                        <button 
                            className="room-list" 
                            onClick={(room) => this.props.changeCurrentRoom(room)}
                            >{room.name}</button>
                    </li>
				</div>
				)}
			</section>
        )
    }
}

export default RoomList;