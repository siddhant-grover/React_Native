import React from 'react';
import { Text, View} from 'react-native';
//import {WebView} from 'react-native-webview'

export class VideoDetail extends React.Component {
    // static navigationOptions = {
    //     header: null
    // };

    render() {

        //let tubeId = this.props.navigation.getParam('ytubeId', 'NO VIDEO');//getParam to get id , first option is name of param, second optn is default if no param is present
        const { ytubeId } = this.props.route.params;//new
       
        let tubeUrl = `https://www.youtube.com/embed/${ytubeId}`;  
        return (
            <WebView
            style={{marginTop: 20}}
            javaScriptEnabled={true} 
            source={{uri: tubeUrl }}
            />

            
        );
    }
}
