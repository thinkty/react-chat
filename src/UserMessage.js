import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStylesPropTypes } from 'react-with-styles';

export const messageTypes = {
  text: 0,
  image: 1,
  video: 2,
};

const propTypes = {
  sender: PropTypes.string.isRequired,
  time: PropTypes.instanceOf(Date).isRequired,
  messageType: PropTypes.oneOf(Object.keys(messageTypes)).isRequired,
  message: PropTypes.string.isRequired,
  style: withStylesPropTypes,
};

const defaultProps = {
  style: {
    color: '#000',
    backgroundColor: '#fff',
    border: 'thin solid black',
    borderRadius: '10px',
    padding: '6px',
  },
};

/**
 * Component for individual dialogue bubbles sent by users. At the moment, the
 * only supported message type is text.
 */
class UserMessage extends Component {
  render() {
    return (
      <div>

      </div>
    );
  }
}

UserMessage.propTypes = propTypes;
UserMessage.defaultProps  = defaultProps;

export default UserMessage;
