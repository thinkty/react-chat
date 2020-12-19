import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStylesPropTypes } from 'react-with-styles';
import {
  defaultSubmitInputStyle,
  defaultTextAreaStyle,
} from './lib/styles';

const propTypes = {
  onSubmit: PropTypes.func,
  textAreaStyle: withStylesPropTypes,
  submitInputStyle: withStylesPropTypes,
  submitInputColor: PropTypes.string,
  submitInputHighlightColor: PropTypes.string,
  submitOnCtrlEnter: PropTypes.bool,
};

const defaultProps = {
  onSubmit: (value) => {
    console.log('Entered: ' + value);
  },
  textAreaStyle: defaultTextAreaStyle,
  submitInputStyle: defaultSubmitInputStyle,
  submitInputColor: '#DCDCDC',
  submitInputHighlightColor: '#B3B3B3',
  submitOnCtrlEnter: true,
}

/**
 * Component for taking user input
 *
 * ### Props
 * - onSubmit : a callback function to be called when submitting
 * - textAreaStyle : style props for the text area
 * - submitInputStyle : style props for the submission button
 * - submitInputColor : color for the submission button when not hovered
 * - submitInputHighlightColor : color for the submission button when hovered
 * - submitOnCtrlEnter : whether to submit on ctrl and enter both pressed
 */
class InputArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      submitInputColor: props.submitInputColor,
    };
  }

  onChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  }

  onSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }

    const { value } = this.state;
    const { onSubmit } = this.props;
    onSubmit(value);

    this.setState({
      value: '',
    });
  }

  // When the mouse is hovered over the submit button
  onMouseEnter = () => {
    const { submitInputHighlightColor } = this.props;
  
    this.setState({
      submitInputColor: submitInputHighlightColor,
    });
  }

  // When the mouse is hovered away from the submit button
  onMouseLeave = () => {
    const { submitInputColor } = this.props;
  
    this.setState({
      submitInputColor: submitInputColor,
    });
  }

  /**
   * Issue with the LastPass extension
   * @see https://github.com/mui-org/material-ui/issues/14860
   * @see https://github.com/KillerCodeMonkey/ngx-quill/issues/351#issuecomment-511005303
   */
  ////
  componentDidMount() {
    document.addEventListener('keydown', this.suppressEnterPropagation, true);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.suppressEnterPropagation, true);
  }

  suppressEnterPropagation = (e) => {
    if (e.which === 13 || e.keyCode === 13 || e.key === 'Enter') {
      e.stopPropagation();

      // Submit on ctrl+enter if allowed
      const { submitOnCtrlEnter } = this.props;
      if (submitOnCtrlEnter && e.ctrlKey) {
        this.onSubmit();
      }
    }
  }
  ////

  render() {
    const {
      textAreaStyle,
      submitInputStyle,
    } = this.props;

    const {
      value,
      submitInputColor,
    } = this.state;

    return (
      <form
        onSubmit={this.onSubmit}
        style={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'auto auto',
          gap: '5px',
        }}
      >
        <textarea
          value={value}
          onChange={this.onChange}
          style={{
            ...defaultTextAreaStyle,
            ...textAreaStyle,
          }}
        >
        </textarea>
        <input
          type="submit"
          value="Send"
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          style={{
            ...defaultSubmitInputStyle,
            ...submitInputStyle,
            backgroundColor: submitInputColor,
          }}
        />
      </form>
    );
  }
}

InputArea.propTypes = propTypes;
InputArea.defaultProps = defaultProps;

export default InputArea;
