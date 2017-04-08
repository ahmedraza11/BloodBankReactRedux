import React, { Component } from 'react';
import './App.css';
import * as mat from 'material-ui';
import { Link } from 'react-router';
import DrawerSimpleExample from './Components/Drawer';

class App extends Component {
  render() {
    return (
      <div>
        <mat.AppBar
          title="Blood Bank"
          iconElementRight={<div>
                <Link to="/signup"><mat.FlatButton label="SignUp" /></Link>
                <Link to="/login"><mat.FlatButton label="Login" /></Link>
              </div>}
          iconElementLeft={
            <DrawerSimpleExample/>
          }

        />
          {this.props.children}
      </div>

    );
  }
}

export default App;
