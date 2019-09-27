
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {
  createBottomTabNavigator,
} from "react-navigation"
import PopularPage from "./PopularPage";
import TrendingPage from "./TrendingPage";
import FavoritePage from "./FavoritePage";
import MyPage from "./MyPage";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import NavigationUtil from "../navigator/NavigationUtil";
import DynamicTabNavigator from "../navigator/DynamicTabNavigator";

type Props = {};
export default class HomePage extends Component<Props> {

  render() {
    NavigationUtil.navigation = this.props.navigation;//把最外层的navigation赋值给NavigationUtil.navigation，这样NavigationUtil.navigation 就可以跳转到所有页面了 因为这是在最外层的navigator
    return <DynamicTabNavigator/>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
