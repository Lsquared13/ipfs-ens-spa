import * as React from "react";
import classnames from "classnames";
import Flyout from "../Flyout";
import Box from "../Box";
import Text from "../Text";
import StyledTextField from "./StyledTextField";
import Callout from "../NavLeft/Callout";

export type eventData = {
  event: React.SyntheticEvent<HTMLInputElement>;
  value?: string;
};

export interface TextFieldState {
  focused: boolean;
  errorIsOpen: boolean;
  errorMessage?: string;
}

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
  hasError?: boolean;
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
  onKeyDown?: (event:React.SyntheticEvent<HTMLInputElement>)=>void
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
  type?: "date" | "email" | "number" | "password" | "text" | "url";
}

export class TextField extends React.Component<
  TextFieldProps,
  TextFieldState
> {
  static defaultProps = {
    disabled: false,
    hasError: false,
    idealErrorDirection: "right",
    type: "text"
  };

  state = {
    focused: false,
    errorIsOpen: false
  };

  static getDerivedStateFromProps(
    props: TextFieldProps,
    state: TextFieldState
  ) {
    if (props.errorMessage !== state.errorMessage) {
      return {
        errorIsOpen: !!props.errorMessage,
        errorMessage: props.errorMessage
      };
    }

    return null;
  }

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

  handleKeyDown = (event: React.SyntheticEvent<HTMLInputElement>) => {
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
      hasError,
      id,
      idealErrorDirection,
      name,
      placeholder,
      type,
      value
    } = this.props;

    const classes = classnames(
      "textField",
      disabled ? "disabled" : "enabled",
      hasError || errorMessage ? "errored" : "normal"
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
          aria-invalid={errorMessage || hasError ? "true" : "false"}
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
        {errorMessage && this.state.errorIsOpen && (
     
          <Flyout
            color="orange"
            idealDirection={idealErrorDirection}
            onDismiss={() => this.setState({ errorIsOpen: false })}
            shouldFocus={false}
            size="sm"
            ariaLabel={`${id} Error`}
            label={`${id}-error`}
            positionRelativeToAnchor
          >
            <Box padding={3}>
              <Text bold color="white">
                <span id={`${id}-gestalt-error`}>{errorMessage}</span>
              </Text>
            </Box>
          </Flyout>
        )}
      </span>
    );
  }
}

export default TextField;