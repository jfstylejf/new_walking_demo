
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {
  createBottomTabNavigator,
} from "react-navigation"
import PopularPage from "../page/PopularPage";
import TrendingPage from "../page/TrendingPage";
import FavoritePage from "../page/FavoritePage";
import MyPage from "../page/MyPage";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import NavigationUtil from "../navigator/NavigationUtil";
import BottomTabBar from "react-navigation-tabs/src/views/BottomTabBar";

const TABS = {//在这里配置页面的路由
  PopularPage:{
    screen:PopularPage,
    navigationOptions:{
      tabBarLabel:"最热",
      // activeBackgroundColor:'#FFFFFF',
      // headerTintColor:'#FFFFFF',
      // tabBarVisible: false, // 隐藏底部导航栏
      header:null,  //隐藏顶部导航栏
      // tabBarOptions:{
      //   backgroundColor: '#18191D',
      // },
      tabBarIcon:({tintColor,focused})=>(
          <MaterialIcons
              name={'whatshot'}
              size={26}
              style={{
                color:tintColor,
                backgroundColor: '#18191D',
              }}
          />
      ),
    }
  },
  TrendingPage:{
    screen:TrendingPage,
    navigationOptions:{
      tabBarLabel:"趋势",
      tabBarIcon:({tintColor,focused})=>(
          <Ionicons
              name={'md-trending-up'}
              size={26}
              style={{
                color:tintColor,
                backgroundColor: '#18191D',
              }}
          />
      ),
    }
  },
  FavoritePage:{
    screen:FavoritePage,
    navigationOptions:{
      tabBarLabel:"收藏",
      tabBarVisible: false, // 隐藏底部导航栏
      header:null,  //隐藏顶部导航栏
      tabBarIcon:({tintColor,focused})=>(
          <MaterialIcons
              name={'favorite'}
              size={26}
              style={{
                color:tintColor,
                backgroundColor: '#18191D',
              }}
          />
      ),
    }
  },
  MyPage:{
    screen:MyPage,
    navigationOptions:{
      tabBarLabel:"我的",
      tabBarIcon:({tintColor,focused})=>(
          <Entypo
              name={'user'}
              size={26}
              style={{
                color:tintColor,
                backgroundColor: '#18191D',
              }}
          />
      ),
    }
  }
}

type Props = {};
export default class DynamicTabNavigator extends Component<Props> {
  constructor(props){
    super(props);
    console.disableYellowBox = true;//可以屏蔽掉黄色警告
  }
  _tabNavigator(){
    const {PopularPage, TrendingPage, FavoritePage, MyPage} = TABS;//从TABS中取出页面
    const tabs = {PopularPage, TrendingPage, FavoritePage, MyPage}//根据需要定制显示的tab
    PopularPage.navigationOptions.tabBarLabel='训练';//动态配置tab属性
    TrendingPage.navigationOptions.tabBarLabel='计划';//动态配置tab属性
    return createBottomTabNavigator(
        tabs,
        {
          // tabBarComponent:TabBarComponent
          tabBarOptions: {
            activeTintColor: 'rgba(197, 255, 102, 1)',
            inactiveTintColor:'#98979E',
            labelStyle: {
              fontSize: 12,
            },
            style: {
              backgroundColor: '#18191D',
            },
          }
        }


    )
  }
  render() {
    // NavigationUtil.navigation = this.props.navigation;
    const Tab=this._tabNavigator();
    return <Tab/>;
  }
}

class TabBarComponent extends React.Component{
  constructor(props){
    super(props);
    this.theme={
      tintColor: props.activeTintColor,
      activeBackgroundColor:'#18191D',
      inactiveBackgroundColor:'#18191D',
      updateTime:new Date().getTime(),
    }
  }

  render() {
    return (

          <BottomTabBar
              {...this.props}
              activeTintColor={this.theme.tintColor||this.props.activeTintColor}
          />

    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
