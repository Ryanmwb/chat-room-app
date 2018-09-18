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
                {this.props.user !== 'Guest' ? <h1>{this.props.user.displayName}</h1> : <h1>Guest</h1>}
                {this.props.user !== 'Guest' ? <button onClick={()=>this.signOut()}>Sign out</button> : <button onClick={()=>this.signIn()}>Sign In</button>}
            </div>
        )
    }
};

export default User