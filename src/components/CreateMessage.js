import React, {Component} from 'react';

class CreateMessage extends Component {
    constructor(props){
        super(props)
    }
        render(){
            return(
                <form className="createMessage">
                    <div className="row">
                        <span className="" id="container">
                            <label for="message">Create Message</label>
                            <textarea 
                                id="message"
                                placeholder="Type Message Here" 
                                cols="70"
                                rows="6"
                                class="form-control"
                                onChange={(e)=>this.props.handleMessageChange(e)}
                                value={this.props.messageValue}>
                            </textarea>
                            <button className="btn btn-primary sendMessage" width="300" onClick={(e)=>this.props.createMessage(e)}>
                                Send Message
                            </button>
                        </span>
                    </div>
                </form>
            )
        }
    };

export default CreateMessage