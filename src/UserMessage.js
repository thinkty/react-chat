import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStylesPropTypes } from 'react-with-styles';
import {
  defaultPrimaryStyle,
  defaultSecondaryStyle,
  defaultSenderStyle,
} from './lib/styles';

export const messageTypes = {
  text: 0,
  image: 1,
  video: 2,
};

const propTypes = {
  message: PropTypes.string.isRequired,
  isOwner: PropTypes.bool,
  sender: PropTypes.string,
  senderStyle: withStylesPropTypes,
  messageType: PropTypes.oneOf(Object.keys(messageTypes)),
  primaryStyle: withStylesPropTypes,
  secondaryStyle: withStylesPropTypes,
};

const defaultProps = {
  isOwner: false,
  sender: '?',
  senderStyle: defaultSenderStyle,
  messageType: messageTypes.text,
  primaryStyle: defaultPrimaryStyle,
  secondaryStyle: defaultSecondaryStyle,
};

/**
 * Component for individual dialogue bubbles sent by users. At the moment, the
 * only supported message type is text.
 * 
 * ### Props
 * - message (*required*) : message content
 * - isOwner : indicates whether the message is sent by the owner
 * - sender : name of the sender
 * - senderStyle : display style for the sender name 
 * - messageType : type of message chosen from the *messageTypes* enum
 * - primaryStyle : message style for the messages sent by the owner
 * - secondaryStyle : message style for the messages sent by others
 */
class UserMessage extends Component {
  render() {
    const {
      message,
      isOwner,
      sender,
      senderStyle,
      messageType,
      primaryStyle,
      secondaryStyle
    } = this.props;

    const messageStyle =
      isOwner ?
      {
        ...defaultPrimaryStyle,
        ...primaryStyle,
      } :
      {
        ...defaultSecondaryStyle,
        ...secondaryStyle
      };

    // TODO: Bug with span width. Even if the message is short, if the name is long, there is always blank space 
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto',
          justifyContent: isOwner ? 'end' : 'start'
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto',
            justifyContent: isOwner ? 'end' : 'start'
          }}
        >
          <span
            style={{
              ...defaultSenderStyle,
              ...senderStyle,
            }}
          >
            {
              sender
            }
          </span>
        </div>
        <span style={messageStyle}>
          {
            message
          }
        </span>
      </div>
    );
  }
}

UserMessage.propTypes = propTypes;
UserMessage.defaultProps  = defaultProps;

export default UserMessage;
