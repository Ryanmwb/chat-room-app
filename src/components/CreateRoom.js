import React, {Component} from 'react';

class CreateRoom extends Component {
    constructor(props){
        super(props)
    }
        render(){
            return(
                <form className="justify-center">
                    <div className="row">
                        <span className="">
                            <input 
                                type="text" 
                                className="form-control col" 
                                placeholder="Chat Room Name"  
                                onChange={this.props.handleNameChange}
                            />
                            <button className="col" onClick={this.props.handleClick}>
                                Create Chat Room
                            </button>
                        </span>
                    </div>
                </form>
            )
        }
    };

export default CreateRoom