import React from "react";
import { StyleSheet, Text, View, SectionList, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
import groupBy from "lodash/groupBy";
import sortBy from "lodash/sortBy";
import data from "../ass2data.json";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: sortBy(
        Object.entries(groupBy(data, i => i.name.first_name[0])).map(
          ([key, value]) => ({
            title: key,
            data: sortBy(value, ["name.first_name", "name.last_name"])
          })
        ),
        "title"
      )
    };
  }

  onPress = item => {
    this.props.navigation.navigate("Detail", item);
  };

  renderData = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => this.onPress(item)}>
        <Text style={styles.index}> {`${item.name.first_name} ${item.name.last_name}`}</Text>
      </TouchableOpacity>
    );
  };

  renderHeader = () => {
    return <View style={styles.header} />;
  };

  renderFooter = () => {
    return <View style={styles.footer} />;
  };

  render() {
    const { sections } = this.state;
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <SectionList
          ListEmptyComponent={<ActivityIndicator size="large" />}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          sections={sections}
          renderItem={this.renderData}
          renderSectionHeader={({ section }) => (
            <Text style={styles.headerTitles}>{section.title}</Text>
          )}
          keyExtractor={(item, index) => index}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 8
  },
  index: {
    flex: 1,
    marginTop: 10,
    fontSize: 18,
  },
  headerTitles: {
    backgroundColor: "#42C0FB",
    marginTop: 20,
    fontSize: 22,
    marginLeft: 5
  },
  header: {
    marginTop: 5,
  },
  footer: {
    marginBottom: 20
  }
});
