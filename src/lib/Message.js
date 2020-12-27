import { checkArgsForMessage } from './util';

/**
 * Message class takes an argument object with crucial information for the
 * UserMessage component.
 *
 * - isOwner: whether the sender is the owner of the chat room
 * - sender : name of the sender
 * - message : contents of the message
 * - messageType : text, image, video
 */
export default class Message {
  constructor(args) {
    const {
      isOwner,
      sender,
      message,
      messageType,
    } = checkArgsForMessage(args);

    this.isOwner = isOwner;
    this.sender = sender;
    this.message = message;
    this.messageType = messageType;
  }

  toString() {
    return `\nIs Owner: ${this.isOwner}\nSender: ${this.sender}\nMessage: ${this.message}\nMessage Type: ${this.messageType}\n`;
  }
}
