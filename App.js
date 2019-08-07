import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView,Easing,Animated} from 'react-native';
import ScrollableTabView, { DefaultTabBar ,ScrollableTabBar} from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconM from 'react-native-vector-icons/MaterialIcons';
import TabNavigator from 'react-native-tab-navigator';
import User from "./pages/user-page";
import  Webnews from "./pages/web-news";
import  Videopage from "./pages/video-page"
import Videolist from "./pages/video-list";
import Livelist from "./pages/live-list";
import Livepage from "./pages/live-page";
import NewsPage from "./pages/news-page";
import AmusePage from "./pages/amuse-page";
import SportsPage from "./pages/sports-page";
import FinancePage from "./pages/finance-page";
import WarPage from './pages/war-page';
import MobilePage from "./pages/mobile-page";
import TechPage from "./pages/tech-page";
import FashionPage from "./pages/fashion-page";
import GamePage from "./pages/fashion-page";
import DigitialPage from "./pages/digitial-page"
import {createStackNavigator,createAppContainer} from "react-navigation"
import StackViewStyleInterpolator from "react-navigation-stack/src/views/StackView/StackViewStyleInterpolator";
import {Provider} from "mobx-react";
import Store from "./store/store"
class App extends Component{
    constructor(props) {
        super(props);
        this.state={
            selectedTab : '首页'
        }
    }

    render() {
    return (
        <Provider store={Store}>
          <TabNavigator>
            <TabNavigator.Item
                selectedTitleStyle={{color:"#C81623"}}
                selected={this.state.selectedTab === '首页'}
                title="首页"
                renderIcon={() => <Icon name="newspaper-o" size={20} color="#666"/>}
                renderSelectedIcon={() => <Icon name="newspaper-o" size={20} color="#C81623"/>}
                onPress={() => this.setState({selectedTab: '首页'})  }>
                {
                    <ScrollableTabView
                        style={{elevation: 0}}
                        locked={false}
                        tabBarPosition={"top"}
                        onChangeTab={(obj)=>{
                            Store.clearNews();
                            if (obj.i==0){
                               Store.getNewsData();
                           }else if(obj.i==1){
                               Store.getAmuseData();
                           }else if(obj.i==2){
                               Store.getSportsData();
                           }else if(obj.i==3){
                               Store.getFinanceData();
                           }
                           else if(obj.i==4){
                               Store.getWarData();
                           }
                           else if(obj.i==5){
                               Store.getTechData();
                           }
                           else if(obj.i==6){
                               Store.getMobileData();
                           }
                           else if(obj.i==7){
                               Store.getDigitialData();
                           }else if(obj.i==8){
                                Store.getFashionData();
                            }
                           else if(obj.i==9){
                               Store.getGameData();
                           }
                        }}
                        tabBarUnderlineStyle={{
                            height:0
                        }}
                        tabBarActiveTextColor='#ec1a1a'
                        tabBarInactiveTextColor="gray"
                        tabBarTextStyle={{fontSize: 16}}
                        initialPage={0}
                        renderTabBar={() => <ScrollableTabBar />}
                    >
                        <View tabLabel="新闻">
                            <NewsPage navigation={this.props.navigation}/>
                        </View>
                        <View tabLabel='娱乐' >
                            <AmusePage navigation={this.props.navigation} />
                        </View>
                        <View tabLabel='运动' >
                            <SportsPage navigation={this.props.navigation}  />
                        </View>
                        <View tabLabel='金融' >
                            <FinancePage navigation={this.props.navigation}/>
                        </View>
                        <View tabLabel='军事' >
                            <WarPage navigation={this.props.navigation} />
                        </View>
                        <View tabLabel='科技' >
                            <TechPage navigation={this.props.navigation} />
                        </View>
                        <View tabLabel='手机' >
                            <MobilePage navigation={this.props.navigation} />
                        </View>
                        <View tabLabel='数字' >
                            <DigitialPage navigation={this.props.navigation} />
                        </View>
                        <View tabLabel='时尚' >
                            <FashionPage navigation={this.props.navigation} />
                        </View>
                        <View tabLabel='游戏' >
                            <GamePage navigation={this.props.navigation} />
                        </View>
                    </ScrollableTabView>
                }
            </TabNavigator.Item>
            <TabNavigator.Item
                selectedTitleStyle={{color:"#C81623"}}
                selected={this.state.selectedTab === '视频'}
                title="视频"
                renderIcon={() => <Icon name="file-video-o" size={20} color="#666"/>}
                renderSelectedIcon={() => <Icon name="file-video-o" size={20} color="#C81623"/>}
                onPress={() => this.setState({ selectedTab: '视频' })}>
                {
                    <Videolist navigation={this.props.navigation}/>
                }
            </TabNavigator.Item>
            <TabNavigator.Item
                selectedTitleStyle={{color:"#C81623"}}
                selected={this.state.selectedTab === '直播'}
                title="直播"
                renderIcon={() => <IconM name="live-tv" size={20} color="#666"/>}
                renderSelectedIcon={() => <IconM name="live-tv" size={20} color="#C81623"/>}
                onPress={() => this.setState({ selectedTab: '直播' })}>
                {
                    <Livelist navigation={this.props.navigation}/>
                }
            </TabNavigator.Item>
            <TabNavigator.Item
                selectedTitleStyle={{color:"#C81623"}}
                selected={this.state.selectedTab === '我'}
                title="我"
                renderIcon={() => <Icon name="user-o" size={20} color="#666"/>}
                renderSelectedIcon={() => <Icon name="user-o" size={20} color="#C81623"/>}
                onPress={() => this.setState({ selectedTab: '我' })}>
                {
                    <User />
                }
            </TabNavigator.Item>
        </TabNavigator>
        </Provider>
    );
  }
}
const stackContainer=createStackNavigator({
    Index:App,
    Webnews:Webnews,
    Videopage:Videopage,
    Livepage:Livepage
},{
    initialRouteName:"Index",
    defaultNavigationOptions:{
        header:null                       //去掉react-navigation自带的导航栏
    },
    transitionConfig:()=>({
            screenInterpolator: StackViewStyleInterpolator.forHorizontal,
            transitionSpec: {
                duration: 250,
                easing: Easing.bezier(0.7, 0.27, 0.4, 0.81),
                timing: Animated.timing,
            },
        })
})
export default createAppContainer(stackContainer);


