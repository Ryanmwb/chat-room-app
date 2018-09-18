import React, {Component} from 'react';

class User extends Component {
    constructor(props){
        super(props)
        this.state={
            signInOrOut: null,
        }
    }

    componentDidMount(){
        this.props.firebase.auth().onAuthStateChanged( user => {
            this.props.setUser(user);
          });
    }

    signIn(){
        const provider = new this.props.firebase.auth.GoogleAuthProvider();
        this.props.firebase.auth().signInWithPopup( provider );
        this.setState({signInOrOut: "Sign Out"})
    }

    signOut(){
        this.props.firebase.auth().signOut();
        this.setState({signInOrOut: "Sign In"})
    }

    render(){
        return(
            <div>
                <h1>User: {/* this.props.user === "Guest" ? this.props.user : this.props.user.displayName */} </h1>
                <button onClick={ this.props.user !== 'Guest' ? this.signOut.bind(this) : this.signIn.bind(this)}>{ this.props.user !== 'Guest' ? "Sign Out" : "Sign In" }</button>
            </div>
        )
    }
};

export default User