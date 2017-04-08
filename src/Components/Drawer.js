import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MdMenu from 'react-icons/lib/md/menu'
export default class DrawerSimpleExample extends React.Component {

constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
       <IconButton
        iconClassName="muidocs-icon-custom-github"
        onTouchTap={this.handleToggle}
         >
            <MdMenu onClick={this.handleToggle} />
         </IconButton>
        <Drawer open={this.state.open}>
            <AppBar title="AppBar" />
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
          <RaisedButton 
            label= "Close"
             onTouchTap={this.handleClose}
           />
        </Drawer>
      </div>
    );
  }
}