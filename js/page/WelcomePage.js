
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import NavigationUtil from "../navigator/NavigationUtil";


type Props = {};
export default class WelcomePage extends Component <Props> {
    componentDidMount() {
        this.timer = setTimeout(()=>{//定时器
            NavigationUtil.resetToHomePage({
                navigation: this.props.navigation
            })

        },1000)
    }
    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);//关闭欢迎页时，取消定时器这个组件
    }

    render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>WelcomePage</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    // backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
