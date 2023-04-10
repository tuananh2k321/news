import { Button, StyleSheet, Text, TouchableOpacity, View, Image, TextInput, ToastAndroid, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import AxiosIntance from '../../constants/AxiosIntance';
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react';
import { useEffect } from 'react';
import { COLOR } from '../../constants/theme';
import UIButton from '../../Component/UIButtonPrimary';
import UIEditText from '../../Component/UIEditText';

const Bookmark = () => {
    const [hasGalleryPermission, setHasGalleryPermission] = useState(null)
    const [image, setImage] = useState('')
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState('')
    const [price, setPrice] = useState('')
    // useEffect(() => {
    //     (async () => {
    //         const galleryStatus = await ImagePicker.requestCameraPermissionsAsync()
    //         setHasGalleryPermission(galleryStatus.status === 'granted')
    //     }) ()
    // }, [])

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4,3],
            quality: 1
        })

        setImage(result.assets[0].uri)

        const formData = new FormData()
        formData.append('image', {
            uri: result.assets[0].uri,
            type: 'image/jpeg',
            name: 'image.jpg'
        })

        // console.log("formData: ",formData)

        // const res = await AxiosIntance('api/product/upload').post('image', formData)
        // console.log("res: ", res)
        // if (res.result == true) {
        //     setImage(res.url)
        //     ToastAndroid.show('Upload hình ảnh thành công', ToastAndroid.SHORT)
        // } else {
        //     ToastAndroid.show('Upload hình ảnh thất bại', ToastAndroid.SHORT)
        // }
        
    }

    const takeAPhoto = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4,3],
            quality: 1
        })

        console.log("result: ",result.assets[0].uri)
        setImage(result.assets[0].uri)
        

        const formData = new FormData()
        formData.append('image', {
            uri: result.assets[0].uri,
            type: 'image/jpeg',
            name: 'image.jpg'
        })

        console.log("formData: ",formData)

        // const res = await AxiosIntance().post('api/product/upload', result.assets[0].uri)
        // console.log("res: ",res)
        // if (res.result == true) {
        //     setImage(res.url)
        //     ToastAndroid.show('Upload hình ảnh thành công', ToastAndroid.SHORT)
        // }
        //  else {
        //     ToastAndroid.show('Upload hình ảnh thất bại', ToastAndroid.SHORT)
        // }
    }

    const PostNew = async () => {
        const res = await AxiosIntance().post("api/product/upload", {
          name: name,
          quantity: quantity,
          image: image,
          price: price,

        });
        if (res.result == true) {
            
            ToastAndroid.show('Đăng tin thành công', ToastAndroid.SHORT)
        }
         else {
            ToastAndroid.show('Đăng tin thất bại', ToastAndroid.SHORT)
        }

        await AxiosIntance().get("api/product");
    }

  return (
   <ScrollView>
     <SafeAreaView style={{ flex: 1, padding: 15 }}>
      <Text
        style={{
          fontSize: 24,
          color: COLOR.primary,
          justifyContent: "center",
          alignSelf: "center",
          marginBottom: 15,
          fontWeight: "bold",
        }}
      >
        Post News
      </Text>
      <View style = {{width:370, height: 230, borderWidth: 0.5, alignSelf: 'center', marginBottom: 20,}}>
      {image && (
        <Image
          source={{ uri: image }}
          style={{
            width: 370,
            height: 230,
            alignSelf: "center",
          }}
        />
      )}
      </View>
      <UIButton backgroundColor={COLOR.primary} title="Chụp ảnh" onPress={takeAPhoto}/>
      <View style={{ marginTop: 10, marginBottom: 10 }}>
        <UIButton backgroundColor={COLOR.primary} title="Chọn ảnh" onPress={pickImage}/>
      </View>
      <UIEditText holder="Name"  changeText={setName}/>
      <View style={{ marginBottom: 10, marginTop: 10 }}>
        <UIEditText holder="Quantity" changeText={setQuantity}/>
      </View>
      <View style={{ marginBottom: 10, marginTop: 10 }}>
        <UIEditText holder="Price" changeText={setPrice}/>
      </View>

      <UIButton backgroundColor={COLOR.primary} title="Đăng bài" onPress={PostNew}/>
    </SafeAreaView>
   </ScrollView>
  );
}

export default Bookmark
