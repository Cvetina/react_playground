import React from 'react';
import axios from 'axios';
import { Glyphicon } from "react-bootstrap";
import style from './styles/Search.scss';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '', 
      userProfile: [],
      profileRequest: false,
      error: null,
      isTouched: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value, isTouched: true});
  }

  handleSubmit(event) {
    axios(`https://api.github.com/users/${this.state.value}`) 
    .then(response => response)
    .then(data => this.setState({userProfile : data.data, profileRequest: true}))
    .catch(error => this.setState({error: error.message}));
    event.preventDefault();
  }

  render() {
    const { profileRequest, userProfile, error, isTouched} = this.state;
    return (
     <div>
        <div className={style.search}>
         <form className={style.form} onSubmit={this.handleSubmit}>
             <input
               className={style.input}
               placeholder="Type User Name"
               value={this.state.userName}
               onChange={this.handleChange}
             />
            <button
              className={style.button}
              type="submit"
              disabled={!isTouched}
            >
             Search
            </button>
         </form>
         { error &&
           <p className={style.error}> {error} </p>
         }
       </div>
       { profileRequest &&
        <center className={style.prgofileContainer}>
          <h2 className={style.prgofileName}><Glyphicon glyph="user" /> {userProfile.login}</h2>
          <div className={style.item}>{userProfile.location !== null && `Location: ${userProfile.location}`}</div>
          <div>
            <a className={style.link} href={userProfile.url} target="_blank">Github</a>
            {userProfile.blog !== '' &&
            <a className={style.link} href={userProfile.blog} target="_blank">Portfolio</a>
            }
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
export default Search