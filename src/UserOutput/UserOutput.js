import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state.username = props.username
  }

  state = {
    username: ''
  }

  usernameHandlerEvent() {
    
  }
  
  render() {
    return(
      <div>
        <h3> {this.state.username} Output </h3>
        <p> Paragraph 1 </p>
        <p> Paragraph 2 </p>
      </div>
    )
  }  
}

export default UserInput