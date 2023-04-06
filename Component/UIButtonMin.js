import React from 'react';
import { TouchableOpacity, Text, Pressable } from 'react-native';
import { COLOR, SIZES } from '../constants/theme';

export default function UIButton(props) {
    const {title, onPress,} = props
    return (
        
            <TouchableOpacity
                style={{
                  backgroundColor: COLOR.primary,
                  width: 182,
                  height: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                }}

                onPress = {onPress}
              >
                <Text
                  style={{
                    fontSize: SIZES.h6,
                    color: "white",
                  }}
                >
                  {title}
                </Text>
              </TouchableOpacity>
    )
}

<Pressable
                style={{
                  backgroundColor: COLOR.primary,
                  width: 102,
                  height: 34,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: SIZES.h6,
                    color: "white",
                  }}
                >
                  Following
                </Text>
              </Pressable>