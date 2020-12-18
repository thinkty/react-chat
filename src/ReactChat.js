import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { withStylesPropTypes } from 'react-with-styles';
import UserMessage from './UserMessage';
import Message from './lib/Message';
import {
  defaultPrimaryStyle,
  defaultSecondaryStyle,
  defaultSenderStyle,
} from './lib/styles';

const propTypes = {
  messages: PropTypes.arrayOf(PropTypes.instanceOf(Message)).isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
  senderStyle: withStylesPropTypes,
  primaryStyle: withStylesPropTypes,
  secondaryStyle: withStylesPropTypes,
};

const defaultProps = {
  height: '100%',
  width: '100%',
  senderStyle: defaultSenderStyle,
  primaryStyle: defaultPrimaryStyle,
  secondaryStyle: defaultSecondaryStyle
};

/**
 * Component for individual dialogue bubbles sent by users. At the moment, the
 * only supported message type is text.
 * 
 * ### Props
 * - height : height of the chat view
 * - width : width of the chat view
 * - messages : array of message items
 * - senderStyle : display style for the sender name 
 * - primaryStyle : message style for the messages sent by the owner
 * - secondaryStyle : message style for the messages sent by others
 */
class ReactChat extends Component {
  render() {
    const {
      height,
      width,
      messages,
      senderStyle,
      primaryStyle,
      secondaryStyle,
    } = this.props;

    return (
      <div
        style={{
          height,
          width,
          overflow: 'auto',
        }}
      >
        {
          messages &&
          messages.map((item) => (
            <UserMessage
              key={uuidv4()}
              message={item.message}
              isOwner={item.isOwner}
              sender={item.sender}
              messageType={item.messageType}
              senderStyle={senderStyle}
              primaryStyle={primaryStyle}
              secondaryStyle={secondaryStyle}
            />
          ))
        }
      </div>
    );
  }
}

ReactChat.propTypes = propTypes;
ReactChat.defaultProps = defaultProps;

export default ReactChat;
