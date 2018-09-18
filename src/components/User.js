import React, {Component} from 'react';

class User extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.firebase.auth().onAuthStateChanged( user => {
            this.props.setUser(user);
          });
    }

    signIn(){
        const provider = new this.props.firebase.auth.GoogleAuthProvider();
        this.props.firebase.auth().signInWithPopup( provider );
    }

    signOut(){
        this.props.firebase.auth().signOut();
    }

    render(){
        return(
            <div>
                <h1>User: {this.props.user}</h1>
                <button onClick={()=>this.signIn()}>Sign In</button>
                <button onClick={()=>this.signOut()}>Sign out</button>
            </div>
        )
    }
};

export default User