import { useFonts } from 'expo-font';
import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import { COLOR, ICON, SIZES } from '../constants/theme';

export default function UIButton(props) {
    const {title, onPress, isSelected, icon} = props
    return (
        <TouchableOpacity style = {{
            height: 45,
            borderRadius: 5,
            backgroundColor: "#DDDDDD",
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            width: SIZES.width/2.5
            
        }}>
            <Image 
                source={icon}
                style = {{
                    width: 25,
                    height: 25,
                    marginRight: 10
                }}
            />
                
            

            <Text style = {{
                color: COLOR.description,
                fontSize: SIZES.h5,
            }}>{title}</Text>
            
        </TouchableOpacity>
    )
}
