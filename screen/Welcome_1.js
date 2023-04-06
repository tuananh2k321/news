import React, { useState } from 'react';
import {
    StyleSheet, 
    Image,
    Text,
    View,
    ImageBackground,
    TouchableOpacity
      } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { SIZES, COLOR } from '../constants/theme';

const slides = [
    {
        id: 1,
        title: 'Lorem Ipsum is simply dummy',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        image: require('../assets/img/welcome1.png')
    },

    {
        id: 2,
        title: 'Lorem Ipsum is simply dummy',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        image: require('../assets/img/welcome2.png')
    },

    {
        id: 3,
        title: 'Lorem Ipsum is simply dummy',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        image: require('../assets/img/welcome3.png')
    }
]

const Welcome_1 = ({navigation}) => {
    const [showHomePage, setShowHomePage] = useState(false)

    const buttonLabel = (label, backgroundColor, color) => {
        return (
            <View>
                <Text style = {{
                    color: color,
                    fontWeight: 'bold',
                    backgroundColor: backgroundColor,
                    paddingHorizontal: 30,
                    paddingVertical: 12,
                    borderRadius: 5,
                    marginStart: SIZES.width - 220
                }}>{label}</Text>
            </View>
        )
    }

    const startLogin = () => {
        navigation.navigate('Login')
    }

    if (!showHomePage) {
        return(
            <AppIntroSlider 
                data = {slides}
                renderItem={ ({item}) => {
                    return(
                        <View>
                            <Image
                                source={item.image}
                                style={{
                                    width: SIZES.width,
                                    height: SIZES.height - 300 ,
                                }}
                                resizeMode = 'cover'
                            />

                            <Text style = {{
                                width: SIZES.width - 100,
                                color: COLOR.title,
                                fontSize: SIZES.h1,
                                fontWeight: 'bold',
                                marginStart: 15
                            }}>{item.title}</Text>

                            <Text style = {{
                                color: COLOR.description,
                                fontSize: SIZES.h5,
                                width: SIZES.width - 100,
                                marginStart: 15
                            }}>{item.description}</Text>

                            
                           
                        </View>
                    )
                }}


                activeDotStyle = {{
                    backgroundColor: COLOR.primary,
                    marginEnd: 300
                }}

                dotStyle = {{
                    backgroundColor: '#333',
                    
                }}
                
                showPrevButton
                
                renderNextButton = {() => buttonLabel('Next', COLOR.primary, 'white')}
                renderPrevButton = {() => buttonLabel('Back')}
                renderDoneButton = {() => buttonLabel('Done', COLOR.primary, 'white')}

                onDone = {() => 
                    startLogin()
                }
            >
            </AppIntroSlider>
        )
    }        
}




export default Welcome_1