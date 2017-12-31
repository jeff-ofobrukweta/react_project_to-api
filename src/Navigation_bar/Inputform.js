import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import ReactDOM  from 'react-dom';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import DatePicker from 'material-ui/DatePicker';

/**
 * The Date Picker defaults to a portrait dialog. The `mode` property can be set to `landscape`.
 * You can also disable the Dialog passing `true` to the `disabled` property.
 * To display the year selection first, set the `openToYearSelection` property to `true`.
 */

 // this  
 
// const style = {
//   margin: 12,x
// }; 

class TextFieldExampleSimple extends Component{

  constructor(){
    super();
    this.state={
      firstname:'',
      phone_number: '',
      email:'',
      password:'',
      users: []
    };
    this.handleupdate = this.handleupdate.bind(this)
  }

  componentWillMount() {
    this.handlegetfromAxios();
  }

  handleSubmitAction=()=>{
    this.handlepostaction();
    console.log(`this is the action submit button ${JSON.stringify(this.state,null,2)}`)
    this.setState({
      firstname:'',
      phone_number: '',
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
  
  handlegetfromAxios(){
    axios.get(`http://localhost:80/user`)
    .then((response)=> {
        this.setState({
          users: response.data
        });
    })
    .catch( (error)=> {
      console.log(error);
    });
  }
  

  handlepostaction(){
    console.log(`this is the post operation ${JSON.stringify(this.state,null,2)}`)
    axios.post(`http://localhost:80/user`, {
      username:this.state.firstname,
      phone_number: this.state.phone_number,
      email:this.state.email,
      password:this.state.password
    })
    .then((response)=> {
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
        name='firstname'
        value={this.state.firstname}
        onChange={this.handleupdate}                                                                                           
        hintText="first name"
        floatingLabelText="name"
        />{console.log(`first value`+" "+this.state.firstname)}<br />
    <TextField
            name='phone_number'
            value={this.state.phone_number}
            onChange={this.handleupdate}
            hintText="phone number"
            floatingLabelText="phone number"
            />
            {console.log(`how second value`+" "+this.state.phone_number)}
            <br />
    <TextField
          name='email'
          value={this.state.email}
          onChange={this.handleupdate}
          hintText="Email"
          floatingLabelText="Email"
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
    <br />
    <div>
    <DatePicker hintText="Landscape Dialog" mode="landscape" />
    </div>
    <br/>
    <div>
    <RaisedButton label="Submit" primary={true} onClick={()=>this.handleSubmitAction()} />
  </div>
    <div>
      <RaisedButton label="Facebook" primary={true} />
    </div>
  </div>
  </MuiThemeProvider>
    );
  }
  componentWillUnmount(){
    console.log(`componentWillUnmount`)
  }
}


export default TextFieldExampleSimple;