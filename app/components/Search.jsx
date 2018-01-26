import React from 'react';
import axios from 'axios';
import { Glyphicon } from "react-bootstrap";
import MtSvgLines from 'react-mt-svg-lines'; 
import style from './styles/Search.scss';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '', 
      userProfile: [],
      profileRequest: false,
      error: null,
      isTouched: false,
      clearInput: false
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
    .then(data => this.setState({userProfile : data.data, profileRequest: true, error: null, clearInput: true}))
    .catch(error => this.setState({error: error.message, clearInput: true}));
    event.preventDefault();
  }

  resetField(event) {
    this.setState({value: null, clearInput: false});
  } 

  render() {
    const { profileRequest, userProfile, error, isTouched, clearInput} = this.state;
    return (
     <div>
        <div className={style.search}>
         <form className={style.form}>
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
                onClick={!clearInput ? this.handleSubmit : this.resetField}
              >
              {!clearInput &&
                <Glyphicon className={style.icon} glyph="search" />
              }
              {clearInput &&
                <Glyphicon className={style.icon} glyph="remove" />
              }
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
            <a className={style.link} href={userProfile.html_url} target="_blank">Github</a>
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
       {!profileRequest && isTouched &&
         <div className={style.svgContainer} >
          <MtSvgLines animate={true} duration={4000} fade={true} timing={"ease-in-out"}>
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke="#09cac7" strokeWidth="0.3" fill="none" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </MtSvgLines>
         </div>
       }
     </div>
    );
  }
}
export default Search