import React, { Component } from 'react';
import * as mat from 'material-ui';
import firebase from 'firebase';
import {browserHistory} from 'react-router';
class Login extends Component {
    constructor(props) {
        super(props);
        this.signInfunc = this.signInfunc.bind(this);
        this.state = {
            temp: []
        }
    }
    signInfunc(ev) {
        ev.preventDefault();
        const user = {
            email: this.refs.email.getValue(),
            pass: this.refs.pass.getValue()
        }
        firebase.auth().signInWithEmailAndPassword(user.email, user.pass)
        .then((user)=>{
            browserHistory.push("/home");
            this.setState({
                temp: user
            });
            this.
            alert("user Successfully Loged In");
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert("Invalid username or Password please try again");
            // ...
        });

    }
    render() {
        const style = {
            margin: 12,
        }
        // console.log("User state ==== ",this.state.temp);
        return (
            <div>
                <center>
                    <h1>Login</h1>
                    <form onSubmit={this.signInfunc}>
                        <mat.TextField
                            hintText="abc@gmail.com"
                            floatingLabelText="Enter Email Here"
                            ref="email"
                        /><br />
                        <mat.TextField
                            hintText="*********"
                            floatingLabelText="Enter Password Here"
                            type="password"
                            ref="pass"
                        /><br />
                        <mat.RaisedButton type="submit" label="login" primary={true} style={style} />
                    </form>
                </center>
            </div>
        );
    }
}
export default Login;