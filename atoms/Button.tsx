import React from "react";
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import Text from "./Text";
import { useTheme } from "@react-navigation/native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant: "normal" | "text" | "outline";
  activeOpacity?: number;
  color?: "primary" | "monochrome"; // Fixed typo
  style?: StyleProp<ViewStyle>;
}

const Button: React.FC<ButtonProps> = ({
  title,
  variant,
  activeOpacity,
  color,
  style,
  ...props
}) => {
  const { colors } = useTheme();

  const baseStyles: StyleProp<ViewStyle> = {
    padding: 10,
  };

  const defaultStyles: StyleProp<ViewStyle> = {
    backgroundColor: color === "monochrome" ? colors.text : colors.primary,
  };
  const defaultTextStyles: StyleProp<TextStyle> = {
    color: colors.background,
  };

  const textVariantStyles: StyleProp<ViewStyle> = {
    backgroundColor: "transparent",
  };

  const variantOutlineStyles: StyleProp<ViewStyle> = {
    borderWidth: 1,
    borderColor: color === "monochrome" ? colors.text : colors.primary,
    backgroundColor: "transparent",
  };

  const buttonStyles =
    variant === "normal"
      ? { ...baseStyles, ...defaultStyles }
      : variant === "text"
      ? { ...baseStyles, ...textVariantStyles }
      : { ...baseStyles, ...variantOutlineStyles };
  const textStyles =
    variant === "normal"
      ? defaultTextStyles
      : variant === "text"
      ? { ...textVariantStyles, color: color === "primary" ? colors.primary : colors.text }
      : textVariantStyles;

  return (
    <TouchableOpacity
      activeOpacity={activeOpacity || 0.9}
      style={[buttonStyles, style]}
      {...props}
    >
      <Text style={textStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

