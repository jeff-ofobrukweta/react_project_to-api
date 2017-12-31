import React from 'react';
import DrawerOpenRightExample from '../../Navigation_bar/drawerSidebar.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import BodyBackgroundColor from 'react-body-backgroundcolor';
class Home_component extends React.Component{
    render(){
        return(
    <MuiThemeProvider>
    <BodyBackgroundColor backgroundColor='#00bcd4'>
        <div id='blue_backgroundHomePage'>
        <div id='home'>
          <DrawerOpenRightExample/>
        </div>
        <div id='text'>
        <br/>
        <h1>just the sample page for the home page place the logo somewhere as pleased </h1>
        </div>
        </div>
        </BodyBackgroundColor>
    </MuiThemeProvider>
        );
    }
}


export default Home_component;