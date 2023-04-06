import React, { useContext, useState } from 'react';
import { Text,View, Image, ScrollView, TouchableOpacity, ToastAndroid, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {ICON, COLOR, SIZES} from '../../constants/theme'
import UITextInput from '../../Component/UITextInput';
import UIEditText from '../../Component/UIEditText'
import AxiosIntance from '../../constants/AxiosIntance';
import { AppContext } from '../../constants/AppContext';
import * as ImagePicker from 'expo-image-picker'

const Home = (props) => {
  const {navigation} = props
  const {setDataUser, dataUser} = useContext(AppContext)
  const [name, setName] =useState("")
  // const [address, setAddress] =useState("")
  // const [phone, setPhone] =useState("")
  // const [email, setEmail] =useState("")
  // const [dob, setDob] =useState("")

  

    console.log(dataUser)
  
  

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4,3],
        quality: 1
    })
    

    const formData = new FormData()
    formData.append('image', {
        uri: result.assets[0].uri,
        type: 'image/jpeg',
        name: 'image.jpg'
    })

    const res = await AxiosIntance('multipart/form-data').post('media/upload', formData)
    if (res.error == false) {
        setDataUser({...dataUser, avatar: res.data.path})
        ToastAndroid.show('Upload hình ảnh thành công', ToastAndroid.SHORT)
    } else {
        ToastAndroid.show('Upload hình ảnh thất bại', ToastAndroid.SHORT)
    }
    
}
 
  const Update = async () => {
    try {
      const responseRegister = await AxiosIntance().post("/users/update-profile", {
        name: dataUser.name,
        address: dataUser.address,
        phone: dataUser.phone,
        dob: dataUser.dob,
        email: dataUser.email,
        avatar: dataUser.avatar,
      })
      console.log('Cap Nhap: '+responseRegister)
      if (responseRegister.error == false) {
        ToastAndroid.show("Cập nhật thành công", ToastAndroid.SHORT)
      } else {
        ToastAndroid.show("Cập nhật thất bại", ToastAndroid.SHORT)
      }
      
      

    } catch (err) {
      console.log(err)
      ToastAndroid.show("thất bại", ToastAndroid.SHORT)
    }
  }

    return (
      <SafeAreaView
        style={{
          backgroundColor: COLOR.primary,
        }}
      >
        <ScrollView>
          
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
                flex: 5,
                justifyContent: "space-between",
                flexDirection: "row",
                marginBottom: 10,
                marginTop: 10,
              }}
            >
              
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
                }}
              >
                Edit Profile
              </Text>

              <TouchableOpacity onPress={Update}>
              <Image
                source={ICON.done}
                style={{
                  height: 22,
                  width: 22,
                  tintColor: "#333",
                }}
              />
              </TouchableOpacity>
            </View>

            {/* IMAGE */}

            <View
              style={{
                flex: 20,
                width: 120,
                alignSelf: "center",
                marginBottom: 10,
                justifyContent: "center",
              }}
            >

              {
                dataUser.avatar == ''?
                (
                  <Image
                source={require("../../assets/img/avatar.jpg")}
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: 50,
                  resizeMode: "stretch",
                }}

              />
                ) :
                (
                  <Image
                source={{uri: dataUser.avatar}}
                
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: 50,
                  resizeMode: "stretch",
                }}
              />
                )
              }
                
                
                
                
                 
              <TouchableOpacity onPress={pickImage}>
              <Image
                source={require("../../assets/Icon/icons8-camera-50.png")}
                style={{
                  position: "absolute",
                  width: 50,
                  height: 50,
                  bottom: -10,
                  right: 0,
                  resizeMode: "stretch",
                }}
              />
              </TouchableOpacity>
             
            </View>
            {/* MAIN */}
            <View
              style={{
                flex: 75,
              }}
            >
              <View
                style={{
                  marginBottom: 10,
                }}
              >
                <UITextInput label="Username"/>
                <UIEditText
                  changeText={(text) => 
                    setDataUser({...dataUser, name: text})
                  }
                  value = {dataUser.name}
                  
                />
                
                
              </View>

              

              <View
                style={{
                  marginBottom: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <UITextInput label="Date of bird " />
                  <Text
                    style={{
                      color: "red",
                    }}
                  >
                    *
                  </Text>
                </View>
                <UIEditText changeText={(text) => {
                    setDataUser({...dataUser, dob: text})
                  }}
                  value = {dataUser.dob}
                  />
              </View>

              <View
                style={{
                  marginBottom: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <UITextInput label="Phone Number" />
                  <Text
                    style={{
                      color: "red",
                    }}
                  >
                    *
                  </Text>
                </View>
                <UIEditText changeText={(text) => 
                    setDataUser({...dataUser, phone: text})
                  }
                  value = {dataUser.phone}
                 />
                  
              </View>
              

              <View
                style={{
                  marginBottom: 10,
                }}
              >
                <UITextInput label="Address" />

                <UIEditText changeText={(text) => {
                    setDataUser({...dataUser, address: text})
                  }}
                  value = {dataUser.address}/>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
}

export default Home