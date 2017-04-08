import React, { Component } from 'react';
import * as mat from 'material-ui';
import firebase from 'firebase';
class SignUp extends Component {

    constructor(props) {
        super(props);
        this.SignUpFunc = this.SignUpFunc.bind(this);
    }

    SignUpFunc(ev) {
        ev.preventDefault();
        const user = {
            email: this.refs.email.getValue(),
            pass: this.refs.pass.getValue()     
        }
        console.log(user);
        firebase.auth().createUserWithEmailAndPassword(user.email, user.pass)
        .then(function (user) {
             alert("User Successfully Created!");
        }).catch(function (error) {
            // Handle Errors here.
            
            var errorCode = error.code;
            var errorMessage = error.message;
            alert("Some Error Accourd"+errorMessage);
            // ...
        });
        
    }


    render() {
        const style = {
            margin: 12
        }

        return (
            <div>

                <center>
                    <h1>SignUp</h1>
                    <form onSubmit={this.SignUpFunc}>
                        <mat.TextField
                            hintText="abc@gmail.com"
                            floatingLabelText="Enter Email here"
                            ref="email"
                        /><br />
                        <mat.TextField
                            hintText="*********"
                            floatingLabelText="Enter Password Here"
                            type="password"
                            ref="pass"
                        /><br />
                        <mat.RaisedButton type="submit" label="SignUp" primary={true} style={style} />
                    </form>
                </center>
            </div>
        );
    }
}
export default SignUp;