import React , {Component} from 'react';
import {Router , Route , browserHistory} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Home from './Components/Home';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();






export default class Routes extends Component {
    render(){
        return(
            <MuiThemeProvider>
                <Router history={browserHistory}>
                    <Route path="/" component={App}>
                         <Route path="/signup" component={SignUp} />
                         <Route path="/login" component={Login} />
                         <Route path="/home" component={Home} />
                    </Route>
                </Router>
            </MuiThemeProvider>
            
        );
    }
}