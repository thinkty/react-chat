import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactChat from '../index';
import Message from '../lib/Message';
import { messageTypes } from '../UserMessage';

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }

  componentDidMount() {
    const messages = [
      new Message({
        isOwner: false,
        sender: 'Mama Mace',
        message: 'In the name of the Galactic Senate of the Republic, you are under arrest, Chancellor.',
        messageType: messageTypes.text,
      }),
      new Message({
        isOwner: true,
        sender: 'Papa Palp',
        message: 'Are you threatening me, Master Jedi?',
        messageType: messageTypes.text,
      }),
      new Message({
        isOwner: false,
        sender: 'Mama Mace',
        message: 'The Senate will decide your fate.',
        messageType: messageTypes.text,
      }),
      new Message({
        isOwner: true,
        sender: 'Papa Palp',
        message: 'I am the Senate!',
        messageType: messageTypes.text,
      }),
      new Message({
        isOwner: false,
        sender: 'Mama Mace',
        message: 'Not yet!',
        messageType: messageTypes.text,
      }),
      new Message({
        isOwner: true,
        sender: 'Papa Palp',
        message: `It's treason, then.`,
        messageType: messageTypes.text,
      }),
    ];
    this.setState({ messages });
  }

  onSubmitMessage = (value) => {
    console.log('Entered: ' + value);

    const { messages } = this.state;
    messages.push(new Message({
      isOwner: true,
      sender: 'Papa Palp',
      message: value,
      messageType: messageTypes.text,
    }));

    this.setState({ messages });
  }

  render() {
    const { messages } = this.state;
    return (
      <div>
        <h1
          style={{
            color: '#fff',
            backgroundColor: '#000',
            padding: '15px'
          }}
        >
          React Chat Example
        </h1>
        <ReactChat
          height="300px"
          width="100%"
          onSubmit={this.onSubmitMessage}
          messages={messages}
        />
      </div>
    );
  }
}

ReactDOM.render(<Example/>, document.getElementById("root"));
