import React from 'react';
import {
  defaultPrimaryStyle,
  defaultSecondaryStyle,
  defaultSenderStyle,
} from './styles';

/**
 * Basic message type
 * 
 * - isOwner: Whether the user who sent the message is the same as the user of the device
 * - author : Name of the user that sent the message
 * - content : Raw message payload
 * - type : Type of message. Could be text, image, video, 
 */
 export type Message = {
  isOwner: boolean;
  sender: string;
  content: string;
  category: MessageCategory;
};

export enum MessageCategory {
  Text,
  Image,
  Video,
  URL,
};

export type UserMessageProps = {
  message: Message;
  senderStyle?: React.CSSProperties;
  primaryStyle?: React.CSSProperties;
  secondaryStyle?: React.CSSProperties;
};

/**
 * Component for individual dialogue bubbles sent by users. At the moment, the
 * only supported message type is text.
 *
 * Props
 * - message : message content
 * - senderStyle : display style for the sender name
 * - primaryStyle : message style for the messages sent by the owner
 * - secondaryStyle : message style for the messages sent by others
 */
export const UserMessage = ({
  message,
  senderStyle = defaultSenderStyle,
  primaryStyle = defaultPrimaryStyle,
  secondaryStyle = defaultSecondaryStyle,
}: UserMessageProps): JSX.Element => {
  const { isOwner, sender, content, category } = message;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto',
        justifyContent: isOwner ? 'end' : 'start',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto',
          justifyContent: isOwner ? 'end' : 'start',
        }}
      >
        <span style={senderStyle}>
          { sender }
        </span>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto',
          justifyContent: isOwner ? 'end' : 'start',
        }}
      >
        <span style={isOwner ? primaryStyle : secondaryStyle}>
          {
            category === MessageCategory.Text && content
          }
        </span>
      </div>
    </div>
  );
}
