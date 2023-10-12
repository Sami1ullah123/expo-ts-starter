import React from "react";
import { useAppContext } from "./AppContext";
import { TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { Defaults } from "../constants/defaults";

const ThemeSwitcher: React.FC = () => {
  const { toggleDark } = useAppContext();
  const { colors, dark } = useTheme();
  return (
    <TouchableOpacity onPress={toggleDark}>
      <Entypo
        name={dark ? "moon" : "light-up"}
        color={colors.text}
        size={Defaults.ICON_SIZE}
      />
    </TouchableOpacity>
  );
};

export default ThemeSwitcher;
