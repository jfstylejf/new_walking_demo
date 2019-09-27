/*
   全局导航跳转工具类
 */

export default class NavigationUtil {
    /*
    跳转到指定页面
    @param params 要传递的参数
    @param page 要跳转的页面名（路由名）
     */
    static goPage(params, page){
        const navigation = NavigationUtil.navigation;//最外层的navigation
        if(!navigation){
            console.log('NavigationUtil.navigation can not be null');
            return;
        }
        navigation.navigate(
            page,
            {
                ...params
            }
        )
    }/*


    返回上一页
     */
    static goBack(navigation){
        navigation.goBack();
    }


    /*
    重置到首页
     */
    static resetToHomePage(params){
        const {navigation} = params;
        navigation.navigate("Main");//跳转到Main 这个Navigator中的第一个页面  也就是HomePage
    }


}