import React from 'react';
import { TouchableOpacity, Text, TextInput, Image, View } from 'react-native';
import { COLOR, ICON, SIZES } from '../constants/theme';

export default function UIEditText(props) {
    const {holder, changeText, secureTextEntry, isIcon, icon1, isIcon2, icon2, isPadding, onPress, value} = props
    return (
      <View style={{}}>
        <TextInput
          style={{
            borderColor: "#333",
            borderWidth: 1,
            height: 45,
            borderRadius: 5,
            padding: 10,
            paddingHorizontal: isPadding ? 40 : 10,
            fontSize: SIZES.h5,
            
          }}
          placeholder={holder}
          placeholderTextColor={"rgba(0, 0, 0, 0.3)"}
          onChangeText={changeText}
          secureTextEntry={secureTextEntry}
          value = {value}
        ></TextInput>

        {isIcon == true && (
          <TouchableOpacity style = {{
            position: "absolute",
            right: 0,
            top: 10,
          }} onPress={onPress}>
             <Image
            source={icon1}
            style={{
             
              width: 25,
              height: 25,
              marginRight: 10,
            }}
          />
          </TouchableOpacity>
        )}

        {isIcon2 == true && (
          <Image
            source={icon2}
            style={{
              position: "absolute",
              left: 0,
              top: 10,
              width: 25,
              height: 25,
              marginLeft: 10,
            }}
          />
        )}
      </View>
    );
}