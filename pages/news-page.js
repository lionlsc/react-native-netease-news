import React, {Component, Fragment} from "react"
import {View,Text,ScrollView,StyleSheet,TouchableNativeFeedback,FlatList,Image,RefreshControl} from "react-native";
import {observer,inject} from "mobx-react";
import { Longlist } from 'beeshell';
/*import Spinner from "react-native-loading-spinner-overlay";*/
@inject("store")
@observer
class NewsPage extends Component{
    constructor(props) {
        super(props);
        this.state={
            date:new Date(),
        }
        this.props.store.showSpinner();
    }
    render() {
        let array=Array.from(this.props.store.newsdata);
        return (
            <View>
                <Longlist
                    ref={(c) => {
                        this._longlist = c
                    }}
                    data={array}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableNativeFeedback onPress={()=>{
                                this.props.navigation.navigate("Webnews",{
                                    url:item.url
                                })
                            }
                            }>
                                <View key={Math.random()} style={{height: 150}}>
                                    <Image
                                        style={{width: 180, height: 120,position:"absolute",right:20,top:15}}
                                        source={{uri: item.imgsrc}}
                                    />
                                    <Text style={{width: 180, height: 120,position:"absolute",left:20,top:15,fontSize:16}}>{item.title}</Text>
                                    <View style={{width: 180, height: 30,position:"absolute",left:20,top:80,fontSize:16}}>
                                        <Text style={{color:"#ec1a1a"}}>{item.source}</Text>
                                        <Text>{item.ptime}</Text>
                                        <Text>{(this.state.date.getHours()-new Date(item.ptime).getHours())+"小时前"}</Text>
                                    </View>

                                </View>
                            </TouchableNativeFeedback>
                        )
                    }
                    }
                    onEndReached={() => { }}
                    onRefresh={() => {
                        return  this.props.store.getNewsData();
                    }}
                />
            </View>
        );
    }

    componentDidMount(){
        this.props.store.getNewsData().then(()=>{
            this.props.store.hideSpinner();
        })
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
})
export default NewsPage;

