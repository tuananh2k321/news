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
    const [image, setImage] = useState(null)
    const [title, setTitle] = useState(null)
    const [content, setContent] = useState(null)
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

        console.log(result)

        const formData = new FormData()
        formData.append('image', {
            uri: result.assets[0].uri,
            type: 'image/jpeg',
            name: 'image.jpg'
        })

        const res = await AxiosIntance('multipart/form-data').post('media/upload', formData)
        if (res.error == false) {
            setImage(res.data.path)
            ToastAndroid.show('Upload hình ảnh thành công', ToastAndroid.SHORT)
        } else {
            ToastAndroid.show('Upload hình ảnh thất bại', ToastAndroid.SHORT)
        }
        
    }

    const takeAPhoto = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4,3],
            quality: 1
        })

        console.log(result)

        const formData = new FormData()
        formData.append('image', {
            uri: result.assets[0].uri,
            type: 'image/jpeg',
            name: 'image.jpg'
        })

        const res = await AxiosIntance('multipart/form-data').post('media/upload', formData)
        if (res.error == false) {
            setImage(res.data.path)
            ToastAndroid.show('Upload hình ảnh thành công', ToastAndroid.SHORT)
        }
         else {
            ToastAndroid.show('Upload hình ảnh thất bại', ToastAndroid.SHORT)
        }
    }

    const PostNew = async () => {
        const res = await AxiosIntance().post("articles", {
          title: title,
          content: content,
          image: image,
        });
        if (res.error == false) {
            setImage(res.data.path)
            ToastAndroid.show('Đăng tin thành công', ToastAndroid.SHORT)
        }
         else {
            ToastAndroid.show('Đăng tin thất bại', ToastAndroid.SHORT)
        }
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
      <UIEditText holder="Tiêu đề"  changeText={setTitle}/>
      <View style={{ marginBottom: 10, marginTop: 10 }}>
        <UIEditText holder="Nội dung" changeText={setContent}/>
      </View>

      <UIButton backgroundColor={COLOR.primary} title="Đăng bài" onPress={PostNew}/>
    </SafeAreaView>
   </ScrollView>
  );
}

export default Bookmark
