import * as React from "react";
import classnames from "classnames";
import StyledTextField, { StyledErrorMessage } from "./StyledTextField";

export type eventData = {
  event: React.SyntheticEvent<HTMLInputElement>;
  value?: string;
};

export enum TextFieldTypeEnum {
  date = "date", 
  email = "email",
  number = "number",
  password = "password",
  text = "text",
  url ="url"
}

export type TextFieldTypes = keyof typeof TextFieldTypeEnum;

export interface TextFieldProps {
  /**
   * string, autoComplete
   **/
  autoComplete?: "current-password" | "on" | "off" | "username";
  /**
   * string, error message
   **/
  errorMessage?: string;
  /**
   * boolean, disabled
   **/
  disabled?: boolean;
  /**
   * boolean, disabled
   **/
  showError?: boolean;
  /**
   * string, id
   **/
  id: string;
  /**
   * string, Preferred direction for the error Flyout to open
   * options includes - "up" | "right" | "down" | "left"
   * @default "up"
   **/
  idealErrorDirection?: "up" | "right" | "down" | "left";
  /**
   * string, name
   **/
  name?: string;
  /**
   * function, ({ event: React.SyntheticEvent<HTMLInputElement>, value: boolean }) => void
   * Event is fired on blur
   **/
  onBlur?: (event:React.FocusEvent<HTMLInputElement>)=>void
  /**
   * function, ({ event: React.SyntheticEvent<HTMLInputElement>, value: boolean }) => void
   * Event is fired on changed
   **/
  onChange: (event:React.SyntheticEvent<HTMLInputElement>)=>void
  /**
   * function, ({ event: React.SyntheticEvent<HTMLInputElement>, value: boolean }) => void
   * Event is fired on focus
   **/
  onFocus?: (event:React.SyntheticEvent<HTMLInputElement>)=>void
  /**
   * function, ({ event: React.SyntheticEvent<HTMLInputElement>, value: boolean }) => void
   * Event is fired on key down
   **/
  onKeyDown?: (event:React.KeyboardEvent<HTMLInputElement>)=>void
  /**
   * string, placeholder
   **/
  placeholder?: string;
  /**
   * number, rows
   * @default 3
   **/
  rows?: number;
  /**
   * string, value
   **/
  value?: string;
  /**
   * string, "date" | "email" | "number" | "password" | "text" | "url"
   * @default "text"
   **/
  type?: TextFieldTypes;
}

export default class TextField extends React.Component<
  TextFieldProps
> {
  static defaultProps = {
    disabled: false,
    showError: false,
    idealErrorDirection: "right",
    type: "text"
  };

  state = {
    focused: false
  };

  handleChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    this.props.onChange(event);
  };

  handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (this.props.errorMessage) {
      this.setState({ errorIsOpen: false });
    }
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  handleFocus = (event: React.SyntheticEvent<HTMLInputElement>) => {
    if (this.props.errorMessage) {
      this.setState({ errorIsOpen: true });
    }
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };

  handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (this.props.onKeyDown) {
      this.props.onKeyDown(event);
    }
  };

  textfieldRef = React.createRef<HTMLInputElement>();

  // @ts-ignore
  textfield: HTMLInputElement;

  componentDidMount() {
    this.textfield = this.textfieldRef.current!;
  }

  render() {
    const {
      autoComplete,
      disabled,
      errorMessage,
      showError,
      id,
      name,
      placeholder,
      type,
      value
    } = this.props;

    const classes = classnames(
      "textField",
      disabled ? "disabled" : "enabled",
      showError || errorMessage ? "errored" : "normal"
    );

    // type='number' doesn't work on ios safari without a pattern
    // https://stackoverflow.com/questions/14447668/input-type-number-is-not-showing-a-number-keypad-on-ios
    const pattern = type === "number" ? "\\d*" : undefined;
    
    return (
      <span>
        <StyledTextField
            aria-describedby={
              errorMessage && this.state.focused
                ? `${id}-gestalt-error`
                : undefined
            }
            aria-invalid={errorMessage || showError ? "true" : "false"}
            autoComplete={autoComplete}
            className={classes}
            disabled={disabled}
            id={id}
            name={name}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onKeyDown={this.handleKeyDown}
            pattern={pattern}
            placeholder={placeholder}
            innerRef={this.textfieldRef}
            type={type}
            value={value}
          />
        <StyledErrorMessage className={classnames('textField','errorMsg', showError ? '' : 'hide')}>
          { showError && errorMessage ? errorMessage : ''}
        </StyledErrorMessage>
      </span>
    );
  }
}
