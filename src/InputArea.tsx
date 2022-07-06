import React from 'react';
import {
  defaultTextAreaStyle,
  defaultSubmitButtonStyle,
} from './styles';

export type InputAreaProps = {
  onSubmit: (content: string) => void;
  textAreaStyle?: React.CSSProperties;
  enableSubmitButton?: boolean;
  enableCtrlEnterSubmit?: boolean,
  submitButtonColor?: string;
  submitButtonStyle?: React.CSSProperties;
  submitButtonHoverColor?: string;
  submitButtonHoverStyle?: React.CSSProperties;
};

type InputAreaState = {
  hover: boolean;
  content: string;
};

/**
 * Component for handling user input
 *
 * Props
 * - onSubmit : A callback function to be called when submit button or ctrl-enter has been pressed
 * - textAreaStyle : CSS properties for the text area
 * - enableSubmitButton : If true, display submit button
 * - enableCtrlEnterSubmit : If true, enable the ability to submit by pressing ctrl-enter
 * - submitButtonColor : Color of the submit button on non-hover state
 * - submitButtonStyle : CSS properties for the submit button
 * - submitButtonHoverColor: Color of the submit button on hover state
 * - submitButtonHoverStyle : CSS properties for the submit button on hover state
 */
export class InputArea extends React.Component<InputAreaProps, InputAreaState> {

  static defaultProps = {
    disableCtrlEnterSubmit: false,
  };

  override state: InputAreaState = {
    hover: false,
    content: '',
  };

  /**
   * Issue with the LastPass extension
   * @see https://github.com/mui-org/material-ui/issues/14860
   * @see https://github.com/KillerCodeMonkey/ngx-quill/issues/351#issuecomment-511005303
   */
  override componentDidMount() {
    document.addEventListener('keydown', this.suppressEnterPropagation, true);
  }

  override componentWillUnmount() {
    document.removeEventListener('keydown', this.suppressEnterPropagation, true);
  }

  private suppressEnterPropagation = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.stopPropagation();

      // Submit on ctrl+enter if allowed
      const { enableCtrlEnterSubmit = true } = this.props;

      if (enableCtrlEnterSubmit && e.ctrlKey) {
        const { content } = this.state;
        this.props.onSubmit(content);
    
        this.setState({ content: '' });
      }
    }
  }

  // TODO: handle category change
  private onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ content: e.target.value });
  }

  private onSubmit = (e: React.SyntheticEvent) => {
    if (e) {
      e.preventDefault();
    }

    const { content } = this.state;
    this.props.onSubmit(content);

    this.setState({ content: '' });
  }

  override render() {
    const {
      enableSubmitButton = true,
      textAreaStyle = defaultTextAreaStyle,
      submitButtonColor = '#DCDCDC',
      submitButtonStyle = defaultSubmitButtonStyle,
      submitButtonHoverColor = '#B3B3B3',
      submitButtonHoverStyle = defaultSubmitButtonStyle,
    } = this.props;

    const {
      hover,
      content,
    } = this.state;

    const currentButtonStyle = hover ? submitButtonHoverStyle : submitButtonStyle;
    if (hover) {
      currentButtonStyle.backgroundColor = submitButtonHoverColor;
    } else {
      currentButtonStyle.backgroundColor = submitButtonColor;
    }

    return (
      <form
        onSubmit={this.onSubmit}
        style={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: `auto ${submitButtonStyle.width}`,
          gap: '5px',
        }}
      >
        <textarea
          value={content}
          onChange={this.onChange}
          style={textAreaStyle}
        />
        {
          enableSubmitButton &&
          <input
            type="submit"
            value="Send"
            onMouseEnter={() => { this.setState({ hover: true }); }}
            onMouseLeave={() => { this.setState({ hover: false }); }}
            style={currentButtonStyle}
          />
        }
      </form>
    );
  }
}
