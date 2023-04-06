import React, { useEffect, useState } from 'react';
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
import axios from 'axios';

const Register = ({navigation}) => {
    
    const [keyboardIsShow, setKeyboardIsShow] = useState(false);

    useEffect(() => {
      //componentDidMount
      Keyboard.addListener("keyboardDidShow", () => {
        setKeyboardIsShow(true);
      });

      Keyboard.addListener("keyboardDidHide", () => {
        setKeyboardIsShow(false);
      });
    });

    // state for validating
    const [errorUsername, setErrorUsername] = useState("");
    const [errorConfirm, setErrorConfirm] = useState("");
    const [errorName, setErrorName] = useState("");
    const [errorPassWord, setErrorPassWord] = useState("");
    const isValidationOK = () =>
      isValidUsername(username) == true && isValidPass(password) == true;
    // state to store email/password
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [secureText, setSecureText] = useState(true)

    const Register = async () => {
      try {
        const responseRegister = await AxiosIntance().post("api/user/register", {
          email: username,
          password: password,
          confirmPassword: confirmPassword,
          name: name,
        });
        if (responseRegister.result == true) {
            navigation.navigate('Login')
            ToastAndroid.show("Đăng ký thành công", ToastAndroid.SHORT)
        } else {
            ToastAndroid.show("Đăng ký thất bại", ToastAndroid.SHORT)
        }
        console.log(responseRegister);
      } catch (err) {
        console.log(err)
        ToastAndroid.show("Đăng ký thất bại", ToastAndroid.SHORT)
      }
      
      
    }
    // checkbox

    const [isChecked, setChecked] = useState(false);

    // set font

    let [fontLoaded] = useFonts({
      chunkFive: require("../assets/font/ChunkFive-Regular.otf"),
      pacifico: require("../assets/font/Pacifico.ttf"),
      antonio: require("../assets/font/Antonio-Bold.ttf"),
      robotoBlack: require("../assets/font/Roboto-Black.ttf"),
    });

    if (!fontLoaded) {
      return undefined;
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
            flex: 18,
            paddingRight: (SIZES.width * 30) / 100,
          }}
        >
          <Text
            style={{
              fontSize: SIZES.h1 + 20,

              color: COLOR.primary,
              fontFamily: "robotoBlack",
            }}
          >
            Hello!
          </Text>

          <Text
            style={{
              fontSize: SIZES.h3,
              color: COLOR.description,
              marginTop: 4,
            }}
          >
            Sign up to get started
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
            <Text>Full Name </Text>
            <Text style = {{
              color: 'red',
              fontWeight: 'bold'
            }}>*</Text>
          </View>
          <UIEditText
            holder = 'Tran Tuan Anh'
            changeText = {(text) => {
              setName(text)
              if (isValidUsername(text) == false) {
                setErrorName('Không được để trống')
              } else {
                setErrorName('')
              }
            }}
          ></UIEditText>
          <Text style ={{color: 'red'}}>{errorName}</Text>


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
          onPress = {() => {
            setSecureText(!secureText)
          }}
          isIcon = {true}
          icon = {ICON.closeEye}
          ></UIEditText>
          <Text style ={{color: 'red'}}>{errorPassWord}</Text>

          <View style={{
              marginTop: 10,
              flexDirection: "row",
              marginBottom: 10
            }}>
            <Text>Confirm Password </Text>
            <Text style = {{
              color: 'red',
              fontWeight: 'bold'
            }}>*</Text>
          </View>
          <UIEditText
          changeText = {(text) => {
            setConfirmPassword(text)
            if (isValidPass(text) == false) {
              setErrorConfirm('Độ dài phải lớn hơn hoặc bằng 8')
            } else {
              setErrorConfirm('')
            }
          }}
          secureTextEntry = {secureText}
          onPress = {() => {
            setSecureText(!secureText)
          }}
          isIcon = {true}
          icon = {ICON.closeEye}
          ></UIEditText>

          <Text style ={{color: 'red'}}>{errorConfirm}</Text>
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

          </View>

          {/* lllllllllllllllllll */}

          <UIButtonPrimary 
            title="Sign Up"
            color="#fff"
            onPress = {() => {
              //navigation.navigate('Login')
              Register()
            }}
            disabled = {isValidationOK() == false}
            // backgroundColor = {isValidationOK()  == true ? COLOR.primary : COLOR.buttonDisabled}
            backgroundColor = {COLOR.primary}
            />

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
            <Text onPress={() => {
              navigation.navigate('Login')
            }} style = {{
              color: COLOR.primary,
              fontWeight: 'bold'
            }}>Sign In</Text>
          </View>
        </View>

        {/* lllllllllllllllllll */}
      </View>
    )
}

export default Register