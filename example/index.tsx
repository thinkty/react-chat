import React from 'react';
import ReactDOM from 'react-dom';
import { ReactChat, Message } from '../src/index';

class Example extends React.Component<{}, {messages: Message[]}> {
  override state = {
    messages: [
      {
        isOwner: false,
        sender: 'Mace',
        content: 'In the name of the Galactic Senate of the Republic, you are under arrest, Chancellor.',
      },
      {
        isOwner: true,
        sender: 'Palp',
        content: 'Are you threatening me, Master Jedi?',
      },
      {
        isOwner: false,
        sender: 'Mace',
        content: 'The Senate will decide your fate.',
      },
      {
        isOwner: true,
        sender: 'Palp',
        content: 'I am the Senate!',
      },
      {
        isOwner: false,
        sender: 'Mace',
        content: 'Not yet!',
      },
      {
        isOwner: true,
        sender: 'Palp',
        content: 'It is treason, then.',
      },
    ],
  };

  onSubmitMessage = (content: string): void => {
    const messages = [...this.state.messages];

    messages.push({
      isOwner: true,
      sender: 'Palp',
      content,
    });

    this.setState({ messages });
  }

  override render() {
    return (
      <div>
        <h1
          style={{
            color: '#fff',
            backgroundColor: '#000',
            fontFamily: 'Helvetica, sans-serif',
            padding: '15px',
            textAlign: 'center',
          }}
        >
          React Chat Example
        </h1>
        <ReactChat
          height="80vh"
          width="100%"
          onSubmit={this.onSubmitMessage}
          messages={this.state.messages}
        />
      </div>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById('root'));
