
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { COLOR, SIZES } from '../constants/theme';

export default function UIButton(props) {
    const {title, onPress,  disabled, backgroundColor} = props
    return (
        <TouchableOpacity style = {{
            height: 45,
            borderRadius: 5,
            backgroundColor: backgroundColor,
            alignItems: 'center',
            justifyContent: 'center'
        }}
        
            onPress = {onPress}
            disabled = {disabled}
        >
            <Text style = {{
                color: '#fff',
                fontSize: SIZES.h4,
            }}>{title}</Text>
            
        </TouchableOpacity>
    )
}
