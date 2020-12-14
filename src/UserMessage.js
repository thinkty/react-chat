import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStylesPropTypes } from 'react-with-styles';

export const messageTypes = {
  text: 0,
  image: 1,
  video: 2,
};

const propTypes = {
  message: PropTypes.string.isRequired,
  isOwner: PropTypes.bool,
  sender: PropTypes.string,
  time: PropTypes.instanceOf(Date),
  messageType: PropTypes.oneOf(Object.keys(messageTypes)),
  primaryStyle: withStylesPropTypes,
  secondaryStyle: withStylesPropTypes,
};

const defaultProps = {
  isOwner: false,
  sender: '',
  time: '',
  messageType: messageTypes.text,
  primaryStyle: {
    color: '#000',
    backgroundColor: '#d2e8ba',
    border: `thin solid #d2e8ba`,
    borderRadius: '10px',
    padding: '6px',
    fontFamily: 'Helvetica, sans-serif',
  },
  secondaryStyle: {
    color: '#000',
    backgroundColor: '#fff',
    border: 'thin solid black',
    borderRadius: '10px',
    padding: '6px',
    fontFamily: 'Helvetica, sans-serif',
  },
};

/**
 * Component for individual dialogue bubbles sent by users. At the moment, the
 * only supported message type is text.
 * 
 * ### Props
 * - message (*required*) : message content
 * - isOwner : indicates whether the message is sent by the owner
 * - sender : name of the sender
 * - time : timestamp of the message
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
      time,
      messageType,
      primaryStyle,
      secondaryStyle
    } = this.props;

    // TODO: form message bubble
    return (
      <div
        style={isOwner ? primaryStyle : secondaryStyle}
      >
        {
          message
        }
      </div>
    );
  }
}

UserMessage.propTypes = propTypes;
UserMessage.defaultProps  = defaultProps;

export default UserMessage;
