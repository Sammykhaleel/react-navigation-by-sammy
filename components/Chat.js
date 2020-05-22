import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Chat Room </Text>
        <Button
          title="Go to Profile View"
          onPress={() => this.props.navigation.navigate("Profile")}
        />
        <Button
          title="Go to About View"
          onPress={() => this.props.navigation.navigate("About")}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
});
export default Home;
