
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {
  createMaterialTopTabNavigator,
} from "react-navigation"
import NavigationUtil from "../navigator/NavigationUtil";

type Props = {};
export default class PopularPage extends Component<Props> {

  render() {
    const TabNavigator=createMaterialTopTabNavigator({
      PopularTab1:{
        screen:PopularTab,
        navigationOptions:{
          title:'Tab1'
        }
      },
      PopularTab2:{
        screen:PopularTab,
        navigationOptions:{
          title:'Tab2'
        }
      },

    });
    return <View style={{flex:1, marginTop:0}}>
      <TabNavigator/>
    </View>
  }
}

class PopularTab extends Component<Props> {

  render() {
    // const {tabLabel} = this.props;
    return (
        <View style={styles.container}>
          {/*<Text style={styles.welcome}>{tabLabel}</Text>*/}
          <Text onPress={()=>{
            NavigationUtil.goPage({
              // navigation:this.props.navigation
              navigation:this.props.navigation
            },"DetailPage")

          }}>跳转到详情页</Text>
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
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
});
