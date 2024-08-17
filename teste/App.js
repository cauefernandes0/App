import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Animated,ScrollView, Image } from 'react-native';
import { useRef } from 'react';
import Routes from './src/routes';
import Animacao from "./animacao/animacao";
import HomeScreen from './HomeScreen';
const H_MAX_HEIGHT = 200;
const H_MIN_HEIGHT = 55;
const H_SCROLL_DISTANCE = H_MAX_HEIGHT - H_MIN_HEIGHT;

export default function App(){
  return (
    <SafeAreaView>
      <ScrollView>
        
        <HomeScreen/>
        
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

})