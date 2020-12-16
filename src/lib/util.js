/**
 * This module contains minor utility functions for other modules
 */

import { messageTypes as types } from "../UserMessage";

const messageTypes = Object.values(types);

/**
 * Check whether the given argument is null or undefined. How to assert the
 * assert function?
 *
 * @param {string} key Argument name
 * @param {*} value Argument value
 * @throws when null or undefined
 */
export function assert(key, value) {
  if (value == null || typeof value === 'undefined') {
    throw new Error(`${key} '${value}' is null or undefined`);
  }
}

 /**
  * Check the arguments of the Message class
  *
  * @param {*} args Argument object passed to the constructor
  * @throws on invalid arguments
  * @returns args
  */
export function checkArgsForMessage(args) {
  assert('args', args);

  const { sender, message, messageType } = args;

  assert('sender', sender);
  assert('message', message);
  if (message === '') {
    throw new Error('Message is empty');
  }
  assert('messageType', messageType);
  if (!messageTypes.includes(message)) {
    throw new Error(`Unexpected message type ${message}`);
  }

  return args;
}