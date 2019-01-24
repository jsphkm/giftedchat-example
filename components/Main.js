/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

const offset = 24;
const styles = StyleSheet.create({
  nameInput: {
    height: offset * 2,
    margin: offset,
    paddingHorizontal: offset,
    borderColor: '#111111',
    borderWidth: 1,
  },
});

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  onChangeText(name) {
    this.setState({ name });
  }

  render() {
    return (
      <View>
        <TextInput
          onChangeText={name => this.onChangeText(name)}
          style={styles.nameInput}
          placeHolder="John Doe"
          value={this.state.name}
        />
      </View>
    );
  }
}

export default Main;
