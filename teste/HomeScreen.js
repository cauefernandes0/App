import { StyleSheet, Text, View, SafeAreaView, FlatList, Animated,ScrollView, Image } from 'react-native';
import Routes from './src/routes';
import Animacao from "./animacao/animacao";

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