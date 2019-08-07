import React from "react";
import {View, Text, TouchableNativeFeedback, StyleSheet, Image} from "react-native";
import { Longlist ,Button} from 'beeshell';
import {inject,observer} from "mobx-react";
import Icon from 'react-native-vector-icons/FontAwesome';
@inject("store")
@observer
class Videolist extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        let array=Array.from(this.props.store.videoData);
        return (
            <Longlist
                ref={(c) => {
                    this._longlist = c
                }}
                data={array}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableNativeFeedback onPress={()=>{
                            this.props.navigation.navigate("Videopage",{
                                videoUrl:item.mp4_url
                            })
                        }
                        }>
                            <View key={Math.random()} style={{height: 315,position:"relative",flex:1,}}>
                                    <Image source={{uri:item.cover}} style={{width:"100%",height:315,position:"absolute"}}/>
                                    <Text  style={{position:"absolute",marginTop:17,zIndex:100,color:"#fff",fontSize:18,width:"80%",marginLeft:"10%",textAlign: "center"}}>{item.title}</Text>
                                    <View style={{position:"absolute",zIndex:100,width:"100%",height:315,justifyContent:"center",alignItems:"center"}}>
                                     <Icon name="play-circle-o" size={50} color="rgba(255,255,255,0.5)" />
                                    </View>
                            </View>
                        </TouchableNativeFeedback>
                    )
                }
                }
                onEndReached={() => { }}
                onRefresh={() => {
                    this.props.store.getVideoData();
                    return Promise.resolve();
                }}
            />
        );
    }
    componentDidMount(){
        this.props.store.getVideoData();
    }
    componentWillUnmount(){
        this.props.store.clearVideo();
    }
}
export default Videolist;
