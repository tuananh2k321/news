import React, { useState } from 'react';
import { Text, View, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {IMAGES, ICON, COLOR, SIZES} from '../../constants/theme'
import UIEditText from '../../Component/UIEditText';
import ItemNews from './ItemNews';

const Home = ({navigation}) => {
    const [display, setDisplay] = useState(false);
    const [news, setNews] = useState ([
        {
            image: require('../../assets/img/tin1.png'),
            topic: "Europe",
            title: "Ukraine's President Zelensky to BBC: Blood money being paid...",
            chanel: {
                logo: require('../../assets/img/logoBBC.png'),
                name: "BBC News"
            },
            time: {
                clock: ICON.clock,
                hour: "14m ago"
            }
        },

        {
            image: require('../../assets/img/tin2.png'),
            topic: "Travel",
            title: "Her train broke down. Her phone died. And then she met her..",
            chanel: {
                logo: require('../../assets/img/logoCCN.jpg'),
                name: "CNN"
            },
            time: {
                clock: ICON.clock,
                hour: "1h ago"
            }
        },

        {
            image: require('../../assets/img/tintuc.png'),
            topic: "Europe",
            title: "Russian warship: Moskva sinks in Black Sea",
            chanel: {
                logo: require('../../assets/img/logoBBC.png'),
                name: "BBC News"
            },
            time: {
                clock: ICON.clock,
                hour: "4h ago"
            }
        },

        {
            image: require('../../assets/img/tin3.png'),
            topic: "Money",
            title: "Wind power produced more electricity than coal and nucle...",
            chanel: {
                logo: require('../../assets/img/logoUSAToday.png'),
                name: "USA Today"
            },
            time: {
                clock: ICON.clock,
                hour: "4h ago"
            }
        },

        {
            image: require('../../assets/img/tin6.png'),
            topic: "Life",
            title: "'We keep rising to new challenges:' For churches hit by",
            chanel: {
                logo: require('../../assets/img/logoUSAToday.png'),
                name: "USA Today"
            },
            time: {
                clock: ICON.clock,
                hour: "4h ago"
            }
        },

        {
          image: require('../../assets/img/tin3.png'),
          topic: "Life",
          title: "'We keep rising to new challenges:' For churches hit by",
          chanel: {
              logo: require('../../assets/img/logoUSAToday.png'),
              name: "USA Today"
          },
          time: {
              clock: ICON.clock,
              hour: "4h ago"
          }
      },

      {
        image: require('../../assets/img/tin3.png'),
        topic: "Life",
        title: "'We keep rising to new challenges:' For churches hit by",
        chanel: {
            logo: require('../../assets/img/logoUSAToday.png'),
            name: "USA Today"
        },
        time: {
            clock: ICON.clock,
            hour: "4h ago"
        }
    },

    {
      image: require('../../assets/img/tin3.png'),
      topic: "Life",
      title: "'We keep rising to new challenges:' For churches hit by",
      chanel: {
          logo: require('../../assets/img/logoUSAToday.png'),
          name: "USA Today"
      },
      time: {
          clock: ICON.clock,
          hour: "4h ago"
      }
  },

    ])

    console.log (news)

    return (
      <SafeAreaView
        style={{
          backgroundColor: COLOR.primary,
        }}
      >
        
          <View
            style={{
              width: SIZES.width,
              height: SIZES.height,
              backgroundColor: "white",
              paddingHorizontal: 15,
            }}
          >
            {/* HEADER */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                toFixed: true,
              }}
            >
              <Image
                source={IMAGES.logo}
                style={{
                  resizeMode: "cover",
                  height: 65,
                  width: 90,
                }}
              />
              <Image
                source={ICON.notification}
                style={{
                  resizeMode: "cover",
                  height: 30,
                  width: 30,
                  marginTop: 15,
                }}
              />
            </View>
            {/* SEARCH */}
            <View
              style={{
                justifyContent: "center",
                marginBottom: 10,
              }}
            >
              <UIEditText
                isPadding={true}
                isIcon={true}
                icon1={ICON.filter}
                isIcon2={true}
                icon2={ICON.search}
              />
            </View>
            {/* TRENDING */}
            <View style = {{
              display:  display ? 'none': undefined
            }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 5,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Trending
                </Text>
                <Text onPress={() => {
                setDisplay(true)
              }}>See all</Text>
              </View>

              <TouchableOpacity onPress = {() => {
             
            }}>
              <Image
              
                source={require("../../assets/img/tintuc.png")}
                style={{
                  height: 200,
                  width: "100%",
                  resizeMode: "stretch",
                  marginBottom: 5,
                }}
              />

              <Text

                style={{
                  fontSize: 12,
                }}
              >
                Europe
              </Text>
              <Text
              
                style={{
                  fontSize: SIZES.h5,
                  fontWeight: "bold",
                }}
              >
                Russian warship: Moskva sinks in Black Sea
              </Text>
              </TouchableOpacity>
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
                    source={require("../../assets/img/logoBBC.png")}
                    style={{
                      borderRadius: 50,
                      width: 20,
                      height: 20,
                      resizeMode: "cover",
                      marginRight: 5,
                    }}
                  />
                  <Text>BBC News</Text>
                  <Image
                    source={ICON.clock}
                    style={{
                      width: 16,
                      height: 16,
                      marginLeft: 10,
                      marginRight: 5,
                    }}
                  />
                  <Text>4 ago</Text>
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

            {/* Menu */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                }}
                onPress = {() => {
                  setDisplay(false)
                }}
              >
                Latest
              </Text>
              <Text onPress={() => {
                setDisplay(true)
              }}>See all</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                marginBottom: 5,
                marginTop: 5,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: SIZES.h6,
                }}
              >
                All
              </Text>
              <Text
                style={{
                  fontSize: SIZES.h6,
                }}
              >
                Sports
              </Text>
              <Text
                style={{
                  fontSize: SIZES.h6,
                }}
              >
                Politics
              </Text>
              <Text
                style={{
                  fontSize: SIZES.h6,
                }}
              >
                Bussiness
              </Text>
              <Text
                style={{
                  fontSize: SIZES.h6,
                }}
              >
                Health
              </Text>
              <Text
                style={{
                  fontSize: SIZES.h6,
                }}
              >
                Travel
              </Text>
              <Text
                style={{
                  fontSize: SIZES.h6,
                }}
              >
                Science
              </Text>
            </View>
            {/* LIST */}
            <FlatList
                data={news}
                renderItem = {({item}) => <ItemNews
                    news={item} 
                    onPress = {() => {
                      navigation.navigate('NewsDetail')
                    }}
                />}
                keyExtractor = {eachNews => eachNews.name}
                showsVerticalScrollIndicator = {false}
            />

            {/* {news.map((eachNews) => (
              <ItemNews news={eachNews} 
                    key={eachNews.name} 
                    onPress = {() => {
                      eachNews.name
                    }}/>
            ))} */}
          </View>

      </SafeAreaView>
    );
}

export default Home