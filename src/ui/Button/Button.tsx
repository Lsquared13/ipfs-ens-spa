import * as React from "react";
import classnames from "classnames";

import StyledButton from "./StyledButton";

// Declaring these strings as a specific type lets us
// import them elsewhere and get Typescript compiler
// checks that we're using the right value.
export type ButtonStyles = 
| "standard"
| "pill"
| "quiet"
| "quietSecondary"
| "complete"
| "close"

export type ButtonTypes = "button" | "submit" | "reset"

export type ButtonThemes = 
| "cta"
| "destructive"
| "outlineBlue"
| "outlineWhite"
| "outlineNeutral"
| "white";

export type ButtonSizes = "large" | "small"

export interface ButtonProps {
  /**
   * func, Event --> called on button click
   **/
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  /**
   * boolean, aria-expanded attribute
   **/
  accessibilityExpanded?: boolean;
  /**
   * boolean, aria-haspopup attribute
   **/
  accessibilityHaspopup?: boolean;
  /**
   * boolean, aria-label attribure
   **/
  accessibilityLabel?: string;
  /**
   * Manually make button appear clicked
   */
  active?: boolean
  /**
   * string, button with full width
   **/
  block?: boolean;
  /**
   * string, class to apply on component
   **/
  className?: string;
  /**
   * boolean, disabled button
   * @default false
   **/
  disabled?: boolean;
  /**
   * boolean, show loading button
   * @default false
   **/
  loader?: boolean;
  /**
   * String, button size options
   * options include: "large" | "small"
   * @default "large"
   **/
  size?: ButtonSizes;
  /**
   * String, button style options
   * options include: "standard" | "pill" | "quiet" | "quietSecondary" | "complete" | "close"
   * @default "standard"
   **/
  style?: ButtonStyles;
  /**
   * string, component theme
   * options include: "cta" | "destructive" | "outlineBlue" | "outlineWhite" | "outlineNeutral" | "white"
   * @default "cta"
   **/
  theme?: ButtonThemes
  /**
   * String, button type options
   * options include: "button" | "submit" | "reset"
   * @default "button"
   **/
  type?: ButtonTypes;
}

const noop = () => {};

//Button as stateless react component as we dont't require any state here.
export const Button: React.SFC<ButtonProps> = props => {
  const {
    onClick,
    accessibilityExpanded,
    accessibilityHaspopup,
    accessibilityLabel,
    block,
    children,
    className,
    disabled,
    loader,
    size,
    style,
    theme,
    type
  } = props;

  const classes = classnames(
    "btn",
    style,
    style === "close" || style === "complete" ? "" : theme,
    size,
    className,
    {
      block: block
    }
  );

  const renderContent = () => {
    if (loader) return <>Loading..</>;
    else if (children) return children;
    else return <>Button</>;
  };

  return (
    <StyledButton
      onClick={disabled || loader ? noop : onClick}
      aria-expanded={accessibilityExpanded}
      aria-haspopup={accessibilityHaspopup}
      aria-label={accessibilityLabel}
      className={classes}
      disabled={disabled}
      type={type}
    >
      {renderContent()}
    </StyledButton>
  );
};

Button.defaultProps = {
  disabled: false,
  loader: false,
  size: "large",
  style: "standard",
  theme: "cta",
  type: "button",
  block: false
};

Button.displayName = "Button";

export default Button;
