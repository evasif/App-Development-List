import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class HomeInfo extends React.Component {
  render() {
    const { home } = this.props;
    return (
      <View>
        <View style={styles.boarder}>
          <Text style={styles.text}>{home.email}</Text>
        </View>
        <View style={styles.boarder}>
          <Text style={styles.text}>{home.phone_number}</Text>
        </View>
        <View style={styles.boarder}>
          <Text style={styles.text}>{home.address}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  boarder: {
    padding: 10,
    borderBottomWidth: 2,
    borderColor: "#000"
  },
  'boarder:nth-child-even': {
    backgroundColor: "gray",
  },
  text: {
    padding: 0,
    fontSize: 15,
    textAlign: "center"
  }
});
