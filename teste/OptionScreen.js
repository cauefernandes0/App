import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, StatusBar} from "react-native";
import { themeColors } from "./index";
import * as Icon from "react-native-feather";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {useRoute} from '@react-navigation/native'
import TrabalhoRow from "./src/pages/trabalhoRow";
import CartIcon from "./src/pages/cartIcon";
import {useEffect} from 'react';
import { useDispatch } from "react-redux";
import { setOption } from "./src/pages/slices/optionSlice";
import { urlFor } from "./sanity";

export default function OptionScreen() {
    
    const {params} = useRoute();
    const navigation = useNavigation();
    let item = params;
    const dispatch = useDispatch();
     // console.log('Opções:',item)
    useEffect(()=>{
        if(item && item._id){
            dispatch(setOption({...item}))
        }
    },[])

    return (
        <View>
            <CartIcon/>
            <StatusBar style="light"/>
            <ScrollView>
                
               
                
                <View className="relative">
                    <Image className='w-full h-72' source={{uri: urlFor(item.image).url()}}/>
                    <TouchableOpacity 
                    onPress={() => navigation.goBack()}
                    className='absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow'>
                        <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
                    </TouchableOpacity>

                </View>
                <View style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}}
                className ="bg-white -mt-12 pt-6"
                >
                    <View className='px-5'>
                        <Text className='text-3xl font-bold'>{item.name}</Text>
                        <View className='flex-row space-x-2 my-1'>
                            <View className='flex-row items-center space-x-1'>
                            <Image source={require("./assets/imagens/star.png")} className="h-4 w-4"/>
                            <Text className="text-xs">
                                <Text className="text-green-700">{item.stars}</Text>
                                <Text className="text-gray-700">({item.reviews}mil reviews) . <Text className="font-semibold">{item?.type?.name}</Text>
                                </Text>
                            </Text>
                        </View>
                        <View className="flex-row items-center space-x-1">
                            <Icon.MapPin color="gray" width="15" height="15"/>
                            <Text className="text-gray-700 text-xs">Em {item.adress}</Text>
                        </View>
                    </View>
                    <Text className="text-gray-500 mt-2"> {item.description}</Text>
                </View>
            </View>
            <View className='pb-36 bg-white'>
                <Text className='px-4 py-4 text-2xl font-bold'>Mais Informações</Text>
                <Text className="px-4 py-2"> {item.inf}</Text>
                <Text className='px-4 py-4 text-2xl font-bold'>Opções</Text>
                {
                    item.work.map((work,index)=> <TrabalhoRow item={{...work}} key={index} />)
                }

            </View>
            </ScrollView>
            
        </View>
        
    );
}

