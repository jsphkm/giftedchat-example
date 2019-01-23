import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

class Main extends React.Component {
  state = { name: ''};
  render() {
    return (
      <View>
        <TextInput
          style={styles.nameInput}
          placeHolder="John Doe"
          value={this.state.name}
        />
      </View>
    );
  }
}

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

export default Main;
