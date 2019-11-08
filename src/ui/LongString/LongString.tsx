import React from "react";
import Box from "./../Box";
import Text, { TextProps } from "./../Text";
import copy from 'copy-to-clipboard';
import Alert from 'react-s-alert';

export interface LongStringProps {
  /**
   * string value
   **/
  value: string;
  /**
   * string, text color
   **/
  color?: TextProps["color"];
  /**
   * string, text size
   **/
  size?: TextProps["size"];
  /**
   * Maximum number of character in final output string.
   * Defaults to 10 total.
   */
  maxLength?: number
}

export const LongString: React.SFC<LongStringProps> = (
  props: LongStringProps
) => {
  const { value, size, color } = props;
  let maxLength = props.maxLength || 10;

  let output = value;
  if (value.length > maxLength) {
    let dots = maxLength % 2 === 0 ? '..' : '...';
    let charsPerSide = Math.floor(maxLength / 2) - 1;
    output = `${value.slice(0, charsPerSide)}${dots}${value.slice(value.length - charsPerSide)}`;
  }

  const copyToClipboard = (e: any) => {
    copy(value)
    Alert.success("Successfully copied to your clipboard!", {
      timeout: 3800, offset: -20,
    });
  }

  return (
    <Box
      display="inlineBlock"
      onClick={copyToClipboard}
      title={value}
      dangerouslySetInlineStyle={{
        cursor: "pointer"
      }}>
      <Text
          size={size}
          smSize={size}
          mdSize={size}
          lgSize={size}
          color={color}>
          {output}
        </Text>
    </Box>
  );
};

LongString.defaultProps = {
  size: "md"
};

LongString.displayName = "LongString";

export default React.memo(LongString);