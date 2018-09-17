import React, {Component} from 'react';
import CreateMessage from './CreateMessage';

class MessageList extends Component {
    constructor(props){
        super(props)
        this.messagesRef = this.props.firebase.database().ref('messages');
        this.state = {
            messages: [],
            newMessage: ''
        };
    }

    componentDidMount(){
        this.messagesRef.on('child_added', snapshot => {
            let message = snapshot.val();
            message.key = snapshot.key;
            this.setState({
                messages: this.state.messages.concat( message )
            });
        });
    }

    handleMessageChange(e){
        this.setState({newMessage: e.target.value})
    }

    createMessage(e){
        e.preventDefault();
        console.log(this.props.currentRoom)
        this.messagesRef.push({
            username: "username will go here",
            content: this.state.newMessage,
            sentAt: this.props.firebase.database.ServerValue.TIMESTAMP,
            roomId: this.props.currentRoom
        })
        console.log(this.state.messages)
    }

    render() {
        return (
            <div>
                <h1>Message List Component</h1>
                <CreateMessage 
                    handleMessageChange={(e)=>this.handleMessageChange(e)} 
                    createMessage={(e)=>this.createMessage(e)} 
                    messageValue={this.state.newMessage}
                />
                <table>
                    <tbody>
                    {this.state.messages.filter(message=>
                        message.roomId === this.props.currentRoom).map((message, index)=>
                            <tr className="messages" key={message.key}>
                                <td>Message: {message.content}</td>
                                <td>Date Created: {message.sentAt}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>

            </div>
        )
    }
}

export default MessageList