import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class WorkInfo extends React.Component {
  render() {
    const { work } = this.props;
    return (
      <View>
        <View style={styles.boarder}>
          <Text style={styles.text}>{work.email}</Text>
        </View>
        <View style={styles.boarder}>
          <Text style={styles.text}>{work.phone_number}</Text>
        </View>
        <View style={styles.boarder}>
          <Text style={styles.text}>{work.address}</Text>
        </View>
        <View style={styles.boarder}>
          <Text style={styles.text}>{work.job_title}</Text>
        </View>
        <View style={styles.boarder}>
          <Text style={styles.text}>{work.department}</Text>
        </View>
        <View style={styles.boarder}>
          <Text style={styles.text}>{work.company_name}</Text>
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
  text: {
    padding: 0,
    fontSize: 15,
    textAlign: "center"
  }
});
