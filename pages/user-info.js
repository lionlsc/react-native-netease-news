import React,{Component} from "react"
import {View,Text,ScrollView,StyleSheet,TouchableNativeFeedback} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import IconM from "react-native-vector-icons/MaterialCommunityIcons"
import { Button } from 'beeshell/dist/components/Button';
class User extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
           <ScrollView>
                  <View>
                   <View style={{ height: 40,marginTop:20,marginBottom:20}}>
                       <View style={styles.headerTop}>
                           <View style={styles.headerIcon}>
                               <TouchableNativeFeedback >
                                   <View style={styles.headerIconItemList}>
                                       <Icon name={"moon-o"} size={20} color={"#666"}/>
                                       <Text>夜间</Text>
                                   </View>
                               </TouchableNativeFeedback>
                           </View>

                           <View style={styles.headerIcon}>
                               <TouchableNativeFeedback>
                                   <View style={styles.headerIconItemList}>
                                       <Icon name={"pencil-square-o"} size={20} color={"#666"}/>
                                       <Text>签到</Text>
                                   </View>
                               </TouchableNativeFeedback>
                           </View>
                       </View>
                   </View>
                   <View style={{flex:1,justifyContent:'center',alignItems:"center",flexDirection:"row",marginTop:25,marginBottom:40}}>
                       <TouchableNativeFeedback>
                           <View style={{width: "20%"}}>
                               <Icon name={"weibo"} size={30} color={"#666"} style={{margin:20}}/>
                           </View>
                       </TouchableNativeFeedback>
                       <TouchableNativeFeedback>
                           <View style={{width: "20%"}}>
                               <Icon name={"weixin"} size={30} color={"#666"} style={{margin:20}}/>
                           </View>
                       </TouchableNativeFeedback>
                       <TouchableNativeFeedback>
                           <View style={{width: "20%"}}>
                               <Icon name={"qq"} size={30} color={"#666"} style={{margin:20}}/>
                           </View>
                       </TouchableNativeFeedback>
                   </View>
                   <View style={{flex:1,justifyContent:"center",alignItems:"center",marginBottom:50}}>
                       <Button type="default" size="md" style={{backgroundColor:"#C81623",borderRadius:12,width:200}}>
                           <View >
                               <Text style={{textAlign: "center"}}>登陆/注册</Text>
                           </View>
                       </Button>
                   </View>
                   <View style={{flex:1,justifyContent:"space-around",flexDirection:"row",alignItems:"center",marginBottom:30}}>
                       <TouchableNativeFeedback>
                           <View style={{flex:1,justifyContent:"center",alignItems:"center",height:50}}>
                               <Icon name={"star-o"} size={30} color={"#666"}/>
                               <Text style={{textAlign:"center"}}>收藏</Text>
                           </View>
                       </TouchableNativeFeedback>
                       <TouchableNativeFeedback>
                           <View style={{flex:1,justifyContent:"center",alignItems:"center",height:50}}>
                               <Icon name={"clock-o"} size={30} color={"#666"}/>
                               <Text style={{textAlign:"center"}}>历史</Text>
                           </View>
                       </TouchableNativeFeedback>
                       <TouchableNativeFeedback>
                           <View style={{flex:1,justifyContent:"center",alignItems:"center",height:50}}>
                               <IconM name={"message-text-outline"} size={30} color={"#666"}/>
                               <Text style={{textAlign:"center"}}>跟帖</Text>
                           </View>
                       </TouchableNativeFeedback>
                   </View>
                      <View style={{backgroundColor:"#3d3d3d",height:5,opacity:0.2}}>

                      </View>
               </View>
                  <Button>
                      <View style={{flex:1,justifyContent:"space-between",alignItems:"center",flexDirection:"row",height:40,
                      }}>
                          <View style={{width:"40%",height:40}}>
                              <Text>我的消息</Text>
                          </View>
                          <View style={{width:"40%",height:40,position:"relative"}}>
                              <View>
                                  <Text style={{position:"absolute",right:30,top:3}}>评论我的跟帖/通知</Text>
                              </View>
                              <Icon name={"angle-right"} size={30} color={"#666"} style={{position:"absolute",right:0,top:-2}}/>
                          </View>
                      </View>
                  </Button>
                  <Button>
                      <View style={{flex:1,justifyContent:"space-between",alignItems:"center",flexDirection:"row",height:40,
                      }}>
                          <View style={{width:"40%",height:40}}>
                              <Text>我的消息</Text>
                          </View>
                          <View style={{width:"40%",height:40,position:"relative"}}>
                              <View>
                                  <Text style={{position:"absolute",right:30,top:3}}>评论我的跟帖/通知</Text>
                              </View>
                              <Icon name={"angle-right"} size={30} color={"#666"} style={{position:"absolute",right:0,top:-2}}/>
                          </View>
                      </View>
                  </Button>
                  <Button>
                      <View style={{flex:1,justifyContent:"space-between",alignItems:"center",flexDirection:"row",height:40,
                      }}>
                          <View style={{width:"40%",height:40}}>
                              <Text>我的消息</Text>
                          </View>
                          <View style={{width:"40%",height:40,position:"relative"}}>
                              <View>
                                  <Text style={{position:"absolute",right:30,top:3}}>评论我的跟帖/通知</Text>
                              </View>
                              <Icon name={"angle-right"} size={30} color={"#666"} style={{position:"absolute",right:0,top:-2}}/>
                          </View>
                      </View>
                  </Button>
                  <Button>
                      <View style={{flex:1,justifyContent:"space-between",alignItems:"center",flexDirection:"row",height:40,
                      }}>
                          <View style={{width:"40%",height:40}}>
                              <Text>我的消息</Text>
                          </View>
                          <View style={{width:"40%",height:40,position:"relative"}}>
                              <View>
                                  <Text style={{position:"absolute",right:30,top:3}}>评论我的跟帖/通知</Text>
                              </View>
                              <Icon name={"angle-right"} size={30} color={"#666"} style={{position:"absolute",right:0,top:-2}}/>
                          </View>
                      </View>
                  </Button>
                  <Button>
                      <View style={{flex:1,justifyContent:"space-between",alignItems:"center",flexDirection:"row",height:40,
                      }}>
                          <View style={{width:"40%",height:40}}>
                              <Text>我的消息</Text>
                          </View>
                          <View style={{width:"40%",height:40,position:"relative"}}>
                              <View>
                                  <Text style={{position:"absolute",right:30,top:3}}>评论我的跟帖/通知</Text>
                              </View>
                              <Icon name={"angle-right"} size={30} color={"#666"} style={{position:"absolute",right:0,top:-2}}/>
                          </View>
                      </View>
                  </Button>
                  <Button>
                      <View style={{flex:1,justifyContent:"space-between",alignItems:"center",flexDirection:"row",height:40,
                      }}>
                          <View style={{width:"40%",height:40}}>
                              <Text>我的消息</Text>
                          </View>
                          <View style={{width:"40%",height:40,position:"relative"}}>
                              <View>
                                  <Text style={{position:"absolute",right:30,top:3}}>评论我的跟帖/通知</Text>
                              </View>
                              <Icon name={"angle-right"} size={30} color={"#666"} style={{position:"absolute",right:0,top:-2}}/>
                          </View>
                      </View>
                  </Button>
                  <Button>
                      <View style={{flex:1,justifyContent:"space-between",alignItems:"center",flexDirection:"row",height:40,
                      }}>
                          <View style={{width:"40%",height:40}}>
                              <Text>我的消息</Text>
                          </View>
                          <View style={{width:"40%",height:40,position:"relative"}}>
                              <View>
                                  <Text style={{position:"absolute",right:30,top:3}}>评论我的跟帖/通知</Text>
                              </View>
                              <Icon name={"angle-right"} size={30} color={"#666"} style={{position:"absolute",right:0,top:-2}}/>
                          </View>
                      </View>
                  </Button>
                  <Button>
                      <View style={{flex:1,justifyContent:"space-between",alignItems:"center",flexDirection:"row",height:40,
                      }}>
                          <View style={{width:"40%",height:40}}>
                              <Text>我的消息</Text>
                          </View>
                          <View style={{width:"40%",height:40,position:"relative"}}>
                              <View>
                                  <Text style={{position:"absolute",right:30,top:3}}>评论我的跟帖/通知</Text>
                              </View>
                              <Icon name={"angle-right"} size={30} color={"#666"} style={{position:"absolute",right:0,top:-2}}/>
                          </View>
                      </View>
                  </Button>
                  <Button>
                      <View style={{flex:1,justifyContent:"space-between",alignItems:"center",flexDirection:"row",height:40,
                      }}>
                          <View style={{width:"40%",height:40}}>
                              <Text>我的消息</Text>
                          </View>
                          <View style={{width:"40%",height:40,position:"relative"}}>
                              <View>
                                  <Text style={{position:"absolute",right:30,top:3}}>评论我的跟帖/通知</Text>
                              </View>
                              <Icon name={"angle-right"} size={30} color={"#666"} style={{position:"absolute",right:0,top:-2}}/>
                          </View>
                      </View>
                  </Button>
           </ScrollView>
        );
    }


}
const styles=StyleSheet.create({
     headerTop:{
         flex:1,
         alignItems:"center",
         justifyContent:"space-around",
         flexDirection:"row"
     },
    headerIcon:{
         width:"20%",
         borderRadius:20,
         borderWidth:2,
         borderColor:"#666",
    },
    headerIconItemList:{
         flex: 1,
         justifyContent: "space-around",
         alignItems: "center",
         flexDirection: "row"
    }
})
export default User;
