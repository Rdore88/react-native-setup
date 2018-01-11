import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native';


class Blink extends Component {
  constructor(props){
    super(props);
    this.state = {showText: true}

    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : '';
    return (
      <Text>{display}</Text>
    );
  }
}


export default class BlinkApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Blink text='I love to blink' />
        <Blink text='I love to blink' />
        <Blink text='I love to blink' />
        <Blink text='I love to blink' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
