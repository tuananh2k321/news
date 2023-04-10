import React , {useCallback, useEffect, useState} from 'react';
import { Text,View,FlatList, ActivityIndicator, TextInput, TouchableOpacity , Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import ItemUser from './ItemUser';
import AxiosIntance from '../../constants/AxiosIntance';
import { COLOR, ICON, SIZES } from '../../constants/theme';
const Explore = (props) => {
   const [data, setData] = useState([])
   const [searchText, setSearchText] = useState([])
   const [loading, isLoading] = useState(true)
   const{navigation} = props

    useEffect(() => {
        const getNews = async () => {
          const res = await AxiosIntance().get("api/product");
          if (res.result) {
            setData(res.products)
            isLoading(false)
          }
        };

        getNews()
      }, [data])

  // let timeOut = null;
  // const countDownSearch = (text) => {
  //   if (timeOut) {
  //     clearTimeout(timeOut)
  //   }
  //   timeOut = setTimeout (() => {
  //     Search(text)
  //   }, 3000)
  // }

  const Search = async () => {
    isLoading(true)
    const res = await AxiosIntance().get("api/product/search/name?keyword="+searchText);
    console.log("searchText: ",searchText)
    if (res.result) {
      setData(res.products)
      isLoading(false)
      console.log("Search: ",data)
    }
      
    
  }
    return (
      <SafeAreaView style = {{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
      }}>
        <View style = {{width: '95%', marginTop: 40}}>
          <TextInput style = {{width:'100%', height: 40, borderWidth: 1, paddingLeft: 50}}
          onChangeText = {setSearchText} />
          <TouchableOpacity onPress={Search}>
            <Image source={ICON.search} style={{width: 30, height: 30, position: 'absolute', bottom: 5, left: 5, tintColor: COLOR.primary}}/>
          </TouchableOpacity>
        </View>
        {loading == true ? (
          <View >
            <ActivityIndicator size='large' color='blue'></ActivityIndicator>
            <Text>Loading...</Text>
          </View>
        ) : (
          <View>
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <ItemUser
                  news={item}
                  navigation = {navigation}

                />
              )}
              keyExtractor={(eachNews) => eachNews._id}
              showsVerticalScrollIndicator={false}
            />
          </View>
        )}
      </SafeAreaView>
    );
}

export default Explore