import { StyleSheet, Text, TextInput, ToastAndroid, View, TouchableOpacity, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLOR, ICON } from '../../constants/theme';
import UIButton from '../../Component/UIButtonPrimary';
import { AppContext } from '../../constants/AppContext';
import AxiosIntance from '../../constants/AxiosIntance';

const ChangePassword = ({navigation}) => {
    const [isValidate, setIsValidate] = useState(false)
    const [isValidate2, setIsValidate2] = useState(false)
    const [pass, setPass] = useState('');
    const {dataUser, setLogin, password} = useContext(AppContext)
    console.log(password)
    const validationPass = (text) => {
        if (text.length > 7) {
            setIsValidate(false)
        } else {
            setIsValidate(true)
        }
    }

    const validationPass2 = (text) => {
      if (text === password ) {
          setIsValidate2(false)
      } else {
          setIsValidate2(true)
      }
  }
    const ChangePass = async () => {
        try {
            const res= await AxiosIntance().post("users/change-password?"+dataUser._id, {
                password: pass
            })
            console.log('pass '+res)
            if (res.error == false) {
              ToastAndroid.show("Cập nhật thành công", ToastAndroid.SHORT)
              setLogin(false)
            } else {
              ToastAndroid.show("Cập nhật thất bại", ToastAndroid.SHORT)
            }
            
            
      
          } catch (err) {
            console.log(err)
            ToastAndroid.show("thất bại", ToastAndroid.SHORT)
          }
    }
  return (
    <SafeAreaView style={{flex: 1, padding: 15}}>
      <View>
      <TouchableOpacity onPress={() => {
                navigation.navigate("Profile")
              }}>
              <Image
                source={ICON.close}
                style={{
                  height: 22,
                  width: 22,
                }}
                
              />
              </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            color: "#333",
            minHeight: 50,
            fontWeight: "bold",
            color: COLOR.primary,
            alignSelf: 'center',
            marginTop: 20
          }}
        >
          Change Password
        </Text>

        <TextInput 
        style={{height: 50, borderWidth: 0.5, padding: 10,  }} 
        placeholder = 'mật khẩu cũ'
        onChangeText={(text) => {
          
            validationPass2(text)
        }}
        />
        {
            isValidate2 == true && 
            <Text style = {{
                color: 'red',
            }}>Sai mật khẩu</Text>
        }

        <TextInput 
        style={{height: 50, borderWidth: 0.5, padding: 10, marginTop: 10}} 
        placeholder = 'mật khẩu mới'
        onChangeText={(text) => {
            setPass(text)
            validationPass(text)
        }}
        />
        {
            isValidate == true && 
            <Text style = {{
                color: 'red',
            }}>Tối thiểu 8 kí tự</Text>
        }

        <View style= {{marginTop: 20}}></View>

        <UIButton backgroundColor={!isValidate ? COLOR.primary : COLOR.buttonDisabled} title='Change' 
            onPress = {ChangePass}
            disabled = {!isValidate2 || !isValidate ? false : true }
        />
      </View>
    </SafeAreaView>
  );
}

export default ChangePassword

const styles = StyleSheet.create({})