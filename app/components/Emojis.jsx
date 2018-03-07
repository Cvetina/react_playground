import React, { Component } from 'react';


class Emojis extends React.Component {
  constructor() {
    super();
    this.state = { 
									emojis: [],
									isClicked: false
								 };
		this.handleEmojiClick = this.handleEmojiClick.bind(this);
}
	componentDidMount() {
		fetch(`https://api.github.com/emojis`) 
		.then(data => data.json())
		.then(data => this.setState({emojis : data}));
	}
	
	handleEmojiClick (key) { 
		this.setState({
      		emojis: Object.keys(this.state.emojis).filter((objKey) => objKey !== key)
		});
	};
	render() {
		const { emojis, isClicked } = this.state;
		return (
			<div>
				{ 
					Object.keys(emojis).map((key) =>
						<a key={key} href="#" onClick={() => this.handleEmojiClick(key)}>
							<img width="20" src={ emojis[key] } />
						</a>
	  			).slice(0,10) }
			</div>
		);
	}
}
export default Emojis;