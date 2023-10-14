import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigationHeader from "./NavigationHeader";
import { Home } from "../screens";
import { ScreenNames } from "../constants";

const Navigation: React.FC = () => {
  const Stack = createNativeStackNavigator()

  return <Stack.Navigator screenOptions={{
    header: () => <NavigationHeader />,
  }}>
    <Stack.Screen name={ScreenNames.HOME} component={Home} />
  </Stack.Navigator>
}

export default Navigation
