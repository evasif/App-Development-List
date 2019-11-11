import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Animated } from "react-native";
import HomeInfo from "../components/HomeInfo";
import WorkInfo from "../components/WorkInfo";

export default class Details extends React.Component {
  constructor(props) {
    super(props);
    this.springValue = new Animated.Value(0.3);

    this.state = {
      info: true,
      button: "work",
    };
  }

  spring = () => {
    this.springValue.setValue(0.3);
    Animated.spring(this.springValue, {
      toValue: 1,
      friction: 1
    }).start();
  };

  changeState = () => {
    this.spring();
    const { info } = this.state;
    if (info === true) {
      this.setState({ info: false });
      this.setState({ button: "home" });
    } else {
      this.setState({ info: true });
      this.setState({ button: "work" });
    }
  };

  render() {
    const { info, button } = this.state;
    const { name, work, home, avatar } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Animated.Image
          style={{
            width: 200,
            height: 200,
            borderColor: "#000",
            borderWidth: 2,
            transform: [{ scale: this.springValue }]
          }}
          source={{ uri: avatar }}
        />
        <Text style={styles.name}>{`${name.first_name} ${name.last_name}`}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={this.changeState}
          underlayColor="#fff">
          <Text style={styles.buttonText}>{`Show ${button} info`}</Text>
        </TouchableOpacity>
        {info && <HomeInfo home={home} />}
        {!info && <WorkInfo work={work} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  name: {
    paddingTop: 40,
    fontSize: 20,
    fontWeight: "bold"
  },
  button: {
    backgroundColor: "#42C0FB",
    borderRadius: 15,
    margin: 10
  },
  buttonText: {
    color: "white",
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 10,
    paddingLeft: 10,
    fontWeight: "bold"
  }
});
