import React from "react";
import {View, Text, TouchableNativeFeedback,StyleSheet} from "react-native";
import { Longlist } from 'beeshell';
import Orientation from 'react-native-orientation';
import VideoPlayer from 'react-native-video-controls';
class Videopage extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <VideoPlayer
                source={{ uri:this.props.navigation.getParam("videoUrl")}}
                style={styles.backgroundVideo}
                onBack={()=>{
                    this.props.navigation.goBack();
                }}
                onEnterFullscreen={()=>{
                    Orientation.lockToLandscape();
                }}
                onExitFullscreen={()=>{
                    Orientation.lockToPortrait();
                }}
            />
        );
    }
    componentWillUnmount(){
        Orientation.lockToPortrait();
    }
}
export default Videopage;
const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});
