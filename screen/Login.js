import React, { useContext, useEffect, useState } from 'react';
import { 
  View,
   Text,
   TextInput,
   Keyboard,
   ToastAndroid
   } from 'react-native';

import Checkbox from 'expo-checkbox'
import UIButtonPrimary from '../Component/UIButtonPrimary';
import UIEditText from '../Component/UIEditText'
import UIButtonAndIcon from '../Component/UIButtonAndIcon'
import {isValidPass, isValidUsername} from '../Component/Validation'
import { COLOR, ICON, SIZES } from '../constants/theme';
import { useFonts } from 'expo-font';
import AxiosIntance from '../constants/AxiosIntance';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppContext } from '../constants/AppContext';


const Login = (props) => {

  // Keyboard

  const {navigation} = props

  const [keyboardIsShow, setKeyboardIsShow] = useState (false)

  useEffect (() => {
    //componentDidMount
    Keyboard.addListener ('keyboardDidShow', () => {
      setKeyboardIsShow(true)
    })

    Keyboard.addListener ('keyboardDidHide', () => {
      setKeyboardIsShow(false)
    })
  })

  // state for validating
  const [errorUsername, setErrorUsername] = useState('')
  const [errorPassWord, setErrorPassWord] = useState('')
  const isValidationOK = () => isValidUsername(username) == true && isValidPass(password) == true
  // state to store email/password
  const {setLogin, setDataUser, setPassword1} = useContext(AppContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [secureText, setSecureText] = useState(true)
  const [notification, setNotification] = useState (true)

  const Login = async () => {
    try {
      const responseLogin = await AxiosIntance().post("api/user/login", {
        email: username,
        password: password
      });
      if (responseLogin.result == true) {
          //navigation.navigate('BottomTab')
          setPassword1(password)
          setLogin(true)
          setDataUser(responseLogin.user)
          
          await AsyncStorage.setItem('token', responseLogin.token)
          console.log(responseLogin)
          ToastAndroid.show("Đăng nhập thành công", ToastAndroid.SHORT)
      } else {
          ToastAndroid.show("Đăng nhập thất bại", ToastAndroid.SHORT)
      }
    } catch (err) {
      console.log(err)
      setNotification(false)
      ToastAndroid.show(" thất bại", ToastAndroid.SHORT)
    }
    
    
  }

  // checkbox

  const [isChecked, setChecked] = useState(false);

  // set font

  let [fontLoaded] = useFonts ({
      'chunkFive': require('../assets/font/ChunkFive-Regular.otf'),
      'pacifico': require('../assets/font/Pacifico.ttf'),
      'antonio': require('../assets/font/Antonio-Bold.ttf'),
      'robotoBlack': require('../assets/font/Roboto-Black.ttf')
  })


  if (!fontLoaded) {
    return undefined
  }


    return (
      <View
        style={{
          flex: 1,
          marginTop: (SIZES.height * 6) / 100,
          marginHorizontal: (SIZES.width * 4) / 100,
        }}
      >
        {/* lllllllllllllllllll */}
        {keyboardIsShow == false && <View
          style={{
            flex: 30,
            paddingRight: (SIZES.width * 30) / 100,
          }}
        >
          <Text
            style={{
              fontSize: SIZES.h1 + 20,
              fontFamily: "robotoBlack",
            }}
          >
            Hello
          </Text>
          <Text
            style={{
              fontSize: SIZES.h1 + 20,

              color: COLOR.primary,
              fontFamily: "robotoBlack",
            }}
          >
            Again!
          </Text>

          <Text
            style={{
              fontSize: SIZES.h3,
              color: COLOR.description,
              marginTop: 4,
            }}
          >
            Welcome back you've been missed
          </Text>
        </View>}

        {/* lllllllllllllllllll */}

        <View
          style={{
            flex: 60,
          }}
        >
          <View style={{
              
              flexDirection: "row",
              marginBottom: 10
            }}>
            <Text>Username </Text>
            <Text style = {{
              color: 'red',
              fontWeight: 'bold'
            }}>*</Text>
          </View>
          <UIEditText
            holder = 'Example@gmail.com'
            changeText = {(text) => {
              setUsername(text)
              if (isValidUsername(text) == false) {
                setErrorUsername('Không được để trống')
              } else {
                setErrorUsername('')
              }
            }}

          ></UIEditText>
          <Text style ={{color: 'red'}}>{errorUsername}</Text>
          <View style={{
              marginTop: 10,
              flexDirection: "row",
              marginBottom: 10
            }}>
            <Text>Password </Text>
            <Text style = {{
              color: 'red',
              fontWeight: 'bold'
            }}>*</Text>
          </View>
          <UIEditText
          changeText = {(text) => {
            setPassword(text)
            if (isValidPass(text) == false) {
              setErrorPassWord('Độ dài phải lớn hơn hoặc bằng 8')
            } else {
              setErrorPassWord('')
            }
          }}
          secureTextEntry = {secureText}
          isIcon = {true}
          icon1 = {ICON.closeEye}
          onPress = {() => {
            setSecureText(!secureText)
          }}
          ></UIEditText>
          <Text style ={{color: 'red'}}>{errorPassWord}</Text>
          {/* lllllllllllllllllll */}

          <View
            style={{
              flexDirection: "row",
              marginTop: 12,
              marginBottom: 12,
              justifyContent: "space-between",
            }}
          >
            {/* lllllllllllllllllll */}

            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Checkbox
                style={{
                  marginRight: 8,
                }}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? COLOR.primary : undefined}
              />
              <Text
                style={{
                  color: COLOR.description,
                }}
              >
                Remember me
              </Text>
            </View>

            <Text
              style={{
                color: COLOR.primary,
                fontWeight: "bold",
              }}
            >
              Forgot the password ?
            </Text>
          </View>

          {/* lllllllllllllllllll */}

          <UIButtonPrimary 
            title="Login"
            color="#fff"
            onPress = {Login}
            disabled = {isValidationOK() == false}
            backgroundColor = {COLOR.primary}
            
            />

          {
            notification ? 
            undefined :
            <Text
            style={{
              color: COLOR.description,
              textAlign: "center",
              marginTop: 10,
              color: 'red'
            }}
          >
            sai tài khoản hoặc mật khẩu
          </Text>
          }

          <Text
            style={{
              color: COLOR.description,
              textAlign: "center",
              marginTop: 10,
              
            }}
          >
            or continue with
          </Text>

          {/* lllllllllllllllllll */}

          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              justifyContent: 'space-between'
            }}
          >
            <UIButtonAndIcon title="Facebook" icon={ICON.facebook} />

            <UIButtonAndIcon title="Google" icon={ICON.google} />
          </View>
          
          {/* lllllllllllllllllll */}

          <View style={{
              marginTop: 14,
              flexDirection: "row",
              justifyContent: 'center'
            }}>
            <Text>don't have an account ? </Text>
            <Text style = {{
              color: COLOR.primary,
              fontWeight: 'bold'
            }} 
            onPress = {() => {
              navigation.navigate('Register')
            }}>Sign Up</Text>
          </View>
        </View>

        {/* lllllllllllllllllll */}
      </View>
    );
}

export default Login