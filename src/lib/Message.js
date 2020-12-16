import { checkArgsForMessage } from "./util";

/**
 * Message class takes an argument object with crucial information for the
 * UserMessage component.
 *
 * - sender : name of the sender
 * - message : contents of the message
 * - messageType : text, image, video
 */
export default class Message {
  constructor(args) {
    const { sender, message, messageType } = checkArgsForMessage(args);
    this.sender = sender;
    this.message = message;
    this.messageType = messageType;
  }

  // TODO: Getters and setters necessary?
}