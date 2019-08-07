import React from "react";
import {View, Text, TouchableNativeFeedback, StyleSheet, Image} from "react-native";
import { Longlist ,Button} from 'beeshell';
import {inject,observer} from "mobx-react";
@inject("store")
@observer
class Livelist extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        let array=Array.from(this.props.store.liveData);
        return (
            <Longlist
                ref={(c) => {
                    this._longlist = c
                }}
                data={array}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableNativeFeedback onPress={()=>{
                            this.props.navigation.navigate("Livepage",{
                                liveUrl:item["videoUrl"]
                            })
                        }
                        }>
                            <View key={Math.random()} style={{height: 300,flex:1,position:"relative"}}>
                                <Image source={{uri:item.image}} style={{width:"100%",height:250,position:"absolute"}}/>
                                <Text style={{position:"absolute",bottom:70,zIndex:100,color:"#fff",fontSize:18,width:"80%",marginLeft:"10%",textAlign: "center"}}>{item.roomName}</Text>
                                <View style={{width:"100%",height:50,position:"absolute",top:250,backgroundColor:"#fff"}}>
                                   <Text style={{color:"gray",fontSize:18,position:"absolute",bottom:13,left:60}}>{item.sourceinfo.tname}</Text>
                                    <Image source={{uri:item.sourceinfo.timg}} style={{width:36,height:36,position:"absolute",left:20,bottom:5,borderRadius:18}}/>
                                </View>
                            </View>
                        </TouchableNativeFeedback>
                    )
                }
                }
                onEndReached={() => { }}
                onRefresh={() => {
                    return this.props.store.getLiveData();
                }}
            />
        );
    }
    componentDidMount(){
        this.props.store.getLiveData();
    }
    componentWillUnmount(){
        this.props.store.clearLive();
    }
}
export default Livelist
