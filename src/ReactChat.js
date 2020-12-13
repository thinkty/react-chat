import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserMessage from './UserMessage';

export default class ReactChat extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <div>
        <UserMessage/>
      </div>
    );
  }
}
