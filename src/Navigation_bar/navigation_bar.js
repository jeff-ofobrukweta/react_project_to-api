import React from 'react';
import {HashRouter as Router,Route, Switch} from 'react-router-dom';
import Home_component from '../views/singlePage/homeView.js';
import App from '../App.js';
import Demo4 from './Grid2.js'
import TextFieldExampleSimple from './Inputform';
import Signin from './signIn';


 
class NavigationBar extends React.Component{
    render(){
       return(<div>
         <Router>
           <div>
           <Switch>
              <Route exact path="/signup" component={TextFieldExampleSimple}/>
              <Route exact path="/" component={Home_component} />
              <Route exact path="/signin" component={Signin} />
              <Route exact path="/recipe" component={App}/>
              <Route exact path="/gallery" component={Demo4}/>
            </Switch>
           </div>
          </Router>
        </div>      
         );
     }
 }

 export default NavigationBar;


 