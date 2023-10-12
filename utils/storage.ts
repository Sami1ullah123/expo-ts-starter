import AsyncStorage from "@react-native-async-storage/async-storage";

const saveTheme = async (isDark: boolean) => {
  try {
    await AsyncStorage.setItem("theme", isDark ? "dark" : "light");
  } catch (error) {
    console.log("Error saving theme", error);
  }
};

export { saveTheme };
