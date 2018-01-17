import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import style from './styles/Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = { 
                userEmail: "",
                userPassword: "",
                 };
}

validateFPrm() {
    this.state.length.email.length > 0 && this.state.length.password > 0;
}

handleUserSubmit() {
    axios.post('https://api.github.com/user', {
        userEmail: this.state.email,
        userPassword: this.state.password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}

  render() {
    return (
      <div className={style.login}>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            type="submit"
            onSubmit={this.handleUserSubmit}
            disabled={this.validateFPrm}
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}
export default Login