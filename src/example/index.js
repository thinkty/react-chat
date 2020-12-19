import React from 'react';
import ReactDOM from 'react-dom';
import ReactChat from '../index';
import Message from '../lib/Message';
import { messageTypes } from '../UserMessage';

const messages = [];
messages.push(new Message({
  isOwner: false,
  sender: 'Mark',
  message: 'lol',
  messageType: messageTypes.text,
}));
messages.push(new Message({
  isOwner: false,
  sender: 'Mark Hamill',
  message: 'Hello World',
  messageType: messageTypes.text,
}));
messages.push(new Message({
  isOwner: true,
  sender: 'Spongebob',
  message: '너와 함께한 시간 모두 눈부셨다. 날이 좋아서 날이 좋지 않아서 날이 적당해서 모든 날이 좋았다. 그리고 무슨 일이 벌어져도 네 잘못이 아니다.',
  messageType: messageTypes.text,
}));
messages.push(new Message({
  isOwner: false,
  sender: 'Bob the destroyer of dimensions and the lord of the galaxy',
  message: 'Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not.',
  messageType: messageTypes.text,
}));
messages.push(new Message({
  isOwner: true,
  sender: 'Empty Message',
  message: 'No',
  messageType: messageTypes.text,
}));

function onSubmit(value) {
  console.log('Entered: ' + value);
}

ReactDOM.render(
  <div>
    <p>React Chat</p>
    <ReactChat
      height="300px"
      width="500px"
      onSubmit={onSubmit}
      messages={messages}
    />
  </div>
, document.getElementById('root'));
