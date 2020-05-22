import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/Home";
import Profile from "./components/Profile";
import About from "./components/About";
import Chat from "./components/Chat";
import MyDrawer from "./components/MyDrawer";
import Icon from "react-native-vector-icons/Ionicons";

import MaterialBottomTabs from "./components/MaterialBottomTabs";
import MaterialTopTabs from "./components/MaterialTopTabs";

// import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator> */}
      {/* <MaterialBottomTabs /> */}
      {/* <MaterialTopTabs /> */}

      <MyDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
