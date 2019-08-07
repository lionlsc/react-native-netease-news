import React from "react";
import {View,Text,ScrollView} from "react-native"
import {WebView} from "react-native-webview";
import { NavigationBar } from 'beeshell/dist/components/NavigationBar';
class Webnews extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <NavigationBar
                    title='标题'
                    backLabelText='返回'
                    onPressBack={() => {
                        this.props.navigation.goBack()
                    }}
                    onPressForward={() => {
                    }}
                />
                <WebView
                    source={{
                        uri:
                            this.props.navigation.getParam("url")
                    }}
                />
            </View>
        );
    }


    componentDidMount() {

    }

}
export default Webnews;

