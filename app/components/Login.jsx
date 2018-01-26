import React from 'react'
import base64 from 'base-64';
import { Glyphicon } from "react-bootstrap"
import style from './styles/Login.scss'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errorMessage: '',
      isLogedin: false,
      showProgress: false
    };

    this.onLoginPressed = this.onLoginPressed.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleChangeUsername(event) {
    this.setState({
      username: event.target.value
    });
  }

  handleChangePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  onLoginPressed (event){
    this.setState({showProgress: true});
    
    const encodedAuth = base64.encode(this.state.username + ":" + this.state.password);

    fetch('https://api.github.com/user', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization' : 'Basic' + encodedAuth
      }
    })
    .then((response) => {
      return response.json();
    })
    .then((results) => {
      this.setState({showProgress: false})
    })
    .catch((error) => {
      this.setState({errorMessage: error});
     });
     event.preventDefault();
  }


  render() {
    return (
     <form className={style.form} onSubmit={this.onLoginPressed}>
       <input
          className={style.input}
          type="text" 
          value={this.state.username} 
          onChange={this.handleChangeUsername} 
          placeholder="GitHub Username" 
       />
       <input
          className={style.input}
          type="password" 
          value={this.state.password} 
          onChange={this.handleChangePassword} 
          placeholder="GitHub Password" 
       />
       <button className={style.button} type="submit">
        Login
       </button>
     </form>
    );
  }
}
export default Login