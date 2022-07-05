import React from 'react';
import ReactDOM from 'react-dom';
import ReactChat, { Message, MessageCategory } from '../src/index';

class Example extends React.Component<{}, {messages: Message[]}> {
  override state = {
    messages: [
      {
        isOwner: false,
        sender: 'Mace',
        content: 'In the name of the Galactic Senate of the Republic, you are under arrest, Chancellor.',
        category: MessageCategory.Text,
      },
      {
        isOwner: true,
        sender: 'Palp',
        content: 'Are you threatening me, Master Jedi?',
        category: MessageCategory.Text,
      },
      {
        isOwner: false,
        sender: 'Mace',
        content: 'The Senate will decide your fate.',
        category: MessageCategory.Text,
      },
      {
        isOwner: true,
        sender: 'Palp',
        content: 'I am the Senate!',
        category: MessageCategory.Text,
      },
      {
        isOwner: false,
        sender: 'Mace',
        content: 'Not yet!',
        category: MessageCategory.Text,
      },
      {
        isOwner: true,
        sender: 'Palp',
        content: 'It is treason, then.',
        category: MessageCategory.Text,
      },
    ],
  };

  onSubmitMessage = (content: string, category: MessageCategory): void => {
    const messages = [...this.state.messages];

    messages.push({
      isOwner: true,
      sender: 'Palp',
      content,
      category,
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
