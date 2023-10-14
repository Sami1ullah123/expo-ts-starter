import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import * as IconSets from "@expo/vector-icons";
import { EntypoIcons, FontAwesomeIcons } from "../constants/iconNames";
import { useTheme } from "@react-navigation/native";
import { Defaults } from "../constants";

interface IconSetsMap {
  Entypo: {
    iconName: EntypoIcons;
  };
  FontAwesome: {
    iconName: FontAwesomeIcons;
  };
  // Add more at some point
}

interface IconButtonProps<T extends keyof IconSetsMap>
  extends TouchableOpacityProps {
  iconName: IconSetsMap[T]["iconName"];
  iconSet?: T;
  iconSize?: number;
  iconColor?: string;
}

const IconButton = <T extends keyof IconSetsMap>({
  iconName,
  iconSet = "Entypo",
  iconSize,
  iconColor,
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

  return (
    <TouchableOpacity activeOpacity={1} {...props}>
      <IconComponent
        name={iconName}
        size={iconSize || Defaults.ICON_SIZE}
        color={iconColor || colors.text}
      />
    </TouchableOpacity>
  );
};

export default IconButton;
