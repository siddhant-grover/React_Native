import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './apps/views/Home'
import {Contact} from './apps/views/Contact'
import { createStackNavigator } from '@react-navigation/stack';//StackNavigator is a func that will return a react- native component, whatever route we navigate to will be returned
import { NavigationContainer } from '@react-navigation/native';
import {Video} from './apps/views/Vedio';
import { VideoDetail } from './apps/views/VideoDetail';
const Stack = createStackNavigator();
// const MyRoutes = StackNavigator({ //any component added here will hv sccess to the navigation prop
//   HomeRT:{ //HomeRT is name of the route
//     screen: Home,//Home is the actual component
//   } ,
//   ContactRT:{
//     screen:Contact
//   }
// },
//   {
//     initialRouteName:'HomeRT'//when app start , what component to launch first
//   }

// );

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" >
    <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
    <Stack.Screen name="ContactRT" component={Contact} />
    <Stack.Screen name="LessonsRT" component={Video} />
    <Stack.Screen name="VideoDetailRT" component={VideoDetail} />
  </Stack.Navigator>
  </NavigationContainer>
  
    
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
