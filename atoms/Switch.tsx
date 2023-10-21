import { useTheme } from "@react-navigation/native";
import React from "react";
import {
  Switch as RNSwitch,
  SwitchProps as RNSwitchProps,
  StyleProp,
  ViewStyle,
} from "react-native";

interface SwitchProps extends RNSwitchProps {
  style?: StyleProp<ViewStyle>;
}

const Switch: React.FC<SwitchProps> = ({ style, ...props }) => {
  const { colors, dark } = useTheme();

  const defaultStyles: StyleProp<ViewStyle> = {
    borderWidth: 1,
  };

  return (
    <RNSwitch
      trackColor={{ false: colors.border, true: colors.border }}
      thumbColor={dark ? colors.text : colors.background}
      ios_backgroundColor={colors.background}
      style={[defaultStyles, style]}
      {...props}
    />
  );
};

export default Switch;
