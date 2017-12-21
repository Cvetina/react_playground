import React from 'react';

export default class CardsItemLister extends React.Component {
  constructor() {
      super();
      this.state = { cardItems: [] };
  }
  
  componentDidMount() {
      fetch(`http://localhost:8088/api/this/is/an/api/call`) 
          .then(result => {
              this.setState({cardItems:result.json()});
          });
  }
  
  render() {        
      return(
          <div>
              <div>Items:</div>
              { this.state.cardItems.map(item => { return <div>{http://item.name}</div>}) }          
          </div>  
      );
  }
}