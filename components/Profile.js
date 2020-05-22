import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class Profile extends React.Component {
  // static navigationOptions = {
  //   // title: "Profile",
  //   headerStyle: {
  //     backgroundColor: "#03A9F4",
  //   },
  //   headerTintColor: "#fff",
  //   headerTitleStyle: {
  //     fontWeight: "bold",
  //   },
  // };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Profile </Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate("Home")}
        />
        <Button
          title="Go to About"
          onPress={() => this.props.navigation.navigate("About")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
  },
});
export default Profile;
