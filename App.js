import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppContextProvider } from './constants/AppContext';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './screen/AppNavigator';

const App = () => {
  return (
    <AppContextProvider>
            <NavigationContainer>
                <AppNavigator></AppNavigator>
            </NavigationContainer>
        </AppContextProvider>
  );
}

export default App;
