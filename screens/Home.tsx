import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Button, IconButton, Text } from "../atoms";

const Home: React.FC = () => {
  
  return (
    <SafeAreaView style={styles.home}>
      <Text>Edit screens/Home.tsx to start working on your app</Text>
      <IconButton iconSet="FontAwesome" iconName="home" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
