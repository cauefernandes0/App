import { StyleSheet, Text, View, SafeAreaView, FlatList, Animated,ScrollView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes';
import Animacao from "./animacao/animacao";
import * as Icon from "react-native-feather";

export default function HomeScreen(){
    return (
      <SafeAreaView>
        <ScrollView>
          
          
          <Animacao/>
          
          <Routes/>
          
        </ScrollView>
      </SafeAreaView>
    )
  }
  
  const styles = StyleSheet.create({
  
  })