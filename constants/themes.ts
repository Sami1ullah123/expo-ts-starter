import { DefaultTheme, DarkTheme, Theme } from "@react-navigation/native";

const lightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "red",
  },
};

const darkTheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "blue",
  },
};

export { lightTheme, darkTheme };
