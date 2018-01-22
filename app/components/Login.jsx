import React from 'react';
import axios from 'axios';
import { Button, FormGroup, FormControl, ControlLabel,  Glyphicon } from "react-bootstrap";
import style from './styles/Login.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '', 
      userProfile: [],
      profileRequest: false,
      error: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    axios(`https://api.github.com/users/${this.state.value}`) 
    .then(response => response)
    .then(data => this.setState({userProfile : data.data, profileRequest: true}))
    .catch(error => this.setState({error: error.message}));
    event.preventDefault();
  }

  render() {
    const { profileRequest, userProfile, error} = this.state;
    return (
     <div>
       { !profileRequest &&
         <div className={style.login}>
         <form onSubmit={this.handleSubmit}>
           <FormGroup controlId="userName" bsSize="large">
             <ControlLabel>User Name</ControlLabel>
             <FormControl
               autoFocus
               placeholder="Type User Name"
               value={this.state.userName}
               onChange={this.handleChange}
             />
           </FormGroup>
           <Button
             block
             bsSize="large"
             type="submit"
           >
             Login
           </Button>
           <p className={style.error}> {error} </p>
         </form>
       </div>
       }
       { profileRequest &&
        <center className={style.prgofileContainer}>
          <h2 className={style.prgofileName}><Glyphicon glyph="user" /> {userProfile.login}</h2>
          <div className={style.item}>{userProfile.location !== null && `Location: ${userProfile.location}`}</div>
          <div>
            <a className={style.link} href={userProfile.url} target="_blank">Github</a>
            <a className={style.link} href={userProfile.blog} target="_blank">Portfolio</a>
            <span className={style.item}><Glyphicon glyph="thumbs-up" /> {userProfile.followers}</span>
            <a className={style.link} href={userProfile.repos_url} target="_blank">
              <Glyphicon glyph="folder-open" /><span> Repos</span>
            </a>
          </div>
          <div className={style.prgofileBio}>
            {userProfile.bio} 
            {userProfile.bio !== null &&
              <Glyphicon glyph="pencil" />
            }
          </div>
          <img className={style.prgofileImage} src={userProfile.avatar_url} />
        </center>
       }
     </div>
    );
  }
}
export default Login