import React from "react";
import { useAppContext } from "./AppContext";
import { useTheme } from "@react-navigation/native";
import { Defaults } from "../constants/defaults";
import { IconButton } from "../atoms";

const ThemeSwitcher: React.FC = () => {
  const { toggleDark } = useAppContext();
  const { dark } = useTheme();
  return (
    <IconButton
      iconName={dark ? "light-up": "moon"}
      onPress={toggleDark}
      iconSize={Defaults.ICON_SIZE}
    />
  );
};

export default ThemeSwitcher;
