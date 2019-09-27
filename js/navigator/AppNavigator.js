import {
    createStackNavigator,
    createMaterialTopTabNavigator,
    createBottomTabNavigator,
    createSwitchNavigator,//用这个回到首页时，就不会再跳转到欢迎页面
    // createAppContainer

} from "react-navigation"

import WelcomePage from "../page/WelcomePage";
import HomePage from "../page/HomePage";
import DetailPage from "../page/DetailPage";
import WalkStartPage from "../page/WalkStartPage";

const InitNavigator=createStackNavigator({//InitNavigator 是入口导航器，APP启动后直接跳转到这个Navigator里的页面，也就是这里的WelcomPage 因此，入口导航器命名必须为这个
    WelcomePage:{
        screen:WelcomePage,
        navigationOptions:{
            // header:null, //可以通过将header设为null 来禁用StackNavigator的Navigation Bar，这样就可以全屏显示啦
        }
    }
});

const MainNavigator=createStackNavigator({
    HomePage:{
        screen:HomePage,
        navigationOptions:{
            header:null, //可以通过将header设为null 来禁用StackNavigator的Navigation Bar
            tabBarVisible: false,
        }
    },
    DetailPage:{
        screen:DetailPage,
        navigationOptions:{
            // header:null, //可以通过将header设为null 来禁用StackNavigator的Navigation Bar
            // tabBarVisible: false, // 隐藏底部导航栏
            // header:null,  //隐藏顶部导航栏
        }
    },
    WalkStartPage:{
        screen:WalkStartPage,
        navigationOptions:{
            // header:null, //可以通过将header设为null 来禁用StackNavigator的Navigation Bar
            // tabBarVisible: false, // 隐藏底部导航栏
            // header:null,  //隐藏顶部导航栏
        }
    },
});

export default createSwitchNavigator({//此导航器连接了上述两个导航器
    Init:InitNavigator,
    Main:MainNavigator,
},{
    navigationOptions:{
        header:null, //可以通过将header设为null 来禁用StackNavigator的Navigation Bar
    }
})