import React, {Component} from 'react';

class CreateMessage extends Component {
    constructor(props){
        super(props)
    }
        render(){
            return(
                <form className="justify-center">
                    <div className="row">
                        <span className="">
                            <textarea placeholder="Message goes here" 
                                rows="4" 
                                cols="70" 
                                onChange={(e)=>this.props.handleMessageChange(e)}
                                value={this.props.chatRoomName}>
                            </textarea>
                            <button className="col" width="300" onClick={(e)=>this.props.createMessage(e)}>
                                Send Message
                            </button>
                        </span>
                    </div>
                </form>
            )
        }
    };

export default CreateMessage