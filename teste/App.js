
import { StyleSheet, Text, View, SafeAreaView, FlatList, Animated,ScrollView, Image,StatusBar } from 'react-native';
import { useRef } from 'react';
import Routes from './src/pages/routes'
import Animacao from "./animacao/animacao";
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const H_MAX_HEIGHT = 200;
const H_MIN_HEIGHT = 55;
const H_SCROLL_DISTANCE = H_MAX_HEIGHT - H_MIN_HEIGHT;

export default function App(){
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <ScrollView >
      <SafeAreaView style={styles.container}>
        
      {/*
       <Stack.Navigator initialRouteName='Animacao'>
          <Stack.Screen
          name='Animacao'
          component={Animacao}
          options={{title: 'Welcome'}}
          />
          
       </Stack.Navigator>*/ }
      
      <Animacao/>
      <Routes/>
      </SafeAreaView>
      </ScrollView>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,

  }
})