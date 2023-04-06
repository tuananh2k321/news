import React, { useEffect, useState } from 'react';
import { View, Image, Text, Pressable, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {COLOR, ICON, SIZES} from '../../constants/theme'
import UIButtonPrimary from '../../Component/UIButtonPrimary'
import AxiosIntance from '../../constants/AxiosIntance';
const NewsDetail = (props) => {
    const {route} = props
    const {params} = route;
    const [loading, isLoading] = useState(true)
    const [data, setData] = useState()
    const [heart, setHeart] = useState(false)
    useEffect(() => {
      console.log(params.id)
      const getDetail = async () => {
        const res = await AxiosIntance().get("api/product/"+params.id)
        setData(res.products)
        console.log(data)
        isLoading(false)
      }
      getDetail()
      return () => {
        
      }
    }, [])
    
    return (
      <SafeAreaView style={{
        flex: 1,
        justifyContent: "center",
              alignItems: "center",
      }}>
        {loading == true ? (
          <View
            style={{
              
            }}
          >
            <ActivityIndicator size="large" color="blue"></ActivityIndicator>
            <Text>Loading...</Text>
          </View>
        ) : (
          <View>
            <ScrollView>
              <View
                style={{
                  padding: 10,
                  width: SIZES.width,
                  marginBottom: 80,
                }}
              >
                {/* HEADER */}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={ICON.left}
                    style={{
                      width: 30,
                      height: 30,
                    }}
                  />
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <Image
                      source={ICON.connect}
                      style={{
                        width: 23,
                        height: 23,
                      }}
                    />
                    <Image
                      source={ICON.menuVertical}
                      style={{
                        width: 25,
                        height: 25,
                      }}
                    />
                  </View>
                </View>

                {/* LOGO AND BUTTON */}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <Image
                      source={require("../../assets/img/logoBBC.png")}
                      style={{
                        width: 50,
                        height: 50,
                        marginRight: 10,
                        borderRadius: 50,
                      }}
                    />
                    <View>
                      <Text
                        style={{
                          fontSize: SIZES.h6,
                          fontWeight: "bold",
                          marginBottom: 2,
                        }}
                      >
                        BBC News
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: "400",
                        }}
                      >
                        14m ago
                      </Text>
                    </View>
                  </View>

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
                </View>

                {/* CONTENT */}
                <Image
                  source={{ uri: data.image }}
                  style={{
                    width: "100%",
                    height: 307,
                    marginTop: 20,
                  }}
                />

                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "400",
                    marginTop: 10,
                  }}
                >
                  Europe
                </Text>

                <Text
                  style={{
                    fontSize: SIZES.h2,
                    fontWeight: "600",
                    marginTop: 10,
                    color: COLOR.primary,
                  }}
                >
                  Name: {data.name}
                </Text>

                <Text
                  style={{
                    fontSize: SIZES.h6,
                    fontWeight: "400",
                    marginTop: 20,
                  }}
                >
                  Price: {data.price}
                </Text>

                <Text
                  style={{
                    fontSize: SIZES.h6,
                    fontWeight: "400",
                    marginTop: 20,
                  }}
                >
                  Quantity: {data.quantity}
                </Text>

                {/* FOOTER */}
              </View>
            </ScrollView>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                height: 80,
                borderTopWidth: 0.5,
                position: "absolute",
                bottom: 0,
                padding: 10,
                width: SIZES.width,
                backgroundColor: "white",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                 <TouchableOpacity onPress={() => setHeart(!heart)}>
                  {
                    heart == false ?
                    <Image
                      source={ICON.favorite}
                      style={{
                        width: 30,
                        height: 30,
                      }}
                    />
                    :
                    <Image
                      source={require('../../assets/Icon/heart_dac.png')}
                      style={{
                        width: 30,
                        height: 30,
                      }}
                    />
                  }
                  
                 </TouchableOpacity>
                  <Text
                    style={{
                      fontWeight: "600",
                      fontSize: SIZES.h6,
                      marginLeft: 6,
                    }}
                  >
                    24.5K
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={ICON.comment}
                    style={{
                      width: 28,
                      height: 28,
                      marginLeft: 14,
                    }}
                  />
                  <Text
                    style={{
                      fontWeight: "600",
                      fontSize: SIZES.h6,
                      marginLeft: 6,
                    }}
                  >
                    1K
                  </Text>
                </View>
              </View>

              <Image
                source={ICON.favorites}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: COLOR.primary,
                }}
              />
            </View>
          </View>
        )}
      </SafeAreaView>
    );
}

export default NewsDetail