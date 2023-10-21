import AppContext from "./components/AppContext";
import { NavigationContainer, ThemeProvider } from "@react-navigation/native";
import { useDarkMode } from "./hooks/useDarkMode";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Navigation } from "./components";
import { StatusBar } from "expo-status-bar";
import { darkTheme, lightTheme } from "./constants/themes";

export default function App() {
  const { isDark, toggleDark } = useDarkMode();

  const globals = { isDark, toggleDark }

  return (
    <AppContext.Provider value={globals}>
      <ThemeProvider value={isDark ? darkTheme : lightTheme}>
        <SafeAreaProvider>
          <NavigationContainer theme={isDark ? darkTheme : lightTheme}>
            <Navigation />
            <StatusBar style={isDark ? "light" : "dark"} />
          </NavigationContainer>
        </SafeAreaProvider>
      </ThemeProvider>
    </AppContext.Provider>
  );
}
