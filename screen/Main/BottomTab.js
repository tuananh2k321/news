import React from 'react';
import { Image, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Profile from './Profile'
import Bookmark from './Bookmark';
import Explore from './Explore';
import NewsDetail from './NewsDetails';
import EditProfile from './EditProfile'
import {COLOR, ICON} from '../../constants/theme'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ItemUser from './ItemUser';
import ChangePassword from './ChangePassword';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTab = () => {
    const News = () => {
      return (
        <Stack.Navigator initialRouteName="PostNew" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Explore" component={Explore} />
          <Stack.Screen name="NewsDetail" component={NewsDetail} /> 
    </Stack.Navigator>
      )
    }

    const Pprofile = () => {
      return ( 
        <Stack.Navigator initialRouteName="Profile"  screenOptions={{headerShown: false}}>
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="EditProfile" component={EditProfile} />  
          <Stack.Screen name="ChangePassword" component={ChangePassword} />
    </Stack.Navigator>
      )
    }
    return (
      // CUSTOM CASE 1:
      
      <Tab.Navigator
        screenOptions={
          ({ route }) => ({
          tabBarIcon: ({ focused, label}) => {
            
            let iconName = focused
            if (route.name === 'Home') {
              iconName = focused ? ICON.home : ICON.home
              label = 'Home'
            } else if (route.name === 'Explore') {
              iconName = focused ? ICON.explore : ICON.explore;
              label = 'Explore'
            } else if (route.name === 'Bookmark') {
              iconName = focused ? ICON.bookmark : ICON.bookmark;
              label = 'Bookmark'
            } else if (route.name === 'Profile') {
              iconName = focused ? ICON.profile : ICON.profile;
              label = 'Profile'
            }

            // You can return any component that you like here!
            return <View style = {{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Image source={iconName} 
                  style = {{width: 30, height:30, resizeMode: 'stretch',
                            tintColor: focused ? COLOR.primary : '#333'
                          }}/>
              <Text style = {{
                color : focused ? COLOR.primary : '#333'
              }}>{label}</Text>
            </View>;
          },
          headerShown: false, 
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 66,
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Explore" component={News} />
        <Tab.Screen name="Bookmark" component={Bookmark} />
        <Tab.Screen name="Profile" component={Pprofile} />
      </Tab.Navigator>


      // CUSTOM CASE 2:
        /* <Tab.Navigator screenOptions={{
          headerShown: false, 
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 66,
          },
          tabBarActiveTintColor: COLOR.primary,
          tabBarInactiveTintColor: '#333'
          
        }} 
          > 
          <Tab.Screen name="Home" component={Home} 
            options = {{
              tabBarIcon: ({}) => (
                <View style = {{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Image source={ICON.home} 
                      style = {{width: 30, height:30, resizeMode: 'stretch', 
                              }}/>
                  <Text style = {{
                    
                  }}>Home</Text>
                </View>
              )
              
            }}
          />
          <Tab.Screen name="Explore" component={Explore} 
            options = {{
              tabBarIcon: (focused) => (
                <View style = {{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Image source={ICON.explore} 
                      style = {{width: 30, height:30, resizeMode: 'stretch', 
                              tintColor: focused ? COLOR.primary : '#333'}}/>
                  <Text style = {{
                    color :focused ? COLOR.primary : '#333'
                  }}>Home</Text>
                </View>
              )
            }}/>
          <Tab.Screen name="Bookmark" component={Bookmark} 
          options = {{
            tabBarIcon: (focused) => (
              <View style = {{
                flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center'
              }}>
                <Image source={ICON.bookmark} 
                    style = {{width: 30, height:30, resizeMode: 'stretch', 
                            tintColor: focused ? COLOR.primary : '#333'}}/>
                <Text style = {{
                  color :focused ? COLOR.primary : '#333'
                }}>Home</Text>
              </View>
            )
          }}/>
          <Tab.Screen name="Settings" component={Profile} 
          options = {{
            tabBarIcon: (focused) => (
              <View style = {{
                flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center'
              }}>
                <Image source={ICON.profile} 
                    style = {{width: 30, height:30, resizeMode: 'stretch', 
                            tintColor: focused ? COLOR.primary : '#333'}}/>
                <Text style = {{
                  color :focused ? COLOR.primary : '#333'
                }}>Home</Text>
              </View>
            )
          }}/>
        </Tab.Navigator>
        */
      );
}

export default BottomTab