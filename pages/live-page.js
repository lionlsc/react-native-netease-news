import React from "react";
import {View, Text, TouchableNativeFeedback,StyleSheet} from "react-native";
import { Longlist } from 'beeshell';
import Orientation from 'react-native-orientation';
import VideoPlayer from 'react-native-video-controls';
class Livepage extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <VideoPlayer
                source={{ uri: this.props.navigation.getParam("liveUrl")}}
                style={styles.backgroundVideo}
                onBack={()=>{
                    this.props.navigation.goBack();
                }}
                disableSeekbar={true}
                disableTimer={true}
                onEnterFullscreen={()=>{
                    Orientation.lockToLandscape(); /*点击全屏时进入横屏*/
                }}
                onExitFullscreen={()=>{
                    Orientation.lockToPortrait(); /*退出全屏时进入竖屏*/
                }}
            />
        );
    }
    componentWillUnmount(){
        Orientation.lockToPortrait(); /*退出页面时进入竖屏*/
    }
}
export default Livepage;
const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});
