import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { saveTheme } from "../utils/storage";

export const useDarkMode = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleDark = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    saveTheme(newIsDark);
  };

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const theme = await AsyncStorage.getItem("theme");
        if (theme === "dark") {
          setIsDark(true);
        } else {
          setIsDark(false);
        }
      } catch (error) {
        console.log("Error loading theme", error);
      }
    };
    loadTheme();
  }, []);

  return { isDark, toggleDark };
};

