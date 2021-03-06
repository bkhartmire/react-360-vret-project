import React from "react";
import { Text, View } from "react-360";
import { styles } from "../styles";
import Option from "./Option";

export default class Select extends React.Component {
  render() {
    return (
      <React.Fragment>
        <View style={styles.greetingBox}>
          <Text style={styles.title}>Select Your Enviroment </Text>
          {this.props.options.map(option => {
            return (
              <Option
                key={option.id}
                room={option}
                changeEnv={room => this.props.changeEnv(room)}
              />
            );
          })}
        </View>
      </React.Fragment>
    );
  }
}
