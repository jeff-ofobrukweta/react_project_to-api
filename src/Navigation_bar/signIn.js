import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import ReactDOM  from 'react-dom';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';





class Signin extends Component{
    
  constructor(){
    super();
    this.state={
      username:'',
      email:'',
      password:''
    };
    this.handleupdate = this.handleupdate.bind(this)
  }

  handleSubmitAction=()=>{
    this.handlepostaction();
    console.log(`this is the action submit button ${JSON.stringify(this.state,null,2)}`)
    this.setState({
      username:'',
      email:'',
      password:''
    });
  }

  handleupdate=(evt)=>{
    console.log('event',evt)
    const {name,value} = evt.target;
    this.setState({
      [name]: value
    })
  }
  
   handlepostaction(){
    console.log(`this is the post operation ${JSON.stringify(this.state,null,2)}`)
    axios.post(`http://localhost:80/login`, {
      username:this.state.username,
      email:this.state.email,
      password:this.state.password
    })
    .then( (response)=> {
      console.log(response.data,null,2);
    })
    .catch( (error)=> {
      console.log(error);
    });
  }
  render(){                           
    return(
      <MuiThemeProvider>
    <div id='field_info'>
    <TextField
        name='username'
        value={this.state.username}
        onChange={this.handleupdate}                                                                                           
        hintText="username"
        floatingLabelText="username"
        />{console.log(`username`+" "+this.state.username)}<br />
    <TextField
          name='email'
          value={this.state.email}
          onChange={this.handleupdate}
          hintText="email"
          floatingLabelText="email"
          />
          {console.log(`email value`+this.state.email)}
        <br />
        <TextField
      name='password'
      value={this.state.password}
      onChange={this.handleupdate}
      hintText="Password Field"
      floatingLabelText="Password"
      type="password"
    />
    {console.log(`password value`+this.state.password)}
    <br/>
    <div>
    <RaisedButton label="Submit" primary={true} onClick={()=>this.handleSubmitAction()} />
  </div>
  </div>
  </MuiThemeProvider>
    );
  }
}


export default Signin;