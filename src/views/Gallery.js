import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import GridListExampleComplex from '../Navigation_bar/Grid.js';
import DrawerOpenRightExample from '../Navigation_bar/drawerSidebar.js';
import BodyBackgroundColor from 'react-body-backgroundcolor';
class Gallery extends React.Component{
    render(){
        return(
            <MuiThemeProvider>
            <BodyBackgroundColor backgroundColor='#b1bdbf'>
            <div id='blue_backgroundHomePage'>
                <DrawerOpenRightExample/>
                    <GridListExampleComplex/>
                </div>
            </BodyBackgroundColor>
           </MuiThemeProvider>
        );
    }
}

export default Gallery