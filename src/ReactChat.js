import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserMessage, { messageTypes } from './UserMessage';
import Message from './lib/Message';

const propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  messageComponent: PropTypes.elementType,
  // TODO: instead of passing down a message component, just pass down the props to the UserMessage
  messages: PropTypes.arrayOf(PropTypes.instanceOf(Message)),
};

/**
 * Component for individual dialogue bubbles sent by users. At the moment, the
 * only supported message type is text.
 * 
 * ### Props
 * - height : height of the chat view
 * - width : width of the chat view
 * - messageComponent : user styled UserMessage component
 */
export default class ReactChat extends Component {
  render() {
    const message = new Message({
      sender: 'Mark',
      message: 'lol',
      messageType: messageTypes.text,
    });

    return (
      <div>
        <p>React Chat</p>
        <UserMessage
          sender="Mark Hamill"
          message="Hello World"
          secondaryStyle={{
            color: '#0f0'
          }}
        />
        <UserMessage
          isOwner
          sender="Spongebob"
          message="너와 함께한 시간 모두 눈부셨다. 날이 좋아서 날이 좋지 않아서 날이 적당해서 모든 날이 좋았다. 그리고 무슨 일이 벌어져도 네 잘못이 아니다."
        />
        <UserMessage
          sender="Bob the destroyer of dimensions and the lord of the galaxy"
          message="Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not."
        />
        <UserMessage
          isOwner
          sender="Empty Message"
          secondaryStyle={{
            color: '#0f0'
          }}
        />
      </div>
    );
  }
}

ReactChat.propTypes = propTypes;
