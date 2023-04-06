import React, { useState } from 'react';
import { Text, View, Image, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {IMAGES, ICON, COLOR, SIZES} from '../../constants/theme'
import UIEditText from '../../Component/UIEditText';

const ItemNews = (props) => {
    const {image, topic, title, chanel, time } = props.news
    const onPress = props

    return(
        <TouchableOpacity onPress={onPress}>
          <View
              style={{
                height: 150,
                flexDirection: "row",
                padding: 15,
                
              }}
            >
              <Image
                source= {image}
                style={{
                  width: "40%",
                  height: "100%",
                  marginRight: 10,
                  resizeMode: "stretch",
                  borderRadius: 10
                }}
              />

              <View style = {{
                
              }}>
                <Text
                  style={{
                    fontSize: 12,
                  }}
                >
                  {topic}
                </Text>

                <Text
                  style={{
                    fontSize: SIZES.h5,
                    fontWeight: "400",
                    flexWrap: 'wrap',
                  }}
                  
                >
                  {title}
                </Text>
                <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={chanel['logo']}
                    style={{
                      borderRadius: 50,
                      width: 20,
                      height: 20,
                      resizeMode: "cover",
                      marginRight: 5,
                    }}
                  />
                  <Text>{chanel["name"]}</Text>
                  <Image
                    source={ICON.clock}
                    style={{
                      width: 16,
                      height: 16,
                      marginLeft: 10,
                      marginRight: 5,
                    }}
                  />
                  <Text>{time["hour"]}</Text>
                </View>

                <View>
                  <Image
                    source={ICON.ellipsis}
                    style={{
                      width: 10,
                      height: 10,
                      resizeMode: "cover",
                    }}
                  />
                </View>
              </View>
              </View>
            </View>
        </TouchableOpacity>
    )
}

export default ItemNews