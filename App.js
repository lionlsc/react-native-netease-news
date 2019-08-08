import React, {Component,Fragment} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView,Easing,Animated} from 'react-native';
import ScrollableTabView, { DefaultTabBar ,ScrollableTabBar} from 'react-native-scrollable-tab-view';
import Spinner from 'react-native-loading-spinner-overlay';
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
import {Provider,inject,observer} from "mobx-react";
import Store from "./store/store"
@inject("store")
@observer
class App extends Component{
    constructor(props) {
        super(props);
        this.state={
            selectedTab : '首页',
        }
    }
    render() {
        return (
                     <Fragment>
                         <Spinner
                             visible={this.props.store.showing}
                             textContent={'数据加载中...'}
                             textStyle={{color:"#fff"}}
                         />
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
                                             this.props.store.clearNews();
                                             this.props.store.showSpinner();
                                             if (obj.i==0){
                                                 this.props.store.getNewsData().then(()=>{this.props.store.hideSpinner()})
                                             }else if(obj.i==1){
                                                 this.props.store.getAmuseData().then(()=>{this.props.store.hideSpinner()})
                                             }else if(obj.i==2){
                                                 this.props.store.getSportsData().then(()=>{this.props.store.hideSpinner()})
                                             }else if(obj.i==3){
                                                 this.props.store.getFinanceData().then(()=>{this.props.store.hideSpinner()})
                                             }
                                             else if(obj.i==4){
                                                 this.props.store.getWarData().then(()=>{this.props.store.hideSpinner()})
                                             }
                                             else if(obj.i==5){
                                                 this.props.store.getTechData().then(()=>{this.props.store.hideSpinner()})
                                             }
                                             else if(obj.i==6){
                                                 this.props.store.getMobileData().then(()=>{this.props.store.hideSpinner()})
                                             }
                                             else if(obj.i==7){
                                                 this.props.store.getDigitialData().then(()=>{this.props.store.hideSpinner()})
                                             }else if(obj.i==8){
                                                 this.props.store.getFashionData().then(()=>{this.props.store.hideSpinner()})
                                             }
                                             else if(obj.i==9){
                                                 this.props.store.getGameData().then(()=>{this.props.store.hideSpinner()})
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
                                 onPress={() => {this.setState({ selectedTab: '视频' });
                                  if(this.props.store.videoData.length==0){
                                      this.props.store.showSpinner();
                                  }
                                 }}>
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
                                 onPress={() => {this.setState({ selectedTab: '直播' });
                                 if(this.props.store.liveData.length==0){
                                     this.props.store.showSpinner();
                                 }
                                 }}>
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
                     </Fragment>
        );
    }
}
class Index extends Component{
    render(){
        return (
            <Provider store={Store}>
                <App navigation={this.props.navigation}/>
            </Provider>
        )
    }
}
const stackContainer=createStackNavigator({
    Index:Index,
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



