import React from "react";
import { View, StyleProp, StyleSheet, ViewStyle } from "react-native";
import ThemeSwitcher from "./ThemeSwitcher";
import { IconButton, Text } from "../atoms";
import { useNavigation, useRoute, useTheme } from "@react-navigation/native";

const NavigationHeader: React.FC = () => {
  const { colors } = useTheme();
  const { name } = useRoute();
  const { canGoBack, goBack } = useNavigation()

  const defaultStyles: StyleProp<ViewStyle> = {
    backgroundColor: colors.background,
    borderBottomColor: colors.border,
  };

  return (
    <View style={[defaultStyles, styles.header]}>
      {canGoBack() && <IconButton iconSet="FontAwesome" iconName="angle-left" onPress={goBack} />}
      <Text bold uppercase>{name}</Text>
      <ThemeSwitcher />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    paddingTop: 50,
    paddingBottom: 5,
    paddingHorizontal: 20
  },
});

export default NavigationHeader;
