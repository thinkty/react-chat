import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { withStylesPropTypes } from 'react-with-styles';
import UserMessage from './UserMessage';
import InputArea from './InputArea';
import Message from './lib/Message';
import {
  defaultPrimaryStyle,
  defaultSecondaryStyle,
  defaultSenderStyle,
  defaultTextAreaStyle,
  defaultSubmitInputStyle,
} from './lib/styles';

const propTypes = {
  onSubmit: PropTypes.func.isRequired,
  messages: PropTypes.arrayOf(PropTypes.instanceOf(Message)).isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
  senderStyle: withStylesPropTypes,
  primaryStyle: withStylesPropTypes,
  secondaryStyle: withStylesPropTypes,
  textAreaStyle: withStylesPropTypes,
  submitInputStyle: withStylesPropTypes,
  submitInputColor: PropTypes.string,
  submitInputHighlightColor: PropTypes.string,
  submitOnCtrlEnter: PropTypes.bool,
  autoScrollToBottom: PropTypes.bool,
};

const defaultProps = {
  height: '100%',
  width: '100%',
  senderStyle: defaultSenderStyle,
  primaryStyle: defaultPrimaryStyle,
  secondaryStyle: defaultSecondaryStyle,
  textAreaStyle: defaultTextAreaStyle,
  submitInputStyle: defaultSubmitInputStyle,
  submitInputColor: '#DCDCDC',
  submitInputHighlightColor: '#B3B3B3',
  submitOnCtrlEnter: true,
  autoScrollToBottom: true,
};

/**
 * Main component
 * 
 * ### Props
 * - onSubmit : a callback function to be called when submitting
 * - messages : array of message items
 * - height : height of the chat view
 * - width : width of the chat view
 * - senderStyle : display style for the sender name 
 * - primaryStyle : message style for the messages sent by the owner
 * - secondaryStyle : message style for the messages sent by others
 * - textAreaStyle : style props for the text area
 * - submitInputStyle : style props for the submission button
 * - submitInputColor : color for the submission button when not hovered
 * - submitInputHighlightColor : color for the submission button when hovered
 * - submitOnCtrlEnter : whether to submit on ctrl and enter both pressed
 * - autoScrollToBottom : scroll to bottom on mount and on update (new message)
 */
class ReactChat extends Component {
  scrollToBottom = () => {
    const { autoScrollToBottom } = this.props;

    if (autoScrollToBottom) {
      this.messagesEnd.scrollIntoView({ behavior: 'smooth' });
    }
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    const {
      height,
      width,
      onSubmit,
      messages,
      senderStyle,
      primaryStyle,
      secondaryStyle, 
      textAreaStyle,
      submitInputStyle,
      submitInputColor,
      submitInputHighlightColor,
      submitOnCtrlEnter,
    } = this.props;

    return (
      <div
        style={{
          width,
        }}
      >
        <div
          style={{
            height,
            overflow: 'auto',
            marginBottom: '1px',
          }}
        >
          {
            messages &&
            messages.map((item) => (
              <UserMessage
                key={uuidv4()}
                {...item}
                senderStyle={senderStyle}
                primaryStyle={primaryStyle}
                secondaryStyle={secondaryStyle}
              />
            ))
          }
          <div ref={(el) => { this.messagesEnd = el; }}/>
        </div>
        <InputArea
          onSubmit={onSubmit}
          textAreaStyle={textAreaStyle}
          submitInputStyle={submitInputStyle}
          submitInputColor={submitInputColor}
          submitInputHighlightColor={submitInputHighlightColor}
          submitOnCtrlEnter={submitOnCtrlEnter}
        />
      </div>
    );
  }
}

ReactChat.propTypes = propTypes;
ReactChat.defaultProps = defaultProps;

export default ReactChat;
