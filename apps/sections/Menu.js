import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Alert, ImagePropTypes } from 'react-native';

export default function Menu(props){

   const onPress = ()=>{
         Alert.alert('You have tapped');
         alert('You have tapped');
    }

return(
    <View style={styles.container}>
        <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.buttonStyles} onPress={()=>{
            
                props.navigate.navigate('LessonsRT');
            }}>
                    <Text style={styles.buttonText}>LESSONS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyles} onPress={onPress}>
                <Text style={styles.buttonText}>REGISTER</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.buttonStyles} onPress={onPress}>
                <Text style={styles.buttonText}>BLOG</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyles} onPress={()=>{
            
                props.navigate.navigate('ContactRT');
            }
                }>{/*//takes name of the route as paramenter, we can only navigate through navigation props(jiske pas Navigation props vo navigate kr sakta hai)*/}
                <Text style={styles.buttonText}>CONTACT</Text>
            </TouchableOpacity>      
        </View>

        <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.buttonStyles} onPress={onPress}>
                <Text style={styles.buttonText}>QUIZ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyles} onPress={onPress}>
                <Text style={styles.buttonText}>ABOUT</Text>
            </TouchableOpacity>      
        </View>

    </View>
);
}


const styles = StyleSheet.create({
    container:{
        flex: 6,
        backgroundColor: '#35605a'
    },
    buttonRow: {
        flex: 1,
        flexDirection: 'row',//buttons side by side  
        alignItems: 'center',//center the content on secondary axis ,  flexDirection: 'row' changes  the colmn to secondary axis
        borderColor: 'red',
        borderBottomWidth: 1
    },
    buttonStyles:{
        backgroundColor: '#35605a',
        width: '50%',//we do this otherwise buttons will be on top of each other
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        color: '#ffffff',
        fontSize: 18
    }
});