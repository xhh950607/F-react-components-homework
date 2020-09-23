import React, { Component } from 'react';
import './ChatInput.scss';

class ChatInput extends Component {
  constructor() {
    super();
    this.state = { message: '' };
  }

  send = () => {
    this.props.send(this.state.message);
    this.setState({ message: '' });
  };

  render() {
    return (
      <footer className="ChatInput">
        <input
          type="text"
          value={this.state.message}
          onChange={(event) => this.setState({ message: event.target.value })}
        />
        <button type="button" onClick={this.send}>
          Send
        </button>
      </footer>
    );
  }
}

export default ChatInput;
