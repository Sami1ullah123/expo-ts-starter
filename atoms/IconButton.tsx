import React from "react";
import { StyleProp, TouchableOpacity, TouchableOpacityProps, ViewStyle } from "react-native";
import Text  from "./Text";
import * as IconSets from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { Defaults } from "../constants";
import { EntypoIcons, FontAwsomeIcons } from "../constants/icons";

interface IconSetsMap {
  Entypo: {
    iconName: EntypoIcons;
  };
  FontAwesome: {
    iconName: FontAwsomeIcons;
  };
  // Add more at some point
}

interface IconButtonProps<T extends keyof IconSetsMap>
  extends TouchableOpacityProps {
  iconName: IconSetsMap[T]["iconName"];
  iconSet?: T;
  iconSize?: number;
  iconColor?: string;
  label?: string;
  labelPosition?: "left" | "right"
  width?: number
}

const IconButton = <T extends keyof IconSetsMap>({
  iconName,
  iconSet = "Entypo",
  iconSize,
  iconColor,
  label,
  labelPosition,
  width,
  ...props
}: IconButtonProps<T>) => {
  const IconComponent = IconSets[iconSet];

  if (!IconComponent) {
    console.error(`Invalid icon set: ${iconSet}`);
    return null;
  }

  // Check if the provided iconName exists in the current icon set
  if (!IconComponent.glyphMap || !IconComponent.glyphMap[iconName]) {
    console.error(`Invalid icon name "${iconName}" for icon set "${iconSet}"`);
    return null;
  }

  const { colors } = useTheme();

  const defaultStyle: StyleProp<ViewStyle> = {
    flexDirection: "column",
    width: `${width}%` || "auto"
  }

const labeledStyle: StyleProp<ViewStyle> = {
    flexDirection: labelPosition === "left" ? "row-reverse" : "row",
    alignItems: "center",
    justifyContent: "space-around",
  }

  return (
    <TouchableOpacity activeOpacity={1} style={label ? labeledStyle: defaultStyle} {...props}>
      <IconComponent
        name={iconName}
        size={iconSize || Defaults.ICON_SIZE}
        color={iconColor || colors.text}
      />
      {label && <Text>{label}</Text>}
    </TouchableOpacity>
  );
};

export default IconButton;
