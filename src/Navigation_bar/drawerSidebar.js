import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
//import SvgIconExampleSimple from '../Icon_components_materialdesign/Home_icon.js';
//import RaisedButton from 'material-ui/RaisedButton';
import hamburger from '../Image/ic_menu_white_36px.svg';
import {NavLink} from 'react-router-dom';


export default class  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false,
      openSecoundary:false,
      width:200};
  }

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

  render() {
    return (

      <div onClick={this.handleToggle}>
        <img src={hamburger} className='hamburger'
          label="Toggle Drawer" alt='hamburger-svg' id='hamburger'
        />
        <Drawer width={200} openSecondary={true} open={this.state.open} openSecondary={this.state.openSecondary} width={this.state.width} >
          <AppBar title="Logo" />
          <MenuItem onClick={this.handleClose}>
          <NavLink activeClassName='NavLink' exact to='/'><b>Home</b></NavLink>
          </MenuItem>
            <br/>
          <MenuItem onClick={this.handleClose}><NavLink  activeClassName='NavLink' exact to='/gallery'><b>Gallery</b></NavLink></MenuItem>
          <br/>
          <MenuItem onClick={this.handleClose}><NavLink  activeClassName='NavLink' exact to='/'><b>About us</b></NavLink></MenuItem>
          <br/>
          <MenuItem onClick={this.handleClose}><NavLink  activeClassName='NavLink' exact to='/recipe'><b>Designer(s)</b></NavLink></MenuItem>
          <br/>
          <MenuItem onClick={this.handleClose}><NavLink  activeClassName='NavLink' exact to='/signup'><b>Signup</b></NavLink></MenuItem>
        </Drawer>
      </div>
    );
  }
}