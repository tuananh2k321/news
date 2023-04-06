import React, { useContext } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';

import Welcome_1 from './Welcome_1';
import Splash from './Splash';
import Login from './Login'
import Register from './Register';
import BottomTab from './Main/BottomTab';
import NewsDetail from './Main/NewsDetails'
import EditProfile from './Main/EditProfile'
import { AppContext } from '../constants/AppContext';



const Stack = createNativeStackNavigator();

const USers = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Welcome_1" component={Welcome_1} />
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Register" component={Register}/>  
          
    </Stack.Navigator>
  )
}

// const News = () => {
//   return (
          
//   )
// }

export default RootComponent = function () {
  const {isLogin} = useContext(AppContext)
    return (
        <>
          {isLogin ? <BottomTab/> : <USers/>}
          {/* <BottomTab></BottomTab> */}
        </>
    );
}