import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserMessage from './UserMessage';

export default class ReactChat extends Component {
  render() {
    return (
      <div>
        <UserMessage/>
        <p>React Chat</p>
      </div>
    );
  }
}
