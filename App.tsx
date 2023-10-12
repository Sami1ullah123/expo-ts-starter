import AppContext from "./components/AppContext";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  ThemeProvider,
} from "@react-navigation/native";
import { useDarkMode } from "./hooks/useDarkMode";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Navigation } from "./components";

export default function App() {
  const { isDark, toggleDark } = useDarkMode();

  return (
    <AppContext.Provider value={{ isDark, toggleDark }}>
      <ThemeProvider value={isDark ? DarkTheme : DefaultTheme}>
        <SafeAreaProvider>
        <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
          <Navigation />
        </NavigationContainer>
        </SafeAreaProvider>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

