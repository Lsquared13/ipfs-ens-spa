import * as React from "react";
import classnames from "classnames";
import { StyledIcon } from "./StyledIcon";

export type IconOptions =
  | "user"
  | "members"
  | "avatar"
  | "signature"
  | "terms-of-service"
  | "privacy-policy"
  | "flag"
  | "loading"
  | "send"
  | "receive"
  | "qr-code"
  | "time"
  | "info"
  | "help"
  | "warning"
  | "more"
  | "grid-view"
  | "list-view"
  | "description"
  | "stats"
  | "tally"
  | "check"
  | "language"
  | "world"
  | "home"
  | "notification"
  | "settings"
  | "menu"
  | "camera"
  | "media"
  | "email"
  | "calendar"
  | "book"
  | "visible"
  | "hidden"
  | "work"
  | "organization"
  | "environment"
  | "ruler"
  | "clipboard"
  | "broadcast"
  | "EXC-logo"
  | "hourglass"
  | "blockmaker"
  | "tx-status"
  | "gas"
  | "wallet"
  | "transfer"
  | "seed-phrase"
  | "forward-ios"
  | "back-ios"
  | "keyboard-down"
  | "keyboard-up"
  | "keyboard-left"
  | "keyboard-right"
  | "downward"
  | "upward"
  | "drop-down"
  | "drop-up"
  | "left"
  | "right"
  | "right-alt"
  | "vote"
  | "governance"
  | "promotion"
  | "demotion"
  | "candidate"
  | "cycle"
  | "token-claim"
  | "kyc-validated"
  | "shield"
  | "key"
  | "fingerprint"
  | "passcode"
  | "password-security"
  | "lock"
  | "trash"
  | "copy"
  | "edit"
  | "search"
  | "close"
  | "add"
  | "minus"
  | "filter"
  | "backspace"
  | "activity"
  | "identity"
  | "not-tilted";

export interface IconProps {
  /**
   * string, String that clients such as VoiceOver will read to describe the element. Always localize the label.
   */
  accessibilityLabel?: string;
  /**
   * string, class to apply on component
   **/
  className?: string;
  /**
   * string, color
   * "blue" | "darkGray" | "eggplant" | "gray" | "green" | "lightGray" | "maroon" | "midnight" | "navy" | "olive" | "orange" | "orchid" | "pine" | "purple" | "red" | "watermelon" | "white" | "gray"
   * @default darkGray
   **/
  color?:
    | "blue"
    | "darkGray"
    | "eggplant"
    | "gray"
    | "green"
    | "lightGray"
    | "maroon"
    | "midnight"
    | "navy"
    | "olive"
    | "orange"
    | "orchid"
    | "pine"
    | "purple"
    | "red"
    | "watermelon"
    | "white"
    | "gray";
  /**
   * string, icon name
   * @default false
   **/
  icon?: IconOptions;
  /**
   * function, Event called on click
   **/
  onClick?: () => void;
  /**
   * string, icon type "thick" | "thin" | "duotone"
   * @default "thick"
   **/
  type?: "thick" | "thin" | "duotone";
  /**
   * function, Event called onMouseOver
   */
  onMouseOver?: () => void;
  /**
   * function, Event called onMouseOut
   */
  onMouseOut?: () => void;
  /**
   * React HTMLElement ref function for getting handle on icon
   */
  innerRef?: (icon:HTMLSpanElement)=>void
}

const renderSingleToneIcon = (props: IconProps) => {
  let { className, color, icon, type, onClick, onMouseOver, onMouseOut } = props;
  let iconClass;
  if (type === "thin") {
    iconClass = "i-thin-" + icon;
  } else {
    iconClass = "i-" + icon;
  }
  let classes = classnames("icon", iconClass, color, className);
  return <StyledIcon className={classes} onMouseOver={onMouseOver} onMouseOut={onMouseOut} onClick={onClick} innerRef={props.innerRef} />;
};

const renderDuoToneIcon = (props: IconProps) => {
  let { className, icon, onClick, onMouseOut, onMouseOver } = props;
  let content, classes;
  switch (icon) {
    case "wallet":
      classes = classnames("icon", "i-duo-wallet", className);
      content = (
        <span className={classes} onClick={onClick} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
          <span className="path1" />
          <span className="path2" />
        </span>
      );
      break;
    case "activity":
      classes = classnames("icon", "i-duo-activity", className);
      content = (
        <span className={classes} onClick={onClick} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
          <span className="path1" />
          <span className="path2" />
        </span>
      );
      break;
    case "governance":
      classes = classnames("icon", "i-duo-governance", className);
      content = (
        <span className={classes} onClick={onClick} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
          <span className="path1" />
          <span className="path2" />
        </span>
      );
      break;
    case "members":
      classes = classnames("icon", "i-duo-members", className);
      content = (
        <span className={classes} onClick={onClick} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
          <span className="path1" />
          <span className="path2" />
          <span className="path3" />
          <span className="path4" />
          <span className="path5" />
        </span>
      );
      break;
    case "identity":
      classes = classnames("icon", "i-duo-identity", className);
      content = (
        <span className={classes} onClick={onClick} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
          <span className="path1" />
          <span className="path2" />
        </span>
      );
      break;
    case "not-tilted":
      classes = classnames("icon", "i-duo-not-tilted", className);
      content = (
        <span className={classes} onClick={onClick} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
          <span className="path1" />
          <span className="path2" />
        </span>
      );
      break;
    default:
      content = null;
      break;
  }
  return content;
};

export const Icon: React.SFC<IconProps> = props => {
  if (props.type === "duotone") {
    return renderDuoToneIcon(props);
  } else {
    return renderSingleToneIcon(props);
  }
};

Icon.defaultProps = {
  type: "thick"
};

Icon.displayName = "Icon";

export default Icon;
