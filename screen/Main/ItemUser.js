import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IMAGES, ICON, COLOR, SIZES } from "../../constants/theme";
import UIEditText from "../../Component/UIEditText";
import Dialog from "react-native-dialog";
import AxiosIntance from "../../constants/AxiosIntance";
import * as ImagePicker from 'expo-image-picker'
import Explore from "./Explore";

const ItemUser = (props) => {
  const { navigation, news } = props;
  const { image, name, price, quantity } = props.news;
  const [visibleDelete, setVisibleDelete] = useState(false);
  const [visibleUpdate, setVisibleUpdate] = useState(false);
  const [name1, setName] = useState('')
  const [quantity1, setQuantity] = useState('')
  const [price1, setPrice] = useState('')
  const [image1, setImage] = useState('')
  const [pickImageBool, setPickImageBool] = useState(false)
  const StartNewDetail = () => {
    navigation.navigate("NewsDetail", { id: news._id });
  };

  // Pick Image

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4,3],
        quality: 1
    })

    console.log(result.assets[0].uri)
    setImage(result.assets[0].uri)
    setPickImageBool(true)
    
    const formData = new FormData()
    formData.append('image', {
        uri: result.assets[0].uri,
        type: 'image/jpeg',
        name: 'image.jpg'
    })
  }

  // handling Delete Item

  const DeleteItem = () => {
    setVisibleDelete(true);
  };

  const HandleCancelDelete = () => {
    setVisibleDelete(false);
  };

  //http://localhost:3000/api/product/642a25f9a3605adaf97c514e/delete

  const HandleOKDelete = async () => {
    console.log("api/product/" + news._id + "/delete");
    const res = await AxiosIntance().get("api/product/" + news._id + "/delete");
    if (res.status == true) {
      setVisibleDelete(false);
      ToastAndroid.show("delete successfully", ToastAndroid.SHORT);
    }
  };

  


  // Handling Update Item

  const UpdateItem = async () => {
    
    setVisibleUpdate(true);
  };

  const HandleCancelUpdate = () => {
    
    setVisibleUpdate(false);
  };

  // http://localhost:3000/api/product/643174795ecabe1c5c826f40/edit

  const HandleOKUpdate = async () => {
    console.log("name: ",name1)
    const res = await AxiosIntance().post("api/product/"+news._id+"/edit", {
      name: name1,
      quantity: quantity1,
      price: price1,
      image: image1
    })
    if (res.status == true) {
      ToastAndroid.show("Update Successfully", ToastAndroid.SHORT)
    }
    setVisibleUpdate(false);
  };

  return (
    <TouchableOpacity onPress={StartNewDetail}>
      <View
        style={{
          padding: 15,
          marginVertical: 10,
        }}
      >
        <View
          style={{
            height: 150,
            width: "100%",
            flexDirection: "row",
          }}
        >
          <Image
            source={{ uri: image }}
            style={{
              width: 150,
              height: 150,
              marginRight: 30,
              resizeMode: "stretch",
              borderRadius: 10,
            }}
          />

          <View style={{}}>
            <Text
              style={{
                fontSize: 20,
                color: COLOR.primary,
                marginBottom: 10,
              }}
              numberOfLines={2}
            >
              Name: {name}
            </Text>

            <Text
              style={{
                fontSize: 20,
                color: COLOR.primary,
                marginBottom: 10,
              }}
              numberOfLines={2}
            >
              Price: {price}
            </Text>

            <Text
              style={{
                fontSize: 20,
                color: COLOR.primary,
              }}
              numberOfLines={2}
            >
              Quantity: {quantity}
            </Text>
          </View>
        </View>

        <View
          style={{
            height: 20,
            width: "100%",
            flexDirection: "row",
            marginTop: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{ marginHorizontal: 20 }}
            onPress={UpdateItem}
          >
            <Image
              source={require("../../assets/Icon/icons8-pen-and-paper-50.png")}
              style={{
                width: 25,
                height: 25,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={DeleteItem}>
            <Image
              source={require("../../assets/Icon/icons8-recycle-bin-50.png")}
              style={{
                width: 23,
                height: 23,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <Dialog.Container visible={visibleDelete}>
        <Dialog.Title>Delete Article</Dialog.Title>
        <Dialog.Description>
          Do you want to delete this Article? You cannot undo this action.
          {/* <ActivityIndicator size='large' color='blue'></ActivityIndicator> */}
        </Dialog.Description>
        <Dialog.Button label="Cancel" onPress={HandleCancelDelete} />
        <Dialog.Button label="OK" onPress={HandleOKDelete} />
      </Dialog.Container>

      <Dialog.Container visible={visibleUpdate}>
        <Dialog.Title>Update Article</Dialog.Title>
        <TouchableOpacity style={{marginVertical: 10, marginLeft: 20, justifyContent: "center", alignItems: "center"}}
          onPress={pickImage}
        >
          <Image
            source={{ uri: pickImageBool ? image1 : image }}
            style={{
              width: 150,
              height: 150,
              marginRight: 30,
              resizeMode: "stretch",
              borderRadius: 10,
            }}
          />
        </TouchableOpacity>
        <Dialog.Input
          label="Name"
          defaultValue={news.name}
          onChangeText={(text) => setName(text)}
        />
        <Dialog.Input
          label="Quantity"
          defaultValue={`${news.quantity}`}
          onChangeText={(text) => setQuantity(text)}
        />
        <Dialog.Input
          label="Price"
          defaultValue={`${news.price}`}
          onChangeText={(text) => setPrice(text)}
        />

        <Dialog.Button label="Cancel" onPress={HandleCancelUpdate} />
        <Dialog.Button label="OK" onPress={HandleOKUpdate} />
      </Dialog.Container>
    </TouchableOpacity>
  );
};

export default ItemUser;
