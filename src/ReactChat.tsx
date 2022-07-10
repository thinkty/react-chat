import React from 'react';
import { v4 } from 'uuid';
import { Message, UserMessage } from './UserMessage';
import { InputArea, InputAreaProps } from './InputArea';
import { defaultSenderStyle, defaultPrimaryStyle, defaultSecondaryStyle, defaultTextAreaStyle, defaultSubmitButtonStyle } from './styles';

type ReactChatProps = {
  height?: string;
  width?: string;
  messages: Message[];
  autoScrollToBottom?: boolean;

  senderStyle?: React.CSSProperties;
  primaryStyle?: React.CSSProperties;
  secondaryStyle?: React.CSSProperties;
} & InputAreaProps;

/**
 * Main component
 *
 * Props
 * - height : height of the ReactChat component
 * - width : width of the ReactChat component
 * - messages : array of message items
 * - autoScrollToBottom : scroll to bottom on mount and on update (new message)
 * 
 * - senderStyle : display style for the sender name
 * - primaryStyle : message style for the messages sent by the owner
 * - secondaryStyle : message style for the messages sent by others
 *
 * - onSubmit : A callback function to be called when submit button or ctrl-enter has been pressed
 * - textAreaStyle : CSS properties for the text area
 * - enableSubmitButton : If true, display submit button
 * - enableCtrlEnterSubmit : If true, enable the ability to submit by pressing ctrl-enter
 * - submitButtonColor : Color of the submit button on non-hover state
 * - submitButtonStyle : CSS properties for the submit button
 * - submitButtonHoverColor: Color of the submit button on hover state
 * - submitButtonHoverStyle : CSS properties for the submit button on hover state
 */
export class ReactChat extends React.Component<ReactChatProps, {}> {

  private messagesEnd: any;

  override componentDidMount() {
    this.scrollToBottom();
  }

  override componentDidUpdate() {
    this.scrollToBottom();
  }

  // Helper function to scroll the view to the bottom of the component
  private scrollToBottom = () => {
    const { autoScrollToBottom = true } = this.props;

    if (autoScrollToBottom) {
      this.messagesEnd.scrollIntoView({ behavior: 'smooth' });
    }
  }

  override render() {
    const {
      height = '500px',
      width = '300px',
      messages,

      senderStyle = defaultSenderStyle,
      primaryStyle = defaultPrimaryStyle,
      secondaryStyle = defaultSecondaryStyle,

      onSubmit,
      enableSubmitButton = true,
      enableCtrlEnterSubmit = true,
      textAreaStyle = defaultTextAreaStyle,
      submitButtonColor = '#DCDCDC',
      submitButtonStyle = defaultSubmitButtonStyle,
      submitButtonHoverColor = '#B3B3B3',
      submitButtonHoverStyle = defaultSubmitButtonStyle,
    } = this.props;

    return (
      <div
        style={{
          height,
          width,
          display: 'grid',
          gap: 10,
          gridTemplateColumns: 'auto',
          alignContent: 'space-between',
          border: '1px solid #CCC',
          boxShadow: '1px 1px 1px #999',
          borderRadius: 10,
          padding: 10,
        }}
      >
        <div
          style={{
            maxHeight: height,
            overflow: 'auto',
            marginBottom: '1px',
          }}
        >
          {
            messages.map((message) => (
              <UserMessage
                key={v4()}
                message={message}
                senderStyle={senderStyle}
                primaryStyle={primaryStyle}
                secondaryStyle={secondaryStyle}
              />
            ))
          }
          <div ref={(el) => { this.messagesEnd = el; }} />
        </div>
        <InputArea
          onSubmit={onSubmit}
          textAreaStyle={textAreaStyle}
          enableSubmitButton={enableSubmitButton}
          enableCtrlEnterSubmit={enableCtrlEnterSubmit}
          submitButtonColor={submitButtonColor}
          submitButtonStyle={submitButtonStyle}
          submitButtonHoverColor={submitButtonHoverColor}
          submitButtonHoverStyle={submitButtonHoverStyle}
        />
      </div>
    );
  }
}
