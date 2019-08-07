import React,{Component} from "react"
import {View,Text,ScrollView,StyleSheet,TouchableNativeFeedback} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import IconM from "react-native-vector-icons/MaterialCommunityIcons";
import { Button } from 'beeshell/dist/components/Button';
class User extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <ScrollView>
                <View style={{height: 60}}>
                    <View style={styles.flexSpaceAround}>
                        <TouchableNativeFeedback>
                            <View style={styles.headerTopArea}>
                                <View style={styles.flexSpaceAround}>
                                    <Icon name={"moon-o"} size={20} color={"#666"}/>
                                    <Text>夜间</Text>
                                </View>
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback>
                            <View style={styles.headerTopArea}>
                                <View style={styles.flexSpaceAround}>
                                    <Icon name={"pencil-square-o"} size={20} color={"#666"}/>
                                    <Text>签到</Text>
                                </View>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </View>
                <View style={{height:100}}>
                    <View style={styles.flexCenter}>
                        <TouchableNativeFeedback>
                           <View style={styles.headerIconArea}>
                              <View style={styles.flexCenter}>
                                  <Icon name={"weibo"} size={30} color={"#666"}/>
                              </View>
                           </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback>
                           <View style={styles.headerIconArea}>
                               <View style={styles.flexCenter}>
                                   <Icon name={"weixin"} size={30} color={"#666"} />
                               </View>
                           </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback>
                           <View style={styles.headerIconArea}>
                               <View style={styles.flexCenter}>
                                   <Icon name={"qq"} size={30} color={"#666"} />
                               </View>
                           </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback>
                           <View style={styles.headerIconArea}>
                               <View style={styles.flexCenter}>
                                   <Icon name={"mobile-phone"} size={30} color={"#666"} />
                               </View>
                           </View>
                        </TouchableNativeFeedback>
                    </View>
                </View>
                <View style={{height:40}}>
                    <View style={styles.flexCenter}>
                        <Button type="danger" size="md" style={{borderRadius:20}}>
                            <View>
                                <Text>登陆/注册</Text>
                            </View>
                        </Button>
                    </View>
                </View>
                <View style={{height:100}}>
                    <View style={styles.flexSpaceAround}>
                        <TouchableNativeFeedback>
                            <View style={styles.headerButtonArea}>
                                <View style={styles.headerButtonIconArea}>
                                    <Icon name={"star-o"} size={30} color={"#666"}/>
                                    <Text style={{textAlign:"center"}}>收藏</Text>
                                </View>
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback>
                           <View style={styles.headerButtonArea}>
                               <View style={styles.headerButtonIconArea}>
                                   <Icon name={"clock-o"} size={30} color={"#666"}/>
                                   <Text style={{textAlign:"center"}}>历史</Text>
                               </View>
                           </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback>
                            <View style={styles.headerButtonArea}>
                                <View style={styles.headerButtonIconArea}>
                                    <IconM name={"message-text-outline"} size={30} color={"#666"}/>
                                    <Text style={{textAlign:"center"}}>跟帖</Text>
                                </View>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </View>
                <View style={{backgroundColor:"#3d3d3d",height:5,opacity:0.2}}>
                </View>
                <View>
                    <Button type="default">
                        <View style={styles.flexSpaceBetween}>
                            <View style={{width:100}}>
                                <Text>我的关注</Text>
                            </View>
                            <View style={{width:70}}>
                                <View style={styles.flexCenter}>
                                    <Text>用户/圈子</Text>
                                    <Icon name={"angle-right"} size={30} color={"#666"}/>
                                </View>
                            </View>
                        </View>
                    </Button>
                    <Button type="default">
                        <View style={styles.flexSpaceBetween}>
                            <View style={{width:100}}>
                                <Text>我的消息</Text>
                            </View>
                            <View style={{width:70}}>
                                <View style={styles.flexCenter}>
                                    <Text>回复/通知</Text>
                                    <Icon name={"angle-right"} size={30} color={"#666"}/>
                                </View>
                            </View>
                        </View>
                    </Button>
                    <Button type="default">
                        <View style={styles.flexSpaceBetween}>
                            <View style={{width:100}}>
                                <Text>我的已购</Text>
                            </View>
                            <View style={{width:110}}>
                                <View style={styles.flexCenter}>
                                    <Text>购买的课程/直播</Text>
                                    <Icon name={"angle-right"} size={30} color={"#666"}/>
                                </View>
                            </View>
                        </View>
                    </Button>
                </View>
                <View style={{backgroundColor:"#3d3d3d",height:5,opacity:0.2}}>
                </View>
                <View>
                    <Button type="default">
                        <View style={styles.flexSpaceBetween}>
                            <View style={{width:100}}>
                                <Text>金币商城</Text>
                            </View>
                            <View style={{width:170}}>
                                <View style={styles.flexCenter}>
                                    <Text style={{color:'#ec1a1a'}}>嘿！你的500金币，在这里</Text>
                                    <Icon name={"angle-right"} size={30} color={"#666"}/>
                                </View>
                            </View>
                        </View>
                    </Button>
                    <Button type="default">
                        <View style={styles.flexSpaceBetween}>
                            <View style={{width:100}}>
                                <Text>京东特供</Text>
                            </View>
                            <View style={{width:130}}>
                                <View style={styles.flexCenter}>
                                    <Text>新人领取188元红包</Text>
                                    <Icon name={"angle-right"} size={30} color={"#666"}/>
                                </View>
                            </View>
                        </View>
                    </Button>
                    <Button type="default">
                        <View style={styles.flexSpaceBetween}>
                            <View style={{width:100}}>
                                <Text>用户鉴帖</Text>
                            </View>
                            <View style={{width:120}}>
                                <View style={styles.flexCenter}>
                                    <Text>邀你鉴定跟帖质量</Text>
                                    <Icon name={"angle-right"} size={30} color={"#666"}/>
                                </View>
                            </View>
                        </View>
                    </Button>
                    <Button type="default">
                        <View style={styles.flexSpaceBetween}>
                            <View style={{width:100}}>
                                <Text>我的钱包</Text>
                            </View>
                            <View style={{width:10}}>
                                <View style={styles.flexCenter}>
                                    <Icon name={"angle-right"} size={30} color={"#666"}/>
                                </View>
                            </View>
                        </View>
                    </Button>
                </View>
                <View style={{backgroundColor:"#3d3d3d",height:5,opacity:0.2}}>
                </View>
                <View>
                    <Button type="default">
                        <View style={styles.flexSpaceBetween}>
                            <View style={{width:100}}>
                                <Text>免流量看新闻</Text>
                            </View>
                            <View style={{width:10}}>
                                <View style={styles.flexCenter}>
                                    <Icon name={"angle-right"} size={30} color={"#666"}/>
                                </View>
                            </View>
                        </View>
                    </Button>
                    <Button type="default">
                        <View style={styles.flexSpaceBetween}>
                            <View style={{width:100}}>
                                <Text>意见反馈</Text>
                            </View>
                            <View style={{width:10}}>
                                <View style={styles.flexCenter}>
                                    <Icon name={"angle-right"} size={30} color={"#666"}/>
                                </View>
                            </View>
                        </View>
                    </Button>
                    <Button type="default">
                        <View style={styles.flexSpaceBetween}>
                            <View style={{width:100}}>
                                <Text>扫一扫</Text>
                            </View>
                            <View style={{width:10}}>
                                <View style={styles.flexCenter}>
                                    <Icon name={"angle-right"} size={30} color={"#666"}/>
                                </View>
                            </View>
                        </View>
                    </Button>
                    <Button type="default">
                        <View style={styles.flexSpaceBetween}>
                            <View style={{width:100}}>
                                <Text>设置</Text>
                            </View>
                            <View style={{width:10}}>
                                <View style={styles.flexCenter}>
                                    <Icon name={"angle-right"} size={30} color={"#666"}/>
                                </View>
                            </View>
                        </View>
                    </Button>
                </View>
            </ScrollView>
        )
    }
}
const styles=StyleSheet.create({
    flexCenter:{
        flex:1,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    },
    flexSpaceAround:{
        flex: 1,
        flexDirection:"row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    flexSpaceBetween:{
        flex: 1,
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    headerTopArea:{
        width:80,
        height:40,
        borderRadius:20,
        borderWidth:2,
        borderColor:"#666"
    },
    headerIconArea:{
        width: 50,
        height:50,
        borderRadius:25,
        borderWidth:2,
        borderColor:"#666",
        margin:20
    },
    headerButtonArea:{
        width:150,
        height:70
    },
    headerButtonIconArea:{
        flex:1,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
    }
})
export default User;
