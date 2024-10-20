import { StyleSheet, Text, View, FlatList, Animated,ScrollView, Image, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Animacao from "./animacao/animacao";
import * as Icon from "react-native-feather";
import { themeColors } from './index';
import { SafeAreaView } from 'react-native-safe-area-context';
import Categories from './src/pages/categories';
import FeaturedRow from './src/pages/featuredrow';
import { useEffect } from 'react';
import { getFeaturedOptions } from './api';
import { useState } from 'react';

export default function HomeScreen(){

    const [featuredOptions, setFeaturedOptions] = useState([]);

    useEffect(()=>{
      getFeaturedOptions().then(data=>{
        setFeaturedOptions(data);
      })
    })  
    return (
      /* Hex Colors
      #D9BBF9
      #D475EF
      #F98BFF
      #7871AA
      #4E5283
      */
      <SafeAreaView className="bg-white">
        
          {/* Barra de pesquisa */}
        <View className="flex-row items-center space-x-2 px-4 pb-2">
            <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-30">
              <Icon.Search height="25" width="25" stroke="gray"/>
              <TextInput placeholder='Trabalhos' className="ml-2 flex-1"/>
              <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2- border-l-gray-300"/>
                <Icon.MapPin height="20" width="20" stroke="gray" />
                <Text className="text-gray-600">São Paulo, SP</Text>

            </View>
            <View style={{backgroundColor: themeColors.bgColor(1)}} className="p-3 bg-gray-300 rounded-full">
                <Icon.Sliders height="20" width="20" strokeWidth={2.5} stroke="white"/>
            </View>
          </View>
        {/* Parte principal */}
        <ScrollView showsVerticalScrollIndicator={false}
        contentContainerStyle={{
            paddingBottom: 20
        }}
        >
            {/*Categorias */}
            <Categories/>

            {/*Features */}

            <View className="mt-5">
              {
                featuredOptions.map((item,index)=>{
                  return(
                    <FeaturedRow
                    key={index}
                    title = {item.name}
                    options={item.prestadores}
                    description={item.description}
                    />
                  )
                })
              }

            </View>
        </ScrollView>
      
          
        
      </SafeAreaView>
    )
  }
  
  const styles = StyleSheet.create({
  
  })