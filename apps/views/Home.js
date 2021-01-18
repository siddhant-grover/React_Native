import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import { Header } from '../sections/Header';
import { Hero } from '../sections/Hero';
import Menu from '../sections/Menu'


export default function Home({ navigation }) {


   
        return(
            <View style={styles.container}>
                <Header message ='Press to Login'/>
                <Hero/>
                <Menu navigate={navigation}/>
            </View>
        );
    }


    // Home['navigationOptions'] = screenProps => ({
    //     header:null
    // })

const styles  = StyleSheet.create({
    container:{
        flex:1,//parent component must have flex , in order to arrange child components using flex 
        // flexDirection:'column-reverse',
        // alignItems:'center'//aligns items along secondary axis
//check out https://reactnative.dev/docs/flexbox
    }
});