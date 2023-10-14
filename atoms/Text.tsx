import { useTheme } from "@react-navigation/native";
import React from "react";
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleProp,
  TextStyle,
} from "react-native";
import { Defaults } from "../constants";

interface TextProps extends RNTextProps {
  children: React.ReactNode;
  title?: boolean;
  bold?: boolean;
  uppercase?: boolean;
  style?: StyleProp<TextStyle>;
}

const Text: React.FC<TextProps> = ({
  children,
  title,
  bold,
  uppercase,
  style,
  ...props
}) => {
  const { colors } = useTheme();
  const defaultStyles: StyleProp<TextStyle> = {
    color: colors.text,
    fontSize: title ? Defaults.FONT_SIZE_TITLE : Defaults.FONT_SIZE,
    fontWeight: bold ? "bold" : "normal",
    textTransform: uppercase ? "uppercase" : "none",
  };
  return (
    <RNText style={[defaultStyles, style]} {...props}>
      {children}
    </RNText>
  );
};

export default Text;
