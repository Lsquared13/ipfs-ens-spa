import * as React from "react";
import classnames from "classnames";

import icons from "./../icons/index";
import { StyledIconSVG } from "./StyledIcon";

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

export interface IconSVGProps {
  /**
   * string, String that clients such as VoiceOver will read to describe the element. Always localize the label.
   */
  accessibilityLabel?: string;
  /**
   * boolean, display inline
   * @default false
   **/
  inline?: boolean;
  /**
   * number | string, size
   * @default 16
   **/
  size?: number | string;
  /**
   * { __path: string }, When using this prop, make sure that the viewbox around the SVG path is 24x24
   **/
  dangerouslySetSvgPath?: { __path: string };
  /**
   * string, color
   * options include - "blue" | "darkGray" | "eggplant" | "gray" | "green" | "lightGray" | "maroon" | "midnight" | "navy" | "olive" | "orange" | "orchid" | "pine" | "purple" | "red" | "watermelon" | "white"
   * @default "gray"
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
   * string, This allows us to type check for a valid icon name based on the keys from the list of icons shown below.
   * options include -   "user" | "members" | "avatar" | "signature" | "terms-of-service" | "privacy-policy" | "flag" | "loading" | "send" | "receive" | "qr-code" | "time" | "info" | "help" | "warning" | "more" | "grid-view" | "list-view" | "description" | "stats" | "tally" | "check" | "language" | "world" | "home" | "notification" | "settings" | "menu" | "camera" | "media" | "email" | "calendar" | "book" | "visible" | "hidden" | "work" | "organization" | "environment" | "ruler" | "clipboard" | "broadcast" | "EXC-logo" | "hourglass" | "blockmaker" | "tx-status" | "gas" | "wallet" | "transfer" | "seed-phrase" | "forward-ios" | "back-ios" | "keyboard-down" | "keyboard-up" | "keyboard-left" | "keyboard-right" | "downward" | "upward" | "drop-down" | "drop-up" | "left" | "right" | "right-alt" | "vote" | "governance" | "promotion" | "demotion" | "candidate" | "cycle" | "token-claim" | "kyc-validated" | "shield" | "key" | "fingerprint" | "passcode" | "password-security" | "lock" | "trash" | "copy" | "edit" | "search" | "close" | "add" | "minus" | "filter" | "backspace" | "activity" | "identity" | "not-tilted"
   **/
  icon?: IconOptions;
  /**
   * string, type
   * options include - "thick" | "thin" | "duotone"
   * @default "thick"
   **/
  type?: "thick" | "thin" | "duotone";
}

export interface IconSVGState {
  loading: boolean;
  paths: React.ReactElement<SVGPathElement>[];
  viewBox: string;
}

export class IconSVG extends React.Component<IconSVGProps, IconSVGState> {
  static defaultProps = {
    size: 16,
    type: "thick"
  };

  state = {
    loading: true,
    paths: [],
    viewBox: "0 0 24 24"
  };

  parseSVG = (str: string) => {
    let parser = new DOMParser();
    return parser.parseFromString(str, "text/xml");
  };

  getSVGXML = async (url: string) => {
    let res = await fetch(url);
    let svgString = await res.text();
    return this.parseSVG(svgString);
  };

  getPathsWithAttributes = (
    iconType: IconSVGProps["type"],
    svgPaths: HTMLCollectionOf<SVGPathElement>
  ) => {
    let paths = [];
    for (let i = 0; i < svgPaths.length; i++) {
      let d = svgPaths[i].getAttribute("d") || undefined;
      let fill = svgPaths[i].getAttribute("fill") || undefined;
      let stroke = svgPaths[i].getAttribute("stroke") || undefined;
      let strokeWidth = svgPaths[i].getAttribute("stroke-width") || undefined;
      if (iconType === "duotone") {
        paths.push(<path key={i} d={d} fill={fill} stroke={stroke} />);
      } else {
        paths.push(
          <path
            key={i}
            d={d}
            fill={this.props.color}
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
        );
      }
    }
    return paths;
  };

  async componentDidMount() {
    let { dangerouslySetSvgPath, icon, type } = this.props;
    try {
      let paths = [];
      let viewBox = "0 0 24 24";
      type = type ? type : "thick";

      // @ts-ignore This is some funky shit which doesn't play nice
      // with the current TS compiler, the `icons` type is probably
      // declared incorrectly.  Not worth resolving now.
      if (icon && icons[type][icon]) {
        // @ts-ignore
        let svgXML = await this.getSVGXML(String(icons[type][icon]));
        let svgNode = svgXML.getElementsByTagName("svg");
        let svgPaths = svgXML.getElementsByTagName("path");
        if (svgNode && svgNode.length) {
          let viewBoxAttr = svgNode[0].getAttribute("viewBox");
          viewBoxAttr && (viewBox = viewBoxAttr);
        }
        paths = this.getPathsWithAttributes(type, svgPaths);
      } else if (dangerouslySetSvgPath && dangerouslySetSvgPath.__path) {
        paths.push(<path key={0} d={dangerouslySetSvgPath.__path} />);
      }

      this.setState({
        viewBox: viewBox,
        paths: paths,
        loading: false
      });
    } catch (e) {}
  }

  render() {
    const { accessibilityLabel, icon, inline, size, color } = this.props;
    const { viewBox, paths } = this.state;
    const classes = classnames("icon", icon, inline, color);
    const ariaHidden = accessibilityLabel === "";
    if (this.state.loading) {
      return null;
    } else {
      return (
        <StyledIconSVG
          className={classes}
          height={size}
          width={size}
          viewBox={viewBox ? viewBox : "0 0 24 24"}
          aria-hidden={ariaHidden}
          aria-label={accessibilityLabel}
          role="img"
        >
          <title>{accessibilityLabel}</title>
          {paths}
        </StyledIconSVG>
      );
    }
  }
}

export default IconSVG;
