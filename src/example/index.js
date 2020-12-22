import React from 'react';
import ReactDOM from 'react-dom';
import ReactChat from '../index';
import Message from '../lib/Message';
import { messageTypes } from '../UserMessage';

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

function onSubmitMessage(value) {
  console.log('Entered: ' + value);
}

ReactDOM.render(
  <div>
    <h1>React Chat Example</h1>
    <ReactChat
      height="300px"
      width="100%"
      onSubmit={onSubmitMessage}
      messages={messages}
    />
  </div>
, document.getElementById('root'));
