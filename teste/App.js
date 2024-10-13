import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Animated,ScrollView, Image } from 'react-native';
import { useRef } from 'react';
import Navigation from './navigation';
import { store } from './store'
import { Provider } from 'react-redux'

const H_MAX_HEIGHT = 200;
const H_MIN_HEIGHT = 55;
const H_SCROLL_DISTANCE = H_MAX_HEIGHT - H_MIN_HEIGHT;

export default function App(){
  return (
        <Provider store={store} >
        <Navigation />
        </Provider>
    
   
  )
}

const styles = StyleSheet.create({

})