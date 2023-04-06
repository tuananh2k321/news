import React from 'react';
import {
    StyleSheet, 
    Image,
    Text,
    View,
    ImageBackground,
    ActivityIndicator
      } from 'react-native';



const Splash = ({ navigation }) => { 
    setTimeout(() => {
        navigation.navigate('Welcome_1')
    }, 2000) 
    return (
      <View style={{ width: "100%", height: "100%", backgroundColor: 'white'}}>
        <View style={{flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Image source={require("../assets/img/title-app.png")} style={{}} />
          <ActivityIndicator size='large' color='blue'></ActivityIndicator>
        </View>
      </View>
    );
}

export default Splash