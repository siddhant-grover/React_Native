import React from 'react';
import {ImageBackground,Image, StyleSheet,Text, View,Platform} from 'react-native';

export class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={isLoggedIn:false};
    }

    toggeUser=()=>{
        this.setState(previousState=>{
            return {isLoggedIn:!previousState.isLoggedIn};
        });
    }
    render(){
        let display = this.state.isLoggedIn? 'Sample User': this.props.message;
        return(
            <View style = {styles.headStyle}>
                <Image 
                    style={styles.logoStyle}
                    source={require('./img/Globo_logo_REV.png')}
                />   
            <Text style = {styles.headText}onPress={this.toggeUser}>{display}</Text>
            </View>
        );
    }
}

const styles= StyleSheet.create({
    headText:{
        textAlign:'right',
        color:'white',
        fontSize:20,
        flex:1 //to make sure logo and text take equal space
    },
    headStyle:{
        paddingTop :10,
        paddingBottom:10,
        paddingRight:10,
        backgroundColor:Platform.OS==='android'?'pink':'black',//https://reactnative.dev/docs/platform-specific-code
        flex:1,
        flexDirection:'row',//makes sure image and text appear side by side, parent container
        borderBottomWidth:2,
        borderColor:'black'
    },
    logoStyle:{
        flex:1,
        width:undefined,//image demntions are required but here flex takes care
        height:undefined
    }
});


