import React, { useContext, useEffect, useState } from 'react';
import { Text,View, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {ICON, COLOR, SIZES} from '../../constants/theme'
import UITextInput from '../../Component/UITextInput';
import UIEditText from '../../Component/UIEditText'
import UIButton from '../../Component/UIButtonMin';
import ItemNews from './ItemNews';
import { AppContext } from '../../constants/AppContext';
import AxiosIntance from '../../constants/AxiosIntance';
const Home = ({ navigation }) => {
  const [news, setNews] = useState([
    {
      image: require("../../assets/img/tin1.png"),
      topic: "Europe",
      title: "Ukraine's President Zelensky to BBC: Blood money being paid...",
      chanel: {
        logo: require("../../assets/img/logoBBC.png"),
        name: "BBC News",
      },
      time: {
        clock: ICON.clock,
        hour: "14m ago",
      },
    },

    {
      image: require("../../assets/img/tin2.png"),
      topic: "Travel",
      title: "Her train broke down. Her phone died. And then she met her..",
      chanel: {
        logo: require("../../assets/img/logoCCN.jpg"),
        name: "CNN",
      },
      time: {
        clock: ICON.clock,
        hour: "1h ago",
      },
    },

    {
      image: require("../../assets/img/tintuc.png"),
      topic: "Europe",
      title: "Russian warship: Moskva sinks in Black Sea",
      chanel: {
        logo: require("../../assets/img/logoBBC.png"),
        name: "BBC News",
      },
      time: {
        clock: ICON.clock,
        hour: "4h ago",
      },
    },

    {
      image: require("../../assets/img/tin3.png"),
      topic: "Money",
      title: "Wind power produced more electricity than coal and nucle...",
      chanel: {
        logo: require("../../assets/img/logoUSAToday.png"),
        name: "USA Today",
      },
      time: {
        clock: ICON.clock,
        hour: "4h ago",
      },
    },

    {
      image: require("../../assets/img/tin6.png"),
      topic: "Life",
      title: "'We keep rising to new challenges:' For churches hit by",
      chanel: {
        logo: require("../../assets/img/logoUSAToday.png"),
        name: "USA Today",
      },
      time: {
        clock: ICON.clock,
        hour: "4h ago",
      },
    },

    {
      image: require("../../assets/img/tin3.png"),
      topic: "Life",
      title: "'We keep rising to new challenges:' For churches hit by",
      chanel: {
        logo: require("../../assets/img/logoUSAToday.png"),
        name: "USA Today",
      },
      time: {
        clock: ICON.clock,
        hour: "4h ago",
      },
    },

    {
      image: require("../../assets/img/tin3.png"),
      topic: "Life",
      title: "'We keep rising to new challenges:' For churches hit by",
      chanel: {
        logo: require("../../assets/img/logoUSAToday.png"),
        name: "USA Today",
      },
      time: {
        clock: ICON.clock,
        hour: "4h ago",
      },
    },

    {
      image: require("../../assets/img/tin3.png"),
      topic: "Life",
      title: "'We keep rising to new challenges:' For churches hit by",
      chanel: {
        logo: require("../../assets/img/logoUSAToday.png"),
        name: "USA Today",
      },
      time: {
        clock: ICON.clock,
        hour: "4h ago",
      },
    },
  ]);
  const {setLogin} = useContext(AppContext)
  const {dataUser} = useContext(AppContext)
  
    return (
      <SafeAreaView
        style={{
          backgroundColor: COLOR.primary,
        }}
      >
        <View
          style={{
            paddingHorizontal: 10,
            width: SIZES.width,
            height: SIZES.height,
            backgroundColor: "white",
          }}
        >
          {/* HEADER */}
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: "#333",
                maxHeight: 50,
                fontWeight: "400",
              }}
            >
              Profile
            </Text>
            <TouchableOpacity style = {{position: "absolute",
                right: 0,}}
                
                onPress = {() => navigation.navigate('ChangePassword')}
                >
            <Image
              source={ICON.setting}
              style={{
                width: 30,
                height: 30,
                
              }}
            />
            </TouchableOpacity>
          </View>

          {/* AVATAR */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
              alignItems: "center",
            }}
          >
            <Image
              source={{uri: dataUser.avatar}}
              style={{
                width: 110,
                height: 110,
                borderRadius: 50,
                resizeMode: "stretch",
              }}
            />
            <View>
              <Text
                style={{
                  fontSize: 18,
                  color: "#333",
                  maxHeight: 50,
                  fontWeight: "600",
                }}
              >
                2156
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  color: "#333",
                  maxHeight: 50,
                  fontWeight: "300",
                }}
              >
                Followers
              </Text>
            </View>

            <View>
              <Text
                style={{
                  fontSize: 18,
                  color: "#333",
                  maxHeight: 50,
                  fontWeight: "600",
                }}
              >
                567
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  color: "#333",
                  maxHeight: 50,
                  fontWeight: "300",
                }}
              >
                Following
              </Text>
            </View>

            <View>
              <Text
                style={{
                  fontSize: 18,
                  color: "#333",
                  maxHeight: 50,
                  fontWeight: "600",
                }}
              >
                23
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  color: "#333",
                  maxHeight: 50,
                  fontWeight: "300",
                }}
              >
                News
              </Text>
            </View>
          </View>

          {/* INFO */}
          <View
            style={{
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: "#333",
                maxHeight: 50,
                fontWeight: "600",
              }}
            >
              {dataUser.name}
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: "#333",
                maxHeight: 50,
                fontWeight: "300",
              }}
            >
              {dataUser.email}
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: "#333",
                maxHeight: 50,
                fontWeight: "300",
              }}
            >
              {dataUser.phone}
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: "#333",
                maxHeight: 50,
                fontWeight: "300",
              }}
            >
              {dataUser.address}
            </Text>
          </View>

          {/* BUTTON */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 10,
            }}
          >
            <UIButton title="Edit Profile" 
            onPress = {() => {
              navigation.navigate('EditProfile')
            }}/>
            <UIButton title="Log out" onPress = {() => {
              setLogin(false)
              
            }}/>

          </View>

          {/* MENU */}
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "#333",
                maxHeight: 50,
                fontWeight: "400",
                marginRight: 10,
              }}
            >
              News
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: "#333",
                minHeight: 30,
                fontWeight: "400",
                borderBottomColor: COLOR.primary,
                borderBottomWidth: 4,
              }}
            >
              Recent
            </Text>
          </View>

          {/* LIST */}
          <FlatList
            data={news}
            renderItem={({ item }) => <ItemNews news={item} key={item.name} />}
            keyExtractor={(eachNews) => eachNews.name}
          />
        </View>
      </SafeAreaView>
    );
}

export default Home