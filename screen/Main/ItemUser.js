import React, { useState } from 'react';
import { Text, View, Image, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {IMAGES, ICON, COLOR, SIZES} from '../../constants/theme'
import UIEditText from '../../Component/UIEditText';

const ItemUser = (props) => {
    const {navigation, news} = props
    const {image, name, price, quantity } = props.news

    const clickNe = () => {
      navigation.navigate('NewsDetail', {id: news._id})
    }
    return (
        <TouchableOpacity onPress={clickNe}>
          <View
              style={{
                height: 150,
                width: '100%',
                flexDirection: "row",
                padding: 15,
                justifyContent: 'flex-start'
              }}
            >
              <Image
                source=  {{uri: image}}
                style={{
                  width: 150,
                  height: "100%",
                  marginRight: 30,
                  resizeMode: "stretch",
                  borderRadius: 10
                  
                }}
              />

              <View style = {{
                
              }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: COLOR.primary,
                    marginBottom: 10
                    
                  }}
                  numberOfLines={2}
                >
                  Name: {name}
                </Text>

                <Text
                  style={{
                    fontSize: 20,
                    color: COLOR.primary,
                    marginBottom: 10
                  }}
                  numberOfLines={2}
                >
                  Price: {price}
                </Text>

                <Text
                  style={{
                    fontSize: 20,
                    color: COLOR.primary,
                    
                    
                  }}
                  numberOfLines={2}
                >
                  Quantity: {quantity}
                </Text>

                
                
              </View>
            </View>
        </TouchableOpacity>
    )
}

export default ItemUser