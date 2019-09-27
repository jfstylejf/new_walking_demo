
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';



type Props = {};
export default class WalkStartPage extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.start}>开始！</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#18191D',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  start:{

    textAlign: 'center',
    backgroundColor: '#18191D',
    color: 'rgba(197, 255, 102, 1)',
    fontSize: 80,
    fontFamily:'KaiTi',
    // fontFamily:'PingFangSC-Medium',


  }
});
